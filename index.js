function displayNums(value){
    document.getElementById("input-filed").value+=value;

}
function evaluateEquation() {
    var str=document.getElementById("input-filed").value;
    document.getElementById("input-filed").value=eval(str);

}
function clearTextfiled() {
document.getElementById("input-filed").value="";

}