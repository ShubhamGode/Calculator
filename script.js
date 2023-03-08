function clearscreen(){
    document.getElementById("screen").value="";
}
function equal()
{
    var eq = document.getElementById("screen").value;
    var mn = document.getElementById("screen").value;
    var p = document.getElementById("screen").value;
    var q = eval(p);
    if (eq)
    {
        document.getElementById("screen").value=eval(eq)
    }
    else
    document.getElementById("screen").value= q;
}
function backspace()
{
    var dl = document.getElementById("screen").value;
    document.getElementById("screen").value = dl.substring(0,dl.length-1);
}
function display(value){
    document.getElementById("screen").value +=value;
}
