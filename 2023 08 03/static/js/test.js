$(function(){

    $.getJSON("https://jsonplaceholder.typicode.com/users",function(data){
        $.each(data,function(i,item){
            $(".name").eq(i).data('id',item.id);
            $(".name").eq(i).text(item.name);
            //$("#person_wrap").append("<div class='name' data-id='"+item.id+"'>"+item.name+"<div>");
        });
    });

    $(".name").click(function(){
        var id = $(this).data("id")
        $.getJSON("https://jsonplaceholder.typicode.com/users?id="+id,function(data){
            data = data[0];

            $("#info_name").text(data.name);
            $("#info_username").text(data.username);
            $("#info_email").text(data.email);
            $("#info_street").text(data.address.street);
            $("#info_suite").text(data.address.suite);
            $("#info_city").text(data.address.city);
            $("#info_zipcode").text(data.address.zipcode);
            $("#info_geo").text(data.address.geo.lat+","+data.address.geo.lng);
            $("#info_phone").text(data.phone);
            $("#info_website").text(data.website);
            $("#info_companyNamee").text(data.companyName);
            $("#info_companyBs").text(data.companyBs);

            $("#modal").show();
            // console.log(data[0]);
        });

        $("#modal_colse").click(function(){
            $("#modal").hide();
        });
    });
});