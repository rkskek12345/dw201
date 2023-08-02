$(function(){
    $("#keyword").on("keyup", function() { 
        var value = $(this).val();  
        $(".data img").filter(function() {
            var isSearch=$(this).attr("alt").indexOf(value) > -1;
            $(this).parent().toggle(isSearch);
        });
    });  
});