
let display=document.getElementById("random-number");
function numberGenerator(){
var minm = 100000;
var maxm = 999999;
var randomNumber= Math.floor(Math.random() * (maxm - minm + 1)) + minm;

display.innerHTML=randomNumber;
}

function clearButton(){
    display.innerHTML="";
}
let number =document.getElementById("input");
function numberInput(num){
    number.value+=num;
}
function Clear(){
    number.value="";
}
var first=document.getElementById("font");
var match=document.getElementById("match");
var notMatch=document.getElementById("notMatch");
function submit(){
    
    if(number.value==display.innerHTML){
        first.style="display:none";
        match.style="display:block";
        number.value="";
        display.innerHTML="";
       

    }
    else{
        first.style="display:none";
        notMatch.style="display:block";
        number.value="";
        display.innerHTML="";
    }
}


function back(){
    first.style="display:block";
    match.style="display:none";

}

function back2(){
    first.style="display:block";
    notMatch.style="display:none";
}