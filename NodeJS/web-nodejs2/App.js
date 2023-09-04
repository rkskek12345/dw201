//App.js

var http= require('http');
var fs = require('fs');
var tempUrl=require('url');
var cookie = require('cookie');

const data = JSON.parse(fs.readFileSync('./data/member.json','utf8'));
//console.log(data);

var app = http.createServer(function(request,response){
    var url = request.url;
    var query = tempUrl.parse(url,true).query;
    //console.log(Object.keys(query).length==0);


    if(Object.keys(query).length==0){
        if(request.url=='/')
            url='/src/index.html';
        if(request.url=='/sign')
            url='/src/signup.html';
        if(request.url=='/qa')
            url='/src/question.html';
        if(request.url=='/login')
            url='/src/login.html';
        response.writeHead(200);
    }else{ // 쿼리스트링이 있는 경우
        var page = query.part==undefined?'':query.part;
        var sub = query.sub==undefined ? '' : query.sub;
        var cookie_arr=[];
        if(sub=== 'question'){
            cookie_arr=['sub=qa'];
            url='/src/login.html';
        }
        if(page==='login_check'){
            cookie_arr=['isLogin=false','id=""'];
            for(var i in data){
                if( data[i].sdmId === query.sdmId && data[i].sdmPw===query.sdmPw){
                    //isLogin='true';//아이디비번 일치하면 쿠키 생성
                    //id=query.sdmId;
                    cookie_arr=['isLogin=true','id='+query.sdmId];
                    break;
                }
            }
            url='/src/'+page+'.html';
        }
        if(page==='logout'){ //로그아웃
            cookie_arr=['isLogin=false']
            url='/src/index.html';
        }

        response.writeHead(200,{
            'Set-Cookie':cookie_arr
        });
    }

    if(request.url =='/favicon.ico'){
        return response.writeHead(404);
    }

    //console.log(request.headers.cookie);
    //var cookies = {};
    //cookies = cookie.parse(request.headers.cookie);// 내 pc에 저장된 쿠키가져와 객체로 저장
    //console.log(cookies.id);

    response.end(fs.readFileSync(__dirname+url));
    // response.writeHead(200,{
    //     'Set-Cookie':['id=sky','pw=1234']
    // });
    // response.end('aa');
});
app.listen(3000); //이게 있어야 화면나옴.

/*
    로그아웃 만들기
    쿠키 isLogin에 false를 저장해야한다.
    이동할 페이지는 루트url 로 이동한다.


    루트 도메인 (루트 url) - http://localhost:3000



    page 구성 - 메인, 회원가입, 문의
        메인 - index.html
        회원가입 - signup.html
        문의 - question.html
    각 페이지의 내용은 간단하게만 작성 (메인, 회원가입, 문의 페이지인지 구별 되게만)

    url : 메인 - http://localhost:3000
          회원가입 - http://localhost:3000/sign
          문의 - http://localhost:3000/qs
*/