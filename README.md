# Login -保存登入狀態，透過session儲存狀態
利用 Node.js + Express 打造簡易的登入驗證功能。
透過session storage 再刷新頁面時保持登入狀態

## 專案示意
![登入頁面](https://i.imgur.com/e4KNUUX.png)
![成功登入](https://i.imgur.com/UcaFNt5.png)
![保持登入狀態](https://i.imgur.com/jzCT6Yn.png)
![錯誤排除：輸入不存在的使用者](https://i.imgur.com/ecS3Ysm.png)
![錯誤排除：密碼輸入錯誤](https://i.imgur.com/UH4EHha.png)

## 安裝流程
**clone** 專案至本地端
```
$ git clone https://github.com/emily40830/LoginSessionStorage.git
```
**安裝** express
```
$ npm i express
```
**啟動專案** 
```
$ npm start  
```
**透過nodemon啟動專案**
```
$ npm run dev 
```
`runnung on localhost:3000` 出現在terminal，則為成功啟動

**開啟瀏覽器到** [http://localhost:3000](http://localhost:3000) 

## Start 
測試帳號:
```
email: tony@stark.com
password: iamironman
```


## 功能說明
透過內建的使用者帳號密碼資訊，產生三種不同的登入結果：
1. 登入成功，導引至login畫面
2. 登入失敗，密碼錯誤
3. 登入失敗，找不到使用者的email資訊

透過session storage儲存登入狀態與登入時間
1. 若成功登入後，刷新頁面仍回到歡迎頁面，並且顯示先前登入的時間
2. 點擊logout，回到登入頁面


## 技術層次
- Node.js + Express建立伺服器
- Express-Handlebars 作為渲染畫面的樣板引擎
- body-parser 作為接收post回傳的request時的解析器
- express-session 作為處理保持登入狀態時的資料記錄

## 開發環境
* Node.js: v10.16.0
* body-parser: v1.19.0
* express: v4.17.1
* express-handlebars: v4.0.4
* express-session: v1.17.1

## 開發者
Qi-Hua(Emily) Wang