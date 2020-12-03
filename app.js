const express = require('express');
const path = require('path');
const app = express();

//디폴트 포트 값 : 8000 
app.set('port', process.env.PORT || 8000);

app.get('/', (req, res) => {
    //res.send('Server is working');
    res.sendFile(path.join(__dirname, '/main.html'));
    console.log(app.get('port'), '번 포트 대기 중');
});

app.get('/login', (req, res) => {
    res.send('로그인 페이지 : 로그인 방법 구상 하고 html 및 사이트 가져오기');
    console.log('로그인 페이지 오픈 시도됨.');
});
app.listen(app.get('port'), () => {
    console.log(`Server is running at ${app.get('port')}`);
});