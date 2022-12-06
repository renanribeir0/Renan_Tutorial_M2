function tabuada() {
    var n = parseInt(document.getElementById('n').value);
    var comeco = parseInt(document.getElementById('comeco').value);
    var fim = parseInt(document.getElementById('fim').value);
    var tabela = '';
    var resultado = document.getElementById('Tabuada');

    for (var i = comeco; i <= fim; i++) {
        tabela += n + "X" + i + '=' + n * i + '<br />';
        resultado.innerHTML = tabela;
    }
}


function palindromo() {

    var pal = parseInt(document.getElementById('pal').value);
    var resultado = document.getElementById('Palindromo')
    let myFunc = num => Number(num);
    var intArr = Array.from(String(pal), myFunc);
    var tamanho = intArr.length;
    var r = 0;
    for (var i = 0; i < (tamanho / 2); i++) {
        if (intArr[0 + i] != intArr[tamanho - 1 - i]) {
            r = 1;
        }
    }
    if (r == 0) {
        resultado.innerHTML = "É palindromo"
    }
    else {
        resultado.innerHTML = "Não é palindrmo"
    }


}
function pi() {
    var pi = parseInt(document.getElementById('pi').value);
    var resultado = document.getElementById('UmDoisTresPi');
    var r = '';
    for (var i = 1; i < pi; i++) {
        if (i % 3 == 0) {
            r += i + ' PI ';
        }
        else {
            r += i + ' - ';
        }
        resultado.innerHTML = r;
    }


}
function reforma() {
    var larguraAzulejo = parseInt(document.getElementById('larguraAzulejo').value);
    var alturaAzulejo = parseInt(document.getElementById('alturaAzulejo').value);
    var larguraParede = parseInt(document.getElementById('larguraParede').value);
    var alturaParede = parseInt(document.getElementById('alturaParede').value);
    var resultado = document.getElementById('Reforma');
    var d1 = Math.ceil(larguraParede / larguraAzulejo);
    var d2 = Math.ceil(alturaParede / alturaAzulejo);
    var r = Math.ceil((d1 * d2) * (1.05))
    resultado.innerHTML = r;
}