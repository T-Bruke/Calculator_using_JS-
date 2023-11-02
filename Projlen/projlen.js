function length(){
    var a=document.getElementsByName("pp")[0].value;
    var b=document.getElementById("f");
    b.innerHTML=a.length;
}

function replace(){
    var a=document.getElementsByName("pp")[0].value;
    var b=document.getElementById("f")
    b.innerHTML=a.replace(a,"fgjyujuj");
}

function uppercase(){
    var a=document.getElementsByName("pp")[0].value;
    var b=document.getElementById("f")
    b.innerHTML=a.toUpperCase();
}

function lowercase(){
    var a=document.getElementsByName("pp")[0].value;
    var b=document.getElementById("f")
    b.innerHTML=a.toLowerCase();
}


