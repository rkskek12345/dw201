const board_img=["img.jpg","img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg",
"img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg","img11.jpg","img12.jpg",
"img.png","img1.png","img2.png","img3.png","img4.png","img5.png","img6.png","img7.png",
"img8.png","img9.png","img10.png","img11.png","img12.png","img13.png","img14.png"];

const board=[];
var gamer=[]; // 참가자 정보 저장

$(function(){
    for(var i=0; i<28; i++){ board.push(0);}
    initBoard();
    draw();
    $("#setBt").click(setOpen);
    $("#dice_bt").click(dice_turn);
    
    
    t=setInterval(() => { //참가자 등록 완료될때까지 감시 하기
        if(gamer.length>0){
            //console.log(gamer);
            $("#dice_bt").attr('disabled',false);
            clearInterval(t);
        }
    }, 50);
});