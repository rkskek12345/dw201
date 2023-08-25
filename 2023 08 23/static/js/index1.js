let house=new Object(); //전체 데이터 저장용
const chartColor = ["#0078FF","#3232FF","#7DA5E1","#7B68EE","#28A0FF","#96A5FF","#A0AFFF","#AAB9FF","#B4C3FF","#BECDFF"]

$(function(){
    $.getJSON("./data/index1.json", function(data){
        house=data; //전체 데이터 저장
        var set = new Set(); // 분류만 골라내기 위한 set
        $("#main").append('<div class="expenBox title"><h3>지출내역</h3>'+
        '<span class="categoryText">분류</span>'+
        '<span class="moneyText">금액</span>'+
        '<span class="detailText">내용</span></div>');
        $.each(house.지출,function(i,d){  // 지출 부분 화면 출력
            set.add(d.분류);
            $("#main").append('<div class="detail">'+
            '<span class="categoryText">'+d.분류+'</span>'+
            '<span class="moneyText">'+d.금액.toLocaleString()+'원</span>'+
            '<span class="detailText">'+d.내용+'</span>'+
            '</div>');
        })
        $("#main").append('<div class="incomeBox title"><h3>수입내역</h3>'+
        '<span class="categoryText">분류</span>'+
        '<span class="moneyText">금액</span>'+
        '<span class="detailText">내용</span></div>');
        $.each(house.수입,function(i,d){ // 수입 부분 화면 출력
            set.add(d.분류);
            $("#main").append('<div class="detail">'+
            '<span class="categoryText">'+d.분류+'</span>'+
            '<span class="moneyText">'+d.금액.toLocaleString()+'원</span>'+
            '<span class="detailText">'+d.내용+'</span>'+
            '</div>');
        })

        var cg = Array.from(set);  
        $.each(cg,function(i,c){   // 분류 ul 태그 추가
            $("#category").append('<li><input type="checkbox" name="category" value="'+c+'">'+c+'</li>')
        });
        $("input[name=category]").click(categorySearch);
        //console.log(cg);
    });
    $("#icon").click(function(){  // 사이드 접펼
        $(this).toggleClass("open");
        $("#side").toggleClass("sideopen");
        $("#wrap").toggleClass("sideactive");
    });

    $("#word").on("keyup",keywordSearch);// input 입력
    $("#money").on("keyup",moneyBelow); // 금액 입력 부분 

});

function categorySearch(){
    var ctg = []; //선택 한 분류들 저장 할 배열

    $("input[name=category]:checked").each(function(){
        ctg.push($(this).val());
    });

    $(".detail").filter(function(){
        var isShow=true;
        //배열에 존재하는 값인지 아닌지 확인 하는 방법은?
        var text= $(this).find(".categoryText").text();
        //전체 글에서 분류 적힌 부분 찾기
        if( ctg.indexOf(text) == -1 && ctg.length!==0) isShow=false;

        $(this).toggle(isShow);
    });
}

function moneyBelow(){
    var moneyB= $(this).val();//입력한 금액 가져오기
    if(moneyB !=''){    //금액 입력했다면
        $(".detail").filter(function(){ //필터처리
            var isShow=true;
            var m = $(this).find(".moneyText").text().replace("원","").replace(/,/g,"");
            //나는 화면에 천단위콤마 해놓아서 , 제거 하는거까지 한것
            if( Number(moneyB) < Number(m) ) isShow=false;
            $(this).toggle( isShow );
        });
    }
}

function keywordSearch(){
    var word = $(this).val();
    
    $(".detail").filter(function(){

        $(this).toggle( $(this).text().indexOf(word) > -1);
    });
}

function showList(){
    $("#main").show();
    $("#mychart").hide();
}
let house_chart='';
function showChart(){
    $("#main").hide();
    $("#mychart").show();
    if(house_chart == ''){ //차트가 이미 그려졌다면 실행 안하기
        var ctx = $("#mycanvas")[0];
        var ctx1 = $("#incomeChart")[0];

//분류와 분류별 금액 총액 구하기 를 한다.
var setE = new Set(); // 지출 분류
var totalE=new Array(); //지출 분류 별 총 금액
var setA = new Set();
var totalA=new Array(); 
        $.each(house.지출, function(idx, data){
            var 분류 = data.분류;
            var 금액 = Number(data.금액);
            if( setE.has(분류)){ //set에 해당 분류가 저장되어있다면 true
                totalE[분류] += 금액; //분류별 금액 누적
            }else{
                totalE[분류]=금액;
            }
            setE.add(분류);
        });

        house_chart = new Chart(ctx,{
            type:"pie",
            data:{
                labels: Array.from(setE),
                datasets:[
                    {
                        data: Object.values(totalE),
                        backgroundColor:chartColor,
                    }
                ]
            }
        });
        $.each(house.수입, function(idx, data){
            var 분류 = data.분류;
            var 금액 = Number(data.금액);
            if( setA.has(분류)){ //set에 해당 분류가 저장되어있다면 true
                totalA[분류] += 금액; //분류별 금액 누적
            }else{
                totalA[분류]=금액;
            }
            setA.add(분류);
        });

        house_chart = new Chart(ctx1,{
            type:"pie",
            data:{
                labels: Array.from(setA),
                datasets:[
                    {
                        data: Object.values(totalA),
                        backgroundColor:chartColor,
                    }
                ]
            },
        });
    }
}
