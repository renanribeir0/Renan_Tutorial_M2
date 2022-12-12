$("#adicionar-telefone").on("click", function () {
    $("#telefone").after("(11) 4002 8922");
    $("#adicionar-telefone").remove();
})

$("#altere-endereco").on("click", function () {
    $("#Endereco").after("Butantã");
    $("#altere-endereco").remove();
})


function getDocument() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "https://reqres.in/img/faces/2-image.jpg", true);
    xhttp.send();
}

const url = '/sobremim';

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let lista_resultado = data;
    let endereco = lista_resultado[0].endereco
    let telefone = lista_resultado[0].telefone
    document.getElementById('Endereco').innerHTML = endereco;
    document.getElementById('telefone').innerHTML = telefone;
  })
  .catch(function(error) {
    console.log(error);
  });
  