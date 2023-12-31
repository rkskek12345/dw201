
window.addEventListener("keypress",function(e){ //엔터 누르면 save함수 동작
    if(e.keyCode==13){
        save();
    }
});

function date_list(place, money, period, satisfaction){
    this.place=place;
    this.money=money;
    this.period=period;
    this.satisfaction=satisfaction;
}
date_list.prototype.view=function(){
    return "<div class='text>'<span class='place_vw'>"+this.place+"</span>"+
    "<span class='money_vw'>"+this.money+"</span>"+
    "<span class='period_vw'>"+this.period+"</span>"+
    "<span class='stf_vw'>"+this.satisfaction+"</span></div>"+
    "<b class='update'><i class='bi bi-wrench'></i></b>"+
    "<b class='save_again hide'><i class='bi bi-download'></i></b>"+
    "<b class='del'><i class='bi bi-trash3'></i></b>";
}

const list = new Array();  // date_list 객체를 저장할 배열 객체 생성

let update_tag='';  
let del_tag='';

function save(){
    var place=document.querySelector("#place");
    var money=document.getElementById("money");
    var period = document.querySelector("#period");
    var stf = document.querySelector("#satisfaction");
//input 태그  객체로 가져오기
    if ( value_check( [place,money,period] ) ) return;

    list.push( new date_list(place.value, money.value, period.value, stf.options[stf.selectedIndex].value ) );

    //input 초기화
    init( [place,money,period,stf] );

    //화면 출력
    screen_show();
}

function screen_show(){
    var ul = document.querySelector("#list");
    //for(var i=0; i<list.length; i++)
    var out="";
    for(var i in list){
        out += "<li class='Dlist' data-idx='"+i+"'>"+list[i].view()+" </li>";
    }
    ul.innerHTML= out;

    update_tag = document.querySelectorAll(".update");
    del_tag =document.querySelectorAll(".del");
    save_tag =document.querySelectorAll(".save_again");

    for(var i=0; i<update_tag.length; i++)
        save_tag[i].addEventListener("click",resave_list);
    for(var i=0; i<update_tag.length; i++)
        update_tag[i].addEventListener("click",update_list);
    for(var i=0; i<del_tag.length; i++){
        del_tag[i].addEventListener("click",delete_list);
    }
}
function resave_list(){
    var place=document.querySelector("#re_place");
    var money=document.querySelector("#re_money");
    var period=document.querySelector("#re_period");
    var stf=document.querySelector("#re_satisfaction");

    if ( value_check( [place,money,period]) ) return

    var idx = this.parentNode.dataset.idx;
    list[idx].place=place.value;
    list[idx].money=money.value;
    list[idx].period=period.value;
    list[idx].satisfaction=stf.options[stf.selectedIndex].value;
    
    //화면출력
    screen_show();
}
function update_list(){
    var sibling = this.nextSibling; // 뒤에 있는 형제태그
    this.classList.add("hide"); //수정아이콘 감추기
    sibling.classList.remove("hide"); // 저장아이콘 보이기
    var idx = this.parentNode.dataset.idx; //현재 수정할 배열의 인덱스 찾기
    var pre_sibling = this.previousSibling;

    pre_sibling.innerHTML="<input type='text' id='re_place' value='"+list[idx].place+"'>"+
    "<input type='text' id='re_money' value='"+list[idx].money+"'>"+
    "<input type='text' id='re_period' value='"+list[idx].period+"'>"+
    "<select id='re_satisfaction'><option value='1'>1</option><option value='2'>2</option>"+
    "<option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select>";

}
function delete_list(){
    var del_idx = this.parentNode.dataset.idx;  // 현재클릭한 태그는 b태그이고 b태그의 부모인 li태그 찾기
    //  부모태그는  parentNode 라고 하면된다.  부모태그의 dataset 값 가져오기
    //list.splice(2,2);  2번인덱스 부터 2개 추출 하기
    list.splice(del_idx,1);
    screen_show();
}

function value_check(input){ // input  값의 유효 확인
    const msg=["데이트 장소를 입력하세요","데이트비용을 입력하세요",
"연애가 처음인가요"]; // input에 미입력시 알림 멘트

    for(var i=0; i<input.length; i++){  
        if( input[i].value==''){ // 장소, 비용, 기간 순으로 미입력 여부 확인
            alert(msg[i]);
            input[i].focus(); // 미입력한 곳에 커서 위치하기
            return true;
        }
    }
    return false;   
}
function init(input){ // input을 초기화
    for(var i=0; i<input.length-1; i++){
        input[i].value='';
    } //input 태그의 value 비우기

    input[3].options[4].selected=true;  // 만족도 기본값 5 설정
    input[0].focus(); // 데이트장소 input에 마우스커서 위치하기
}

window.onload=function(){

};