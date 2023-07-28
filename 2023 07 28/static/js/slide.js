$(function(){

    for(var i=1; i<=5; i++){
        $("#slide").append("<li><img src='https://loremflickr.com/1000/400?random="+i+"'</li>");
    }

    $(".left").click(function(){
        $("#slide").animate({left:"+=1000px"});
    });
    $(".right").click(function(){
        $("#slide").animate({left:"-=1000px"});
    })
});