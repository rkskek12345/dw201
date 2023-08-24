let house=new Object();

$.getJSON("./data/index1.json",function(data){
    console.log(data);

});

$(function(){
   
    $("#icon").click(function(){
        $(this).toggleClass("open");
        $("#side").toggleClass("sideopen");
    });

});

