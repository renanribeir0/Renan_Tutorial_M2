/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
const g = 10;

function alturaEtempo() {
  var VelocidadeInicial = Number(document.getElementById("VelocidadeInicial").value);

  var tempo = (VelocidadeInicial / g);
  var altura = ((VelocidadeInicial * VelocidadeInicial) / (2 * g));


  document.getElementById("saidaLancamento").innerHTML = `Sua altura será de ${altura} metros e seu tempo será de ${tempo} segundos.`;
}

function vertice(){
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);

  var xv = (-b)/(2*a);
  var yv = (-((b**2) - 4*a*c))/(4*a);

  document.getElementById("saidaVertice").innerHTML = `Xvertice = ${xv} e Yvertice = ${yv}`;
}

function Conversao()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");
 
 if(document.getElementById("CPF").checked==true)
  resp.innerHTML = CPF(num);
 if(document.getElementById("FPC").checked==true)
  resp.innerHTML = FPC(num);
}
function CPF(x)
{
 return (1.8*x + 32);
}

function FPC(x)
{

 return ( (x-32)*5/9 );
}

function energia(){
  var quant = parseInt(document.getElementById('qt').value);
  var uni = parseInt(document.getElementById('un').value);
  var valor = quant*uni;
  document.getElementById("valor").innerHTML = `Valor = ${valor} Kwh`;

  if(valor>100 && valor<=200){
      var nvalor = valor + (valor*25/100);
      document.getElementById("acres").innerHTML = `Valor com acréscimo de 25% = ${nvalor} Kwh`;
  }
  else if(valor>200){
      var nvalor = valor + (valor*50/100);
      document.getElementById("acres").innerHTML = `Valor com acréscimo de 50% = ${nvalor} Kwh`;
  }
  else{
      document.getElementById("acres").innerHTML = `Nenhum acréscimo feito`;
  }
}
