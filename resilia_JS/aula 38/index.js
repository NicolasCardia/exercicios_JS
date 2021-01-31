var button = document.getElementById("criarPessoa");
let input = document.getElementById("quantidade");



button.addEventListener("click",function(){
    let request = new XMLHttpRequest;
    let array = []
    request.open("GET",`https://randomuser.me/api/?results=${input.value}`);
    request.addEventListener("load",function(){
    var usuario = JSON.parse(request.responseText); // tranforma o conteudo da url de string para objeto 
    console.log(usuario)
    array = usuario.results.map(objeto => objeto.name.first +" " + objeto.name.last);// esta acessando o usuario e pegando os objetos pedidos
   
    // for(i = 0; i < usuario.results.length; i++){
    //     let aux = usuario.results[i].name;
    //     let nome = "";
    //     for (const key in aux) {
    //         nome += aux[key];
    //         nome += " ";
    //     }
        
    // }
   

    console.log(array);
      

})
request.send();

});
document.body.append(button);