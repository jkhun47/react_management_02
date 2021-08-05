const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('started 8080 port');
});

// const port = process.env.PORT || 5000;

// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/hello', (req, res) => {
//     res.send({message: 'Hello Express!'});
// });

app.get('/pet',function(요청, 응답){
    응답.send('펫샵페이지 입니다');
});
app.get('/cat',function(요청, 응답){
    응답.send('고양이전용 페이지 입니다');
});