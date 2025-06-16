
Smart Gym AI 健身分析平台
這是一個使用 React + Tailwind CSS 所開發的智慧健身房 AI 平台，整合 FHIR 健康資料結構，並透過 LLaMA3 模型提供 AI 健身建議與風險分析。

🔧 技術棧
React + React Router v6
Tailwind CSS + Lucide React Icons
OpenAI LLaMA3 模型 (Chat 頁面)
FHIR 標準資料結構 (模擬資料來源)

🖼️ 功能畫面
📊 Dashboard：健身數據統整
💪 Workout：運動紀錄與建議
❤️ Health Records：生命徵象檢視
📅 Appointment：預約教練與課程
👤 Profile：個人資料與健身目標設定
🧠 AI Insights：AI 推薦的菜單與建議
⚠️ Risk Report：健康風險分析
💬 Chat：與 LLaMA3 對話的個人化健身顧問

🚀 啟動方式
安裝 Create React App
npx create-react-app my-app
進入剛才創建的 my-app 目錄
cd my-app
啟動開發伺服器
npm start

安裝依賴：
npm install
npm run dev

📂 專案架構說明
請參考 src/ 目錄下各元件與頁面檔案。

🔮 後續擴充建議
串接實際 FHIR API 與健身穿戴裝置
增加 LLaMA3 記憶與自我優化能力
支援訓練影片推薦與動作姿勢 AI 判斷
優化聊天 UI 支援圖片與圖表輸出
