# TikTok 影片封面圖設定說明

## 自動獲取封面圖

目前網頁已經設定為自動透過 TikTok oEmbed API 獲取影片封面圖。系統會在頁面載入時自動嘗試獲取以下兩部影片的封面圖：

1. https://vt.tiktok.com/ZS56gySrs/
2. https://vt.tiktok.com/ZS5M5Txuv/

## 手動設定封面圖

如果自動獲取失敗（例如 API 限制或網路問題），你可以手動設定封面圖 URL。

### 方法一：在程式碼中直接設定

編輯 `src/app/page.tsx` 檔案，找到 `tiktokVideos` 陣列，將 `thumbnail` 欄位設為封面圖的 URL：

```typescript
const tiktokVideos: TikTokVideo[] = [
  {
    id: '1',
    url: 'https://vt.tiktok.com/ZS56gySrs/',
    title: '優秀作品 #1',
    thumbnail: 'https://your-image-url.com/thumbnail1.jpg', // 手動設定封面圖 URL
  },
  {
    id: '2',
    url: 'https://vt.tiktok.com/ZS5M5Txuv/',
    title: '優秀作品 #2',
    thumbnail: 'https://your-image-url.com/thumbnail2.jpg', // 手動設定封面圖 URL
  },
];
```

### 方法二：獲取 TikTok 影片封面圖 URL

1. 開啟 TikTok 影片頁面
2. 在瀏覽器中按 `F12` 開啟開發者工具
3. 在 Network 標籤中搜尋圖片請求
4. 找到影片的縮圖（通常檔名包含 "tiktok" 和尺寸資訊）
5. 複製圖片 URL 並貼到程式碼中

或者使用 TikTok oEmbed API 直接取得：
```
https://www.tiktok.com/oembed?url=你的影片URL
```

回應中會包含 `thumbnail_url` 欄位，複製該 URL 即可。

### 圖片要求

- 建議比例：9:16（符合 TikTok 影片比例）
- 建議格式：JPG 或 PNG
- 建議大小：寬度 720px 以上，以確保在各種裝置上顯示清晰

## 占位圖

如果無法獲取封面圖且未手動設定，系統會顯示預設的漸層背景作為占位圖。

## 測試

修改完成後，執行以下指令重新啟動開發伺服器：

```bash
npm run dev
```

然後在瀏覽器中檢查影片卡片是否正確顯示封面圖。

