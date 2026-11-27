// ============================================================
// Locket Remote Config Rewrite — FULL UNLOCK (FIXED)
// Đảo thứ tự: AI 3D → Photobooth → Frames → mặc định
// Xoá prompt filter mặc định, giữ prompt ID cho AI
// ============================================================

var ua = (typeof $request !== "undefined" && $request && $request.headers) ? ($request.headers["User-Agent"] || $request.headers["user-agent"] || "") : "";
var obj = {};
try {
    obj = JSON.parse($response.body);
} catch (e) {
    obj = {};
}

if (!obj || typeof obj !== "object") {
    obj = {};
}
obj.state = "UPDATE";
obj.templateVersion = String(Date.now());
obj.Attention = "Congratulations! Please do not use them for commercial purposes!";
obj.entries = obj.entries || {};
obj.entries.cache_ttl_seconds = "0";
obj.entries.client_cache_ttl_sec = "0";

var paywallConfigPayload = {
    uid: "v4_vietnam_yearly",
    title: { en: "Locket Gold", vi: "Locket Gold" },
    subtitle: {
        en: "Members have so much\nmore fun on Locket!",
        vi: "Các thành viên có thể làm nhiều\nđiều thật vui nhộn trên Locket"
    },
    primary_button_title: { en: "Upgrade your Locket", vi: "Nâng cấp Locket của bạn" },
    primary_button_icon: "lock.open.fill",
    dismiss_button_title: { en: "No thanks!", vi: "Không, cảm ơn!" },
    fade_in_animation: false,
    button_container_style: "fade",
    subscribe_sheet_title: { en: "Subscribe to\nLocket Gold", vi: "Đăng ký gói\nLocket Gold" },
    subscribe_button_title: { en: "Subscribe", vi: "Đăng ký gói" },
    coming_soon_title: { en: "Coming soon!", vi: "Sắp có!" },
    coming_soon_subtitle: {
        en: "You haven't been charged, but you’ll be the first to know once it’s ready.",
        vi: "Bạn chưa bị trừ tiền, nhưng bạn sẽ được thông báo đầu tiên sau khi mọi thứ đã sẵn sàng."
    },
    compact_profile_banner_title: { en: "Get Locket Gold", vi: "Thử Locket Gold" },
    profile_banner_title: { en: "Locket Gold", vi: "Locket Gold" },
    profile_banner_subtitle: { en: "Unlock the best of Locket", vi: "Mở khóa các tính năng tốt nhất của Locket" },
    completed_title: { en: "Welcome to Gold!", vi: "Chào mừng bạn đến với Locket Gold!" },
    completed_subtitle: {
        en: "You now have access to all Locket Gold features. We’re always adding more benefits, so check back soon.",
        vi: "Giờ đây bạn đã có quyền truy cập tất cả các tính năng của Locket Gold!"
    },
    completed_button_title: { en: "Done", vi: "Xong" },
    early_access_title: { en: "Early access!", vi: "Truy cập sớm!" },
    primary_features: [
        {
            emoji: "🚫",
            title: { en: "Remove ads", vi: "Không có quảng cáo!" },
            subtitle: { en: "Never see an ad in History!", vi: "Không bao giờ nhìn thấy một quảng cáo nào nữa" }
        },
        {
            emoji: "🎥",
            title: { en: "Video Lockets", vi: "Video Lockets" },
            subtitle: { en: "Record short video clips!", vi: "Ghi lại các video clip ngắn!" },
            early_access: true
        },
        {
            emoji: "👀",
            title: { en: "Locket views", vi: "Lượt xem Locket" },
            subtitle: { en: "See who's opened your Lockets", vi: "Xem những người đã mở Locket của bạn" }
        },
        {
            emoji: "🏞️",
            title: { en: "Upload from camera roll", vi: "Tải lên từ cuộn camera" },
            subtitle: { en: "Share memories from your library", vi: "Chia sẻ các kỷ niệm từ thư viện của bạn" }
        },
        {
            emoji: "❤️‍🔥",
            title: { en: "Unlimited friends", vi: "Thêm bạn bè tùy ý" },
            subtitle: { en: "Add as many friends as you’d like!", vi: "Thêm bao nhiêu bạn bè tùy ý!" },
            early_access: true
        },
        {
            emoji: "💛",
            title: { en: "Custom app icon", vi: "Biểu tượng ứng dụng tùy chỉnh" },
            subtitle: { en: "Decorate your Home Screen", vi: "Trang trí Màn hình chính của bạn" }
        },
        {
            emoji: "💬",
            title: { en: "Send longer captions", vi: "Gửi phụ đề dài hơn" },
            subtitle: { en: "Type even more on your photos!", vi: "Điền nhiều nội dung hơn nữa trên các ảnh của bạn!" }
        }
    ],
    secondary_features: [
        { emoji: "🆕", title: { en: "Early product updates", vi: "Truy cập tính năng mới sớm hơn" } },
        { emoji: "🎁", title: { en: "Monthly feature drops", vi: "Phát hành tính năng mới hằng tháng" } },
        { emoji: "🏅", title: { en: "Membership badge", vi: "Huy hiệu thành viên" } }
    ],
    offering_kind: "prod",
    plans: [
        { title: { en: "1 Year", vi: "1 năm" }, package: "locket_1600_1y" },
        { title: { en: "1 Month", vi: "1 tháng" }, package: "locket_199_1m" }
    ]
};

// 1. FEATURE GATES, PAYWALL, CỜ GOLD
Object.assign(obj.entries, {
    feature_gates: JSON.stringify({
        app_icon_picker: "enabled", appIconPicker: "enabled",
        camera_roll: "enabled", cameraRoll: "enabled",
        camera_roll_video: "enabled", cameraRollVideo: "enabled",
        camera_roll_video_30s: "enabled",
        camera_roll_video_upload: "enabled", cameraRollVideoUpload: "enabled",
        camera_roll_video_upload_30s: "enabled",
        camera_roll_longer_video: "enabled", camera_roll_longer_video_30s: "enabled",
        camera_theme: "enabled", cameraTheme: "enabled",
        locket_views: "enabled", locketViews: "enabled",
        moment_views: "enabled", momentViews: "enabled",
        moment_view: "enabled", momentView: "enabled",
        long_captions: "enabled", longCaptions: "enabled",
        longer_video: "enabled", longerVideo: "enabled",
        longer_videos: "enabled", longerVideos: "enabled",
        longer_video_30s: "enabled", extended_video_30s: "enabled",
        photo_library_video: "enabled", photo_library_video_30s: "enabled",
        gallery_video: "enabled", gallery_video_30s: "enabled",
        can_upload_30s_video: "enabled", can_record_30s_video: "enabled",
        allow_longer_video_upload: "enabled", longer_video_upload: "enabled",
        video_sound: "enabled", videoSound: "enabled",
        camera_microphone: "enabled", cameraMicrophone: "enabled",
        unlimited_friends: "enabled", unlimitedFriends: "enabled",
        priority_support: "enabled",
        profile_badge: "enabled", profileBadge: "enabled",
        gold_badge: "enabled", goldBadge: "enabled",
        gold_since: "enabled", gold_since_badge: "enabled", goldSinceBadge: "enabled",
        gold_member_since: "enabled", show_gold_since: "enabled",
        profile_gold_badge: "enabled", profile_gold_card: "enabled",
        gold_membership_card: "enabled", gold_card: "enabled",
        profile_badge_visible: "enabled", gold_badge_profile_menu: "enabled",
        remove_ads: "enabled", removeAds: "enabled",
        video: "enabled", video_15s: "enabled", video_30s: "enabled",
        video_40s: "enabled", video_60s: "enabled", video_upload: "enabled",
        video_upload_30s: "enabled",
        custom_widget_frames: "enabled", customWidgetFrames: "enabled",
        streak_recovery: "enabled", streakRecovery: "enabled",
        streaks: "enabled", streak: "enabled", streak_visualizations: "enabled",
        streak_badge: "enabled", groups: "enabled", private_mode: "enabled",
        viewer_mode: "enabled", close_friends: "enabled", closeFriends: "enabled",
        best_friends: "enabled", bestFriends: "enabled",
        send_to_self: "enabled", sendToSelf: "enabled",
        send_to_self_only: "enabled", sendToSelfOnly: "enabled",
        qr_code: "enabled", qrCode: "enabled",
        camera_filter_sheet: "enabled", cameraFilterSheet: "enabled",
        camera_filters: "enabled", camera_filter: "enabled", filter: "enabled",
        filters: "enabled", photo_filters: "enabled", ai_filters: "enabled",
        holiday_effects: "enabled", holiday_filters: "enabled",
        holiday_filter: "enabled", ar_filters: "enabled",
        face_filters: "enabled", profile_cover: "enabled",
        profile_cover_photo: "enabled", profile_customization: "enabled"
    }),
    upsell_features: JSON.stringify({
        app_icon_picker: false, camera_roll: false, camera_theme: false,
        locket_views: false, remove_ads: false, custom_widget_frames: false,
        unlimited_friends: false,
        filter: false, filters: false, camera_filter: false, camera_filters: false,
        holiday_filter: false, holiday_filters: false, holiday_effects: false,
        ai_filter: false, ai_filters: false
    }),
    paywall_presentation_config: JSON.stringify({
        uid: "v1_no_popup", onboarding: false, after_sent_moment: false,
        after_moment: false, after_capture: false, on_foreground: false,
        holiday_effects: false, camera_filters: false, camera_filter: false,
        filters: false, filter: false, ai_filter: false, ai_filters: false,
        filtered_image: false, filtered_images: false, generate_filtered_image: false,
        interval: 2592000, profile_banner: true
    }),
    paywall_config: JSON.stringify(paywallConfigPayload),
    purchases_enabled: "true",
    purchases_entitlement: "Gold",
    paywall_local_trial_unlocked: "true",
    test_flight_purchase_override_enabled: "true",
    gold_subscription_override: "true",
    profile_gold_banner_features_enabled: "true",
    feature_discovery_popup_config: JSON.stringify({
        tag: "LOCKET GOLD ALL FEATURES", tag_gradient: true, tag_style: "gold_gradient",
        title: "Welcome To Locket Gold",
        feature_set: [{ title: "", body: "Wishing you a pleasant experience", imageURL: "https://cdn.jsdelivr.net/gh/crdevu/e16f/assets/widget/zzonnya.png" }],
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
    camera_filter_gold_only: "false", camera_filters_gold_only: "false",
    holiday_filters_gold_only: "false", filter_gold_only: "false",
    filters_gold_only: "false", ai_filter_gold_only: "false",
    ai_filters_gold_only: "false", filter_paywall_enabled: "false",
    camera_filter_paywall_enabled: "false", filter_upsell_enabled: "false",
    require_gold_for_filters: "false", require_gold_for_filter: "false",
    requires_gold_for_filters: "false", requires_gold_for_filter: "false",
    requires_gold_for_camera_filters: "false", camera_filter_requires_gold: "false",
    camera_filters_require_gold: "false", ai_filter_requires_gold: "false",
    ai_filters_require_gold: "false", filter_requires_gold: "false",
    filters_require_gold: "false", filtered_image_requires_gold: "false",
    filtered_images_require_gold: "false", filtered_image_gold_only: "false",
    filtered_images_gold_only: "false", free_filters_enabled: "true",
    filter_selection_enabled: "true", camera_filter_sheet_selection_enabled: "true",
    sheet_filters_selectable: "true", dismiss_filter_sheet_on_select: "true",
    is_gold: "true", has_gold: "true", is_gold_user: "true",
    user_is_gold: "true", gold_user: "true", gold_active: "true",
    all_filters_free: "true", unlocked_filters: "true",
    camera_filter_max_count: "50", max_camera_filters: "50"
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

// 2. CAMERA, VIDEO 45s
var MY_VIDEO_DURATION = 45.0;
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

// 2A. CAMERA FILTER + CAMERA STYLES REMOTE FLAGS
// Các key này lấy theo Remote Config đã phân tích; giữ nguyên các gate khác.
var cameraFeatureGates = {};
try {
    cameraFeatureGates = JSON.parse(obj.entries.feature_gates || "{}");
} catch (e) {
    cameraFeatureGates = {};
}
Object.assign(cameraFeatureGates, {
    camera_filter_sheet: "enabled",
    cameraFilterSheet: "enabled",
    camera_filters: "enabled",
    camera_filter: "enabled",
    camera_styles: "enabled",
    cameraStyles: "enabled",
    camera_viewfinder_controls: "enabled",
    cameraViewfinderControls: "enabled",
    camera_theme: "enabled",
    cameraTheme: "enabled",
    gold_camera_themes: "enabled",
    profileBadge: "enabled",
    gold_badge: "enabled",
    goldBadge: "enabled",
    gold_since: "enabled",
    gold_since_badge: "enabled",
    gold_member_since: "enabled",
    show_gold_since: "enabled",
    profile_gold_badge: "enabled",
    profile_gold_card: "enabled",
    gold_membership_card: "enabled",
    gold_card: "enabled",
    profile_badge_visible: "enabled",
    gold_badge_profile_menu: "enabled"
});
obj.entries.feature_gates = JSON.stringify(cameraFeatureGates);

var cameraFeatureGateOverrides = {};
try {
    cameraFeatureGateOverrides = JSON.parse(obj.entries.feature_gates_override || "{}");
} catch (e) {
    cameraFeatureGateOverrides = {};
}
Object.assign(cameraFeatureGateOverrides, {
    cameraFilterSheet: true,
    camera_filter_sheet: true,
    cameraStyles: true,
    camera_styles: true,
    cameraViewfinderControls: true,
    camera_viewfinder_controls: true,
    cameraTheme: true,
    camera_theme: true,
    gold_camera_themes: true,
    profileBadge: true,
    gold_badge: true,
    goldBadge: true,
    gold_since: true,
    gold_since_badge: true,
    gold_member_since: true,
    show_gold_since: true,
    profile_gold_badge: true,
    profile_gold_card: true,
    gold_membership_card: true,
    gold_card: true,
    profile_badge_visible: true,
    gold_badge_profile_menu: true
});
obj.entries.feature_gates_override = JSON.stringify(cameraFeatureGateOverrides);

Object.assign(obj.entries, {
    // Camera Filter controls
    camera_filter_button: "true",
    camera_filter_button_enabled: "true",
    camera_filter_enabled: "true",
    camera_filters_enabled: "true",
    camera_filter_sheet: "true",
    camera_filter_sheet_enabled: "true",
    enable_camera_filter: "true",
    filter_picker_enabled: "true",
    camera_filter_gold_only: "false",
    camera_filters_gold_only: "false",

    // Camera Styles controls
    camera_styles_enabled: "true",
    camera_styles_premium: "false",
    camera_style_entry: "true",
    camera_style_library: "true",
    camera_style_gold_badge: "true",
    camera_style_tooltip_shown: "true",
    camera_style_tooltip_tapped: "true",
    camera_style_upsell: "false",
    gold_camera_themes: "true",
    gold_camera_themes_profile_menu: "true",
    camera_theme_upsell: "false",

    // Individual Camera Styles
    camera_style_cybershot_w80: "true",
    camera_style_digicam: "true",
    camera_style_ricoh_gr_iii: "true",
    camera_style_vhs: "true",
    camera_style_quicksnap: "true",
    camera_style_funsaver: "true",
    camera_style_leica_m6: "true",
    camera_style_polaroid_600: "true",
    camera_style_instax_mini_12: "true",
    camera_style_super_8: "true",
    camera_style_lofi: "true",
    camera_style_fisheye: "true",
    camera_style_laptop: "true",

    camera_roll_preview_enabled: "true",
    camera_roll_video_enabled: "true",
    camera_roll_video_trimming_enabled: "true",
    camera_roll_video_upload_enabled: "true",
    camera_roll_upload_enabled: "true",
    internal_camera_roll_video_upload_enabled: "true",
    longer_camera_roll_videos_enabled: "true",
    camera_roll_video_sound_enabled: "true",
    cameraRollVideoSoundEnabled: "true",
    camera_roll_video_max_duration: durationStr, camera_roll_max_duration: durationStr,
    camera_roll_duration: durationStr, max_video_duration: durationStr,
    video_max_duration: durationStr, video_trim_max_duration: durationStr,
    trim_max_duration: durationStr, gold_max_duration: durationStr,
    goldMaxDuration: durationStr, max_file_size: MAX_SIZE_BYTES.toString(),
    max_upload_bytes: MAX_SIZE_BYTES.toString(), video_quality_mbps: "0.6",
    video_sound_enabled: "true", videoSoundEnabled: "true",
    microphone_enabled: "true", microphoneEnabled: "true",
    camera_microphone_enabled: "true", cameraMicrophoneEnabled: "true",
    sound_enabled: "true", soundEnabled: "true",
    audio_enabled: "true", audioEnabled: "true",
    audio_session_deactivation_enabled: "true",
    zoom_enabled: "true", upload_main: "false",
    upload_main_image_quality: "1.0", upload_main_image_size: "1440",
    upload_thumbnail_image_quality: "1.0", upload_thumbnail_image_size: "1020"
});

// 3. FRIENDS, MOMENTS, WIDGET, JOURNAL, CACHE
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
        uid: "midautumn_2026", url: "https://cdn.jsdelivr.net/gh/crdevu/e16f/assets/widget/wg_ig.png",
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

// 4. OVERLAY & CAPTIONS
Object.assign(obj.entries, {
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
    captions_enabled: "true", music_caption_enabled: "true",
    music_caption_song_preview_enabled: "true", link_caption_link_enabled: "true",
    overlay_dynamic_captions: JSON.stringify([
        "standard", "poll", "color_palette", "review", "music", "location",
        "weather", "time", "streak", "star_sign", "party_time", "locket_count",
        "good_morning", "goodnight", "ootd", "miss_you", "custom",
        "halloween_2026", "autumn_2026", "christmas_eve_2026", "christmas_day_2026",
        "new_years_eve_2027", "new_years_day_2027", "new_years_day_2027_alternate",
        "no_memory", "quote", "breaking_news"
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
                { overlay_id: "caption:du_an_ma", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, icon: { data: "theatermask.and.paintbrush.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "dự án ma", text_color: "#FFFFFFE6", type: "static_content" } }
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
                { overlay_id: "caption:xinh_dep_tuyet_voi", source: "remote", caption: { background: { colors: ["#FC5C7D", "#6A82FB"] }, icon: { data: "sparkles", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Xinh đẹp tuyệt vời", text_color: "#FFFFFFE6", type: "static_content" } }
            ]
        },
        {
            section: "🎨 Meme & Hài hước 🤡",
            items: [
                { overlay_id: "caption:cuoi_vcl_m_oi", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200", "#FFEE58"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#000000E6" }, max_lines: 1, text: "Cười vcl m oi", text_color: "#000000E6", type: "static_content" } },
                { overlay_id: "caption:cuoi_xiu", source: "remote", caption: { background: { colors: ["#FFEB3B", "#FF9800"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#000000E6" }, max_lines: 1, text: "Cười xỉu", text_color: "#000000E6", type: "static_content" } },
                { overlay_id: "caption:luon_vui_tuoi", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Luôn vui tươi", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:hong_drama", source: "remote", caption: { background: { colors: ["#8A2387", "#E94057", "#F27121"] }, icon: { data: "popcorn.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Hóng drama", text_color: "#FFFFFFE6", type: "static_content" } }
            ]
        },
        {
            section: "🎨 Deadline & Tiền bạc 💸",
            items: [
                { overlay_id: "caption:deadline_ruot", source: "remote", caption: { background: { colors: ["#ED213A", "#93291E"] }, icon: { data: "flame.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Deadline dí tụt quần", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:di_lam_vi_dam_me", source: "remote", caption: { background: { colors: ["#FDC830", "#F37335"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Đi làm vì đam mê", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:tien_dau_ma_tieu", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "banknote.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Tiền đâu mà tiêu", text_color: "#FFFFFFE6", type: "static_content" } }
            ]
        },
        {
            section: "🎨 Daily & Đời sống ☕",
            items: [
                { overlay_id: "caption:ngay_moi_vui_ve", source: "remote", caption: { background: { colors: ["#FFB703", "#FFD166", "#FFF0A8"] }, icon: { data: "sun.max.fill", type: "sf_symbol", color: "#69420A" }, max_lines: 1, text: "Ngày mới vui vẻ", text_color: "#69420A", type: "static_content" } },
                { overlay_id: "caption:coffee_time", source: "remote", caption: { background: { colors: ["#4E342E", "#8D6E63"] }, icon: { data: "cup.and.saucer.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Coffee Time!", localized_text: { en: "Coffee Time!", vn: "Giờ uống cà phê!" }, text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:an_com_chua", source: "remote", caption: { background: { colors: ["#FF9800", "#F57C00"] }, icon: { data: "fork.knife", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Ăn cơm chưa?", text_color: "#FFFFFFE6", type: "static_content" } },
                { overlay_id: "caption:ngu_ngon", source: "remote", caption: { background: { colors: ["#3F51B5", "#1A237E"] }, icon: { data: "moon.zzz.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Ngủ ngon", text_color: "#FFFFFFE6", type: "static_content" } }
            ]
        },
        {
            section: "🎨 Tình yêu",
            items: [
                { overlay_id: "caption:i_love_you", source: "remote", caption: { background: { colors: ["#FF8FAB", "#FFC2D1", "#FFE5EC"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#8A304F" }, max_lines: 1, text: "i love you", text_color: "#8A304F", type: "static_content" } },
                { overlay_id: "caption:iu_thi_noi", source: "remote", caption: { background: { colors: ["#FFD166", "#FFE8A3", "#FFF3D0"] }, icon: { data: "bubble.left.fill", type: "sf_symbol", color: "#704510" }, max_lines: 1, text: "iu thì nói, đừng có ngại", text_color: "#704510", type: "static_content" } },
                { overlay_id: "caption:dang_ban_tuong_tu", source: "remote", caption: { background: { colors: ["#1A2980", "#26D0CE"] }, icon: { data: "thought.bubble.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Đang bận tương tư", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:dating_time", source: "remote", caption: { background: { colors: ["#E91E63", "#F44336"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Dating Time!", text_color: "#FFFFFFE6", type: "static_content" } }
            ]
        }
    ])
});

// ============================================================
// 5. FILTER CONFIG — AI 3D TRƯỚC, XOÁ PROMPT MẶC ĐỊNH
// ============================================================
var customPhotoboothFilters = [
    // Tarot
    { "uid": "tr_the_magician", "id": "tr_the_magician", "name": "Tarot Hành Động", "prompt": "tr_the_magician", "productUrl": null, "colors": ["#E11D48", "#FB7185"], "captureButtonColors": ["#E11D48", "#FB7185"], "icon": { "url": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_magician.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_magician.png", "remoteImage": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_magician.png", "sfSymbol": "sparkles", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_magician.png", "overlayImageURL": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_magician.png", "imageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_magician.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_magician.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "normal" },
    { "uid": "tr_all_seing_eye", "id": "tr_all_seing_eye", "name": "Tarot Sự Thật", "prompt": "tr_all_seing_eye", "productUrl": null, "colors": ["#84CC16", "#65A30D"], "captureButtonColors": ["#84CC16", "#65A30D"], "icon": { "url": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/all_seeing_eye.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/all_seeing_eye.png", "remoteImage": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/all_seeing_eye.png", "sfSymbol": "sparkles", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/all_seeing_eye.png", "overlayImageURL": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/all_seeing_eye.png", "imageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/all_seeing_eye.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/all_seeing_eye.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "normal" },
    { "uid": "tr_the_hermit", "id": "tr_the_hermit", "name": "Tarot Định Hướng", "prompt": "tr_the_hermit", "productUrl": null, "colors": ["#DC2626", "#FBBF24"], "captureButtonColors": ["#DC2626", "#FBBF24"], "icon": { "url": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_hermit.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_hermit.png", "remoteImage": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_hermit.png", "sfSymbol": "sparkles", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_hermit.png", "overlayImageURL": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_hermit.png", "imageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_hermit.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_hermit.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "normal" },
    { "uid": "tr_the_moon", "id": "tr_the_moon", "name": "Tarot Cảm Xúc", "prompt": "tr_the_moon", "productUrl": null, "colors": ["#38BDF8", "#818CF8"], "captureButtonColors": ["#38BDF8", "#818CF8"], "icon": { "url": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_moon.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_moon.png", "remoteImage": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_moon.png", "sfSymbol": "sparkles", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_moon.png", "overlayImageURL": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_moon.png", "imageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_moon.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_moon.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "normal" },
    { "uid": "tr_the_sun", "id": "tr_the_sun", "name": "Tarot Thành Công", "prompt": "tr_the_sun", "productUrl": null, "colors": ["#0F172A", "#E2E8F0"], "captureButtonColors": ["#0F172A", "#E2E8F0"], "icon": { "url": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_sun.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_sun.png", "remoteImage": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_sun.png", "sfSymbol": "sparkles", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_sun.png", "overlayImageURL": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_sun.png", "imageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_sun.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_sun.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "normal" },
    { "uid": "tr_wheel_of_forutne", "id": "tr_wheel_of_forutne", "name": "Tarot Vận May", "prompt": "tr_wheel_of_forutne", "productUrl": null, "colors": ["#EA580C", "#EF4444"], "captureButtonColors": ["#EA580C", "#EF4444"], "icon": { "url": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/wheel_of_fortune.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/wheel_of_fortune.png", "remoteImage": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/wheel_of_fortune.png", "sfSymbol": "sparkles", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/wheel_of_fortune.png", "overlayImageURL": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/wheel_of_fortune.png", "imageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/wheel_of_fortune.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/wheel_of_fortune.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "normal" },
    { "uid": "tr_the_high_hierophant", "id": "tr_the_high_hierophant", "name": "Tarot Tri Thức", "prompt": "tr_the_high_hierophant", "productUrl": null, "colors": ["#3B82F6", "#6366F1"], "captureButtonColors": ["#3B82F6", "#6366F1"], "icon": { "url": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_hierophant.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_hierophant.png", "remoteImage": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_hierophant.png", "sfSymbol": "sparkles", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_hierophant.png", "overlayImageURL": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_hierophant.png", "imageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_hierophant.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_hierophant.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "normal" },
    { "uid": "tr_the_high_priestess", "id": "tr_the_high_priestess", "name": "Tarot Dự Báo", "prompt": "tr_the_high_priestess", "productUrl": null, "colors": ["#A855F7", "#EC4899"], "captureButtonColors": ["#A855F7", "#EC4899"], "icon": { "url": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_priestess.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_priestess.png", "remoteImage": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_priestess.png", "sfSymbol": "sparkles", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_priestess.png", "overlayImageURL": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_priestess.png", "imageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_priestess.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/the_high_priestess.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "normal" },
    { "uid": "tr_temperance", "id": "tr_temperance", "name": "Tarot Công Việc", "prompt": "tr_temperance", "productUrl": null, "colors": ["#06B6D4", "#F43F5E"], "captureButtonColors": ["#06B6D4", "#F43F5E"], "icon": { "url": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/temperance.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/temperance.png", "remoteImage": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/temperance.png", "sfSymbol": "sparkles", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/temperance.png", "overlayImageURL": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/temperance.png", "imageUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/temperance.png", "iconUrl": "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/temperance.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "normal" },

    // Photobooth
    { "uid": "photobooth_4cut", "id": "photobooth_4cut", "name": "Photobooth 4 ô", "prompt": "photobooth_4cut", "productUrl": null, "colors": ["#FFD6E0", "#FFE4EC"], "captureButtonColors": ["#FFD6E0", "#FFE4EC"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_4cut.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_4cut.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_4cut.png", "sfSymbol": "square.grid.2x2", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_4cut.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_4cut.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_4cut.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_4cut.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "photobooth_cute", "id": "photobooth_cute", "name": "Photobooth Cute", "prompt": "photobooth_cute", "productUrl": null, "colors": ["#FFD6E0", "#FFE4EC"], "captureButtonColors": ["#FFD6E0", "#FFE4EC"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_cute.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_cute.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_cute.png", "sfSymbol": "square.grid.2x2", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_cute.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_cute.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_cute.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photobooth_cute.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "pb_holo_4cut", "id": "pb_holo_4cut", "name": "Photobooth Y2K Holo", "prompt": "pb_holo_4cut", "productUrl": null, "colors": ["#C4B5FD", "#E0E7FF"], "captureButtonColors": ["#C4B5FD", "#E0E7FF"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_holo_4cut.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_holo_4cut.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_holo_4cut.png", "sfSymbol": "square.grid.2x2", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_holo_4cut.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_holo_4cut.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_holo_4cut.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_holo_4cut.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "pb_scrapbook_ripped_4cut", "id": "pb_scrapbook_ripped_4cut", "name": "Photobooth Scrapbook", "prompt": "pb_scrapbook_ripped_4cut", "productUrl": null, "colors": ["#D6A36A", "#FDE68A"], "captureButtonColors": ["#D6A36A", "#FDE68A"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_scrapbook_ripped_4cut.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_scrapbook_ripped_4cut.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_scrapbook_ripped_4cut.png", "sfSymbol": "square.grid.2x2", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_scrapbook_ripped_4cut.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_scrapbook_ripped_4cut.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_scrapbook_ripped_4cut.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_scrapbook_ripped_4cut.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "pb_ripped_paper_4cut", "id": "pb_ripped_paper_4cut", "name": "Photobooth Ripped Paper", "prompt": "pb_ripped_paper_4cut", "productUrl": null, "colors": ["#EF4444", "#FCA5A5"], "captureButtonColors": ["#EF4444", "#FCA5A5"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_ripped_paper_4cut.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_ripped_paper_4cut.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_ripped_paper_4cut.png", "sfSymbol": "square.grid.2x2", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_ripped_paper_4cut.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_ripped_paper_4cut.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_ripped_paper_4cut.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_ripped_paper_4cut.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "pb_denim_ripped_2x2", "id": "pb_denim_ripped_2x2", "name": "Photobooth Denim 4 ô", "prompt": "pb_denim_ripped_2x2", "productUrl": null, "colors": ["#38BDF8", "#93C5FD"], "captureButtonColors": ["#38BDF8", "#93C5FD"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_denim_ripped_2x2.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_denim_ripped_2x2.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_denim_ripped_2x2.png", "sfSymbol": "square.grid.2x2", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_denim_ripped_2x2.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_denim_ripped_2x2.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_denim_ripped_2x2.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_denim_ripped_2x2.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "frame_classic_pb", "id": "frame_classic_pb", "name": "Photobooth Cổ Điển", "prompt": "frame_classic_pb", "productUrl": null, "colors": ["#FF758C", "#FF7EB3"], "captureButtonColors": ["#FF758C", "#FF7EB3"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photoboot.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photoboot.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photoboot.png", "sfSymbol": "square.grid.2x2", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photoboot.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photoboot.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photoboot.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/photoboot.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "frame_berry_days", "id": "frame_berry_days", "name": "Photobooth Berry Days", "prompt": "frame_berry_days", "productUrl": null, "colors": ["#FFB6C1", "#FF69B4"], "captureButtonColors": ["#FFB6C1", "#FF69B4"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_strawberry.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_strawberry.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_strawberry.png", "sfSymbol": "square.grid.2x2", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_strawberry.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_strawberry.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_strawberry.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_strawberry.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "frame_happy_snap", "id": "frame_happy_snap", "name": "Photobooth Happy Snap", "prompt": "frame_happy_snap", "productUrl": null, "colors": ["#A8E6CF", "#88D49E"], "captureButtonColors": ["#A8E6CF", "#88D49E"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_vintage.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_vintage.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_vintage.png", "sfSymbol": "square.grid.2x2", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_vintage.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_vintage.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_vintage.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_vintage.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "frame_sky_diary", "id": "frame_sky_diary", "name": "Photobooth Sky Diary", "prompt": "frame_sky_diary", "productUrl": null, "colors": ["#D8B4F8", "#C3B1E1"], "captureButtonColors": ["#D8B4F8", "#C3B1E1"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_galaxy.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_galaxy.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_galaxy.png", "sfSymbol": "square.grid.2x2", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_galaxy.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_galaxy.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_galaxy.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_galaxy.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "sticker_b_nh_lu_n_minh_tu", "id": "sticker_b_nh_lu_n_minh_tu", "name": "Trend Tíc Tóc", "prompt": "sticker_b_nh_lu_n_minh_tu", "productUrl": null, "colors": ["#FF758C", "#FF7EB3"], "captureButtonColors": ["#FF758C", "#FF7EB3"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sticker_b_nh_lu_n_minh_tu.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sticker_b_nh_lu_n_minh_tu.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sticker_b_nh_lu_n_minh_tu.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sticker_b_nh_lu_n_minh_tu.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sticker_b_nh_lu_n_minh_tu.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sticker_b_nh_lu_n_minh_tu.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sticker_b_nh_lu_n_minh_tu.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "cmt_locket", "id": "cmt_locket", "name": "Locket Việt Nam", "prompt": "cmt_locket", "productUrl": null, "colors": ["#FF758C", "#FF7EB3"], "captureButtonColors": ["#FF758C", "#FF7EB3"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/cmt_locket.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/cmt_locket.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/cmt_locket.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/cmt_locket.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/cmt_locket.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/cmt_locket.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/cmt_locket.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "khung_hello_kitty_pastel_ng_t_ng_o", "id": "khung_hello_kitty_pastel_ng_t_ng_o", "name": "Hello Kitty Ngọt Ngào", "prompt": "khung_hello_kitty_pastel_ng_t_ng_o", "productUrl": null, "colors": ["#FF758C", "#FF7EB3"], "captureButtonColors": ["#FF758C", "#FF7EB3"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "khung_hello_kitty_h_ng_pastel", "id": "khung_hello_kitty_h_ng_pastel", "name": "Khung Hello Kitty Hồng", "prompt": "khung_hello_kitty_h_ng_pastel", "productUrl": null, "colors": ["#FF758C", "#FF7EB3"], "captureButtonColors": ["#FF758C", "#FF7EB3"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_h_ng_pastel.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_h_ng_pastel.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_h_ng_pastel.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_h_ng_pastel.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_h_ng_pastel.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_h_ng_pastel.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_hello_kitty_h_ng_pastel.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "khung_nh_n_pastel_vi_n_ren", "id": "khung_nh_n_pastel_vi_n_ren", "name": "Nơ Pastel Viền Ren", "prompt": "khung_nh_n_pastel_vi_n_ren", "productUrl": null, "colors": ["#FF758C", "#FF7EB3"], "captureButtonColors": ["#FF758C", "#FF7EB3"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_n_pastel_vi_n_ren.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_n_pastel_vi_n_ren.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_n_pastel_vi_n_ren.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_n_pastel_vi_n_ren.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_n_pastel_vi_n_ren.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_n_pastel_vi_n_ren.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_n_pastel_vi_n_ren.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "khung_nh_hoa_pastel_vi_n_xanh_m_nh", "id": "khung_nh_hoa_pastel_vi_n_xanh_m_nh", "name": "Hoa Xinh Pastel", "prompt": "khung_nh_hoa_pastel_vi_n_xanh_m_nh", "productUrl": null, "colors": ["#51e6e4", "#fce03f"], "captureButtonColors": ["#51e6e4", "#fce03f"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_hoa_pastel_vi_n_xanh_m_nh.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_hoa_pastel_vi_n_xanh_m_nh.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_hoa_pastel_vi_n_xanh_m_nh.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_hoa_pastel_vi_n_xanh_m_nh.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_hoa_pastel_vi_n_xanh_m_nh.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_hoa_pastel_vi_n_xanh_m_nh.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_hoa_pastel_vi_n_xanh_m_nh.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "khung_nh_vu_ng_m_ng_nh_n_b_c", "id": "khung_nh_vu_ng_m_ng_nh_n_b_c", "name": "Nhện Đỏ", "prompt": "khung_nh_vu_ng_m_ng_nh_n_b_c", "productUrl": null, "colors": ["#b3001e", "#b3001e"], "captureButtonColors": ["#b3001e", "#b3001e"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "khung_kh_ng_gian_xanh_pastel", "id": "khung_kh_ng_gian_xanh_pastel", "name": "Không Gian Xanh", "prompt": "khung_kh_ng_gian_xanh_pastel", "productUrl": null, "colors": ["#65d9fc", "#65d9fc"], "captureButtonColors": ["#65d9fc", "#65d9fc"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_kh_ng_gian_xanh_pastel.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_kh_ng_gian_xanh_pastel.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_kh_ng_gian_xanh_pastel.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_kh_ng_gian_xanh_pastel.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_kh_ng_gian_xanh_pastel.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_kh_ng_gian_xanh_pastel.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_kh_ng_gian_xanh_pastel.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "khung_vu_ng_ng_i_sao_h_ng_pastel", "id": "khung_vu_ng_ng_i_sao_h_ng_pastel", "name": "Ngôi Sao Hồng", "prompt": "khung_vu_ng_ng_i_sao_h_ng_pastel", "productUrl": null, "colors": ["#FF758C", "#FF7EB3"], "captureButtonColors": ["#FF758C", "#FF7EB3"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_vu_ng_ng_i_sao_h_ng_pastel.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_vu_ng_ng_i_sao_h_ng_pastel.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_vu_ng_ng_i_sao_h_ng_pastel.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_vu_ng_ng_i_sao_h_ng_pastel.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_vu_ng_ng_i_sao_h_ng_pastel.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_vu_ng_ng_i_sao_h_ng_pastel.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_vu_ng_ng_i_sao_h_ng_pastel.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "khung_nh_pastel_vi_n_s_h_i_c_u", "id": "khung_nh_pastel_vi_n_s_h_i_c_u", "name": "Sò Hải Cẩu Pastel", "prompt": "khung_nh_pastel_vi_n_s_h_i_c_u", "productUrl": null, "colors": ["#cfedfc", "#cfedfc"], "captureButtonColors": ["#cfedfc", "#cfedfc"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_pastel_vi_n_s_h_i_c_u.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_pastel_vi_n_s_h_i_c_u.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_pastel_vi_n_s_h_i_c_u.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_pastel_vi_n_s_h_i_c_u.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_pastel_vi_n_s_h_i_c_u.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_pastel_vi_n_s_h_i_c_u.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_pastel_vi_n_s_h_i_c_u.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "khung_nh_shin_chan_vi_n_m_nh", "id": "khung_nh_shin_chan_vi_n_m_nh", "name": "Shin-Chan Viền Mảnh", "prompt": "khung_nh_shin_chan_vi_n_m_nh", "productUrl": null, "colors": ["#f00008", "#faed32"], "captureButtonColors": ["#f00008", "#faed32"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_shin_chan_vi_n_m_nh.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_shin_chan_vi_n_m_nh.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_shin_chan_vi_n_m_nh.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_shin_chan_vi_n_m_nh.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_shin_chan_vi_n_m_nh.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_shin_chan_vi_n_m_nh.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_nh_shin_chan_vi_n_m_nh.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "khung_anh_o_kitty_v_sao", "id": "khung_anh_o_kitty_v_sao", "name": "Hello Kitty & Sao", "prompt": "khung_anh_o_kitty_v_sao", "productUrl": null, "colors": ["#780c23", "#a94770"], "captureButtonColors": ["#780c23", "#a94770"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_anh_o_kitty_v_sao.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_anh_o_kitty_v_sao.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_anh_o_kitty_v_sao.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_anh_o_kitty_v_sao.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_anh_o_kitty_v_sao.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_anh_o_kitty_v_sao.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_anh_o_kitty_v_sao.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "khung_xanh_v_tay_sao_v_ng", "id": "khung_xanh_v_tay_sao_v_ng", "name": "Sao Vàng Xanh", "prompt": "khung_xanh_v_tay_sao_v_ng", "productUrl": null, "colors": ["#6fb1d3", "#cdd64c"], "captureButtonColors": ["#6fb1d3", "#cdd64c"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_xanh_v_tay_sao_v_ng.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_xanh_v_tay_sao_v_ng.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_xanh_v_tay_sao_v_ng.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_xanh_v_tay_sao_v_ng.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_xanh_v_tay_sao_v_ng.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_xanh_v_tay_sao_v_ng.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/khung_xanh_v_tay_sao_v_ng.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "sinh_nh_t_hello_kitty_ho_i_c", "id": "sinh_nh_t_hello_kitty_ho_i_c", "name": "Sinh Nhật Hello Kitty", "prompt": "sinh_nh_t_hello_kitty_ho_i_c", "productUrl": null, "colors": ["#FF758C", "#FF7EB3"], "captureButtonColors": ["#FF758C", "#FF7EB3"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sinh_nh_t_hello_kitty_ho_i_c.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sinh_nh_t_hello_kitty_ho_i_c.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sinh_nh_t_hello_kitty_ho_i_c.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sinh_nh_t_hello_kitty_ho_i_c.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sinh_nh_t_hello_kitty_ho_i_c.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sinh_nh_t_hello_kitty_ho_i_c.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/sinh_nh_t_hello_kitty_ho_i_c.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "pb_single_y2k_silver_holo", "id": "pb_single_y2k_silver_holo", "name": "Khung Y2K Silver Holo", "prompt": "pb_single_y2k_silver_holo", "productUrl": null, "colors": ["#C4B5FD", "#E0E7FF"], "captureButtonColors": ["#C4B5FD", "#E0E7FF"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_y2k_silver_holo.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_y2k_silver_holo.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_y2k_silver_holo.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_y2k_silver_holo.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_y2k_silver_holo.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_y2k_silver_holo.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_y2k_silver_holo.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "pb_single_denim_ripped", "id": "pb_single_denim_ripped", "name": "Khung Denim Cá Tính", "prompt": "pb_single_denim_ripped", "productUrl": null, "colors": ["#38BDF8", "#93C5FD"], "captureButtonColors": ["#38BDF8", "#93C5FD"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_denim_ripped.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_denim_ripped.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_denim_ripped.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_denim_ripped.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_denim_ripped.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_denim_ripped.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_denim_ripped.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "pb_single_film_nostalgia", "id": "pb_single_film_nostalgia", "name": "Khung Film Hoài Cổ", "prompt": "pb_single_film_nostalgia", "productUrl": null, "colors": ["#D6A36A", "#FDE68A"], "captureButtonColors": ["#D6A36A", "#FDE68A"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_film_nostalgia.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_film_nostalgia.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_film_nostalgia.png", "sfSymbol": "heart.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_film_nostalgia.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_film_nostalgia.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_film_nostalgia.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/pb_single_film_nostalgia.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },

    // Camera (bổ sung — group_camera / group_camera_two trước đây trỏ tới filter không tồn tại)
    { "uid": "c_back_dslr", "id": "c_back_dslr", "name": "DSLR Vintage", "prompt": "c_back_dslr", "productUrl": null, "colors": ["#222222", "#555555"], "captureButtonColors": ["#222222", "#555555"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_back_dslr.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_back_dslr.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_back_dslr.png", "sfSymbol": "camera.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_back_dslr.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_back_dslr.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_back_dslr.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_back_dslr.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "c_red_vintage", "id": "c_red_vintage", "name": "Máy Ảnh Đỏ", "prompt": "c_red_vintage", "productUrl": null, "colors": ["#B71C1C", "#E53935"], "captureButtonColors": ["#B71C1C", "#E53935"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_red_vintage.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_red_vintage.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_red_vintage.png", "sfSymbol": "camera.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_red_vintage.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_red_vintage.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_red_vintage.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_red_vintage.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "c_olive_vintage", "id": "c_olive_vintage", "name": "Máy Ảnh Olive", "prompt": "c_olive_vintage", "productUrl": null, "colors": ["#556B2F", "#8A9A5B"], "captureButtonColors": ["#556B2F", "#8A9A5B"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_olive_vintage.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_olive_vintage.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_olive_vintage.png", "sfSymbol": "camera.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_olive_vintage.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_olive_vintage.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_olive_vintage.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_olive_vintage.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "c_orange_retro", "id": "c_orange_retro", "name": "Máy Ảnh Cam", "prompt": "c_orange_retro", "productUrl": null, "colors": ["#E65100", "#FF9800"], "captureButtonColors": ["#E65100", "#FF9800"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_orange_retro.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_orange_retro.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_orange_retro.png", "sfSymbol": "camera.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_orange_retro.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_orange_retro.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_orange_retro.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_orange_retro.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "c_classic_silver", "id": "c_classic_silver", "name": "Máy Ảnh Bạc", "prompt": "c_classic_silver", "productUrl": null, "colors": ["#9E9E9E", "#E0E0E0"], "captureButtonColors": ["#9E9E9E", "#E0E0E0"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_classic_silver.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_classic_silver.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_classic_silver.png", "sfSymbol": "camera.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_classic_silver.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_classic_silver.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_classic_silver.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_classic_silver.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "c_white", "id": "c_white", "name": "Máy Ảnh Trắng", "prompt": "c_white", "productUrl": null, "colors": ["#FAFAFA", "#EEEEEE"], "captureButtonColors": ["#FAFAFA", "#EEEEEE"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_white.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_white.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_white.png", "sfSymbol": "camera.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_white.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_white.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_white.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_white.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "c_1", "id": "c_1", "name": "Cute Camera 1", "prompt": "c_1", "productUrl": null, "colors": ["#F8BBD0", "#F48FB1"], "captureButtonColors": ["#F8BBD0", "#F48FB1"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_1.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_1.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_1.png", "sfSymbol": "camera.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_1.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_1.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_1.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_1.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "c_2", "id": "c_2", "name": "Cute Camera 2", "prompt": "c_2", "productUrl": null, "colors": ["#B2EBF2", "#80DEEA"], "captureButtonColors": ["#B2EBF2", "#80DEEA"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_2.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_2.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_2.png", "sfSymbol": "camera.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_2.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_2.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_2.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_2.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "c_3", "id": "c_3", "name": "Cute Camera 3", "prompt": "c_3", "productUrl": null, "colors": ["#FFF59D", "#FFEE58"], "captureButtonColors": ["#FFF59D", "#FFEE58"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_3.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_3.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_3.png", "sfSymbol": "camera.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_3.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_3.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_3.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_3.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" },
    { "uid": "c_4", "id": "c_4", "name": "Cute Camera 4", "prompt": "c_4", "productUrl": null, "colors": ["#D1C4E9", "#B39DDB"], "captureButtonColors": ["#D1C4E9", "#B39DDB"], "icon": { "url": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_4.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_4.png", "remoteImage": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_4.png", "sfSymbol": "camera.fill", "emoji": "" }, "textColor": "#FFFFFF", "style": "cutout", "overlay": true, "overlayImageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_4.png", "overlayImageURL": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_4.png", "imageUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_4.png", "iconUrl": "https://locket-vip.mhiep20077.workers.dev/assets/frames/c_4.png", "referenceImages": [], "requires_gold": false, "requiresGold": false, "is_gold": false, "isGold": false, "unlocked": true, "is_unlocked": true, "isUnlocked": true, "free": true, "allowsTryFilter": true, "allows_try_filter": true, "tryButtonEnabled": true, "try_button_enabled": true, "type": "normal", "filterType": "cutout" }
];

// ============================================================
// 6. GROUPS — AI 3D → PHOTOBOOTH → FRAMES → MẶC ĐỊNH
// ============================================================
var customFilterGroups = [
    { "id": "group_tarots", "title": { "en": "TAROT" }, "filter_ids": ["tr_the_magician","tr_all_seing_eye","tr_the_hermit","tr_the_moon","tr_the_sun","tr_wheel_of_forutne","tr_the_high_hierophant","tr_the_high_priestess","tr_temperance"], "requires_gold": false, "unlocked": true, "free": true },
    { "id": "group_photobooth", "title": { "en": "KHUNG & PHOTOBOOTH" }, "filter_ids": ["frame_berry_days","frame_happy_snap","frame_sky_diary","photobooth_4cut","photobooth_cute","pb_holo_4cut","pb_scrapbook_ripped_4cut","pb_ripped_paper_4cut","pb_denim_ripped_2x2"], "requires_gold": false, "unlocked": true, "free": true },
    { "id": "group_frames", "title": { "en": "KHUNG VIỀN" }, "filter_ids": ["frame_classic_pb","sticker_b_nh_lu_n_minh_tu","cmt_locket","khung_hello_kitty_pastel_ng_t_ng_o","khung_hello_kitty_h_ng_pastel","khung_nh_n_pastel_vi_n_ren","khung_nh_hoa_pastel_vi_n_xanh_m_nh","khung_nh_vu_ng_m_ng_nh_n_b_c","khung_kh_ng_gian_xanh_pastel","khung_vu_ng_ng_i_sao_h_ng_pastel","khung_nh_pastel_vi_n_s_h_i_c_u","khung_nh_shin_chan_vi_n_m_nh","khung_anh_o_kitty_v_sao","khung_xanh_v_tay_sao_v_ng","sinh_nh_t_hello_kitty_ho_i_c","pb_single_y2k_silver_holo","pb_single_denim_ripped","pb_single_film_nostalgia"], "requires_gold": false, "unlocked": true, "free": true },
    { "id": "group_camera", "title": { "en": "RETRO CAMERA" }, "filter_ids": ["c_back_dslr","c_red_vintage","c_olive_vintage","c_orange_retro","c_classic_silver"], "requires_gold": false, "unlocked": true, "free": true },
    { "id": "group_camera_two", "title": { "en": "CUTE CAMERA" }, "filter_ids": ["c_white","c_1","c_2","c_3","c_4"], "requires_gold": false, "unlocked": true, "free": true },
    { "id": "group_goofy", "title": { "en": "GOOFY" }, "filter_ids": ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"], "requires_gold": false, "unlocked": true, "free": true },
    { "id": "group_looks", "title": { "en": "LOOKS" }, "filter_ids": ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"], "requires_gold": false, "unlocked": true, "free": true },
    { "id": "group_celebrate", "title": { "en": "CELEBRATE" }, "filter_ids": ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"], "requires_gold": false, "unlocked": true, "free": true },
    { "id": "group_cute", "title": { "en": "CUTE" }, "filter_ids": ["cutesy", "sticker_face", "flower_crown", "love_bug"], "requires_gold": false, "unlocked": true, "free": true },
    { "id": "group_costumes", "title": { "en": "COSTUMES" }, "filter_ids": ["wedding", "cowboy_cowgirl", "giraffe", "clown"], "requires_gold": false, "unlocked": true, "free": true },
    { "id": "group_holidays", "title": { "en": "HOLIDAYS" }, "filter_ids": ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"], "requires_gold": false, "unlocked": true, "free": true }
];

var customPickerFilters = [
    "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows",
    "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns",
    "tatted", "mohawk", "braces", "slimed", "princess",
    "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
    "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe",
    "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
    "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty",
    "tr_the_magician","tr_all_seing_eye","tr_the_hermit","tr_the_moon","tr_the_sun","tr_wheel_of_forutne","tr_the_high_hierophant","tr_the_high_priestess","tr_temperance",
    "frame_berry_days","frame_happy_snap","frame_sky_diary","photobooth_4cut","photobooth_cute","pb_holo_4cut","pb_scrapbook_ripped_4cut","pb_ripped_paper_4cut","pb_denim_ripped_2x2","frame_classic_pb","sticker_b_nh_lu_n_minh_tu","cmt_locket","khung_hello_kitty_pastel_ng_t_ng_o","khung_hello_kitty_h_ng_pastel","khung_nh_n_pastel_vi_n_ren","khung_nh_hoa_pastel_vi_n_xanh_m_nh","khung_nh_vu_ng_m_ng_nh_n_b_c","khung_kh_ng_gian_xanh_pastel","khung_vu_ng_ng_i_sao_h_ng_pastel","khung_nh_pastel_vi_n_s_h_i_c_u","khung_nh_shin_chan_vi_n_m_nh","khung_anh_o_kitty_v_sao","khung_xanh_v_tay_sao_v_ng","sinh_nh_t_hello_kitty_ho_i_c","pb_single_y2k_silver_holo","pb_single_denim_ripped","pb_single_film_nostalgia",
    "c_back_dslr","c_red_vintage","c_olive_vintage","c_orange_retro","c_classic_silver",
    "c_white","c_1","c_2","c_3","c_4"
];

// CẤU TRÚC un.js GỐC
var locketCameraFilterConfig = {
    allows_custom_filters: true,
    show_filter_button: true,
    sheet_enabled: true,
    open_sheet_immediately: true,
    sheet_filters: customFilterGroups,
    picker_filters: customPickerFilters,
    remote_filters: customPhotoboothFilters,
    filters: customPhotoboothFilters
};

var locketCelebrityFilterConfig = {
    celebrityUid: "locket_admin_custom",
    cameraFilterConfig: locketCameraFilterConfig
};

Object.assign(obj.entries, {
    camera_filter_config: JSON.stringify(locketCameraFilterConfig),
    celebrity_filter_config: JSON.stringify(locketCelebrityFilterConfig)
});

// ============================================================
// 7. HÀM VẢ CỰC MẠNH
// ============================================================
function hamVaForceOverride(entries) {
    if (!entries || typeof entries !== "object") return;

    var durationKeys = [
        "max_video_duration", "video_max_duration", "camera_roll_max_duration",
        "camera_roll_video_max_duration", "camera_roll_duration",
        "video_trim_max_duration", "trim_max_duration", "gold_max_duration", "goldMaxDuration"
    ];
    for (var i = 0; i < durationKeys.length; i++) {
        entries[durationKeys[i]] = "45.0";
    }

    entries["is_gold"] = "true";
    entries["has_gold"] = "true";
    entries["is_gold_user"] = "true";
    entries["user_is_gold"] = "true";
    entries["gold_user"] = "true";
    entries["gold_active"] = "true";
    entries["purchases_enabled"] = "true";
    entries["purchases_entitlement"] = "Gold";
    entries["paywall_local_trial_unlocked"] = "true";
    entries["test_flight_purchase_override_enabled"] = "true";
    entries["gold_subscription_override"] = "true";
    entries["paywall_config"] = JSON.stringify(paywallConfigPayload);
    entries["all_filters_free"] = "true";
    entries["unlocked_filters"] = "true";
    entries["free_filters_enabled"] = "true";
    entries["filter_selection_enabled"] = "true";
    entries["require_gold_for_filters"] = "false";
    entries["requires_gold_for_filters"] = "false";
    entries["camera_filter_gold_only"] = "false";
    entries["camera_filters_gold_only"] = "false";
    entries["filter_gold_only"] = "false";
    entries["filters_gold_only"] = "false";
    entries["ai_filter_gold_only"] = "false";
    entries["ai_filters_gold_only"] = "false";
    entries["filter_paywall_enabled"] = "false";
    entries["camera_filter_paywall_enabled"] = "false";
    entries["filter_upsell_enabled"] = "false";

    entries["cache_ttl_seconds"] = "0";
    entries["client_cache_ttl_sec"] = "0";

    // Đảm bảo config filter không bị ghi đè
    entries["camera_filter_config"] = JSON.stringify(locketCameraFilterConfig);
    entries["celebrity_filter_config"] = JSON.stringify(locketCelebrityFilterConfig);
}
hamVaForceOverride(obj.entries);

$done({
    body: JSON.stringify(obj)
});
