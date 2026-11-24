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

## Thành phần chính

- **`worker.js`**: Cloudflare Worker. Trong mã hiện tại, các route chính gồm `/`, `/health`, `/image/*`, `/assets/*` và `POST /generateFilteredImage`. Worker sử dụng binding KV tên `KV_BUCKET` để lưu ảnh và trạng thái session photobooth.
- **`config/all-in-one.conf`**: cấu hình proxy/script cho Shadowrocket. Các URL script đang trỏ tới raw GitHub theo đường dẫn `scripts/` và `spotify/`; nếu đổi repository hoặc branch, cần cập nhật các URL này.
- **`scripts/` và `spotify/`**: các script được cấu hình gọi từ file `.conf`.
- **`assets/`**: tài nguyên ảnh và profile cấu hình. Tên file trong `assets/frames/` được giữ nguyên để tránh làm hỏng các đường dẫn mà Worker đang tham chiếu.

## Cấu hình triển khai

### Cloudflare Worker

1. Mở `worker.js` và kiểm tra `WORKER_HOST` ở đầu file.
2. Tạo KV namespace trên Cloudflare và bind namespace đó với tên **`KV_BUCKET`** trong cấu hình Worker.
3. Deploy `worker.js`.
4. Đảm bảo các tài nguyên frame được upload/lưu vào KV theo quy ước mà các hàm `serveAsset` / `kvPut` trong Worker đang sử dụng.
5. Kiểm tra `GET /health` sau khi deploy. Endpoint này cho biết trạng thái service và số filter được khai báo; nó không thay thế kiểm thử end-to-end.

### Shadowrocket

1. Mở `config/all-in-one.conf`.
2. Thay các URL `raw.githubusercontent.com/.../main/...` thành URL repository/branch thực tế của bạn.
3. Kiểm tra domain MITM và chứng chỉ theo hướng dẫn chính thức của ứng dụng.
4. Chỉ bật từng nhóm cấu hình sau khi đã hiểu tác động và có thể khôi phục cấu hình ban đầu.

### iOS configuration profile

`assets/locket.mobileconfig` là profile cấu hình DNS. Kiểm tra kỹ máy chủ DNS, tổ chức phát hành và các quy tắc trước khi cài đặt profile. Không cài profile không rõ nguồn gốc.

## Quy ước đặt tên

- Tên file mã nguồn dùng `kebab-case.js`.
- Tên thư mục dùng chữ thường, ngắn gọn, theo nhóm chức năng.
- Giữ nguyên tên asset đã được tham chiếu trực tiếp trong mã nguồn.
- Khi đổi tên script, cập nhật đồng thời đường dẫn trong `config/all-in-one.conf`.
- Tránh đổi tên endpoint, key KV, filter ID hoặc tên asset khi chưa rà soát toàn bộ tham chiếu.

## Việc cần kiểm tra trước khi phát hành

- [ ] Cập nhật `WORKER_HOST` trong `worker.js`.
- [ ] Cập nhật URL raw GitHub trong `config/all-in-one.conf`.
- [ ] Tạo và bind `KV_BUCKET`.
- [ ] Kiểm tra các asset frame được Worker yêu cầu có tồn tại và đúng nội dung.
- [ ] Kiểm tra profile `.mobileconfig` trước khi cài.
- [ ] Chạy thử các endpoint trên môi trường staging trước khi dùng production.

## Ghi chú về asset frame

Trong bản ZIP ban đầu, `worker.js` tham chiếu **27 tên file** dưới `/assets/frames/`, nhưng thư mục `assets/frames/` chỉ có **35 file** và một số tên được Worker tham chiếu không tồn tại trong gói nguồn. Vì không thể xác định chắc chắn ảnh nào tương ứng với từng filter ID, bản sắp xếp này **không tự ý đổi tên hoặc ghép ảnh**. Hãy bổ sung đúng file hoặc cập nhật `FILTER_MAP` để trỏ tới asset có thật trước khi kiểm thử các filter đó.

## Thay đổi trong bản sắp xếp

- Gom cấu hình `.conf` vào `config/`.
- Chuẩn hóa tên các file JavaScript sang `kebab-case`.
- Cập nhật đường dẫn script trong `config/all-in-one.conf` tương ứng với tên mới.
- Giữ nguyên logic JavaScript, endpoint, filter ID và tên các ảnh hiện có.
- Thêm README và `.gitignore`.
