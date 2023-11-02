var a=document.getElementById("aa");

function element(value){
    a.value+=value;
}

function empty(){
    a.value="";
}

function result(){
    var b= eval(a.value)
    a.value=b;
}