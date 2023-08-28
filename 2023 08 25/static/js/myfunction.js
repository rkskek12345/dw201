function initBoard(){
//페이지 구성요소 초기화
    $(".pan").each(function(){
        var idx=Number($(this).data("idx"));
        $(this).css("background","url(./static/image/"+board_img[idx]);
        $(this).css("background-size","cover");
        $(this).append("<div class='location_name'>"+(board_img[idx].split(".")[0])+"</div>");
    });
    var tmp=1;
    $(".top").each(function(){
        $(this).css("grid-area","top"+(tmp++));
    });
    var tmp=1;
    $(".bottom").each(function(){
        $(this).css("grid-area","bottom"+(tmp++));
    });
    var tmp=1;
    $(".sideR").each(function(){
        $(this).css("grid-area","sideR"+(tmp++));
    });
    var tmp=1;
    $(".sideL").each(function(){
        $(this).css("grid-area","sideL"+(tmp++));
    });

    var areas ="";
    for(var i=1; i<=7; i++){
        areas +="'";
        for(var k=1; k<=9; k++){
            if(i==1)areas +="top"+k+" ";
            if(i==7)areas +="bottom"+(10-k)+" ";
            if(i>1 && i<7) areas += (k==1)?"sideL"+(7-i)+" " : (k==9)?"sideR"+(i-1)+" ":" center ";
        }
        areas +="'";
    }
    console.log(areas);
    $("#board_container").css("grid-template-areas",areas);
}
const gcolor=["#6A5ACD","#55EE94","#FF7A85","#FFC81E","#DB631F"];
function draw(){
//보드 그리기
    var gidx=Object.values(gamer); //참가자 번호 만 배열로 가져오기
    $.each(gidx,function(i,p){
        $(".pan").eq(0).append("<svg> </svg>")
    });
}

function setOpen(){
    var child = window.open("set_gamer.html",'참가자설정','width=300,height=300,top=400,left=750');
}

function dice_turn(){
    $(".dice").css('animation', 'turn 3s linear infinite');
}