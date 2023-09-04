

module.exports = {
    questionHTML:function(main, login, qsData){
        var tag='';
        qsData.sort(function(a,b){
            if(a.data < b.data) return 1;
            if(a.data > b.data) return -1;
            return 0;
        });
        for(var q of qsData){
            var ans = q.to==0?'<i class="bi bi-question-square"></i>':'<i class="bi bi-r-square-fill"></i>';
            tag += '<tr><td class="num">'+q.id+'</td>'+
            '<td class="title">'+q.title+'</td><td class="writer">'+q.writer+'</td>'+
            '<td class="date">'+q.date+'</td><td class="ans">'+ans+'</td></tr>';
        }

        var qsHTML=`
        <section id="content">
        <div id="qsList">
            <div class="qsTitle">
                <h2>문의</h2>
                <a href="javascript:questionWrite();">문의하기</a>
            </div>
            <div class="search_wrap">
                <input type="text" name="word" id="word">
            </div>
            <div class="qsList_box">
                <table>
                    <thead>
                        <th class="num">번호</th><th class="title">제목</th>
                        <th class="writer">작성자</th>
                        <th class="date">작성일</th><th class="ans">답변</th>
                    </thead>
                    <tbody id="qs"> ${tag}  </tbody>
                </table>
            </div>
        </div>
        </section>
        <section id="side">
            <div class="login_bt">
                <a href="/${login.url}">${login.text}</a>
            </div>
        </section>        
        `;

        return ( commonHTML(main,qsHTML,"question") );
    },
    homeHTML:function(main, login){
        var mainHTML=`
        <section id="content">
            <img src="./image/${main.main_img}">
        </section>
        <section id="side">
            <div class="login_bt">
                <a href="/${login.url}">${login.text}</a>
            </div>
        </section>`;
        return ( commonHTML(main,mainHTML,"index") );
    },
    signHTML:function(main,signFrame){
        var inputTag = '';
        for(var v of Object.keys(signFrame))
            inputTag+=`<div class="sign_input">${signFrame[v]}</div>`;
        var signHTML=`
        <section id="content">
                <h3>스드메 회원가입</h3>
                <form name="signf" id="signf" method="get" action="/signup">
                    <div class="sign_wrap">
                        ${inputTag}
                        <div class="sign_bt">
                            <a href="/signup">SIGN-UP</a>
                        </div>
                    </div>
                </form>
            </section>
        `;
        return ( commonHTML(main,signHTML,"sign") );
    },
    loginHTML:function(main){
        var loginHTML=`
        <section id="content">
                <h3>스드메 with Seonhyang 로그인</h3>
               <div class="login_wrap">
                    <form name="loginf" id="loginf" method="get" action="/">
                        <input type="hidden" name="part" value="login_check">
                        <div class="login_box">
                                <div class="login_input">
                                    <input type="text" name="sdmId" id="sdmId">
                                    <label for="sdmId">ID</label>
                                </div>
                                <div class="login_input">
                                    <input type="password" name="sdmPw" id="sdmPw">
                                    <label for="sdmPw">PW</label>
                                </div>
                                <div class="login_bt">
                                    <a href="javascript:login();">LOGIN</a>
                                </div>
                        </div>
                    </form>
                    <div class="joinAfind">
                        <p class="find">아이디/비밀번호 찾기</p>
                        <p class="join"><a href="/sign">회원가입</a></p>
                    </div>
               </div>
            </section>
        `;
        return (commonHTML(main,loginHTML,"login"));
    },
}

function commonHTML(main, html,css){
    var menu = "";
    for(var key of Object.keys(main.menu)){
        menu+=`<li class="menu"><a href="/${key}">${main.menu[key]}</a></li>`;
    }
    return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>스드메의 모든것</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./lib/main.css">
        <link rel="stylesheet" href="./lib/${css}.css">
    </head>
    <body>
        <div id="wrap">
            <header id="header">
                <div class="logo"><a href="/"><img src="./image/${main.logo}"></a></div>
                <nav class="nav">
                    <ul class="menuList">
                       ${menu}
                    </ul>
                </nav>
            </header>
            <main id="main">
                ${html}
            </main>
        </div>
    </body>
    </html>        
    `);
}