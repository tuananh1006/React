# Weather Forecast App 🌤️

Ứng dụng web dự báo thời tiết được xây dựng bằng React và TypeScript.

## Tính năng

- 🔍 Tìm kiếm thời tiết theo tên thành phố
- 🌡️ Hiển thị thông tin thời tiết hiện tại
- 📅 Dự báo thời tiết 3 ngày tới
- 📱 Thiết kế responsive, tương thích với mobile
- 🌏 Giao diện tiếng Việt

## Cách sử dụng

1. Nhập tên thành phố vào ô tìm kiếm
2. Nhấn nút "Tìm kiếm" hoặc Enter
3. Xem thông tin thời tiết hiện tại và dự báo

## Cài đặt và Chạy

```bash
# Cài đặt dependencies
npm install

# Chạy ở môi trường development
npm start

# Build cho production
npm run build

# Chạy tests
npm test
```

## API Thời tiết

Ứng dụng hỗ trợ tích hợp với Weather API. Để sử dụng dữ liệu thời tiết thực:

1. Đăng ký tài khoản tại [WeatherAPI.com](https://www.weatherapi.com/)
2. Tạo file `.env` trong thư mục gốc
3. Thêm API key: `REACT_APP_WEATHER_API_KEY=your_api_key_here`

Nếu không có API key, ứng dụng sẽ sử dụng dữ liệu mẫu để demo.

## Cấu trúc Project

```
src/
├── components/          # React components
│   ├── WeatherSearch/   # Component tìm kiếm
│   └── WeatherDisplay/  # Component hiển thị thời tiết
├── services/           # Services và API calls
├── types/              # TypeScript type definitions
└── App.tsx            # Component chính
```

## Công nghệ sử dụng

- React 19
- TypeScript
- CSS3 (với responsive design)
- Jest & React Testing Library (cho testing)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

Phát triển bởi React App Template với chức năng dự báo thời tiết hoàn chỉnh.