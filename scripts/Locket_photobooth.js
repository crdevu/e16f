// ========= Locket Photobooth 4-Shot Engine & AI Filter Modifier ========= //
// FULL LOGIC: 4-shot engine + fallback + không chặn script khác
// ========================================================================= //

(function () {
    const WORKER_HOST = "https://nf18.bohoanh88-630.workers.dev";

    // Map sticker ID Locket → filter ID Worker (ĐÃ ĐỒNG BỘ với PRESETS)
    const STICKER_ID_MAP = {
        "stk_dio_disco": "disco_lights", "disco": "disco_lights",
        "stk_dio_pm2": "locket", "stk_dio_cash": "cash_money", "cash": "cash_money",
        "stk_dio_wedding": "wedding", "wedding": "wedding",
        "stk_dio_cowboy": "cowboy_cowgirl", "cowboy": "cowboy_cowgirl",
        "stk_dio_looksmaxing": "looks_maxxing", "looksmaxing": "looks_maxxing",
        "stk_dio_orange_wig": "okay_wig", "orange_wig": "okay_wig",
        "stk_dio_bleached_hair": "blonde_bleached", "bleached_hair": "blonde_bleached",
        "stk_dio_bob": "bob_cut", "bob": "bob_cut",
        "stk_dio_bearded": "beard", "bearded": "beard",
        "stk_dio_bearded_holiday": "bearded",
        "stk_dio_sweat_hearts": "sweet_hearts", "sweat_hearts": "sweet_hearts",
        "stk_dio_elf": "elf_cutout", "elf": "elf_cutout",
        "stk_dio_santa": "santa_cutout", "santa": "santa_cutout",
        "stk_dio_easter_bunny": "easter_bunney_cutout", "easter_bunny": "easter_bunney_cutout",
        "stk_dio_easter_chick": "easter_chick_cutout", "easter_chick": "easter_chick_cutout",
        "stk_dio_toothless": "toothless", "toothless": "toothless",
        "stk_dio_bye_brows": "bye_brows", "bye_brows": "bye_brows",
        "stk_dio_bowling_ball": "bowling_ball", "bowling_ball": "bowling_ball",
        "stk_dio_buns": "buns", "buns": "buns",
        "stk_dio_tatted": "tatted", "tatted": "tatted",
        "stk_dio_mohawk": "mohawk", "mohawk": "mohawk",
        "stk_dio_braces": "braces", "braces": "braces",
        "stk_dio_slimed": "slimed", "slimed": "slimed",
        "stk_dio_princess": "princess", "princess": "princess",
        "stk_dio_happy_birthday": "happy_birthday", "happy_birthday": "happy_birthday",
        "stk_dio_cutesy": "cutesy", "cutesy": "cutesy",
        "stk_dio_sticker_face": "sticker_face", "sticker_face": "sticker_face",
        "stk_dio_flower_crown": "flower_crown", "flower_crown": "flower_crown",
        "stk_dio_love_bug": "love_bug", "love_bug": "love_bug",
        "stk_dio_giraffe": "giraffe", "giraffe": "giraffe",
        "stk_dio_clown": "clown", "clown": "clown",
        "stk_dio_leprechaun": "leprechaun", "leprechaun": "leprechaun",
        "stk_dio_lucky_face": "lucky_face", "lucky_face": "lucky_face",
        "stk_dio_frosty": "frosty", "frosty": "frosty",
        "stk_dio_influencer": "influencer", "influencer": "influencer"
    };

    function storeRead(key) {
        try {
            if (typeof $persistentStore !== "undefined") return $persistentStore.read(key) || "";
            if (typeof $prefs !== "undefined") return $prefs.valueForKey(key) || "";
        } catch (e) {}
        return "";
    }

    function storeWrite(key, val) {
        try {
            if (typeof $persistentStore !== "undefined") $persistentStore.write(String(val), key);
            else if (typeof $prefs !== "undefined") $prefs.setValueForKey(String(val), key);
        } catch (e) {}
    }

    function isPhotoboothFilter(fid) {
        if (!fid) return false;
        const lower = String(fid).toLowerCase();
        if (lower.startsWith("pb_single_") || lower.startsWith("khung_")) return false;
        return /photobooth_4cut|photobooth_cute|pb_holo_4cut|pb_scrapbook_ripped_4cut|pb_ripped_paper_4cut|pb_denim_ripped_2x2|frame_classic_pb|frame_berry_days|frame_happy_snap|frame_sky_diary|pb_strawberry|pb_vintage|pb_galaxy|photoboot|4cut/i.test(lower);
    }

    function isOverlayFrameFilter(fid) {
        if (!fid) return false;
        if (isPhotoboothFilter(fid)) return false;
        const lower = String(fid).toLowerCase();
        return /^khung_|^frame_|pb_single_|cmt_locket|custom_frame|sticker_b_nh_lu_n/i.test(lower);
    }

    // Trả mock 200 với outputUrl rỗng — client Locket sẽ tự fallback
    // (không crash vì Locket đã handle trường hợp output rỗng ở local cache)
    function buildMock200Response() {
        return {
            status: 200,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                result: {
                    outputUrl: null, output_url: null, url: null,
                    imageUrl: null, image_url: null, status: 200,
                    is_gold: true, is_locked: false, requires_gold: false, unlocked: true,
                    data: {}
                }
            })
        };
    }

    if (typeof $response === "undefined") {
        // ===== REQUEST PHASE: rewrite sang Worker =====
        try {
            if (!$request) return $done({});
            const reqUrl = $request.url || "";
            if (!reqUrl.includes("generateFilteredImage")) return $done({});

            const targetUrl = WORKER_HOST + "/generateFilteredImage?module=Locket_YouTube";
            let headers = Object.assign({}, ($request && $request.headers) || {});
            headers["Host"] = WORKER_HOST.replace(/^https?:\/\//, "");
            headers["host"] = WORKER_HOST.replace(/^https?:\/\//, "");
            headers["X-Module-Origin"] = "Locket_YouTube";
            delete headers["Content-Length"];
            delete headers["content-length"];

            return $done({ url: targetUrl, headers: headers });
        } catch (e) {
            return $done({});
        }
    }

    // ===== RESPONSE PHASE: rewrite response =====
    try {
        const reqUrl = (typeof $request !== "undefined" && $request.url) ? $request.url : "";
        if (!reqUrl.includes("generateFilteredImage")) return $done({});

        if (typeof $response !== "undefined" && $response.body) {
            let resObj = {};
            try { resObj = JSON.parse($response.body); }
            catch (e) { resObj = {}; }

            let filterId = "";
            try {
                if ($request && $request.body) {
                    const reqBody = JSON.parse($request.body);
                    filterId = reqBody.filter_id || reqBody.filterId || reqBody.filterID || "";
                    // Map sticker ID → filter ID nếu có
                    if (filterId && STICKER_ID_MAP[filterId]) {
                        filterId = STICKER_ID_MAP[filterId];
                    }
                }
            } catch (e) {}

            // Photobooth: nếu không có output thì trả mock (client tự fallback)
            if (isPhotoboothFilter(filterId)) {
                const hasOutput = resObj.result && (resObj.result.outputUrl || resObj.result.output_url || resObj.result.url);
                if (!hasOutput) return $done(buildMock200Response());
            }

            const hasError = resObj.error || resObj.errors ||
                (resObj.result && (resObj.result.error || resObj.result.errors));
            const hasOutput = resObj.result && (resObj.result.outputUrl || resObj.result.output_url || resObj.result.url);

            if (hasError || !hasOutput) {
                return $done(buildMock200Response());
            }

            delete resObj.error;
            delete resObj.errors;
            if (resObj.result) {
                delete resObj.result.error;
                delete resObj.result.errors;
            }

            return $done({
                status: 200,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(resObj)
            });
        }
    } catch (e) {}

    return $done({});
})();
