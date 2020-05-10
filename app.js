const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const LoginAuth = require('./loginAuth')
const session = require('express-session')

const app = express()
const port = 3000

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// 設定 session 參數
app.use(session({
  name: "login from my macbook",
  secret: "secure",
  resave: false,
  saveUninitialized: true
}))

app.get('/', (req, res) => {
  // 載入主畫面時，會先檢查req.session是否有之前登入過的狀態，如果有則指向歡迎畫面，沒有的話則是回到原始頁面
  if (req.session.status === 'success login') {
    res.render('login', {
      name: req.session.name, loggin: true, logginTime: req.session.time
    })
  } else {
    res.render('index')
  }
  console.log(req.session)

})


app.post('/', (req, res) => {
  const message = req.body
  const result = LoginAuth(message)

  switch (result) {
    case "empty":
      res.render('index', { input: req.body, message: true })
      break;
    case "error":
      res.render('index', { input: req.body, error: true })
      break;
    default:
      // 只有成功登入才會新增狀態與登入者的姓名
      req.session.status = "success login";
      req.session.name = result;
      let today = new Date();
      const currentDateTime = today.getFullYear() + '/' +
        (today.getMonth() + 1) + '/' +
        today.getDate() + '/(' +
        today.getHours() + ':' + today.getMinutes() +
        ')';
      req.session.time = currentDateTime
      console.log(req.session);
      res.render('login', { name: result })
  }

})

//點擊登出鍵會抹除儲存在session中的狀態與姓名，並將畫面返回至主頁面，這時在get('/')主頁面已經找不到登入狀態了，因此會將畫面導引至輸入登入狀態的頁面
app.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')

})

app.listen(port, () => {
  console.log(`runnung on localhost:${port}`)
})


// app.post('/', (req, res) => {
//   const input = req.body
//   const member = Login(req.body)
//   if (member) {
//     res.render('view', { member, input })
//   }
//   else {
//     res.render('index', { member: !member, input })
//   }
// })