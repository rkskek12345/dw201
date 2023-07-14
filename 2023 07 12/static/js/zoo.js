window.onload=function(){
    
    var pre = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];
    pre.addEventListener("click", function(){
        var slideviwe =document.getElementsByClassName("eventslide")[0]; //ul 테그
        var now_left = slideviwe.style.left.split("px")[0]; //현재 left값가져오기
        if( now_left == 0 ) return; // 첫번째 li가 화면에 보이지면 이동안되게
        var left = Number(now_left) + 312; // li 하나당 312px 이기 때문에
        slideviwe.style.left=left+"px";
    });
    next.addEventListener("click", function(){
        var slideviwe =document.getElementsByClassName("eventslide")[0]; //ul 테그
        var now_left = slideviwe.style.left.split("px")[0]; //현재 left값가져오기
        if( now_left == -936 ) return; // 마지막 li가 화면에 보이지면 이동안되게
        var left = now_left - 312; // li 하나당 312px 이기 때문에
        slideviwe.style.left=left+"px";
    });
    
    var search_bt = document.getElementsByClassName("search_button");
    search_bt[0].addEventListener("click",function(){
        var bar = document.querySelectorAll(".search_bar")[0];
        bar.style.display="block";
    })
    var search_close = document.getElementsByClassName("search_close");
    search_close[0].addEventListener("click",function(){
        var bar = document.querySelectorAll(".search_bar")[0];
        bar.style.display="none";
    })
}