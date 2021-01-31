function somaMista( arr )
{
var soma = 0;
  
for(i = 0; i < arr.length; i++){
    soma += parseInt(arr[i]); //parseInt transforma string em números
  }
  return soma;
}