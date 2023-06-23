var count = 0;
var count = 0;

var choice1 = 0;
var choice2 = 0;

var last = 0;
var lastChoice = 0;
var lastNum = 0;

var name1 = prompt("당신의 이름은?");
var name2 = "컴퓨터";

var dice = Math.random();

var random = function(min, max){
    return Math.floor( (Math.random() * (max - min +1)) + min);
}

var game = function(){
    for(var num =0; num <= 31;){
    choice1 = Number(prompt("현재 수는 " + num + "입니다. 더하길 원하는 수를 입력해 주세요.\n(1보다 작은 수를 입력하면 1, 3보다 큰 수를 입력하면 3으로 처리됩니다.)"));
        if(choice1 > 3){
            choice1 = 3;
        } else if(choice1 < 1){
            choice1 = 1;
        }
    num += choice1;
    alert(name1 + "이/가" + choice1 + "를 더하여" + num + "이 되었습니다.");
        if(num >= 31){
            last = name1;
            lastChoice = choice1;
            lastNum = num;
            break;
        }
    choice2 = random(1, 3);
    num += choice2;
    alert(name2 + "가" + choice2 + "를 더하여" + num + "이 되었습니다.");
        if(num >= 31){
            last = name2;
            lastChoice = choice2;
            lastNum = num;
        }
    }
}

alert("베스킨~ 라빈스~! 써리~ 원!");
game();

if(last === name1){
    document.getElementById("content").innerHTML = name1 + "이/가" + lastChoice + "을 더하여" + lastNum + "이 되었습니다. <br>" + name2 + "승";
} else{
    document.getElementById("content").innerHTML = name2 + "가" + lastChoice + "을 더하여" + lastNum + "이 되었습니다. <br>" + name1 + "승"; 
}