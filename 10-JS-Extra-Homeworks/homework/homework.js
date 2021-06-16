// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
var propiOBJ=Object.keys(objeto)
matriz=[]
for (var i = 0; i < propiOBJ.length; i++) {
  claveValor=[]
claveValor.push(propiOBJ[i])
claveValor.push(objeto[propiOBJ[i]])
matriz.push(claveValor)
}
return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
var nuevoarray = string.split("")
var acumulador= {}
for (var i = 0 ; i< nuevoarray.length;i++) {
  if(!acumulador[nuevoarray[i]]){ 
acumulador[nuevoarray[i]] = 1
  }else{
    acumulador[nuevoarray[i]]=acumulador[nuevoarray[i]] + 1
  }
  
}
return acumulador;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus= []
  var minus= []

  var str= s.split("")
  for(i=0; i<str.length;i++){
    if(str[i]===str[i].toLowerCase()){
      minus.push(str[i])
    }else{
      mayus.push(str[i])
    }
    primero= mayus.join("")
    segundo=minus.join("")

  }
  return primero + segundo

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var array = str.split("")
  var arrayReverse = array.reverse()
  

  var nuevoArray= arrayReverse.join("")

  var otroarray = nuevoArray.split(" ")

  var arrayfinal= otroarray.reverse()
  var Frase= arrayfinal.join(" ")
  return Frase
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
var numstr=numero.toString()
var array = numstr.split("")
var numReverse= array.reverse()
var newStr= numReverse.join("")

if (numstr===newStr){return "Es capicua"}
  else { return "No es capicua"}

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var str= cadena.split("")
  
  var resultado = str.filter(function(letra){
    return letra !=="a"}).filter(function(letra){
      return letra !=="b"}).filter(function(letra){
        return letra !=="c"})

      return resultado.join("")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var cadena = arr
  var ordenar = cadena.sort(function(a, b) {
    return a.length - b.length
});
  return ordenar
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var ambos= []
  //console.log(arreglo1)
  //console.log(arreglo2)
  for(var i=0 ; i < arreglo1.length;i++)
    for(var j=0 ; j< arreglo2.length;j++)
  if(arreglo1[i]===arreglo2[j]){ambos.push(arreglo1[i]|arreglo2[j]) }
   // console.log(ambos)
  return ambos
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

