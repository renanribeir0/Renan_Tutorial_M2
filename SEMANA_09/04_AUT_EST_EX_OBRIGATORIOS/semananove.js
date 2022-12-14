function valorPresente(){
var fv = parseInt(document.getElementById('fv').value);
var jc = parseInt(document.getElementById('jc').value);
var t = parseInt(document.getElementById('t').value);
var resultado=document.getElementById('q1')
var pv=(fv)/(Math.pow((1+(jc/100)),t))
resultado.innerHTML=pv
}


function valorFuturo(){
    var pv = parseInt(document.getElementById('pv').value);
    var jc = parseInt(document.getElementById('jc').value);
    var t = parseInt(document.getElementById('t').value);
    var resultado=document.getElementById('q1')
    var fv=(pv)*(Math.pow((1+(jc/100)),t))
    resultado.innerHTML=fv
}

function juros(){
var p = parseInt(document.getElementById('p').value);
var i = parseInt(document.getElementById('i').value);
var d = parseInt(document.getElementById('d').value);
var resultado=document.getElementById('q2')
var juros=p*(i/100)*(d/360)
resultado.innerHTML=juros

}


function montante(){
    var p = parseInt(document.getElementById('p').value);
    var i = parseInt(document.getElementById('i').value);
    var d = parseInt(document.getElementById('d').value);
    var resultado=document.getElementById('q2')
    var montante=p*(1+((i/100)*(d/360)))
    resultado.innerHTML=montante
}


function maluca(){
var s = document.getElementById('s').value;
var resultado=document.getElementById('q3')
var r='';
for(var i=0;i<s.length;i++){
    for(var j=0;j<i;j++){
        r+='&nbsp &nbsp';
    }
r+=s[i]+'<br>'
}
resultado.innerHTML=r;
}



function binario(){
    var x = parseInt(document.getElementById('x').value);
    var resultado=document.getElementById('q4')
    var r=''
    var base=128
    while(base>=1){
        if(x>=base){
            r+='1'
            x-=base
            base=base/2
        }
        else{
            r+='0'
            base=base/2
        }
    }

    resultado.innerHTML=r;
}
