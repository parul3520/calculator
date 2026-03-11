var user=document.getElementById("in");
var x,op,variable;
var num1,num2;


function btn(x){
    user.value=user.value+x;
}



function cal(variable){
num1=parseInt(user.value);
user.value="";
op=variable;
}




function equal(){
    num2=parseInt(user.value);

    
    if(op=="+")
    {
        user.value=num1+num2;
    }
    else if(op=="-")
    {
        user.value=num1-num2;
    }
    else if(op=="*"){
        user.value=num1*num2;
    }
    else if(op=="/")
    {
        user.value=num1/num2;
    }
}

function clr(){
    num1="";
    num2="";
    user.value="";
}