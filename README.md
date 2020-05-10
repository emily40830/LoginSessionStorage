# Login -保存登入狀態，透過session儲存狀態
利用 Node.js + Express 打造簡易的登入驗證功能。


## 專案示意
![](https://i.imgur.com/BZocsv7.png)

## 功能說明
透過內建的使用者帳號密碼資訊，產生三種不同的登入結果：
1. 登入成功，導引至login畫面
2. 登入失敗，密碼錯誤
3. 登入失敗，找不到使用者的email資訊

## 技術層次
- Node.js + Express建立伺服器
- Express-Handlebars 作為渲染畫面的樣板引擎
- body-parser 作為接收post回傳的request時的解析器

## 開發環境
* Node.js: v10.16.0
* body-parser: v1.19.0
* express: v4.17.1
* express-handlebars": v4.0.4