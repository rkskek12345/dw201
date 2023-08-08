$(function(){

    $.getJSON("https://jsonplaceholder.typicode.com/photos",function(data){
        $.each(data,function(i,item){
            $(".thumbnali").eq(i).data('id',item.id);
            $(".thumbnali").eq(i).text(item.name);

            $("#original").text(data.title);
            $("#title").text(data.title);
            $("#aldId").text(data.aldId);
        });
    });
});