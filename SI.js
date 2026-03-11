function calc(){
    var num=parseInt(document.getElementById("num").value);
    var rate=parseInt(document.getElementById("rate").value);
    var time=parseInt(document.getElementById("time").value);
     
 var cal=(num*rate*time)/100
document.getElementById("intro").innerHTML="SI is "+cal;

}