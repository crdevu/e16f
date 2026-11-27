// ============================================================
// Locket Remote Config Rewrite — FULL UNLOCK
// ============================================================

var obj = {};
try { obj = JSON.parse($response.body); } catch (e) { obj = {}; }
if (!obj || typeof obj !== "object") obj = {};

obj.state = "UPDATE";
obj.templateVersion = String(Date.now());
obj.Attention = "Congratulations! Please do not use them for commercial purposes!";
obj.entries = obj.entries || {};

// ============================================================
// CONSTANTS
// ============================================================
var VIDEO_DURATION = 45.0;
var DUR_STR = VIDEO_DURATION.toString();
var MAX_BYTES = 104857600;

// ============================================================
// 1. FEATURE GATES
// ============================================================
obj.entries.feature_gates = JSON.stringify({
    app_icon_picker: "enabled", camera_roll: "enabled",
    camera_roll_video: "enabled", camera_roll_video_30s: "enabled",
    camera_roll_video_upload: "enabled", camera_roll_video_upload_30s: "enabled",
    camera_roll_longer_video: "enabled", camera_roll_longer_video_30s: "enabled",
    camera_theme: "enabled", cameraTheme: "enabled",
    locket_views: "enabled", long_captions: "enabled",
    longer_video: "enabled", longer_video_30s: "enabled",
    extended_video_30s: "enabled",
    photo_library_video: "enabled", photo_library_video_30s: "enabled",
    gallery_video: "enabled", gallery_video_30s: "enabled",
    can_upload_30s_video: "enabled", can_record_30s_video: "enabled",
    allow_longer_video_upload: "enabled", longer_video_upload: "enabled",
    unlimited_friends: "enabled", priority_support: "enabled",
    profile_badge: "enabled", profileBadge: "enabled",
    gold_since_badge: "enabled", goldSinceBadge: "enabled",
    gold_badge_profile_menu: "enabled", gold_badge: "enabled", goldBadge: "enabled",
    gold_since: "enabled", gold_member_since: "enabled", show_gold_since: "enabled",
    profile_gold_badge: "enabled", profile_gold_card: "enabled",
    gold_membership_card: "enabled", gold_card: "enabled",
    gold_camera_themes: "enabled",
    remove_ads: "enabled",
    video: "enabled", video_15s: "enabled", video_30s: "enabled",
    video_40s: "enabled", video_60s: "enabled",
    video_upload: "enabled", video_upload_30s: "enabled",
    custom_widget_frames: "enabled",
    streak_recovery: "enabled", streakRecovery: "enabled",
    streaks: "enabled", streak: "enabled",
    streak_visualizations: "enabled", streak_badge: "enabled",
    groups: "enabled", private_mode: "enabled",
    viewer_mode: "enabled", close_friends: "enabled",
    camera_filter_sheet: "enabled", cameraFilterSheet: "enabled",
    camera_filters: "enabled", camera_filter: "enabled",
    filter: "enabled", filters: "enabled",
    photo_filters: "enabled", ai_filters: "enabled",
    holiday_effects: "enabled", holiday_filters: "enabled", holiday_filter: "enabled",
    ar_filters: "enabled", face_filters: "enabled",
    camera_styles: "enabled", cameraStyles: "enabled",
    camera_viewfinder_controls: "enabled", cameraViewfinderControls: "enabled",
    profile_cover: "enabled", profile_cover_photo: "enabled",
    profile_customization: "enabled", profile_badge_visible: "enabled"
});

obj.entries.feature_gates_override = JSON.stringify({
    cameraFilterSheet: true, camera_filter_sheet: true,
    cameraStyles: true, camera_styles: true,
    cameraViewfinderControls: true, camera_viewfinder_controls: true,
    cameraTheme: true, camera_theme: true
});

obj.entries.upsell_features = JSON.stringify({
    app_icon_picker: false, camera_roll: false, camera_theme: false,
    locket_views: false, remove_ads: false, custom_widget_frames: false,
    filter: false, filters: false, camera_filter: false, camera_filters: false,
    holiday_filter: false, holiday_filters: false, holiday_effects: false,
    ai_filter: false, ai_filters: false
});

obj.entries.paywall_presentation_config = JSON.stringify({
    uid: "paywall_testflight", onboarding: false, after_sent_moment: false,
    after_moment: false, after_capture: false, on_foreground: false,
    holiday_effects: false, camera_filters: false, camera_filter: false,
    filters: false, filter: false, ai_filter: false, ai_filters: false,
    filtered_image: false, filtered_images: false, generate_filtered_image: false,
    interval: 2592000, profile_banner: true
});

obj.entries.feature_discovery_popup_config = JSON.stringify({
    tag: "LOCKET GOLD ALL FEATURES", tag_gradient: true, tag_style: "gold_gradient",
    title: "Welcome To Locket Gold",
    feature_set: [{ title: "", body: "Wishing you a pleasant experience", imageURL: "https://cdn.jsdelivr.net/gh/crdevu/e16f/assets/widget/zzonnya.png" }],
    primary_button_title: "Xong", campaign: "locket_gold_welcome_v3",
    start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59", use_local_time_zone: true
});

// ============================================================
// 2. GOLD / REGION / ADS / FILTER FLAGS
// ============================================================
Object.assign(obj.entries, {
    // Gold
    is_gold: "true", has_gold: "true", is_gold_user: "true",
    user_is_gold: "true", gold_user: "true", gold_active: "true",

    // Region
    country_code: "US", region_code: "US", is_us_user: "true",

    // Profile & badge
    profile_badge_visible: "true",
    android_subscribe_gold_button_enabled: "false",
    lunar_new_year_app_icon_enabled: "true",
    settings_instagram_url: "https://www.instagram.com/",
    settings_tiktok_url: "https://tiktok.com/",

    // Ads off
    history_ads_mode: "off", history_ads_prefetch_count: "0",
    history_ads_prefetch_immediate: "false", history_ads_prefetch_reroute: "false",
    history_ads_dynamic_insertion: "false",
    history_ads_refresh_prefetch_on_foreground: "false",
    history_ads_floor_price: "0", history_ads_floor_price_att: "0",
    history_ad_log_displayed_on_background: "false", history_ads_debug_menu: "false",

    // Sentry off
    sentry_sample_rate: "0", sentry_network_tracing: "false",
    sentry_performance_tracking: "false",
    sentry_trace_sample_rate: "0", sentry_profiles_sample_rate: "0",

    // Filter unlocks
    all_filters_free: "true", unlocked_filters: "true",
    free_filters_enabled: "true", filter_selection_enabled: "true",
    camera_filter_sheet_selection_enabled: "true",
    sheet_filters_selectable: "true", dismiss_filter_sheet_on_select: "true",
    camera_filter_max_count: "50", max_camera_filters: "50",

    // Filter gates — gold not required
    camera_filters_enabled: "true", camera_filter_enabled: "true",
    holiday_filters_enabled: "true", ai_filters_enabled: "true",
    camera_filter_button: "true", camera_filter_button_enabled: "true",
    camera_filter_sheet: "true", camera_filter_sheet_enabled: "true",
    enable_camera_filter: "true", filter_picker_enabled: "true",

    camera_filter_gold_only: "false", camera_filters_gold_only: "false",
    holiday_filters_gold_only: "false", filter_gold_only: "false",
    filters_gold_only: "false", ai_filter_gold_only: "false",
    ai_filters_gold_only: "false", filter_paywall_enabled: "false",
    camera_filter_paywall_enabled: "false", filter_upsell_enabled: "false",
    require_gold_for_filters: "false", require_gold_for_filter: "false",
    requires_gold_for_filters: "false", requires_gold_for_filter: "false",
    requires_gold_for_camera_filters: "false",
    camera_filter_requires_gold: "false", camera_filters_require_gold: "false",
    ai_filter_requires_gold: "false", ai_filters_require_gold: "false",
    filter_requires_gold: "false", filters_require_gold: "false",
    filtered_image_requires_gold: "false", filtered_images_require_gold: "false",
    filtered_image_gold_only: "false", filtered_images_gold_only: "false",

    // Camera styles
    camera_styles_enabled: "true", camera_styles_premium: "false",
    camera_style_entry: "true", camera_style_library: "true",
    camera_style_gold_badge: "true", camera_style_tooltip_shown: "true",
    camera_style_tooltip_tapped: "true", camera_style_upsell: "false",
    gold_camera_themes: "true", gold_camera_themes_profile_menu: "true",
    camera_theme_upsell: "false",
    camera_style_cybershot_w80: "true", camera_style_digicam: "true",
    camera_style_ricoh_gr_iii: "true", camera_style_vhs: "true",
    camera_style_quicksnap: "true", camera_style_funsaver: "true",
    camera_style_leica_m6: "true", camera_style_polaroid_600: "true",
    camera_style_instax_mini_12: "true", camera_style_super_8: "true",
    camera_style_lofi: "true", camera_style_fisheye: "true",
    camera_style_laptop: "true",

    // Cache disabled
    cache_ttl_seconds: "0", client_cache_ttl_sec: "0"
});

// ============================================================
// 3. CAMERA & VIDEO
// ============================================================
obj.entries.camera = JSON.stringify({
    gold_max_duration: VIDEO_DURATION, goldMaxDuration: VIDEO_DURATION,
    max_duration: VIDEO_DURATION, maxDuration: VIDEO_DURATION,
    ultra_wide: true, ultraWide: true,
    volume_button: true, volumeButton: true,
    flash_button: true, telephoto: true, srgb: true, lanczos: true,
    quality_mbps: 0.6, qualityMbps: 0.6
});

obj.entries.camera_roll = JSON.stringify({
    gold_max_duration: VIDEO_DURATION, goldMaxDuration: VIDEO_DURATION,
    video_max_duration: VIDEO_DURATION, videoMaxDuration: VIDEO_DURATION,
    max_duration: VIDEO_DURATION, maxDuration: VIDEO_DURATION,
    trim_max_duration: VIDEO_DURATION, trimMaxDuration: VIDEO_DURATION,
    camera_roll_max_duration: VIDEO_DURATION,
    camera_roll_video_max_duration: VIDEO_DURATION,
    max_file_size: MAX_BYTES, max_upload_bytes: MAX_BYTES,
    max_size_bytes: MAX_BYTES,
    quality_mbps: 0.6, qualityMbps: 0.6,
    flash_button: true
});

Object.assign(obj.entries, {
    // Video duration flat keys
    max_video_duration: DUR_STR, video_max_duration: DUR_STR,
    camera_roll_max_duration: DUR_STR, camera_roll_video_max_duration: DUR_STR,
    camera_roll_duration: DUR_STR, video_trim_max_duration: DUR_STR,
    trim_max_duration: DUR_STR, gold_max_duration: DUR_STR, goldMaxDuration: DUR_STR,

    // File size
    max_file_size: MAX_BYTES.toString(), max_upload_bytes: MAX_BYTES.toString(),

    // Camera roll
    camera_roll_preview_enabled: "true", camera_roll_video_enabled: "true",
    camera_roll_video_upload_enabled: "true",
    internal_camera_roll_video_upload_enabled: "true",
    longer_camera_roll_videos_enabled: "true",
    camera_roll_upload_enabled: "true",
    camera_roll_video_trimming_enabled: "true",

    // Audio / sound / mic
    video_sound_enabled: "true", videoSoundEnabled: "true",
    microphone_enabled: "true", microphoneEnabled: "true",
    camera_microphone_enabled: "true", cameraMicrophoneEnabled: "true",
    sound_enabled: "true", soundEnabled: "true",
    audio_enabled: "true", audioEnabled: "true",
    camera_roll_video_sound_enabled: "true", cameraRollVideoSoundEnabled: "true",
    audio_session_deactivation_enabled: "true",

    // Video quality
    video_quality_mbps: "0.6",

    // Upload
    zoom_enabled: "true", upload_main: "false",
    upload_main_image_quality: "1.0", upload_main_image_size: "1440",
    upload_thumbnail_image_quality: "1.0", upload_thumbnail_image_size: "1020"
});

// ============================================================
// 4. FRIENDS
// ============================================================
Object.assign(obj.entries, {
    max_friends_count: "999999999", friend_limit_mode: "0",
    soft_friend_limit_threshold_count: "999999999",
    show_friend_limit_on_cam: "false",
    signup_max_friends_count: "999999999",
    celebrity_inbox_limit: "999999999",
    celebrity_inbox_enabled: "true",
    celebrity_vip_qr_redemption_enabled: "true",
    friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
    friends_sheet_locket_count_config: JSON.stringify({ items: [
        { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" },
        { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" },
        { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "🌟🫶🌟" },
        { threshold: 2000, emoji: "✨💟✨" }, { threshold: 5000, emoji: "⚡️😵‍💫⚡" },
        { threshold: 10000, emoji: "✨⚡️😱⚡✨" }
    ]}),
    friend_locket_count_config: JSON.stringify({ items: [
        { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" },
        { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" },
        { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "✨💗✨" },
        { threshold: 2000, emoji: "✨️⭐️✨" }, { threshold: 5000, emoji: "✨💎✨" },
        { threshold: 10000, emoji: "✨🔐💛✨" }
    ]}),
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

// ============================================================
// 5. STREAKS
// ============================================================
try {
    var streak = JSON.parse(obj.entries.streak_config || "{}");
    streak.minimum_recovery_count = 0;
    streak.minimum_display_count = 0;
    obj.entries.streak_config = JSON.stringify(streak);
} catch (e) {}

// ============================================================
// 6. MOMENTS / CHAT / GROUPS
// ============================================================
Object.assign(obj.entries, {
    moment_views_enabled: "true", moment_views_v2: "true",
    record_moment_views: "true", notify_moment_views: "true",
    get_moment_views_as_cloud_function: "true",
    moment_reactions_v2: "true", chat_reactions_enabled: "true",
    conversation_reactions: "true", typing_indicators_enabled: "true",
    unsend_message_enabled: "true", reply_prototype_enabled: "true",
    messages_integration: "true", conversations_enabled: "true",
    fetch_moments_in_conversation: "true", hide_chat_button: "false",
    groups_enabled: "true", group_contact_invites_enabled: "true",
    groups_onboarding_accept_invite_preview_enabled: "true",
    chat_hyperlink_enabled_mode: "always_enabled",
    send_to_self_only_mode: "always_enabled",
    time_travel_rewind_v2_enabled: "true",
    conversation_drafts_enabled: "true",
    calendar_delete_moment_enabled: "true", calendar_rewind_enabled: "false",
    locket_yearbook_story_sharing_encouraged: "true",
    rollcall_enabled: "true", rollcall_comment_actions: "true",
    rollcall_profile_button: "true",
    rollcall_prompt_export_after_share: "true",
    rollcall_confirm_skip_tagging: "false",
    rollcall_tap_to_tag_enabled: "false"
});

// ============================================================
// 7. WIDGET / NOTIFICATIONS / JOURNAL / QR
// ============================================================
Object.assign(obj.entries, {
    widget_frame_event_max_images: "5",
    android_widget_frame_event_enabled: "true",
    widget_badge_enabled: "true", widget_badge_v2: "true",
    widget_stale_state_enabled: "false",
    widget_last_sent_indicator: "false",
    widget_sync_token_reload_mode: "clearTokenNever",
    widget_frame_event: JSON.stringify({
        uid: "midautumn_2026",
        url: "https://cdn.jsdelivr.net/gh/crdevu/e16f/assets/widget/wg_ig.png",
        use_local_time_zone: true, placement: "below",
        start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59"
    }),
    live_activity_onboarding: "true",
    live_activity_onboarding_variant: "friending",
    register_live_activity_push_to_start_token: "true",
    live_activity_remove_stale_start_token: "true",
    notification_preferences_live_activities: "true",
    notification_preferences: "true",
    notification_reply_body_visible: "true",
    prompt_notification_permissions_after_friending: "true",
    activity_bar_enabled: "true", journal_activity_bar_enabled: "true",
    journal_settings: JSON.stringify({
        debug_menu_enabled: false, focus_animation: false,
        compact_header: true, friends_button: false,
        reverse_scroll_direction: false, streak_visualization: true,
        streak_visualization_style: "gradient",
        streak_header_minimum_count: 0, streak_visualization_minimum_count: 2,
        overlay_indicators: { location: false, music: true, static_content: true, weather: true }
    }),
    qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
    custom_profile_pics: "true", profile_menu_v2_enabled: "true"
});

// ============================================================
// 8. CACHE / STORAGE / MISC
// ============================================================
Object.assign(obj.entries, {
    storage_bucket: "gs://locket-img",
    storage_bucket_video: "gs://locket-video",
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
// 9. OVERLAYS & CAPTIONS
// ============================================================
Object.assign(obj.entries, {
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
    captions_enabled: "true", music_caption_enabled: "true",
    music_caption_song_preview_enabled: "true",
    link_caption_link_enabled: "true",
    overlay_dynamic_captions: JSON.stringify([
        "standard","poll","color_palette","review","music","location",
        "weather","time","streak","star_sign","party_time","locket_count",
        "good_morning","goodnight","ootd","miss_you","custom",
        "halloween_2026","autumn_2026","christmas_eve_2026","christmas_day_2026",
        "new_years_eve_2027","new_years_day_2027","new_years_day_2027_alternate",
        "no_memory","quote","breaking_news"
    ]),
    overlay_items: JSON.stringify([
        { section: "🎨 General", items: [
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
        ]},
        { section: "🎨 Holiday Caption", items: [
            { overlay_id: "caption:halloween_2026", source: "remote", caption: { background: { colors: ["#150804","#C8540D"] }, icon: { data: "🎃", type: "emoji" }, max_lines: 1, text: "Halloween", localized_text: { en: "Halloween", vn: "Halloween" }, text_color: "#FFB182", type: "static_content" } },
            { overlay_id: "caption:autumn_2026", source: "remote", caption: { background: { colors: ["#FFE0A0","#F6A53A"] }, icon: { data: "🍂", type: "emoji" }, max_lines: 1, text: "Xin chào Mùa Thu", localized_text: { en: "Hello Autumn", vn: "Xin chào Mùa Thu" }, text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:christmas_eve_2026", source: "remote", caption: { background: { colors: ["#2FA85F","#176B3A"] }, icon: { data: "🕯️", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Merry Christmas Eve", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:christmas_day_2026", source: "remote", caption: { background: { colors: ["#E53935","#A81818"] }, icon: { data: "🎄", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Merry Christmas", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:new_years_eve_2027", source: "remote", caption: { background: { colors: ["#FFC64B","#FFEDBF"] }, icon: { data: "🥂", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Hello 2027!", vn: "Xin chào 2027!" }, text_color: "#643F00", type: "static_content" } },
            { overlay_id: "caption:new_years_day_2027", source: "remote", caption: { background: { colors: ["#3B00EC","#823FFF"] }, icon: { data: "💫", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Hello 2027!", vn: "Xin chào 2027!" }, text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:new_years_day_2027_alternate", source: "remote", caption: { background: { colors: ["#FF0062","#FF783F"] }, max_lines: 1, text: "2027", localized_text: { en: "2027", vn: "2027" }, text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:no_memory", source: "remote", caption: { background: { image: { type: "image", data: "https://public.locketcamera.com/locket-public/overlays/forgotten_island/forgotten_island_bg.png", source: "url" }, colors: ["#1A1A2E","#16213E"] }, max_lines: 1, text: "NO MEMORY LEFT BEHIND", text_color: "#FFFFFFE6", type: "static_content" } }
        ]},
        { section: "🎨 Decorative by Locket", items: [
            { overlay_id: "caption:toi_nho_em", source: "remote", caption: { background: { colors: ["#FFFFFF","#6D9EEB"] }, max_lines: 1, text: "보고 싶어 🥺", localized_text: { en: "I miss you 🥺", vn: "Tôi nhớ em 🥺" }, text_color: "#000000E6", type: "static_content" } },
            { overlay_id: "caption:party_time", source: "remote", caption: { background: { colors: ["#5EFFF5","#FCFF57"] }, icon: { data: "🪩", type: "emoji" }, max_lines: 1, text: "Party Time!", localized_text: { en: "Party Time!", vn: "Party Time!" }, text_color: "#000000E6", type: "static_content" } },
            { overlay_id: "caption:good_morning", source: "remote", daily_start_hour: 5, daily_end_hour: 10, caption: { background: { colors: ["#EF7402","#EABF0F"] }, icon: { data: "☀️", type: "emoji" }, max_lines: 1, text: "Good morning", localized_text: { en: "Good morning", vn: "Chào buổi sáng" }, text_color: "#FFFFFFE5", type: "static_content" } },
            { overlay_id: "caption:goodnight", source: "remote", daily_start_hour: 19.5, daily_end_hour: 24, caption: { background: { colors: ["#370C6F","#575CD4"] }, icon: { data: "🌙", type: "emoji" }, max_lines: 1, text: "Goodnight", localized_text: { en: "Goodnight", vn: "Chúc ngủ ngon" }, text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:miss_you", source: "remote", caption: { background: { colors: ["#EC0C00","#FF493F"] }, icon: { data: "🥰", type: "emoji" }, max_lines: 1, text: "Miss you", localized_text: { en: "Miss you", vn: "Nhớ bạn" }, text_color: "#FFFFFFDB", type: "static_content" } },
            { overlay_id: "caption:ootd", source: "remote", caption: { background: { colors: ["#FFFFFF","#DBDBDB"] }, icon: { data: "🕶", type: "emoji" }, max_lines: 1, text: "OOTD", localized_text: { en: "OOTD", vn: "OOTD" }, text_color: "#101010E6", type: "static_content" } }
        ]},
        { section: "🎨 Decorative by Srjull", items: [
            { overlay_id: "caption:srjull", source: "remote", alt_text: "srjull", caption: { background: { image: { type: "image", data: "https://i.ibb.co/svX6CPFw/bia.png", source: "url" }, colors: ["#B8E7FF","#A8F5D0","#DCCBFF"] }, icon: { data: "person.fill", type: "sf_symbol", color: "#183153" }, max_lines: 1, text: "srjull", text_color: "#183153", type: "static_content" } },
            { overlay_id: "caption:cu", source: "remote", caption: { background: { colors: ["#FFD6A5","#FFF1A8","#FFC4D6"] }, icon: { data: "hare.fill", type: "sf_symbol", color: "#633B24" }, max_lines: 1, text: "Cu", text_color: "#633B24", type: "static_content" } },
            { overlay_id: "caption:tuat", source: "remote", caption: { background: { colors: ["#2C1A0E","#5D4037","#D7A86E"] }, icon: { data: "dog.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Tuất", text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:snake_vibes", source: "remote", caption: { background: { colors: ["#2E7D32","#66BB6A"] }, icon: { data: "allergens.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Snake Vibes", localized_text: { en: "Snake Vibes", vn: "Chất rắn" }, text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:du_an_ma", source: "remote", caption: { background: { colors: ["#263238","#455A64"] }, icon: { data: "theatermask.and.paintbrush.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "dự án ma", text_color: "#FFFFFFE6", type: "static_content" } }
        ]},
        { section: "🎨 Caption Icon", items: [
            { overlay_id: "caption:icon_halloween", source: "remote", caption: { background: { colors: ["#FF7B00","#331A00"], material_blur: "ultra_thin" }, icon: { type: "image", data: "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/halloween_indicator%403x.png", source: "url" }, max_lines: 1, text: "Happy Halloween", text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:icon_christmas", source: "remote", caption: { background: { colors: ["#D32F2F","#1B5E20"], material_blur: "ultra_thin" }, icon: { type: "image", data: "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/christmas_indicator%403x.png", source: "url" }, max_lines: 1, text: "Merry Christmas", text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:icon_st_patricks", source: "remote", caption: { background: { colors: ["#00C853","#004D40"], material_blur: "ultra_thin" }, icon: { type: "image", data: "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/st_patricks_indicator%403x.png", source: "url" }, max_lines: 1, text: "Happy St. Patrick's Day", text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:icon_fall", source: "remote", caption: { background: { colors: ["#E65100","#3E2723"], material_blur: "ultra_thin" }, icon: { type: "image", data: "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/thanksgiving_indicator%403x.png", source: "url" }, max_lines: 1, text: "Happy Thanksgiving", text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:icon_valentines", source: "remote", caption: { background: { colors: ["#FF4081","#880E4F"], material_blur: "ultra_thin" }, icon: { type: "image", data: "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/valentines_indicator%403x.png", source: "url" }, max_lines: 1, text: "Happy Valentine's", text_color: "#FFFFFF", type: "static_content" } }
        ]},
        { section: "🎨 Gen Z & Xéo xắt 💅", items: [
            { overlay_id: "caption:feeling_cute", source: "remote", caption: { background: { colors: ["#F8BBD0","#E91E63"] }, icon: { data: "camera.macro", type: "sf_symbol", color: "#FFFFFFE5" }, max_lines: 1, text: "Feeling Cute", localized_text: { en: "Feeling Cute", vn: "Cảm thấy dthw" }, text_color: "#FFFFFFE5", type: "static_content" } },
            { overlay_id: "caption:cutie_pie", source: "remote", caption: { background: { colors: ["#FFDEE9","#FFB6C1","#FF9AA2"] }, icon: { data: "sparkles", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Cutie Pie", text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:hello_kitty", source: "remote", caption: { background: { colors: ["#FFD1DC","#FFB7C5","#FFC0CB"] }, icon: { data: "cat.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Hello Kitty", text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:ngoan_xinh_iu", source: "remote", caption: { background: { colors: ["#F3C1D4","#F8DDE5","#E8CFF0"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#71465D" }, max_lines: 1, text: "ngoan xinh iu của ai đây", text_color: "#71465D", type: "static_content" } },
            { overlay_id: "caption:xinh_dep_tuyet_voi", source: "remote", caption: { background: { colors: ["#FC5C7D","#6A82FB"] }, icon: { data: "sparkles", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Xinh đẹp tuyệt vời", text_color: "#FFFFFFE6", type: "static_content" } }
        ]},
        { section: "🎨 Meme & Hài hước 🤡", items: [
            { overlay_id: "caption:cuoi_vcl_m_oi", source: "remote", caption: { background: { colors: ["#F7971E","#FFD200","#FFEE58"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#000000E6" }, max_lines: 1, text: "Cười vcl m oi", text_color: "#000000E6", type: "static_content" } },
            { overlay_id: "caption:cuoi_xiu", source: "remote", caption: { background: { colors: ["#FFEB3B","#FF9800"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#000000E6" }, max_lines: 1, text: "Cười xỉu", text_color: "#000000E6", type: "static_content" } },
            { overlay_id: "caption:luon_vui_tuoi", source: "remote", caption: { background: { colors: ["#00F2FE","#4FACFE"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Luôn vui tươi", text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:hong_drama", source: "remote", caption: { background: { colors: ["#8A2387","#E94057","#F27121"] }, icon: { data: "popcorn.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Hóng drama", text_color: "#FFFFFFE6", type: "static_content" } }
        ]},
        { section: "🎨 Deadline & Tiền bạc 💸", items: [
            { overlay_id: "caption:deadline_ruot", source: "remote", caption: { background: { colors: ["#ED213A","#93291E"] }, icon: { data: "flame.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Deadline dí tụt quần", text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:di_lam_vi_dam_me", source: "remote", caption: { background: { colors: ["#FDC830","#F37335"] }, icon: { data: "face.smiling.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Đi làm vì đam mê", text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:tien_dau_ma_tieu", source: "remote", caption: { background: { colors: ["#11998E","#38EF7D"] }, icon: { data: "banknote.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Tiền đâu mà tiêu", text_color: "#FFFFFFE6", type: "static_content" } }
        ]},
        { section: "🎨 Daily & Đời sống ☕", items: [
            { overlay_id: "caption:ngay_moi_vui_ve", source: "remote", caption: { background: { colors: ["#FFB703","#FFD166","#FFF0A8"] }, icon: { data: "sun.max.fill", type: "sf_symbol", color: "#69420A" }, max_lines: 1, text: "Ngày mới vui vẻ", text_color: "#69420A", type: "static_content" } },
            { overlay_id: "caption:coffee_time", source: "remote", caption: { background: { colors: ["#4E342E","#8D6E63"] }, icon: { data: "cup.and.saucer.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Coffee Time!", localized_text: { en: "Coffee Time!", vn: "Giờ uống cà phê!" }, text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:an_com_chua", source: "remote", caption: { background: { colors: ["#FF9800","#F57C00"] }, icon: { data: "fork.knife", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Ăn cơm chưa?", text_color: "#FFFFFFE6", type: "static_content" } },
            { overlay_id: "caption:ngu_ngon", source: "remote", caption: { background: { colors: ["#3F51B5","#1A237E"] }, icon: { data: "moon.zzz.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Ngủ ngon", text_color: "#FFFFFFE6", type: "static_content" } }
        ]},
        { section: "🎨 Tình yêu", items: [
            { overlay_id: "caption:i_love_you", source: "remote", caption: { background: { colors: ["#FF8FAB","#FFC2D1","#FFE5EC"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#8A304F" }, max_lines: 1, text: "i love you", text_color: "#8A304F", type: "static_content" } },
            { overlay_id: "caption:iu_thi_noi", source: "remote", caption: { background: { colors: ["#FFD166","#FFE8A3","#FFF3D0"] }, icon: { data: "bubble.left.fill", type: "sf_symbol", color: "#704510" }, max_lines: 1, text: "iu thì nói, đừng có ngại", text_color: "#704510", type: "static_content" } },
            { overlay_id: "caption:dang_ban_tuong_tu", source: "remote", caption: { background: { colors: ["#1A2980","#26D0CE"] }, icon: { data: "thought.bubble.fill", type: "sf_symbol", color: "#FFFFFF" }, max_lines: 1, text: "Đang bận tương tư", text_color: "#FFFFFF", type: "static_content" } },
            { overlay_id: "caption:dating_time", source: "remote", caption: { background: { colors: ["#E91E63","#F44336"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#FFFFFFE6" }, max_lines: 1, text: "Dating Time!", text_color: "#FFFFFFE6", type: "static_content" } }
        ]}
    ])
});

// ============================================================
// 10. FILTER DATA — helper để build filter object gọn
// ============================================================
function mkFilter(uid, name, colors, iconUrl, sfSymbol, filterType) {
    return {
        uid: uid, id: uid, name: name, prompt: uid, productUrl: null,
        colors: colors, captureButtonColors: colors,
        icon: { url: iconUrl, iconUrl: iconUrl, remoteImage: iconUrl, sfSymbol: sfSymbol, emoji: "" },
        textColor: "#FFFFFF", style: "cutout",
        overlay: true,
        overlayImageUrl: iconUrl, overlayImageURL: iconUrl,
        imageUrl: iconUrl, iconUrl: iconUrl,
        referenceImages: [],
        requires_gold: false, requiresGold: false,
        is_gold: false, isGold: false,
        unlocked: true, is_unlocked: true, isUnlocked: true,
        free: true,
        allowsTryFilter: true, allows_try_filter: true,
        tryButtonEnabled: true, try_button_enabled: true,
        type: "normal", filterType: filterType
    };
}

var TAROT = "https://raw.githubusercontent.com/crdevu/e16f/refs/heads/main/assets/tarots/";
var FRAME = "https://locket-vip.mhiep20077.workers.dev/assets/frames/";

var customPhotoboothFilters = [
    // — Tarot —
    mkFilter("tr_the_magician",      "Tarot Hành Động", ["#E11D48","#FB7185"], TAROT+"the_magician.png",       "sparkles", "normal"),
    mkFilter("tr_all_seing_eye",     "Tarot Sự Thật",   ["#84CC16","#65A30D"], TAROT+"all_seeing_eye.png",     "sparkles", "normal"),
    mkFilter("tr_the_hermit",        "Tarot Định Hướng",["#DC2626","#FBBF24"], TAROT+"the_hermit.png",         "sparkles", "normal"),
    mkFilter("tr_the_moon",          "Tarot Cảm Xúc",   ["#38BDF8","#818CF8"], TAROT+"the_moon.png",           "sparkles", "normal"),
    mkFilter("tr_the_sun",           "Tarot Thành Công",["#0F172A","#E2E8F0"], TAROT+"the_sun.png",            "sparkles", "normal"),
    mkFilter("tr_wheel_of_forutne",  "Tarot Vận May",   ["#EA580C","#EF4444"], TAROT+"wheel_of_fortune.png",   "sparkles", "normal"),
    mkFilter("tr_the_high_hierophant","Tarot Tri Thức", ["#3B82F6","#6366F1"], TAROT+"the_high_hierophant.png","sparkles", "normal"),
    mkFilter("tr_the_high_priestess","Tarot Dự Báo",    ["#A855F7","#EC4899"], TAROT+"the_high_priestess.png", "sparkles", "normal"),
    mkFilter("tr_temperance",        "Tarot Công Việc", ["#06B6D4","#F43F5E"], TAROT+"temperance.png",         "sparkles", "normal"),

    // — Photobooth —
    mkFilter("photobooth_4cut",             "Photobooth 4 ô",          ["#FFD6E0","#FFE4EC"], FRAME+"photobooth_4cut.png",             "square.grid.2x2", "cutout"),
    mkFilter("photobooth_cute",             "Photobooth Cute",         ["#FFD6E0","#FFE4EC"], FRAME+"photobooth_cute.png",             "square.grid.2x2", "cutout"),
    mkFilter("pb_holo_4cut",                "Photobooth Y2K Holo",     ["#C4B5FD","#E0E7FF"], FRAME+"pb_holo_4cut.png",                "square.grid.2x2", "cutout"),
    mkFilter("pb_scrapbook_ripped_4cut",    "Photobooth Scrapbook",    ["#D6A36A","#FDE68A"], FRAME+"pb_scrapbook_ripped_4cut.png",    "square.grid.2x2", "cutout"),
    mkFilter("pb_ripped_paper_4cut",        "Photobooth Ripped Paper", ["#EF4444","#FCA5A5"], FRAME+"pb_ripped_paper_4cut.png",        "square.grid.2x2", "cutout"),
    mkFilter("pb_denim_ripped_2x2",         "Photobooth Denim 4 ô",   ["#38BDF8","#93C5FD"], FRAME+"pb_denim_ripped_2x2.png",         "square.grid.2x2", "cutout"),
    mkFilter("frame_classic_pb",            "Photobooth Cổ Điển",     ["#FF758C","#FF7EB3"], FRAME+"photoboot.png",                   "square.grid.2x2", "cutout"),
    mkFilter("frame_berry_days",            "Photobooth Berry Days",   ["#FFB6C1","#FF69B4"], FRAME+"pb_strawberry.png",              "square.grid.2x2", "cutout"),
    mkFilter("frame_happy_snap",            "Photobooth Happy Snap",   ["#A8E6CF","#88D49E"], FRAME+"pb_vintage.png",                 "square.grid.2x2", "cutout"),
    mkFilter("frame_sky_diary",             "Photobooth Sky Diary",    ["#D8B4F8","#C3B1E1"], FRAME+"pb_galaxy.png",                  "square.grid.2x2", "cutout"),

    // — Frames / Stickers —
    mkFilter("sticker_b_nh_lu_n_minh_tu",           "Trend Tíc Tóc",          ["#FF758C","#FF7EB3"], FRAME+"sticker_b_nh_lu_n_minh_tu.png",           "heart.fill", "cutout"),
    mkFilter("cmt_locket",                           "Locket Việt Nam",        ["#FF758C","#FF7EB3"], FRAME+"cmt_locket.png",                           "heart.fill", "cutout"),
    mkFilter("khung_hello_kitty_pastel_ng_t_ng_o",   "Hello Kitty Ngọt Ngào", ["#FF758C","#FF7EB3"], FRAME+"khung_hello_kitty_pastel_ng_t_ng_o.png",   "heart.fill", "cutout"),
    mkFilter("khung_hello_kitty_h_ng_pastel",        "Khung Hello Kitty Hồng",["#FF758C","#FF7EB3"], FRAME+"khung_hello_kitty_h_ng_pastel.png",        "heart.fill", "cutout"),
    mkFilter("khung_nh_n_pastel_vi_n_ren",           "Nơ Pastel Viền Ren",    ["#FF758C","#FF7EB3"], FRAME+"khung_nh_n_pastel_vi_n_ren.png",           "heart.fill", "cutout"),
    mkFilter("khung_nh_hoa_pastel_vi_n_xanh_m_nh",  "Hoa Xinh Pastel",       ["#51e6e4","#fce03f"], FRAME+"khung_nh_hoa_pastel_vi_n_xanh_m_nh.png",  "heart.fill", "cutout"),
    mkFilter("khung_nh_vu_ng_m_ng_nh_n_b_c",        "Nhện Đỏ",               ["#b3001e","#b3001e"], FRAME+"khung_nh_vu_ng_m_ng_nh_n_b_c.png",        "heart.fill", "cutout"),
    mkFilter("khung_kh_ng_gian_xanh_pastel",         "Không Gian Xanh",       ["#65d9fc","#65d9fc"], FRAME+"khung_kh_ng_gian_xanh_pastel.png",         "heart.fill", "cutout"),
    mkFilter("khung_vu_ng_ng_i_sao_h_ng_pastel",     "Ngôi Sao Hồng",         ["#FF758C","#FF7EB3"], FRAME+"khung_vu_ng_ng_i_sao_h_ng_pastel.png",     "heart.fill", "cutout"),
    mkFilter("khung_nh_pastel_vi_n_s_h_i_c_u",      "Sò Hải Cẩu Pastel",     ["#cfedfc","#cfedfc"], FRAME+"khung_nh_pastel_vi_n_s_h_i_c_u.png",      "heart.fill", "cutout"),
    mkFilter("khung_nh_shin_chan_vi_n_m_nh",         "Shin-Chan Viền Mảnh",   ["#f00008","#faed32"], FRAME+"khung_nh_shin_chan_vi_n_m_nh.png",         "heart.fill", "cutout"),
    mkFilter("khung_anh_o_kitty_v_sao",              "Hello Kitty & Sao",     ["#780c23","#a94770"], FRAME+"khung_anh_o_kitty_v_sao.png",              "heart.fill", "cutout"),
    mkFilter("khung_xanh_v_tay_sao_v_ng",            "Sao Vàng Xanh",         ["#6fb1d3","#cdd64c"], FRAME+"khung_xanh_v_tay_sao_v_ng.png",            "heart.fill", "cutout"),
    mkFilter("sinh_nh_t_hello_kitty_ho_i_c",         "Sinh Nhật Hello Kitty", ["#FF758C","#FF7EB3"], FRAME+"sinh_nh_t_hello_kitty_ho_i_c.png",         "heart.fill", "cutout"),
    mkFilter("pb_single_y2k_silver_holo",            "Khung Y2K Silver Holo", ["#C4B5FD","#E0E7FF"], FRAME+"pb_single_y2k_silver_holo.png",            "heart.fill", "cutout"),
    mkFilter("pb_single_denim_ripped",               "Khung Denim Cá Tính",   ["#38BDF8","#93C5FD"], FRAME+"pb_single_denim_ripped.png",               "heart.fill", "cutout"),
    mkFilter("pb_single_film_nostalgia",             "Khung Film Hoài Cổ",    ["#D6A36A","#FDE68A"], FRAME+"pb_single_film_nostalgia.png",             "heart.fill", "cutout")

];

// ============================================================
// 11. FILTER GROUPS & PICKER
// ============================================================
var customFilterGroups = [
    { id: "group_tarots",      title: { en: "TAROT" },            filter_ids: ["tr_the_magician","tr_all_seing_eye","tr_the_hermit","tr_the_moon","tr_the_sun","tr_wheel_of_forutne","tr_the_high_hierophant","tr_the_high_priestess","tr_temperance"], requires_gold: false, unlocked: true, free: true },
    { id: "group_photobooth",  title: { en: "KHUNG & PHOTOBOOTH"},filter_ids: ["frame_berry_days","frame_happy_snap","frame_sky_diary","photobooth_4cut","photobooth_cute","pb_holo_4cut","pb_scrapbook_ripped_4cut","pb_ripped_paper_4cut","pb_denim_ripped_2x2"], requires_gold: false, unlocked: true, free: true },
    { id: "group_frames",      title: { en: "KHUNG VIỀN" },       filter_ids: ["frame_classic_pb","sticker_b_nh_lu_n_minh_tu","cmt_locket","khung_hello_kitty_pastel_ng_t_ng_o","khung_hello_kitty_h_ng_pastel","khung_nh_n_pastel_vi_n_ren","khung_nh_hoa_pastel_vi_n_xanh_m_nh","khung_nh_vu_ng_m_ng_nh_n_b_c","khung_kh_ng_gian_xanh_pastel","khung_vu_ng_ng_i_sao_h_ng_pastel","khung_nh_pastel_vi_n_s_h_i_c_u","khung_nh_shin_chan_vi_n_m_nh","khung_anh_o_kitty_v_sao","khung_xanh_v_tay_sao_v_ng","sinh_nh_t_hello_kitty_ho_i_c","pb_single_y2k_silver_holo","pb_single_denim_ripped","pb_single_film_nostalgia"], requires_gold: false, unlocked: true, free: true },
    { id: "group_goofy",       title: { en: "GOOFY" },            filter_ids: ["okay_wig","influencer","looks_maxxing","toothless","bye_brows"], requires_gold: false, unlocked: true, free: true },
    { id: "group_looks",       title: { en: "LOOKS" },            filter_ids: ["bowling_ball","blonde_bleached","beard","bob_cut","buns","tatted","mohawk","braces","bye_brows"], requires_gold: false, unlocked: true, free: true },
    { id: "group_celebrate",   title: { en: "CELEBRATE" },        filter_ids: ["slimed","princess","disco_lights","cash_money","happy_birthday"], requires_gold: false, unlocked: true, free: true },
    { id: "group_cute",        title: { en: "CUTE" },             filter_ids: ["cutesy","sticker_face","flower_crown","love_bug"], requires_gold: false, unlocked: true, free: true },
    { id: "group_costumes",    title: { en: "COSTUMES" },         filter_ids: ["wedding","cowboy_cowgirl","giraffe","clown"], requires_gold: false, unlocked: true, free: true },
    { id: "group_holidays",    title: { en: "HOLIDAYS" },         filter_ids: ["easter_bunney_cutout","easter_chick_cutout","bearded","leprechaun","lucky_face","sweet_hearts","elf_cutout","santa_cutout","frosty"], requires_gold: false, unlocked: true, free: true }
];

var customPickerFilters = [
    // AR/face
    "okay_wig","influencer","looks_maxxing","toothless","bye_brows",
    "bowling_ball","blonde_bleached","beard","bob_cut","buns",
    "tatted","mohawk","braces","slimed","princess",
    "disco_lights","cash_money","happy_birthday","cutesy","sticker_face",
    "flower_crown","love_bug","wedding","cowboy_cowgirl","giraffe",
    "clown","easter_bunney_cutout","easter_chick_cutout","bearded","leprechaun",
    "lucky_face","sweet_hearts","elf_cutout","santa_cutout","frosty",
    // Tarot
    "tr_the_magician","tr_all_seing_eye","tr_the_hermit","tr_the_moon","tr_the_sun",
    "tr_wheel_of_forutne","tr_the_high_hierophant","tr_the_high_priestess","tr_temperance",
    // Photobooth
    "frame_berry_days","frame_happy_snap","frame_sky_diary",
    "photobooth_4cut","photobooth_cute","pb_holo_4cut",
    "pb_scrapbook_ripped_4cut","pb_ripped_paper_4cut","pb_denim_ripped_2x2",
    // Frames
    "frame_classic_pb","sticker_b_nh_lu_n_minh_tu","cmt_locket",
    "khung_hello_kitty_pastel_ng_t_ng_o","khung_hello_kitty_h_ng_pastel",
    "khung_nh_n_pastel_vi_n_ren","khung_nh_hoa_pastel_vi_n_xanh_m_nh",
    "khung_nh_vu_ng_m_ng_nh_n_b_c","khung_kh_ng_gian_xanh_pastel",
    "khung_vu_ng_ng_i_sao_h_ng_pastel","khung_nh_pastel_vi_n_s_h_i_c_u",
    "khung_nh_shin_chan_vi_n_m_nh","khung_anh_o_kitty_v_sao",
    "khung_xanh_v_tay_sao_v_ng","sinh_nh_t_hello_kitty_ho_i_c",
    "pb_single_y2k_silver_holo","pb_single_denim_ripped","pb_single_film_nostalgia"
];

var locketCameraFilterConfig = {
    allows_custom_filters: true, show_filter_button: true,
    sheet_enabled: true, open_sheet_immediately: true,
    sheet_filters: customFilterGroups,
    picker_filters: customPickerFilters,
    remote_filters: customPhotoboothFilters,
    filters: customPhotoboothFilters
};

obj.entries.camera_filter_config   = JSON.stringify(locketCameraFilterConfig);
obj.entries.celebrity_filter_config = JSON.stringify({
    celebrityUid: "locket_admin_custom",
    cameraFilterConfig: locketCameraFilterConfig
});

// ============================================================
// 12. FINAL FORCE OVERRIDE — đảm bảo không key nào bị reset
// ============================================================
(function forceOverride(e) {
    var durKeys = [
        "max_video_duration","video_max_duration","camera_roll_max_duration",
        "camera_roll_video_max_duration","camera_roll_duration",
        "video_trim_max_duration","trim_max_duration","gold_max_duration","goldMaxDuration"
    ];
    for (var i = 0; i < durKeys.length; i++) e[durKeys[i]] = DUR_STR;

    // Gold
    e.is_gold = "true"; e.has_gold = "true"; e.is_gold_user = "true";
    e.user_is_gold = "true"; e.gold_user = "true"; e.gold_active = "true";

    // Badge
    e.gold_camera_themes = "true"; e.gold_badge_profile_menu = "true";
    e.profile_badge_visible = "true"; e.profileBadge = "true";
    e.gold_badge = "true"; e.goldBadge = "true";
    e.gold_since_badge = "true"; e.gold_member_since = "true";
    e.show_gold_since = "true"; e.profile_gold_badge = "true";
    e.profile_gold_card = "true"; e.gold_membership_card = "true";
    e.gold_card = "true";

    // Filter — no gold required
    e.all_filters_free = "true"; e.unlocked_filters = "true";
    e.free_filters_enabled = "true"; e.filter_selection_enabled = "true";
    e.camera_filter_gold_only = "false"; e.camera_filters_gold_only = "false";
    e.filter_gold_only = "false"; e.filters_gold_only = "false";
    e.ai_filter_gold_only = "false"; e.ai_filters_gold_only = "false";
    e.filter_paywall_enabled = "false"; e.camera_filter_paywall_enabled = "false";
    e.filter_upsell_enabled = "false";
    e.require_gold_for_filters = "false"; e.requires_gold_for_filters = "false";

    // Sound / audio / mic
    e.video_sound_enabled = "true"; e.videoSoundEnabled = "true";
    e.microphone_enabled = "true"; e.microphoneEnabled = "true";
    e.camera_microphone_enabled = "true"; e.cameraMicrophoneEnabled = "true";
    e.sound_enabled = "true"; e.soundEnabled = "true";
    e.audio_enabled = "true"; e.audioEnabled = "true";
    e.camera_roll_video_sound_enabled = "true"; e.cameraRollVideoSoundEnabled = "true";
    e.camera_roll_upload_enabled = "true"; e.camera_roll_video_trimming_enabled = "true";

    // Cache
    e.cache_ttl_seconds = "0"; e.client_cache_ttl_sec = "0";

    // Filter configs — always last
    e.camera_filter_config    = JSON.stringify(locketCameraFilterConfig);
    e.celebrity_filter_config = JSON.stringify({ celebrityUid: "locket_admin_custom", cameraFilterConfig: locketCameraFilterConfig });
})(obj.entries);

$done({ body: JSON.stringify(obj) });
