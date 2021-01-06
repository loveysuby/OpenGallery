const express = require('express');
const path = require('path');
const app = express();
var bodyparser = require('body-parser');
var url = require('url');
require('dotenv').config();

//화면 별 router 연결, 라우터 호출해서 페이지를 불러오는데 사용함.
var mainRouter = require('./routes') //호출시 index.js 실행 (main.js : title 할당하고 main.html 열어줌)

//디폴트 포트 값 : 8000 
app.set('port', process.env.PORT || 23023);

//ejs (html포맷) 파일을 웹사이트에 view로 띄워주기 위한 view engine 설정.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//각각의 요청에서 index.js에 등록된 router 호출해서 page를 전환함.
app.use('/', mainRouter);

//css, image 등 정적 파일을 public에서 불러옴 -> html과 연결함 
app.use(express.static(path.join(__dirname, 'public')));

app.get("/find", function (req, res) {
    var urlParsed = url.parse(req.url, true);
    var querystring = urlParsed.query;
    // 값이 querystring.word 으로 불러와짐 ( 검색 단어) : 제목에서 find만 구현하면됨.
    res.send(querystring.word);
});

app.get('/logout', function (req, res) {
    res.send("Logout success");
});


app.listen(app.get('port'), () => {
    console.log(`Server is running at ${app.get('port')}`);
});