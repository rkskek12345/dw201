let isLogin=false;

$(function(){
    isLogin=getCookie("isLogin")=="true"? true:false;
    var id = getCookie("id");

    var login='';
    if(isLogin){//로그인 성공
        login=`<div class="user">
        <p>${id}</p> <a href="/?part=logout">로그아웃</a>
        </div>`;
    }else{//로그인 실패 또는 로그인 안한 상태
        login='<div class="login_bt"><a href="/login">로그인</a></div>';
    }
    $("#side").append(login);

    $.getJSON("./data/question.json",function(data){
        
        console.log(data);
        
        $.getJSON("./data/question.json",function(qdata){
            qdata.sort(function(a,b){
                if(a.date < b.date ) return 1;
                if(a.date > b.date ) return -1;
                return 0;
            });
            $.each(qdata,function(i,q){
                var ans = q.to==0?'<i class="bi bi-question-square"></i>':'<i class="bi bi-r-square-fill"></i>';
                $("#qs").append('<tr><td class="num">'+(i+1)+'</td>'+
                '<td class="title">'+q.title+'</td><td class="writer">'+q.writer+'</td>'+
                '<td class="date">'+q.date+'</td><td class="ans">'+ans+'</td></tr>');
            });
        });
        $("#word").on("keyup",function(){
            var word= $(this).val();
            $("#qs>tr").filter(function(){
                var isShow=true;
                if( !($(this).find(".title").text().indexOf(word) > -1  ||
                            $(this).find(".writer").text().indexOf(word) > -1 ) )
                    isShow=false;
                $(this).toggle( isShow);
            });
        });
    });
    $(".modalBackground").click(function(){
        $(this).parent().hide(); //회색부분 문의글작성 모당창 닫기
    });
    
});

function qsSave(){
    $("#qsModal").hide(); //문의글작성 모달창 닫기
    // json형식으로 값 전달하기 만들기
}

function questionWrite(){ //문의하기 버튼 클릭시 실행되는 함수
    if(isLogin){ //로그인 성공
        $("#qsModal").show();
    }else{ // 로그인 안한 상태
        var isOk = confirm("로그인후 문의하기 할 수 있습니다. 로그인 하시겠습니까?");
        if(isOk){
            location.href="/?sub=question"
        }
    }
}
