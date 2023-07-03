
// 기본 배열, 모든 이미지를 다 가지고있는 기본배열
const image=["img (1).jpg","img (2).jpg","img (3).jpg","img (4).jpg","img (5).jpg",
"img (6).jpg","img (7).jpg","img (8).jpg","img (9).jpg","img (10).jpg","img (11).jpg",
"img (12).jpg","img (13).jpg","img (14).jpg","img (15).jpg","img (16).jpg","img (17).jpg",
"img (18).jpg","img (19).jpg","img (20).jpg","img (21).jpg","img (22).jpg","img (23).jpg",
"img (24).jpg","img (25).jpg","img (26).jpg","img (27).jpg","img (28).jpg","img (29).jpg",
"img (30).jpg","img (31).jpg","img (32).jpg"];

const kind = ["고양이","고양이","고양이","고양이","고양이","고양이",
"고양이","고양이","고양이","고양이","고양이","강아지","강아지","강아지","강아지","강아지",
"강아지","강아지","강아지","강아지","강아지","강아지","강아지","강아지","강아지","강아지",
"강아지","고양이","고양이","고양이","고양이","고양이"];


let 토너먼트1=new Array(); // 현재 토너먼트
let 토너먼트2=new Array(); // 다음 토너먼트 (현재 토너먼트에서 선택한 것)
let 순서=new Array();
let round = 32; // 현재 몇강?( 처음은 32강)
let count = 1; // 현재 순서 (처음은 1번)

function 순서섞기(){
    for(var i=1; i<=round; i++){
        var tmp = Math.floor(Math.random() * round);
        if( 순서.indexOf(tmp) == -1){
            순서.push(tmp);
        }else{
            --i;
        }
    }
}
function 태그선택(id){
    return document.getElementById(id);
}

window.onload=function(){
    var title = 태그선택("title");
    title.innerHTML=round+"강 "+count+"/"+(round/2);

    순서섞기();
    show();
    //이미지 클릭 이벤트 등록
    var left=태그선택("left");
    var right=태그선택("right");
    left.addEventListener("click",선택);
    right.addEventListener("click",선택);
}

function 선택(){
    count++;
    show();
}
function show(){
    var left= 태그선택("leftimg");
    var right= 태그선택("rightimg");
    var leftText=태그선택("leftText");
    var rightText=태그선택("rightText");

    left.src="./static/image/"+image[순서[count*2-2]];
    right.src="./static/image/"+image[순서[count*2-1]];
    leftText.innerHTML=kind[순서[count*2-2]];
    rightText.innerHTML=kind[순서[count*2-1]];
}
