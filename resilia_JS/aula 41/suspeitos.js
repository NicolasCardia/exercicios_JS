let casoDoCrime = {
  james: ["peroe","meate", "pedirnho"],
  johnny: ["lalas", "las"],
  peter: ["lucas"],
  
  mostraAssassino : function (morto1){
    if(morto1 == casoDoCrime["james"] ){
      return "james é o assassino"
    }else if(morto1 == casoDoCrime["johnny"]){
      return "johny é o assasino"
    }else if(morto1 === casoDoCrime["peter"]){
      return "peter é o assasino"
    }
  }
  

}

  console.log(descobreAssassino("lucas"))


