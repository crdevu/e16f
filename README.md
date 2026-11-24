# Workspace

Bộ mã nguồn cấu hình và các tài nguyên liên quan đến Locket, YouTube, Spotify, SoundCloud và dịch vụ Worker xử lý ảnh/photobooth.

> **Lưu ý:** README này mô tả cấu trúc và cách triển khai ở mức vận hành. Hãy chỉ sử dụng với tài khoản, dịch vụ và nội dung mà bạn có quyền kiểm soát. Một số script có thể thay đổi hành vi phản hồi API của dịch vụ bên thứ ba; hãy kiểm tra điều khoản dịch vụ và quyền sử dụng trước khi triển khai.

## Cấu trúc thư mục

```text
Workspace/
├── index.html                  # Trang giới thiệu / giao diện web
├── worker.js                   # Cloudflare Worker: endpoint và xử lý ảnh
├── config/
│   └── all-in-one.conf         # Cấu hình Shadowrocket tổng hợp
├── scripts/
│   ├── delete-header.js        # Script xử lý header
│   ├── locket-filter-unlock.js # Script phản hồi liên quan Locket
│   ├── locket-photobooth.js    # Script request photobooth
│   ├── locket-revenuecat.js    # Script phản hồi RevenueCat
│   ├── locket-unlock.js        # Script Remote Config Locket
│   ├── soundcloud-go-plus.js   # Script SoundCloud
│   ├── youtube-request.js      # Script request YouTube
│   └── youtube-response.js     # Script response YouTube
├── spotify/
│   ├── spotify-json.js         # Script xử lý request JSON Spotify
│   └── spotify-proto.js        # Script xử lý dữ liệu protobuf Spotify
└── assets/
    ├── frames/                 # Khung ảnh / photobooth
    ├── tarots/                 # Hình ảnh tarot
    ├── stickers/               # Vị trí dành cho sticker (hiện trống)
    ├── camera/                 # Vị trí dành cho camera (hiện trống)
    ├── photobooths/            # Vị trí dành cho photobooth (hiện trống)
    ├── locket.mobileconfig     # Cấu hình profile iOS
    └── zzonnya.png             # Tài nguyên hình ảnh
```
