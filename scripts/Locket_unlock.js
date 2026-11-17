// ============================================================
// Locket Remote Config Rewrite — FULL UNLOCK + PHOTOBOOTH FRAMES
// Đầy đủ: feature gates + camera + friends + captions +
//         PHOTOBOOTH FRAMES + CAMERA FILTERS + STICKER PACKS + AI FILTERS
// ============================================================

var ua = (typeof $request !== "undefined" && $request && $request.headers) ? ($request.headers["User-Agent"] || $request.headers["user-agent"] || "") : "";
var obj = {};
try { obj = JSON.parse($response.body); } catch (e) { obj = {}; }
if (!obj || typeof obj !== "object") obj = {};

obj.state = "UPDATE";
obj.templateVersion = String(Date.now());
obj.Attention = "Congratulations! Please do not use them for commercial purposes!";
obj.entries = obj.entries || {};
obj.entries.cache_ttl_seconds = "0";
obj.entries.client_cache_ttl_sec = "0";

// ============================================================
// 1. FEATURE GATES, PAYWALL, CỜ GOLD
// ============================================================
Object.assign(obj.entries, {
    feature_gates: JSON.stringify({
        app_icon_picker: "enabled", camera_roll: "enabled", camera_roll_video: "enabled",
        camera_roll_video_30s: "enabled", camera_roll_video_upload: "enabled",
        camera_roll_video_upload_30s: "enabled", camera_roll_longer_video: "enabled",
        camera_roll_longer_video_30s: "enabled", camera_theme: "enabled",
        locket_views: "enabled", long_captions: "enabled", longer_video: "enabled",
        longer_video_30s: "enabled", extended_video_30s: "enabled",
        photo_library_video: "enabled", photo_library_video_30s: "enabled",
        gallery_video: "enabled", gallery_video_30s: "enabled",
        can_upload_30s_video: "enabled", can_record_30s_video: "enabled",
        allow_longer_video_upload: "enabled", longer_video_upload: "enabled",
        unlimited_friends: "enabled", priority_support: "enabled",
        profile_badge: "enabled", profileBadge: "enabled",
        gold_since_badge: "enabled", goldSinceBadge: "enabled",
        gold_badge_profile_menu: "enabled", remove_ads: "enabled",
        video: "enabled", video_15s: "enabled", video_30s: "enabled",
        video_40s: "enabled", video_60s: "enabled", video_upload: "enabled",
        video_upload_30s: "enabled", custom_widget_frames: "enabled",
        streak_recovery: "enabled", streakRecovery: "enabled",
        streaks: "enabled", streak: "enabled", streak_visualizations: "enabled",
        streak_badge: "enabled", groups: "enabled", private_mode: "enabled",
        viewer_mode: "enabled", close_friends: "enabled",
        camera_filter_sheet: "enabled", camera_filters: "enabled",
        camera_filter: "enabled", filter: "enabled", filters: "enabled",
        photo_filters: "enabled", ai_filters: "enabled",
        holiday_effects: "enabled", holiday_filters: "enabled",
        holiday_filter: "enabled", ar_filters: "enabled",
        face_filters: "enabled", profile_cover: "enabled",
        profile_cover_photo: "enabled", profile_customization: "enabled",
        photobooth: "enabled", photobooth_frames: "enabled",
        photobooth_4cut: "enabled", photobooth_strips: "enabled",
        sticker_packs: "enabled", stickers: "enabled"
    }),
    upsell_features: JSON.stringify({
        app_icon_picker: false, camera_roll: false, camera_theme: false,
        locket_views: false, remove_ads: false, custom_widget_frames: false,
        filter: false, filters: false, camera_filter: false, camera_filters: false,
        holiday_filter: false, holiday_filters: false, holiday_effects: false,
        ai_filter: false, ai_filters: false, photobooth: false,
        photobooth_frames: false, sticker_packs: false
    }),
    paywall_presentation_config: JSON.stringify({
        uid: "paywall_testflight", onboarding: false, after_sent_moment: false,
        after_moment: false, after_capture: false, on_foreground: false,
        holiday_effects: false, camera_filters: false, camera_filter: false,
        filters: false, filter: false, ai_filter: false, ai_filters: false,
        filtered_image: false, filtered_images: false, generate_filtered_image: false,
        photobooth: false, photobooth_frames: false, sticker_packs: false,
        interval: 2592000, profile_banner: true
    }),
    feature_discovery_popup_config: JSON.stringify({
        tag: "LOCKET GOLD ALL FEATURES", tag_gradient: true, tag_style: "gold_gradient",
        title: "Welcome To Locket Gold",
        feature_set: [{ title: "Wishing you a pleasant experience", body: "csrjull.dev", imageURL: "https://cdn.upanhlaylink.com/i/GSfYXmKd.png" }],
        primary_button_title: "Xong", campaign: "locket_gold_welcome_v3",
        start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59", use_local_time_zone: true
    }),
    android_subscribe_gold_button_enabled: "false",
    profile_badge_visible: "true",
    lunar_new_year_app_icon_enabled: "true",
    settings_instagram_url: "https://www.instagram.com/",
    settings_tiktok_url: "https://tiktok.com/"
});

Object.assign(obj.entries, {
    country_code: "US", region_code: "US", is_us_user: "true",
    camera_filters_enabled: "true", camera_filter_enabled: "true",
    holiday_filters_enabled: "true", ai_filters_enabled: "true",
    photobooth_enabled: "true", photobooth_frames_enabled: "true",
    photobooth_4cut_enabled: "true", sticker_packs_enabled: "true",
    stickers_enabled: "true",
    camera_filter_gold_only: "false", camera_filters_gold_only: "false",
    holiday_filters_gold_only: "false", filter_gold_only: "false",
    filters_gold_only: "false", ai_filter_gold_only: "false",
    ai_filters_gold_only: "false", filter_paywall_enabled: "false",
    camera_filter_paywall_enabled: "false", filter_upsell_enabled: "false",
    photobooth_gold_only: "false", photobooth_frames_gold_only: "false",
    sticker_packs_gold_only: "false",
    require_gold_for_filters: "false", require_gold_for_filter: "false",
    requires_gold_for_filters: "false", requires_gold_for_filter: "false",
    requires_gold_for_camera_filters: "false", camera_filter_requires_gold: "false",
    camera_filters_require_gold: "false", ai_filter_requires_gold: "false",
    ai_filters_require_gold: "false", filter_requires_gold: "false",
    filters_require_gold: "false", filtered_image_requires_gold: "false",
    filtered_images_requires_gold: "false", filtered_image_gold_only: "false",
    filtered_images_gold_only: "false", free_filters_enabled: "true",
    require_gold_for_photobooth: "false", photobooth_requires_gold: "false",
    require_gold_for_stickers: "false", stickers_require_gold: "false",
    filter_selection_enabled: "true", camera_filter_sheet_selection_enabled: "true",
    sheet_filters_selectable: "true", dismiss_filter_sheet_on_select: "true",
    is_gold: "true", has_gold: "true", is_gold_user: "true",
    user_is_gold: "true", gold_user: "true", gold_active: "true",
    all_filters_free: "true", unlocked_filters: "true",
    all_photobooth_free: "true", unlocked_photobooth: "true",
    all_stickers_free: "true", unlocked_stickers: "true",
    camera_filter_max_count: "999", max_camera_filters: "999",
    photobooth_max_count: "999", max_photobooth_frames: "999",
    sticker_pack_max_count: "999", max_sticker_packs: "999"
});

Object.assign(obj.entries, {
    history_ads_mode: "off", history_ads_prefetch_count: "0",
    history_ads_prefetch_immediate: "false", history_ads_prefetch_reroute: "false",
    history_ads_dynamic_insertion: "false", history_ads_refresh_prefetch_on_foreground: "false",
    history_ads_floor_price: "0", history_ads_floor_price_att: "0",
    history_ad_log_displayed_on_background: "false", history_ads_debug_menu: "false",
    sentry_sample_rate: "0", sentry_network_tracing: "false",
    sentry_performance_tracking: "false", sentry_trace_sample_rate: "0",
    sentry_profiles_sample_rate: "0"
});

// ============================================================
// 2. CAMERA, VIDEO 60s
// ============================================================
var MY_VIDEO_DURATION = 60.0;
var durationStr = MY_VIDEO_DURATION.toString();
var MAX_SIZE_BYTES = 104857600;

obj.entries.camera = JSON.stringify({
    gold_max_duration: MY_VIDEO_DURATION, goldMaxDuration: MY_VIDEO_DURATION,
    max_duration: MY_VIDEO_DURATION, maxDuration: MY_VIDEO_DURATION,
    ultra_wide: true, ultraWide: true, volume_button: true, volumeButton: true,
    flash_button: true, telephoto: true, srgb: true, lanczos: true,
    quality_mbps: 0.6, qualityMbps: 0.6
});

obj.entries.camera_roll = JSON.stringify({
    gold_max_duration: MY_VIDEO_DURATION, goldMaxDuration: MY_VIDEO_DURATION,
    video_max_duration: MY_VIDEO_DURATION, videoMaxDuration: MY_VIDEO_DURATION,
    max_duration: MY_VIDEO_DURATION, maxDuration: MY_VIDEO_DURATION,
    trim_max_duration: MY_VIDEO_DURATION, trimMaxDuration: MY_VIDEO_DURATION,
    camera_roll_max_duration: MY_VIDEO_DURATION,
    camera_roll_video_max_duration: MY_VIDEO_DURATION,
    max_file_size: MAX_SIZE_BYTES, max_upload_bytes: MAX_SIZE_BYTES,
    max_size_bytes: MAX_SIZE_BYTES, quality_mbps: 0.6, qualityMbps: 0.6,
    flash_button: true
});

Object.assign(obj.entries, {
    camera_roll_preview_enabled: "true", camera_roll_video_enabled: "true",
    camera_roll_video_upload_enabled: "true",
    internal_camera_roll_video_upload_enabled: "true",
    longer_camera_roll_videos_enabled: "true",
    camera_roll_video_max_duration: durationStr, camera_roll_max_duration: durationStr,
    camera_roll_duration: durationStr, max_video_duration: durationStr,
    video_max_duration: durationStr, video_trim_max_duration: durationStr,
    trim_max_duration: durationStr, gold_max_duration: durationStr,
    goldMaxDuration: durationStr, max_file_size: MAX_SIZE_BYTES.toString(),
    max_upload_bytes: MAX_SIZE_BYTES.toString(), video_quality_mbps: "0.6",
    video_sound_enabled: "true", microphone_enabled: "true",
    camera_microphone_enabled: "true", audio_session_deactivation_enabled: "true",
    zoom_enabled: "true", upload_main: "false",
    upload_main_image_quality: "1.0", upload_main_image_size: "1440",
    upload_thumbnail_image_quality: "1.0", upload_thumbnail_image_size: "1020"
});

// ============================================================
// 3. FRIENDS, MOMENTS, WIDGET, JOURNAL, CACHE
// ============================================================
Object.assign(obj.entries, {
    max_friends_count: "999999999", friend_limit_mode: "0",
    soft_friend_limit_threshold_count: "999999999",
    show_friend_limit_on_cam: "false", signup_max_friends_count: "999999999",
    celebrity_inbox_limit: "999999999", celebrity_inbox_enabled: "true",
    celebrity_vip_qr_redemption_enabled: "true",
    friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
    friends_sheet_locket_count_config: JSON.stringify({ items: [ { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "🌟🫶🌟" }, { threshold: 2000, emoji: "✨💟✨" }, { threshold: 5000, emoji: "⚡️😵‍💫⚡" }, { threshold: 10000, emoji: "✨⚡️😱⚡✨" } ]}),
    friend_locket_count_config: JSON.stringify({ items: [ { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "✨💗✨" }, { threshold: 2000, emoji: "✨️⭐️✨" }, { threshold: 5000, emoji: "✨💎✨" }, { threshold: 10000, emoji: "✨🔐💛✨" } ]}),
    new_friends_monitoring_enabled: "true", improved_friend_suggestions: "true",
    show_friend_suggestions_by_default: "true", emoji_friend_suggestions: "true",
    prompt_contact_permissions_on_search: "true",
    populate_phone_numbers_from_suggest_friends: "true",
    hide_friends_enabled: "true", hide_invite_links: "false",
    hide_skip_contacts: "true", show_all_contacts: "true",
    show_invite_suggestions: "true", show_no_friends_bottom_sheet: "false",
    signup_allow_skip_add_friends: "true", signup_custom_profile_picture: "true",
    user_data_export_enabled: "true", username_suggestions_enabled: "true"
});

try {
    var streak = JSON.parse(obj.entries.streak_config || "{}");
    streak.minimum_recovery_count = 0;
    streak.minimum_display_count = 0;
    obj.entries.streak_config = JSON.stringify(streak);
} catch (e) {}

Object.assign(obj.entries, {
    moment_views_enabled: "true", moment_views_v2: "true",
    record_moment_views: "true", notify_moment_views: "true",
    get_moment_views_as_cloud_function: "true", moment_reactions_v2: "true",
    chat_reactions_enabled: "true", conversation_reactions: "true",
    typing_indicators_enabled: "true", unsend_message_enabled: "true",
    reply_prototype_enabled: "true", messages_integration: "true",
    conversations_enabled: "true", fetch_moments_in_conversation: "true",
    hide_chat_button: "false", groups_enabled: "true",
    group_contact_invites_enabled: "true",
    groups_onboarding_accept_invite_preview_enabled: "true",
    chat_hyperlink_enabled_mode: "always_enabled",
    send_to_self_only_mode: "always_enabled",
    time_travel_rewind_v2_enabled: "true",
    conversation_drafts_enabled: "true",
    calendar_delete_moment_enabled: "true", calendar_rewind_enabled: "false",
    locket_yearbook_story_sharing_encouraged: "true",
    rollcall_enabled: "true", rollcall_comment_actions: "true",
    rollcall_profile_button: "true", rollcall_prompt_export_after_share: "true",
    rollcall_confirm_skip_tagging: "false", rollcall_tap_to_tag_enabled: "false"
});

Object.assign(obj.entries, {
    widget_frame_event_max_images: "5", android_widget_frame_event_enabled: "true",
    widget_badge_enabled: "true", widget_badge_v2: "true",
    widget_stale_state_enabled: "false", widget_last_sent_indicator: "false",
    widget_sync_token_reload_mode: "clearTokenNever",
    widget_frame_event: JSON.stringify({
        uid: "midautumn_2026", url: "https://i.ibb.co/1Yt1Dzzy/Shin-chan-1.png",
        use_local_time_zone: true, placement: "below",
        start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59"
    }),
    live_activity_onboarding: "true", live_activity_onboarding_variant: "friending",
    register_live_activity_push_to_start_token: "true",
    live_activity_remove_stale_start_token: "true",
    notification_preferences_live_activities: "true",
    notification_preferences: "true", notification_reply_body_visible: "true",
    prompt_notification_permissions_after_friending: "true",
    activity_bar_enabled: "true", journal_activity_bar_enabled: "true",
    journal_settings: JSON.stringify({
        debug_menu_enabled: false, focus_animation: false,
        compact_header: true, friends_button: false,
        reverse_scroll_direction: false, streak_visualization: true,
        streak_visualization_style: "gradient", streak_header_minimum_count: 0,
        streak_visualization_minimum_count: 2,
        overlay_indicators: { location: false, music: true, static_content: true, weather: true }
    }),
    qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
    custom_profile_pics: "true", profile_menu_v2_enabled: "true"
});

Object.assign(obj.entries, {
    storage_bucket: "gs://locket-img", storage_bucket_video: "gs://locket-video",
    image_cache_max_age_sec: "157680000", image_cache_max_size: "400000000",
    history_cache_age_days: "1000", user_cache_max_age_sec: "86400",
    friends_cache_max_age_sec: "86400", image_fetch_cache: "true",
    image_cache_use_shared: "true", use_doc_dir_for_image_cache: "true",
    efficient_history_cache_invalidation: "true",
    timestamp_based_history_fetches: "true", get_latest_moment_v2: "true",
    fetch_users_from_cloud_function: "false", refresh_interval: "60",
    firestore_refresh_v2: "true", firestore_refresh_v3: "true",
    keychain_access_retries: "true", blocked_users_cached_sync_enabled: "true",
    beta_features_enabled: "true", join_testflight_enabled: "true",
    safety_center: "true", help_center: "true", support_v2: "true",
    privacy_choices_setting: "true", request_att_permission: "true",
    invite_link_preview_variant: "4",
    share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
    share_history_prompt_enabled: "false",
    use_thumbnails_for_sharing: "true", use_thumbnails_in_timeline: "true",
    persist_onboarding_step: "true", onboarding_contact_permission_step: "true"
});

// ============================================================
// 4. PHOTOBOOTH FRAMES — PHẦN "VẢ CỰC MẠNH"
// Đây là entry Locket đọc để hiển thị danh sách frame trong UI
// Format: JSON array các frame object
// ============================================================

// 4.1 — Photobooth 4-cut frames (AI generate qua Worker)
var PHOTOBOOTH_FRAMES = [
    {
        id: "photobooth_4cut",
        name: "4-Cut Classic",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        thumbnail: "https://public.locketcamera.com/locket-public/gold_promos/gold_promo_camera_roll.png",
        prompt: "Create one vertical Korean photobooth contact sheet with exactly four equal horizontal frames stacked vertically. Keep the same person recognizable in all frames. Each frame has a different natural expression. No text or watermark."
    },
    {
        id: "photobooth_cute",
        name: "4-Cut Cute Pastel",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        thumbnail: "https://public.locketcamera.com/locket-public/gold_promos/gold_promo_widgets.png",
        prompt: "Create a cute pastel photobooth strip with exactly four equal stacked frames. Preserve identity and clothing in every frame."
    },
    {
        id: "pb_holo_4cut",
        name: "4-Cut Holographic Y2K",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        thumbnail: "https://public.locketcamera.com/locket-public/gold_promos/gold_promo_views.png",
        prompt: "Create a vertical four-frame photobooth strip with holographic Y2K colors and consistent identity."
    },
    {
        id: "photobooth_bw",
        name: "4-Cut Black & White",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a vertical black and white photobooth strip with exactly four equal frames."
    },
    {
        id: "photobooth_date",
        name: "4-Cut Retro Date",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a vertical retro photobooth strip with four frames and warm nostalgic film colors. Do not add dates or text."
    },
    {
        id: "photobooth_friends",
        name: "4-Cut Friends",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a four-frame photobooth strip featuring only the people already present. Preserve everyone's identity. Do not add or remove people."
    },
    {
        id: "photobooth_pink",
        name: "4-Cut Pink Pastel",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a vertical four-frame pink pastel photobooth strip with consistent identity and clothing."
    },
    {
        id: "photobooth_y2k",
        name: "4-Cut Y2K Flash",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a vertical four-frame Y2K photobooth strip with retro flash and glossy highlights."
    },
    {
        id: "photobooth_vintage",
        name: "4-Cut Vintage",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a vertical four-frame vintage photobooth strip with warm analog film tones."
    },
    {
        id: "pb_vintage",
        name: "4-Cut Vintage Film",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a vertical four-frame vintage photobooth strip with warm analog film tones."
    },
    {
        id: "pb_galaxy",
        name: "4-Cut Galaxy",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a vertical four-frame photobooth strip with galaxy colors and consistent identity."
    },
    {
        id: "pb_strawberry",
        name: "4-Cut Strawberry",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a vertical four-frame photobooth strip with strawberry pink pastel colors."
    },
    {
        id: "pb_scrapbook_ripped_4cut",
        name: "4-Cut Scrapbook Ripped",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a vertical four-frame scrapbook photobooth strip with ripped paper edges."
    },
    {
        id: "pb_ripped_paper_4cut",
        name: "4-Cut Ripped Paper",
        type: "ai_photobooth",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a vertical four-frame photobooth strip with ripped paper aesthetic."
    },
    {
        id: "pb_denim_ripped_2x2",
        name: "2x2 Denim Ripped",
        type: "ai_photobooth",
        layout: "2x2_grid",
        frames: 4,
        gold_only: false,
        unlocked: true,
        prompt: "Create a 2x2 four-frame photobooth grid with denim ripped paper aesthetic."
    },
    {
        id: "frame_classic_pb",
        name: "Classic Photobooth Frame",
        type: "overlay_frame",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        overlay_url: "https://public.locketcamera.com/locket-public/frames/classic_pb.png"
    },
    {
        id: "frame_berry_days",
        name: "Berry Days Frame",
        type: "overlay_frame",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        overlay_url: "https://public.locketcamera.com/locket-public/frames/berry_days.png"
    },
    {
        id: "frame_happy_snap",
        name: "Happy Snap Frame",
        type: "overlay_frame",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        overlay_url: "https://public.locketcamera.com/locket-public/frames/happy_snap.png"
    },
    {
        id: "frame_sky_diary",
        name: "Sky Diary Frame",
        type: "overlay_frame",
        layout: "4cut_vertical",
        frames: 4,
        gold_only: false,
        unlocked: true,
        overlay_url: "https://public.locketcamera.com/locket-public/frames/sky_diary.png"
    },
    {
        id: "pb_single_classic",
        name: "Single Frame Classic",
        type: "overlay_frame",
        layout: "single",
        frames: 1,
        gold_only: false,
        unlocked: true
    },
    {
        id: "pb_single_polaroid",
        name: "Single Frame Polaroid",
        type: "overlay_frame",
        layout: "single",
        frames: 1,
        gold_only: false,
        unlocked: true
    }
];

// 4.2 — Ghi photobooth frames vào entries
obj.entries.photobooth_frames = JSON.stringify(PHOTOBOOTH_FRAMES);
obj.entries.photobooth_frames_enabled = "true";
obj.entries.photobooth_frames_config = JSON.stringify({
    enabled: true,
    gold_only: false,
    max_frames: 999,
    default_layout: "4cut_vertical",
    allow_custom_prompt: true,
    ai_generation_enabled: true,
    worker_endpoint: "https://nf18.bohoanh88-630.workers.dev/generateFilteredImage"
});

// 4.3 — Ghi danh sách ID vào photobooth_frame_ids (một số build Locket đọc key này)
obj.entries.photobooth_frame_ids = JSON.stringify(PHOTOBOOTH_FRAMES.map(function(f){ return f.id; }));
obj.entries.photobooth_4cut_frames = JSON.stringify(PHOTOBOOTH_FRAMES.filter(function(f){ return f.layout === "4cut_vertical"; }));
obj.entries.photobooth_2x2_frames = JSON.stringify(PHOTOBOOTH_FRAMES.filter(function(f){ return f.layout === "2x2_grid"; }));
obj.entries.photobooth_single_frames = JSON.stringify(PHOTOBOOTH_FRAMES.filter(function(f){ return f.layout === "single"; }));
obj.entries.photobooth_overlay_frames = JSON.stringify(PHOTOBOOTH_FRAMES.filter(function(f){ return f.type === "overlay_frame"; }));

// ============================================================
// 5. CAMERA FILTERS — AI FILTERS (hair, lighting, color grade...)
// ============================================================
var CAMERA_FILTERS = [
    // Hair
    { id: "orange_wig", name: "Orange Wig", category: "hair", gold_only: false, unlocked: true, thumbnail: "https://public.locketcamera.com/locket-public/filters/orange_wig.png" },
    { id: "pink_hair", name: "Pink Hair", category: "hair", gold_only: false, unlocked: true },
    { id: "silver_hair", name: "Silver Hair", category: "hair", gold_only: false, unlocked: true },
    { id: "blue_hair", name: "Blue Hair", category: "hair", gold_only: false, unlocked: true },
    { id: "blonde_hair", name: "Blonde Hair", category: "hair", gold_only: false, unlocked: true },
    { id: "brown_hair", name: "Brown Hair", category: "hair", gold_only: false, unlocked: true },
    { id: "bangs", name: "Curtain Bangs", category: "hair", gold_only: false, unlocked: true },
    { id: "curly_hair", name: "Curly Hair", category: "hair", gold_only: false, unlocked: true },
    { id: "okay_wig", name: "Okay Wig", category: "hair", gold_only: false, unlocked: true },
    { id: "blonde_bleached", name: "Bleached Blonde", category: "hair", gold_only: false, unlocked: true },
    { id: "bob_cut", name: "Bob Cut", category: "hair", gold_only: false, unlocked: true },
    { id: "buns", name: "Buns", category: "hair", gold_only: false, unlocked: true },
    { id: "mohawk", name: "Mohawk", category: "hair", gold_only: false, unlocked: true },

    // Lighting
    { id: "disco", name: "Disco", category: "lighting", gold_only: false, unlocked: true },
    { id: "disco_lights", name: "Disco Lights", category: "lighting", gold_only: false, unlocked: true },
    { id: "soft_glow", name: "Soft Glow", category: "lighting", gold_only: false, unlocked: true },
    { id: "golden_hour", name: "Golden Hour", category: "lighting", gold_only: false, unlocked: true },
    { id: "blue_hour", name: "Blue Hour", category: "lighting", gold_only: false, unlocked: true },
    { id: "neon", name: "Neon", category: "lighting", gold_only: false, unlocked: true },
    { id: "dreamy", name: "Dreamy", category: "lighting", gold_only: false, unlocked: true },
    { id: "sunset", name: "Sunset", category: "lighting", gold_only: false, unlocked: true },

    // Color grade
    { id: "cinematic", name: "Cinematic", category: "color", gold_only: false, unlocked: true },
    { id: "vintage", name: "Vintage", category: "color", gold_only: false, unlocked: true },
    { id: "retro_flash", name: "Retro Flash", category: "color", gold_only: false, unlocked: true },
    { id: "black_white", name: "Black & White", category: "color", gold_only: false, unlocked: true },
    { id: "pastel", name: "Pastel", category: "color", gold_only: false, unlocked: true },
    { id: "y2k", name: "Y2K", category: "color", gold_only: false, unlocked: true },
    { id: "cyberpunk", name: "Cyberpunk", category: "color", gold_only: false, unlocked: true },
    { id: "polaroid", name: "Polaroid", category: "color", gold_only: false, unlocked: true },
    { id: "disposable_camera", name: "Disposable Camera", category: "color", gold_only: false, unlocked: true },
    { id: "faded_film", name: "Faded Film", category: "color", gold_only: false, unlocked: true },
    { id: "moody", name: "Moody", category: "color", gold_only: false, unlocked: true },
    { id: "film_grain", name: "Film Grain", category: "color", gold_only: false, unlocked: true },
    { id: "light_leak", name: "Light Leak", category: "color", gold_only: false, unlocked: true },

    // Portrait
    { id: "clean_portrait", name: "Clean Portrait", category: "portrait", gold_only: false, unlocked: true },
    { id: "soft_beauty", name: "Soft Beauty", category: "portrait", gold_only: false, unlocked: true },
    { id: "magazine", name: "Magazine", category: "portrait", gold_only: false, unlocked: true },
    { id: "freckles", name: "Freckles", category: "portrait", gold_only: false, unlocked: true },
    { id: "flower_dream", name: "Flower Dream", category: "portrait", gold_only: false, unlocked: true },
    { id: "rainy_window", name: "Rainy Window", category: "portrait", gold_only: false, unlocked: true },

    // Effects
    { id: "cash", name: "Cash", category: "effects", gold_only: false, unlocked: true },
    { id: "cash_money", name: "Cash Money", category: "effects", gold_only: false, unlocked: true },
    { id: "mirror_glow", name: "Mirror Glow", category: "effects", gold_only: false, unlocked: true },
    { id: "sparkle", name: "Sparkle", category: "effects", gold_only: false, unlocked: true },
    { id: "holographic", name: "Holographic", category: "effects", gold_only: false, unlocked: true },
    { id: "starry", name: "Starry", category: "effects", gold_only: false, unlocked: true },
    { id: "butterfly", name: "Butterfly", category: "effects", gold_only: false, unlocked: true },
    { id: "locket", name: "Locket", category: "effects", gold_only: false, unlocked: true },
    { id: "wedding", name: "Wedding", category: "effects", gold_only: false, unlocked: true },
    { id: "cowboy_cowgirl", name: "Cowboy / Cowgirl", category: "effects", gold_only: false, unlocked: true },
    { id: "looks_maxxing", name: "Looks Maxxing", category: "effects", gold_only: false, unlocked: true },
    { id: "beard", name: "Beard", category: "effects", gold_only: false, unlocked: true },
    { id: "sweet_hearts", name: "Sweet Hearts", category: "effects", gold_only: false, unlocked: true },
    { id: "elf_cutout", name: "Elf Cutout", category: "effects", gold_only: false, unlocked: true },
    { id: "santa_cutout", name: "Santa Cutout", category: "effects", gold_only: false, unlocked: true },
    { id: "easter_bunney_cutout", name: "Easter Bunny Cutout", category: "effects", gold_only: false, unlocked: true },
    { id: "easter_chick_cutout", name: "Easter Chick Cutout", category: "effects", gold_only: false, unlocked: true },
    { id: "toothless", name: "Toothless", category: "effects", gold_only: false, unlocked: true },
    { id: "bye_brows", name: "Bye Brows", category: "effects", gold_only: false, unlocked: true },
    { id: "bowling_ball", name: "Bowling Ball", category: "effects", gold_only: false, unlocked: true },
    { id: "tatted", name: "Tatted", category: "effects", gold_only: false, unlocked: true },
    { id: "braces", name: "Braces", category: "effects", gold_only: false, unlocked: true },
    { id: "slimed", name: "Slimed", category: "effects", gold_only: false, unlocked: true },
    { id: "princess", name: "Princess", category: "effects", gold_only: false, unlocked: true },
    { id: "happy_birthday", name: "Happy Birthday", category: "effects", gold_only: false, unlocked: true },
    { id: "cutesy", name: "Cutesy", category: "effects", gold_only: false, unlocked: true },
    { id: "sticker_face", name: "Sticker Face", category: "effects", gold_only: false, unlocked: true },
    { id: "flower_crown", name: "Flower Crown", category: "effects", gold_only: false, unlocked: true },
    { id: "love_bug", name: "Love Bug", category: "effects", gold_only: false, unlocked: true },
    { id: "giraffe", name: "Giraffe", category: "effects", gold_only: false, unlocked: true },
    { id: "clown", name: "Clown", category: "effects", gold_only: false, unlocked: true },
    { id: "leprechaun", name: "Leprechaun", category: "effects", gold_only: false, unlocked: true },
    { id: "lucky_face", name: "Lucky Face", category: "effects", gold_only: false, unlocked: true },
    { id: "frosty", name: "Frosty", category: "effects", gold_only: false, unlocked: true },
    { id: "influencer", name: "Influencer", category: "effects", gold_only: false, unlocked: true }
];

obj.entries.camera_filters = JSON.stringify(CAMERA_FILTERS);
obj.entries.ai_filters = JSON.stringify(CAMERA_FILTERS);
obj.entries.camera_filter_ids = JSON.stringify(CAMERA_FILTERS.map(function(f){ return f.id; }));
obj.entries.ai_filter_ids = JSON.stringify(CAMERA_FILTERS.map(function(f){ return f.id; }));
obj.entries.camera_filters_config = JSON.stringify({
    enabled: true,
    gold_only: false,
    max_count: 999,
    worker_endpoint: "https://nf18.bohoanh88-630.workers.dev/generateFilteredImage"
});

// ============================================================
// 6. STICKER PACKS — overlay stickers (khung, sticker, cutout...)
// ============================================================
var STICKER_PACKS = [
    {
        id: "pack_classic",
        name: "Classic Stickers",
        gold_only: false,
        unlocked: true,
        stickers: [
            { id: "stk_dio_disco", name: "Disco", thumbnail: "https://public.locketcamera.com/locket-public/stickers/disco.png" },
            { id: "stk_dio_pm2", name: "PM2", thumbnail: "https://public.locketcamera.com/locket-public/stickers/pm2.png" },
            { id: "stk_dio_cash", name: "Cash", thumbnail: "https://public.locketcamera.com/locket-public/stickers/cash.png" },
            { id: "stk_dio_wedding", name: "Wedding", thumbnail: "https://public.locketcamera.com/locket-public/stickers/wedding.png" },
            { id: "stk_dio_cowboy", name: "Cowboy", thumbnail: "https://public.locketcamera.com/locket-public/stickers/cowboy.png" },
            { id: "stk_dio_looksmaxing", name: "Looksmaxing", thumbnail: "https://public.locketcamera.com/locket-public/stickers/looksmaxing.png" },
            { id: "stk_dio_orange_wig", name: "Orange Wig", thumbnail: "https://public.locketcamera.com/locket-public/stickers/orange_wig.png" },
            { id: "stk_dio_bleached_hair", name: "Bleached Hair", thumbnail: "https://public.locketcamera.com/locket-public/stickers/bleached_hair.png" },
            { id: "stk_dio_bob", name: "Bob Cut", thumbnail: "https://public.locketcamera.com/locket-public/stickers/bob.png" },
            { id: "stk_dio_bearded", name: "Bearded", thumbnail: "https://public.locketcamera.com/locket-public/stickers/bearded.png" },
            { id: "stk_dio_sweat_hearts", name: "Sweet Hearts", thumbnail: "https://public.locketcamera.com/locket-public/stickers/sweet_hearts.png" },
            { id: "stk_dio_buns", name: "Buns", thumbnail: "https://public.locketcamera.com/locket-public/stickers/buns.png" },
            { id: "stk_dio_tatted", name: "Tatted", thumbnail: "https://public.locketcamera.com/locket-public/stickers/tatted.png" },
            { id: "stk_dio_mohawk", name: "Mohawk", thumbnail: "https://public.locketcamera.com/locket-public/stickers/mohawk.png" },
            { id: "stk_dio_braces", name: "Braces", thumbnail: "https://public.locketcamera.com/locket-public/stickers/braces.png" },
            { id: "stk_dio_slimed", name: "Slimed", thumbnail: "https://public.locketcamera.com/locket-public/stickers/slimed.png" },
            { id: "stk_dio_princess", name: "Princess", thumbnail: "https://public.locketcamera.com/locket-public/stickers/princess.png" },
            { id: "stk_dio_cutesy", name: "Cutesy", thumbnail: "https://public.locketcamera.com/locket-public/stickers/cutesy.png" },
            { id: "stk_dio_sticker_face", name: "Sticker Face", thumbnail: "https://public.locketcamera.com/locket-public/stickers/sticker_face.png" },
            { id: "stk_dio_flower_crown", name: "Flower Crown", thumbnail: "https://public.locketcamera.com/locket-public/stickers/flower_crown.png" },
            { id: "stk_dio_love_bug", name: "Love Bug", thumbnail: "https://public.locketcamera.com/locket-public/stickers/love_bug.png" },
            { id: "stk_dio_giraffe", name: "Giraffe", thumbnail: "https://public.locketcamera.com/locket-public/stickers/giraffe.png" },
            { id: "stk_dio_clown", name: "Clown", thumbnail: "https://public.locketcamera.com/locket-public/stickers/clown.png" },
            { id: "stk_dio_influencer", name: "Influencer", thumbnail: "https://public.locketcamera.com/locket-public/stickers/influencer.png" }
        ]
    },
    {
        id: "pack_holiday",
        name: "Holiday Stickers",
        gold_only: false,
        unlocked: true,
        stickers: [
            { id: "stk_dio_elf", name: "Elf", thumbnail: "https://public.locketcamera.com/locket-public/stickers/elf.png" },
            { id: "stk_dio_santa", name: "Santa", thumbnail: "https://public.locketcamera.com/locket-public/stickers/santa.png" },
            { id: "stk_dio_easter_bunny", name: "Easter Bunny", thumbnail: "https://public.locketcamera.com/locket-public/stickers/easter_bunny.png" },
            { id: "stk_dio_easter_chick", name: "Easter Chick", thumbnail: "https://public.locketcamera.com/locket-public/stickers/easter_chick.png" },
            { id: "stk_dio_lucky_face", name: "Lucky Face", thumbnail: "https://public.locketcamera.com/locket-public/stickers/lucky_face.png" },
            { id: "stk_dio_frosty", name: "Frosty", thumbnail: "https://public.locketcamera.com/locket-public/stickers/frosty.png" },
            { id: "stk_dio_leprechaun", name: "Leprechaun", thumbnail: "https://public.locketcamera.com/locket-public/stickers/leprechaun.png" }
        ]
    },
    {
        id: "pack_funny",
        name: "Funny Stickers",
        gold_only: false,
        unlocked: true,
        stickers: [
            { id: "stk_dio_toothless", name: "Toothless", thumbnail: "https://public.locketcamera.com/locket-public/stickers/toothless.png" },
            { id: "stk_dio_bye_brows", name: "Bye Brows", thumbnail: "https://public.locketcamera.com/locket-public/stickers/bye_brows.png" },
            { id: "stk_dio_bowling_ball", name: "Bowling Ball", thumbnail: "https://public.locketcamera.com/locket-public/stickers/bowling_ball.png" },
            { id: "stk_dio_happy_birthday", name: "Happy Birthday", thumbnail: "https://public.locketcamera.com/locket-public/stickers/happy_birthday.png" }
        ]
    }
];

obj.entries.sticker_packs = JSON.stringify(STICKER_PACKS);
obj.entries.sticker_packs_config = JSON.stringify({
    enabled: true,
    gold_only: false,
    max_packs: 999,
    default_pack: "pack_classic"
});
obj.entries.sticker_pack_ids = JSON.stringify(STICKER_PACKS.map(function(p){ return p.id; }));
obj.entries.stickers = JSON.stringify(STICKER_PACKS.reduce(function(acc, p){ return acc.concat(p.stickers); }, []));

// ============================================================
// 7. OVERLAY & CAPTIONS (giữ nguyên phần đã có)
// ============================================================
Object.assign(obj.entries, {
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
    captions_enabled: "true", music_caption_enabled: "true",
    music_caption_song_preview_enabled: "true", link_caption_link_enabled: "true",
    overlay_dynamic_captions: JSON.stringify([
        "standard", "poll", "color_palette", "review", "music", "location",
        "weather", "time", "streak", "star_sign", "party_time", "locket_count",
        "good_morning", "goodnight", "ootd", "miss_you", "custom", "halloween_2026",
        "quote", "breaking_news"
    ]),
    overlay_items: JSON.stringify([
        {
            section: "🎨 General",
            items: [
                { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                { overlay_id: "caption:link", source: "local", caption: { type: "link" }, overlay_type: "caption" },
                { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
                { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
                { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
                { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
                { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
                { overlay_id: "caption:live", source: "local", caption: { type: "live" } },
                { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } },
                { overlay_id: "caption:quote", source: "local", caption: { type: "quote" } },
                { overlay_id: "caption:breaking_news", source: "local", caption: { type: "breaking_news" } }
            ]
        },
        {
            section: "🎨 Holiday Caption",
            items: [
                { overlay_id: "caption:halloween_2026", source: "remote", caption: { background: { colors: ["#150804", "#C8540D"] }, icon: { data: "🎃", type: "emoji" }, max_lines: 1, text: "Halloween", localized_text: { en: "Halloween", vn: "Halloween" }, text_color: "#FFB182", type: "static_content" } },
                { overlay_id: "caption:autumn_2026", source: "remote", caption: { background: { colors: ["#FFE0A0", "#F6A53A"] }, icon: { data: "🍂", type: "emoji" }, max_lines: 1, text: "Xin chào Mùa Thu", localized_text: { en: "Hello Autumn", vn: "Xin chào Mùa Thu" }, text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:christmas_eve_2026", source: "remote", caption: { background: { colors: ["#2FA85F", "#176B3A"] }, icon: { data: "🕯️", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Merry Christmas Eve", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:christmas_day_2026", source: "remote", caption: { background: { colors: ["#E53935", "#A81818"] }, icon: { data: "🎄", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Merry Christmas", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:new_years_eve_2027", source: "remote", caption: { background: { colors: ["#FFC64B", "#FFEDBF"] }, icon: { data: "🥂", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Hello 2027!", vn: "Xin chào 2027!" }, text_color: "#643F00", type: "static_content" } },
                { overlay_id: "caption:new_years_day_2027", source: "remote", caption: { background: { colors: ["#3B00EC", "#823FFF"] }, icon: { data: "💫", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Hello 2027!", vn: "Xin chào 2027!" }, text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:new_years_day_2027_alternate", source: "remote", caption: { background: { colors: ["#FF0062", "#FF783F"] }, max_lines: 1, text: "2027", localized_text: { en: "2027", vn: "2027" }, text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:no_memory", source: "remote", caption: { background: { image: { type: "image", data: "https://public.locketcamera.com/locket-public/overlays/forgotten_island/forgotten_island_bg.png", source: "url" }, colors: ["#1A1A2E", "#16213E"] }, max_lines: 1, text: "NO MEMORY LEFT BEHIND", text_color: "#FFFFFFE6", type: "static_content" } }
            ]
        },
        {
            section: "🎨 Decorative by Locket",
            items: [
                { overlay_id: "caption:toi_nho_em", source: "remote", caption: { background: { colors: ["#FFFFFF", "#6D9EEB"] }, max_lines: 1, text: "보고 싶어 🥺", localized_text: { en: "I miss you 🥺", vn: "Tôi nhớ em 🥺" }, text_color: "#000000E6", type: "static_content" } },
                { overlay_id: "caption:party_time", source: "remote", caption: { background: { colors: ["#5EFFF5", "#FCFF57"] }, icon: { data: "🪩", type: "emoji" }, max_lines: 1, text: "Party Time!", localized_text: { en: "Party Time!", vn: "Party Time!" }, text_color: "#000000E6", type: "static_content" } },
                { overlay_id: "caption:good_morning", source: "remote", daily_start_hour: 5, daily_end_hour: 10, caption: { background: { colors: ["#EF7402", "#EABF0F"] }, icon: { data: "☀️", type: "emoji" }, max_lines: 1, text: "Good morning", localized_text: { en: "Good morning", vn: "Chào buổi sáng" }, text_color: "#FFFFFFE5", type: "static_content" } },
                { overlay_id: "caption:goodnight", source: "remote", daily_start_hour: 19.5, daily_end_hour: 24, caption: { background: { colors: ["#370C6F", "#575CD4"] }, icon: { data: "🌙", type: "emoji" }, max_lines: 1, text: "Goodnight", localized_text: { en: "Goodnight", vn: "Chúc ngủ ngon" }, text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:miss_you", source: "remote", caption: { background: { colors: ["#EC0C00", "#FF493F"] }, icon: { data: "🥰", type: "emoji" }, max_lines: 1, text: "Miss you", localized_text: { en: "Miss you", vn: "Nhớ bạn" }, text_color: "#FFFFFFDB", type: "static_content" } },
                { overlay_id: "caption:ootd", source: "remote", caption: { background: { colors: ["#FFFFFF", "#DBDBDB"] }, icon: { data: "🕶", type: "emoji" }, max_lines: 1, text: "OOTD", localized_text: { en: "OOTD", vn: "OOTD" }, text_color: "#101010E6", type: "static_content" } }
            ]
        },
        {
            section: "🎨 Decorative by Srjull",
            items: [
                { overlay_id: "caption:srjull", source: "remote", alt_text: "srjull", caption: { background: { image: { type: "image", data: "https://i.ibb.co/svX6CPFw/bia.png", source: "url" }, colors: ["#B8E7FF", "#A8F5D0", "#DCCBFF"] }, icon: { data: "person.fill", type: "sf_symbol", color: "#183153" }, max_lines: 1, text: "srjull", text_color: "#183153", type: "static_content" } },
                { overlay_id: "caption:cu", source: "remote", caption: { background: { colors: ["#FFD6A5", "#FFF1A8", "#FFC4D6"] }, icon: { data: "hare.fill", type: "sf_symbol", color: "#633B24" }, max_lines: 1, text: "Cu", text_color: "#633B24", type: "static_content" } },
                { overlay_id: "caption:tuat", source: "remote", caption: { background: { colors: ["#2C1A0E", "#5D4037", "#D7A86E"] }, icon: { data: "dog.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Tuất", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:snake_vibes", source: "remote", caption: { background: { colors: ["#2E7D32", "#66BB6A"] }, icon: { data: "allergens.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Snake Vibes", localized_text: { en: "Snake Vibes", vn: "Chất rắn" }, text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:du_an_ma", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, icon: { data: "theatermask.and.paintbrush.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "dự án ma", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:chao_ngay_moi", source: "remote", caption: { background: { colors: ["#FF9A3C", "#FFD86F", "#FFE9A8"] }, icon: { data: "sunrise.fill", type: "sf_symbol", color: "#5C2E00" }, max_lines: 1, text: "Chào ngày mới", text_color: "#5C2E00", type: "static_content" } },
                { overlay_id: "caption:an_sang_chua", source: "remote", caption: { background: { colors: ["#FFE29A", "#FFC48A", "#FFA97A"] }, icon: { data: "fork.knife", type: "sf_symbol", color: "#6B3A1E" }, max_lines: 1, text: "Ăn sáng chưa đó", text_color: "#6B3A1E", type: "static_content" } },
                { overlay_id: "caption:hom_nay_met_qua", source: "remote", caption: { background: { colors: ["#5B6C8F", "#7D8FB3", "#A8B8D8"] }, icon: { data: "wind", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Hôm nay mệt quá", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:buon_ngu_quaa", source: "remote", caption: { background: { colors: ["#2E3A6E", "#4A5A9E", "#7A8AC8"] }, icon: { data: "moon.zzz.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Buồn ngủ quáa", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:gio_mua_ve_roi", source: "remote", caption: { background: { colors: ["#8FA8A0", "#B8C8B0", "#D8D0B8"] }, icon: { data: "leaf.fill", type: "sf_symbol", color: "#2F3F38" }, max_lines: 1, text: "Gió mùa về rồi", text_color: "#2F3F38", type: "static_content" } },
                { overlay_id: "caption:ban_dau_roii", source: "remote", caption: { background: { colors: ["#FF6F91", "#FF9AB5", "#FFC2D9"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#6B1E3A" }, max_lines: 1, text: "Bạn đâu rồii", text_color: "#6B1E3A", type: "static_content" } },
                { overlay_id: "caption:lanh_roi_mac_am", source: "remote", caption: { background: { colors: ["#3E5C8A", "#6A8AC8", "#B8D0F0"] }, icon: { data: "snowflake", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Lạnh rồi mặc ấm vào nha", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:hoc_nua", source: "remote", caption: { background: { colors: ["#2E7D5B", "#5AAE88", "#A8E0C0"] }, icon: { data: "book.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Học nữa", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:happy_new_year", source: "remote", caption: { background: { colors: ["#C8102E", "#FF4D4D", "#FFD700"] }, icon: { data: "sparkles", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Happy New Year", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:happy_womens_day", source: "remote", caption: { background: { colors: ["#E91E8C", "#FF6FB5", "#FFC2E0"] }, icon: { data: "camera.macro", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Happy Women's Day", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:happy_20_11", source: "remote", caption: { background: { colors: ["#B71C1C", "#E53935", "#FF8A80"] }, icon: { data: "leaf.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Happy 20/11", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:ngu_ngon_nha", source: "remote", caption: { background: { colors: ["#1A237E", "#3949AB", "#7986CB"] }, icon: { data: "moon.stars.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Ngủ ngon nha", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:uong_nuoc_chua", source: "remote", caption: { background: { colors: ["#0097A7", "#4DD0E1", "#B2EBF2"] }, icon: { data: "drop.fill", type: "sf_symbol", color: "#00363D" }, max_lines: 1, text: "Uống nước chưa", text_color: "#00363D", type: "static_content" } },
                { overlay_id: "caption:merry_christmas", source: "remote", caption: { background: { colors: ["#1B5E20", "#43A047", "#A5D6A7"] }, icon: { data: "gift.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Merry Christmas", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:sweet_valentine", source: "remote", caption: { background: { colors: ["#C2185B", "#F06292", "#F8BBD0"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Sweet Valentine", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:trung_thu_vui_ve", source: "remote", caption: { background: { colors: ["#FF8F00", "#FFB300", "#FFE082"] }, icon: { data: "moon.fill", type: "sf_symbol", color: "#4A2800" }, max_lines: 1, text: "Trung thu vui vẻ", text_color: "#4A2800", type: "static_content" } },
                { overlay_id: "caption:quoc_khanh", source: "remote", caption: { background: { colors: ["#DA251D", "#FF4D4D", "#FFD700"] }, icon: { data: "flag.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Quốc Khánh", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:tang_cau_bo_hoa", source: "remote", caption: { background: { colors: ["#AD1457", "#E91E63", "#F8BBD0"] }, icon: { data: "camera.macro", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Tặng cậu bó hoa", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:xinh_gai", source: "remote", caption: { background: { colors: ["#FF80AB", "#FF4081", "#F50057"] }, icon: { data: "sparkles", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "xinh gái", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:love_vietnam", source: "remote", alt_text: "Tôi yêu Việt Nam", caption: { background: { image: { type: "image", data: "https://i.ibb.co/hxFLgLxt/vietnam.jpg", source: "url" }, colors: ["#DA251D", "#FFFF00"] }, icon: { data: "flag.fill", type: "sf_symbol", color: "#FFD700" }, max_lines: 1, text: "Tôi yêu Việt Nam", text_color: "#FFD700", type: "static_content" } },
                { overlay_id: "caption:film_diary", source: "remote", alt_text: "Một ngày rất chill", caption: { background: { image: { type: "image", data: "https://public.locketcamera.com/locket-public/gold_promos/gold_promo_camera_roll.png", source: "url" }, colors: ["#D2B48C", "#8B4513"] }, icon: { data: "film.fill", type: "sf_symbol", color: "#FFFDD0" }, max_lines: 1, text: "Một ngày rất chill", text_color: "#FFFDD0", type: "static_content" } },
                { overlay_id: "caption:strangers", source: "remote", alt_text: "Người lạ", caption: { background: { image: { type: "image", data: "https://public.locketcamera.com/locket-public/gold_promos/gold_promo_views.png", source: "url" }, colors: ["#1C1C1E", "#2C2C2E"] }, icon: { data: "eye.fill", type: "sf_symbol", color: "#0A84FF" }, max_lines: 1, text: "Người lạ", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:genz_flex", source: "remote", alt_text: "Mood: Chill", caption: { background: { image: { type: "image", data: "https://public.locketcamera.com/locket-public/gold_promos/gold_promo_widgets.png", source: "url" }, colors: ["#FF9A9E", "#FECFEF"] }, icon: { data: "camera.fill", type: "sf_symbol", color: "#FF007F" }, max_lines: 1, text: "Mood: Chill", text_color: "#FFFFFF", type: "static_content" } }
            ]
        },
        {
            section: "🎨 Caption Icon",
            items: [
                { overlay_id: "caption:icon_halloween", source: "remote", caption: { background: { colors: ["#FF7B00", "#331A00"], material_blur: "ultra_thin" }, icon: { type: "image", data: "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/halloween_indicator%403x.png", source: "url" }, max_lines: 1, text: "Happy Halloween", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:icon_christmas", source: "remote", caption: { background: { colors: ["#D32F2F", "#1B5E20"], material_blur: "ultra_thin" }, icon: { type: "image", data: "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/christmas_indicator%403x.png", source: "url" }, max_lines: 1, text: "Merry Christmas", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:icon_st_patricks", source: "remote", caption: { background: { colors: ["#00C853", "#004D40"], material_blur: "ultra_thin" }, icon: { type: "image", data: "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/st_patricks_indicator%403x.png", source: "url" }, max_lines: 1, text: "Happy St. Patrick's Day", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:icon_fall", source: "remote", caption: { background: { colors: ["#E65100", "#3E2723"], material_blur: "ultra_thin" }, icon: { type: "image", data: "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/thanksgiving_indicator%403x.png", source: "url" }, max_lines: 1, text: "Happy Thanksgiving", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:icon_valentines", source: "remote", caption: { background: { colors: ["#FF4081", "#880E4F"], material_blur: "ultra_thin" }, icon: { type: "image", data: "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/valentines_indicator%403x.png", source: "url" }, max_lines: 1, text: "Happy Valentine's", text_color: "#FFFFFF", type: "static_content" } }
            ]
        },
        {
            section: "🎨 Gen Z & Xéo xắt 💅",
            items: [
                { overlay_id: "caption:feeling_cute", source: "remote", caption: { background: { colors: ["#F8BBD0", "#E91E63"] }, icon: { data: "camera.macro", type: "sf_symbol", color: "#FFFFFFE5" }, max_lines: 1, text: "Feeling Cute", localized_text: { en: "Feeling Cute", vn: "Cảm thấy dthw" }, text_color: "#FFFFFFE5", type: "static_content" } },
                { overlay_id: "caption:cutie_pie", source: "remote", caption: { background: { colors: ["#FFDEE9", "#FFB6C1", "#FF9AA2"] }, icon: { data: "sparkles", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Cutie Pie", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:hello_kitty", source: "remote", caption: { background: { colors: ["#FFD1DC", "#FFB7C5", "#FFC0CB"] }, icon: { data: "cat.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Hello Kitty", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:ngoan_xinh_iu", source: "remote", caption: { background: { colors: ["#F3C1D4", "#F8DDE5", "#E8CFF0"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#71465D" }, max_lines: 1, text: "ngoan xinh iu của ai đây", text_color: "#71465D", type: "static_content" } },
                { overlay_id: "caption:xinh_dep_tuyet_voi", source: "remote", caption: { background: { colors: ["#FC5C7D", "#6A82FB"] }, icon: { data: "sparkles", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Xinh đẹp tuyệt vời", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:hom_nay_slay", source: "remote", caption: { background: { colors: ["#C5B5E8", "#DDD0F2", "#F0C9DD"] }, icon: { data: "sparkles", type: "sf_symbol", color: "#514368" }, max_lines: 1, text: "hôm nay cũng slay", text_color: "#514368", type: "static_content" } },
                { overlay_id: "caption:tinh_hoa_hoi_tu", source: "remote", caption: { background: { image: { type: "image", data: "star_sign_background", source: "local" }, colors: ["#FFD700", "#FF8C00"] }, icon: { data: "wand.and.sparkles", type: "sf_symbol", color: "#000000E6" }, max_lines: 1, text: "Tinh hoa hội tụ", text_color: "#000000E6", type: "static_content" } },
                { overlay_id: "caption:xinh_gai_an_phim_1", source: "remote", caption: { background: { colors: ["#F77062", "#FE5196"] }, icon: { data: "1.circle.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Xinh gái ấn phím 1", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:xinh_la_tai_nang", source: "remote", caption: { background: { colors: ["#F0B5CA", "#F5D2DD", "#EAD1F0"] }, icon: { data: "camera.macro", type: "sf_symbol", color: "#70435B" }, max_lines: 1, text: "xinh là một loại tài năng", text_color: "#70435B", type: "static_content" } },
                { overlay_id: "caption:dep_trai_co_gi_sai", source: "remote", caption: { background: { colors: ["#FF5722", "#FFC107"] }, icon: { data: "sunglasses.fill", type: "sf_symbol", color: "#000000E6" }, max_lines: 1, text: "Đẹp trai có gì sai", text_color: "#000000E6", type: "static_content" } },
                { overlay_id: "caption:dep_khong_ly_do", source: "remote", caption: { background: { colors: ["#E5B7CD", "#F0D0DC", "#DCCCF0"] }, icon: { data: "mirror.side.left", type: "sf_symbol", color: "#67455C" }, max_lines: 1, text: "đẹp không cần lý do", text_color: "#67455C", type: "static_content" } },
                { overlay_id: "caption:cha_nay_tu_luyen_ghe", source: "remote", caption: { background: { colors: ["#FFDEE9", "#B5FFFC", "#FAD0C4"] }, icon: { data: "mirror.side.left", type: "sf_symbol", color: "#000000E6" }, max_lines: 1, text: "Cha này tự luyến ghê", text_color: "#000000E6", type: "static_content" } },
                { overlay_id: "caption:phu_tinh_khong_phu_ban", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, icon: { data: "sunglasses.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Phụ tình không phụ bản", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:main_character", source: "remote", caption: { background: { colors: ["#D6B8E8", "#E8CDEB", "#F3D2D9"] }, icon: { data: "movieclapper.fill", type: "sf_symbol", color: "#5A4366" }, max_lines: 1, text: "main character của cuộc đời mình", text_color: "#5A4366", type: "static_content" } },
                { overlay_id: "caption:vibe_khong_phai_ai", source: "remote", caption: { background: { colors: ["#80D8FF", "#A0F0E0", "#D9FFF5"] }, icon: { data: "party.popper.fill", type: "sf_symbol", color: "#174C58" }, max_lines: 1, text: "vibe này ko phải ai cũng có", text_color: "#174C58", type: "static_content" } },
                { overlay_id: "caption:khi_chat", source: "remote", caption: { background: { colors: ["#FFB36B", "#FFD49B", "#FFF0C2"] }, icon: { data: "sunglasses.fill", type: "sf_symbol", color: "#713D20" }, max_lines: 1, text: "không hoàn hảo nhưng có khí chất", text_color: "#713D20", type: "static_content" } },
                { overlay_id: "caption:sieu_cap_ba_khi", source: "remote", caption: { background: { colors: ["#EC407A", "#F44336"] }, icon: { data: "flame.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "siêu cấp bá khí", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:ba_khi", source: "remote", caption: { background: { colors: ["#8EACCD", "#B5C8DE", "#D7C7E6"] }, icon: { data: "crown.fill", type: "sf_symbol", color: "#35475D" }, max_lines: 1, text: "bá khí ngang ngược", text_color: "#35475D", type: "static_content" } },
                { overlay_id: "caption:du_ba_khi_chua", source: "remote", caption: { background: { colors: ["#CBB4DE", "#DFCBEA", "#F2E3F7"] }, icon: { data: "crown.fill", type: "sf_symbol", color: "#4C385C" }, max_lines: 1, text: "Đủ bá khí chưa?", text_color: "#4C385C", type: "static_content" } },
                { overlay_id: "caption:oach_xa_lach", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "leaf.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "oách xà lách", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:cung_cung_di", source: "remote", caption: { background: { colors: ["#FF7043", "#FF8A50", "#FFCA70"] }, icon: { data: "paperplane.fill", type: "sf_symbol", color: "#592313" }, max_lines: 1, text: "Cũng cứng đi", text_color: "#592313", type: "static_content" } },
                { overlay_id: "caption:ra_duong_ne_moi_anh", source: "remote", caption: { background: { colors: ["#BCC5D6", "#D7DEEA", "#EDE8F5"] }, icon: { data: "sunglasses.fill", type: "sf_symbol", color: "#384358" }, max_lines: 1, text: "Ra đường nể mỗi anh", text_color: "#384358", type: "static_content" } },
                { overlay_id: "caption:nhin_la_biet_uy_tin", source: "remote", caption: { background: { colors: ["#2980B9", "#2C3E50"] }, icon: { data: "hand.thumbsup.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Nhìn là biết uy tín", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:flex_den_hoi_tho_cuoi", source: "remote", caption: { background: { colors: ["#00BFA5", "#64E8C8", "#C4FFF0"] }, icon: { data: "diamond.fill", type: "sf_symbol", color: "#064D43" }, max_lines: 1, text: "Flex đến hơi thở cuối", text_color: "#064D43", type: "static_content" } },
                { overlay_id: "caption:tui_khong_hon_thua", source: "remote", caption: { background: { colors: ["#8E2430", "#C0394B", "#F08A8E"] }, icon: { data: "sunglasses.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "tui không hơn thua, tui hơn hẳn", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:hon_hom_qua", source: "remote", caption: { background: { colors: ["#B9D7D0", "#D6E6D7", "#E8DFC6"] }, icon: { data: "hands.and.sparkles.fill", type: "sf_symbol", color: "#3F554E" }, max_lines: 1, text: "tui không hơn ai, tui hơn hôm qua", text_color: "#3F554E", type: "static_content" } },
                { overlay_id: "caption:khong_phai_gu", source: "remote", caption: { background: { colors: ["#FF6F91", "#FF9A9E", "#FFD1BA"] }, icon: { data: "sparkles", type: "sf_symbol", color: "#70243D" }, max_lines: 1, text: "không phải gu của tất cả, may quá", text_color: "#70243D", type: "static_content" } },
                { overlay_id: "caption:quan_trong_lam", source: "remote", caption: { background: { colors: ["#7566D9", "#9B8AFB", "#D2C8FF"] }, icon: { data: "sparkles", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "ủa tưởng mình quan trọng lắm?", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:cai_net_ky", source: "remote", caption: { background: { colors: ["#B7D96C", "#D9ED9A", "#F1F7C8"] }, icon: { data: "eye.roll.fill", type: "sf_symbol", color: "#35451B" }, max_lines: 1, text: "cái nết kỳ ghê", text_color: "#35451B", type: "static_content" } },
                { overlay_id: "caption:ghet_dua_kia_ghe", source: "remote", caption: { background: { colors: ["#52647A", "#7D91A8", "#BBC9D8"] }, icon: { data: "eye.roll.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "ghét đứa kia ghê", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:khong_ghet_khong_ua", source: "remote", caption: { background: { colors: ["#FFAB40", "#FFD180", "#FFF0C2"] }, icon: { data: "eye.roll.fill", type: "sf_symbol", color: "#633B12" }, max_lines: 1, text: "không ghét, chỉ không ưa", text_color: "#633B12", type: "static_content" } },
                { overlay_id: "caption:toi_song_the_day", source: "remote", caption: { background: { colors: ["#202124", "#525866", "#AAB2C0"] }, icon: { data: "sunglasses.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Tôi sống thế đấy", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:che_manh", source: "remote", caption: { background: { colors: ["#FF4E50", "#F9D423"] }, icon: { data: "hand.thumbsdown.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Chê mạnh", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:chua_du_wow", source: "remote", caption: { background: { colors: ["#FFD1DC", "#FFB7C5", "#FFE4E1"] }, icon: { data: "gift.fill", type: "sf_symbol", color: "#6E4254" }, max_lines: 1, text: "Chưa đủ wow", text_color: "#6E4254", type: "static_content" } },
                { overlay_id: "caption:roi_let_luon", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FECFEF", "#FBC2EB"] }, icon: { data: "sparkles", type: "sf_symbol", color: "#000000E6" }, max_lines: 1, text: "rồi lét luôn", text_color: "#000000E6", type: "static_content" } },
                { overlay_id: "caption:roi_gay_luon", source: "remote", caption: { background: { colors: ["#FF6EC7", "#7873F5", "#4ADEDE"] }, icon: { data: "rainbow", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "rồi gay luôn", text_color: "#FFFFFFE6", type: "static_content" } }
            ]
        },
        {
            section: "🎨 Meme & Hài hước 🤡",
            items: [
                { overlay_id: "caption:cuoi_vcl_m_oi", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200", "#FFEE58"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#000000E6" }, max_lines: 1, text: "Cười vcl m oi", text_color: "#000000E6", type: "static_content" } },
                { overlay_id: "caption:cuoi_xiu", source: "remote", caption: { background: { colors: ["#FFEB3B", "#FF9800"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#000000E6" }, max_lines: 1, text: "Cười xỉu", text_color: "#000000E6", type: "static_content" } },
                { overlay_id: "caption:luon_vui_tuoi", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Luôn vui tươi", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:nau_xoi", source: "remote", caption: { background: { colors: ["#B8E04A", "#D9F477", "#F5FFB8"] }, icon: { data: "fork.knife", type: "sf_symbol", color: "#394713" }, max_lines: 1, text: "Nấu xói", text_color: "#394713", type: "static_content" } },
                { overlay_id: "caption:con_vien_la_lan", source: "remote", caption: { background: { colors: ["#A8C3A0", "#DCE5D1"] }, icon: { data: "leaf.fill", type: "sf_symbol", color: "#344536" }, max_lines: 1, text: "côn viên lá làn", text_color: "#344536", type: "static_content" } },
                { overlay_id: "caption:gian_dang_iu_hong", source: "remote", caption: { background: { colors: ["#A8E6CF", "#D4F1BE", "#FFF1B6"] }, icon: { data: "ant.fill", type: "sf_symbol", color: "#315847" }, max_lines: 1, text: "Gián đáng iu hong", text_color: "#315847", type: "static_content" } },
                { overlay_id: "caption:am_cha_hui", source: "remote", caption: { background: { colors: ["#F1C0D2", "#F5D9E1", "#E7D1F2"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#70475C" }, max_lines: 1, text: "ăm chã húi, bà chã hơm", text_color: "#70475C", type: "static_content" } },
                { overlay_id: "caption:hong_drama", source: "remote", caption: { background: { colors: ["#8A2387", "#E94057", "#F27121"] }, icon: { data: "popcorn.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Hóng drama", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:ke_chuyen_nghe_choi", source: "remote", caption: { background: { colors: ["#8A2387", "#E94057"] }, icon: { data: "popcorn.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Kể chuyện nghe chơi", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:drama_ai_hong", source: "remote", caption: { background: { colors: ["#F0C4A8", "#F3D8B8", "#D8C6E5"] }, icon: { data: "popcorn.fill", type: "sf_symbol", color: "#624736" }, max_lines: 1, text: "thân ai nấy lo, drama ai nấy hóng", text_color: "#624736", type: "static_content" } },
                { overlay_id: "caption:check_var", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "tv.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Check VAR liền", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:co_bien_co_bien", source: "remote", caption: { background: { colors: ["#FF512F", "#F09819", "#FFD200"] }, icon: { data: "light.beacon.max.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Có biến có biến", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:so_ho_la_bao", source: "remote", caption: { background: { colors: ["#F5B8A9", "#F6D0B2", "#E8BFCB"] }, icon: { data: "exclamationmark.triangle.fill", type: "sf_symbol", color: "#713F40" }, max_lines: 1, text: "sơ hở là báo", text_color: "#713F40", type: "static_content" } },
                { overlay_id: "caption:bot_bao", source: "remote", caption: { background: { colors: ["#7AA6C2", "#B0C9D9", "#DCE8EF"] }, icon: { data: "exclamationmark.triangle.fill", type: "sf_symbol", color: "#29485D" }, max_lines: 1, text: "bớt báo giùm cái", text_color: "#29485D", type: "static_content" } },
                { overlay_id: "caption:ai_so_thi_di_ve", source: "remote", caption: { background: { colors: ["#B71C1C", "#FF5722"] }, icon: { data: "figure.run", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "ai sợ thì đi về", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:chay_ngay_di", source: "remote", caption: { background: { colors: ["#D31027", "#EA384D"] }, icon: { data: "figure.run", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Chạy ngay đi", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:len_chua_khong_biet_lay_ai", source: "remote", caption: { background: { colors: ["#D7CCC8", "#EFEBE9", "#F5F5F0"] }, icon: { data: "hands.and.sparkles.fill", type: "sf_symbol", color: "#5D4037" }, max_lines: 1, text: "lên chùa không biết lạy ai", text_color: "#5D4037", type: "static_content" } },
                { overlay_id: "caption:dam_nhau_khong", source: "remote", caption: { background: { colors: ["#E53935", "#FF7043"] }, icon: { data: "figure.boxing", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "đấm nhau không", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:hao_han", source: "remote", caption: { background: { colors: ["#292E49", "#8E3B46", "#E09F3E"] }, icon: { data: "flame.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Hảo hán", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:mong_ton_hoa_sen", source: "remote", caption: { background: { colors: ["#D8B4E2", "#F8BBD0"] }, icon: { data: "camera.macro", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Mong tôn hoa sen thấy cảnh này", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:con_cai_nit", source: "remote", caption: { background: { colors: ["#D7CCC8", "#8D6E63"] }, icon: { data: "xmark.circle.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "còn cái nịt", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:minh_la_lop", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, icon: { data: "circle.dashed", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Mình là lốp", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:hay_ra_de_qua_a", source: "remote", caption: { background: { colors: ["#FFF59D", "#80DEEA"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#000000E6" }, max_lines: 1, text: "Hay ra dẻ quá à!", text_color: "#000000E6", type: "static_content" } },
                { overlay_id: "caption:mac_co_qua_hai_oi", source: "remote", caption: { background: { colors: ["#FFB74D", "#F8BBD0"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Mắc cỡ quá hai ơi", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:than_chua_ma_don", source: "remote", caption: { background: { colors: ["#607D8B", "#37474F"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Thân chưa mà dỡn", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:ai_muon", source: "remote", caption: { background: { colors: ["#FF6B35", "#FF9F1C", "#FFE0A3"] }, icon: { data: "questionmark.circle.fill", type: "sf_symbol", color: "#6B2814" }, max_lines: 1, text: "ủa rồi ai mượn?", text_color: "#6B2814", type: "static_content" } },
                { overlay_id: "caption:co_ra_dai_khong", source: "remote", caption: { background: { colors: ["#FF4D6D", "#FF8E72", "#FFD6A5"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#6B1833" }, max_lines: 1, text: "có ra dại không", text_color: "#6B1833", type: "static_content" } },
                { overlay_id: "caption:he_dieu_hanh_la", source: "remote", caption: { background: { colors: ["#287271", "#57A99A", "#B5E5D5"] }, icon: { data: "questionmark.circle.fill", type: "sf_symbol", color: "#153F3D" }, max_lines: 1, text: "bạn mình nhưng hệ điều hành lạ", text_color: "#153F3D", type: "static_content" } },
                { overlay_id: "caption:ai_cung_khac", source: "remote", caption: { background: { colors: ["#343A40", "#59636E", "#AAB4BE"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "ai rồi cũng khác, riêng bạn thì lạ", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:tuong_tuong", source: "remote", caption: { background: { colors: ["#3977D5", "#78A9F5", "#D0E4FF"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#173767" }, max_lines: 1, text: "tưởng gì, hóa ra tưởng tượng", text_color: "#173767", type: "static_content" } },
                { overlay_id: "caption:be_hong_sai", source: "remote", caption: { background: { colors: ["#F4A7C3", "#FFD1DC", "#FFF0F3"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#802D50" }, max_lines: 1, text: "bé hông có sai, tại đời sai", text_color: "#802D50", type: "static_content" } },
                { overlay_id: "caption:khong_vua_long", source: "remote", caption: { background: { colors: ["#D5A64B", "#E8C979", "#FFF0BF"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#594015" }, max_lines: 1, text: "sống sao cho vừa lòng thiên hạ? thôi khỏi", text_color: "#594015", type: "static_content" } },
                { overlay_id: "caption:boc_trung_sit_rit", source: "remote", caption: { background: { colors: ["#9C27B0", "#7B1FA2"] }, icon: { data: "gift.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Bóc trúng sít rịt", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:hen_lam_moi_xui_duoc_vay_a", source: "remote", caption: { background: { colors: ["#00BCD4", "#0097A7"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Hên lắm mới xui được vậy á", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:giam_suc_manh_con_tuong", source: "remote", caption: { background: { colors: ["#4CAF50", "#00BCD4"] }, icon: { data: "gamecontroller.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Giảm sức mạnh con tướng", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:phu_huynh_dung_xem", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, icon: { data: "eye.slash.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Phụ huynh đừng xem", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:khong_van_de_gi_luon", source: "remote", caption: { background: { colors: ["#087E8B", "#39B8A5", "#B8F2E6"] }, icon: { data: "hand.thumbsup.fill", type: "sf_symbol", color: "#103F43" }, max_lines: 1, text: "Không vấn đề gì luôn", text_color: "#103F43", type: "static_content" } },
                { overlay_id: "caption:xin_vinh_biet_cu", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, icon: { data: "candle.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Xin vĩnh biệt cụ", text_color: "#FFFFFFE6", type: "static_content" } }
            ]
        },
        {
            section: "🎨 Bất ổn & Hết cứu 🫠",
            items: [
                { overlay_id: "caption:bat_on_that_su", source: "remote", caption: { background: { colors: ["#636363", "#A2AB58"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Bất ổn thật sự", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:nay_la_het_cuu", source: "remote", caption: { background: { colors: ["#607D8B", "#455A64"] }, icon: { data: "bolt.badge.xmark.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Này là hết cứu", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:het_cuu_thiet", source: "remote", caption: { background: { colors: ["#B8C9E8", "#D5D5F0", "#E9CDE0"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#454660" }, max_lines: 1, text: "hết cứu thiệt chứ", text_color: "#454660", type: "static_content" } },
                { overlay_id: "caption:toi_cong_chuyen", source: "remote", caption: { background: { colors: ["#F2B5A7", "#F6D1B5", "#E9C2D5"] }, icon: { data: "skull.fill", type: "sf_symbol", color: "#634044" }, max_lines: 1, text: "tới công chuyện nữa rồi", text_color: "#634044", type: "static_content" } },
                { overlay_id: "caption:toang_that_roi", source: "remote", caption: { background: { colors: ["#F44336", "#B71C1C"] }, icon: { data: "flame.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Toang thật rồi", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:toi_roi_toi_roi", source: "remote", caption: { background: { colors: ["#F7253E", "#FF6B35", "#FFC857"] }, icon: { data: "exclamationmark.circle.fill", type: "sf_symbol", color: "#58151B" }, max_lines: 1, text: "Tới rồi tới rồi", text_color: "#58151B", type: "static_content" } },
                { overlay_id: "caption:goi_xong_lun", source: "remote", caption: { background: { colors: ["#F3B6AF", "#F6D2C2", "#EAC8D9"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#6A4549" }, max_lines: 1, text: "gòi xong lun á", text_color: "#6A4549", type: "static_content" } },
                { overlay_id: "caption:xiu_ngang", source: "remote", caption: { background: { colors: ["#C0B7E5", "#D8D0F0", "#EACDE2"] }, icon: { data: "skull.fill", type: "sf_symbol", color: "#504567" }, max_lines: 1, text: "xĩu ngang xĩu dọc", text_color: "#504567", type: "static_content" } },
                { overlay_id: "caption:guc_nga", source: "remote", caption: { background: { colors: ["#3A1C71", "#D76D77"] }, icon: { data: "chart.line.downtrend.xyaxis", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Gục ngã", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:bat_luc", source: "remote", caption: { background: { colors: ["#2C3E50", "#3498DB"] }, icon: { data: "flag.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Bất lực", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:rot_nuoc_mat", source: "remote", caption: { background: { colors: ["#1CB5E0", "#000046"] }, icon: { data: "drop.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Rớt nước mắt", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:tien_dinh", source: "remote", caption: { background: { colors: ["#FF9A8B", "#FF6A88"] }, icon: { data: "tornado", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Tiền đình", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:nao_bao_tri", source: "remote", caption: { background: { colors: ["#B8E0D2", "#D8EAD8", "#C9D9F0"] }, icon: { data: "brain.head.profile", type: "sf_symbol", color: "#35564F" }, max_lines: 1, text: "não đang bảo trì", text_color: "#35564F", type: "static_content" } },
                { overlay_id: "caption:overthinking_vai_chuong", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, icon: { data: "brain.head.profile", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Overthinking vai chưởng", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:tram_cam_nhe", source: "remote", caption: { background: { colors: ["#1F1C2C", "#928DAB"] }, icon: { data: "cloud.rain.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Trầm cảm nhẹ", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:khong_cam_xuc", source: "remote", caption: { background: { colors: ["#434343", "#000000"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Không cảm xúc", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:mieng_cuoi_long_khong", source: "remote", caption: { background: { colors: ["#526A82", "#8CA6B8", "#D5E3E8"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#233746" }, max_lines: 1, text: "miệng cười nhưng lòng thì không", text_color: "#233746", type: "static_content" } },
                { overlay_id: "caption:hom_nay_toi_buon", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, icon: { data: "cloud.moon.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "hôm nay tôi buồn", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:dem_nay_noi_buon", source: "remote", caption: { background: { colors: ["#283B66", "#526C9E", "#A9C1D9"] }, icon: { data: "moon.stars.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "đêm nay ai ôm nỗi buồn", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:em_on_ap_luc", source: "remote", caption: { background: { colors: ["#FFB26B", "#FFD08A", "#FFF0B5"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#70401F" }, max_lines: 1, text: "em ổn, ổn áp lực", text_color: "#70401F", type: "static_content" } },
                { overlay_id: "caption:mot_minh", source: "remote", caption: { background: { colors: ["#AEB8D1", "#C7C7DF", "#DED0E0"] }, icon: { data: "person.fill", type: "sf_symbol", color: "#45475F" }, max_lines: 1, text: "thôi thì mình lại một mình", text_color: "#45475F", type: "static_content" } },
                { overlay_id: "caption:nan_nhan", source: "remote", caption: { background: { colors: ["#F3C7D9", "#F6D9D0", "#E5CFF0"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#70495D" }, max_lines: 1, text: "tui là nạn nhân", text_color: "#70495D", type: "static_content" } },
                { overlay_id: "caption:ai_cuu_tui", source: "remote", caption: { background: { colors: ["#F0B6B6", "#F5D0C3", "#E8C6DE"] }, icon: { data: "exclamationmark.triangle.fill", type: "sf_symbol", color: "#6A4248" }, max_lines: 1, text: "òi ai cứu tui", text_color: "#6A4248", type: "static_content" } },
                { overlay_id: "caption:song_gio_phu_doi_trai", source: "remote", caption: { background: { colors: ["#3A1C71", "#D76D77"] }, icon: { data: "tornado", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Sóng gió phủ đời trai", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:thuong_nguoi_khong_thuong", source: "remote", caption: { background: { colors: ["#C8A6C4", "#D9B9D0", "#E7C8D6"] }, icon: { data: "heart.slash.fill", type: "sf_symbol", color: "#5D3F59" }, max_lines: 1, text: "thương người không thương mình", text_color: "#5D3F59", type: "static_content" } },
                { overlay_id: "caption:tu_da_tinh", source: "remote", caption: { background: { colors: ["#52658F", "#9A8FBF", "#F2B6B8"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#373653" }, max_lines: 1, text: "lại tự mình đa tình", text_color: "#373653", type: "static_content" } },
                { overlay_id: "caption:khong_du_tot", source: "remote", caption: { background: { colors: ["#AFC6D8", "#C8D5E2", "#E0D1DE"] }, icon: { data: "cloud.sun.rain.fill", type: "sf_symbol", color: "#455467" }, max_lines: 1, text: "chắc tại mình không đủ tốt", text_color: "#455467", type: "static_content" } },
                { overlay_id: "caption:hy_vong_that_vong", source: "remote", caption: { background: { colors: ["#8E354A", "#C45D69", "#F0B6A8"] }, icon: { data: "cloud.rain.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "một chút hy vọng, một đống thất vọng", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:het_duyen_het_thuong", source: "remote", caption: { background: { colors: ["#334E68", "#627D98", "#BCCCDC"] }, icon: { data: "thought.bubble.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "hết duyên hay hết thương?", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:nguoi_vui_nho", source: "remote", caption: { background: { colors: ["#455A64", "#78909C", "#CFD8DC"] }, icon: { data: "heart.circle.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "người vui có nhớ người buồn không", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:da_xem_chua_rep", source: "remote", caption: { background: { colors: ["#2979FF", "#64B5F6", "#BBDEFB"] }, icon: { data: "message.fill", type: "sf_symbol", color: "#15345C" }, max_lines: 1, text: "đã xem, chưa rep, đã đau", text_color: "#15345C", type: "static_content" } },
                { overlay_id: "caption:dung_im_lang", source: "remote", caption: { background: { colors: ["#FF8FA3", "#FFB3C6", "#FFE0E9"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#812D49" }, max_lines: 1, text: "đừng im lặng với em mà", text_color: "#812D49", type: "static_content" } },
                { overlay_id: "caption:nho_thi_nho", source: "remote", caption: { background: { colors: ["#E5A642", "#F4CB78", "#FFF0C2"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#633F13" }, max_lines: 1, text: "nhớ thì nhớ, quay lại thì thôi", text_color: "#633F13", type: "static_content" } },
                { overlay_id: "caption:em_hong_doi", source: "remote", caption: { background: { colors: ["#65A30D", "#A3C957", "#E2F0B0"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#2F4712" }, max_lines: 1, text: "em hong có dỗi, em chỉ buồn", text_color: "#2F4712", type: "static_content" } },
                { overlay_id: "caption:doi_roi", source: "remote", caption: { background: { colors: ["#FF5F6D", "#FFC371"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Dỗi rồi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:dung_choc_be", source: "remote", caption: { background: { colors: ["#F1BDD0", "#F8DCE5", "#E8D1F2"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#70475D" }, max_lines: 1, text: "thui mừ đừng có chọc bé", text_color: "#70475D", type: "static_content" } },
                { overlay_id: "caption:dung_lam_be_quao", source: "remote", caption: { background: { colors: ["#FF8A5B", "#FFB36B", "#FFE3A3"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#71351F" }, max_lines: 1, text: "đừng có làm bé quạo", text_color: "#71351F", type: "static_content" } },
                { overlay_id: "caption:xin_lui_duoc_chua", source: "remote", caption: { background: { colors: ["#F6D365", "#FDA085"] }, icon: { data: "hands.and.sparkles.fill", type: "sf_symbol", color: "#000000" }, max_lines: 1, text: "Xin lũi được chưa", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:biet_roi_kho", source: "remote", caption: { background: { colors: ["#FF7A59", "#FFAD73", "#FFE0A3"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#71351F" }, max_lines: 1, text: "bíc gòi khổ lém", text_color: "#71351F", type: "static_content" } },
                { overlay_id: "caption:hong_be_oi", source: "remote", caption: { background: { colors: ["#58C9A5", "#A4E6C8", "#E0F7D9"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#205844" }, max_lines: 1, text: "hong bé ơi", text_color: "#205844", type: "static_content" } },
                { overlay_id: "caption:khum_biet_nua", source: "remote", caption: { background: { colors: ["#5367C5", "#8F9FE8", "#D5D8FF"] }, icon: { data: "face.dashed.fill", type: "sf_symbol", color: "#293466" }, max_lines: 1, text: "khum biết nữa", text_color: "#293466", type: "static_content" } }
            ]
        }
    ])
});

// ============================================================
// 8. RESPONSE
// ============================================================
$done({
    status: 200,
    headers: Object.assign({}, ($response && $response.headers) || {}, {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    }),
    body: JSON.stringify(obj)
});
