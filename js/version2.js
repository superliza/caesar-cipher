function crearAlfabeto (asciiA){
    var alfabeto = []
    for(var i = 0 ; i < 26 ; i++){
        var caracter = String.fromCharCode(i + asciiA);
        alfabeto.push(caracter);
    }
    return alfabeto;
}
// La función crearAlfabeto genera un arreglo con todo el alfabeto, segun el valor Ascii de la A que pasemos 
// ascii para A(mayuscula) = 65;
// ascii para a (minuscula) = 97;
var lettersUpperCase = crearAlfabeto(65);
var lettersLowerCase = crearAlfabeto(97);
//Ingresar una frase para cifrarla. 
//La frase debe cifrarse con dos casos: Si son mayusculas, si son minusculas 
//Debo verificar si una letra es mayuscula o minuscula (recorriendo)
function searchingLetter (arr,element){
    var position = 0;
    for (var i = 0; i < arr.length; i++) {
        if (element === arr[i])
          position = i;
      }
    return position;
} 
//CIFRAR 

//Buscar la letra actual del string en el arreglo de letras Mayusculas
// searchingLetter(lettersUpperCase,'B')
// De encontrarse estaria regresando el indice correspondiente a la letra (X de nuestra formula);
// Qué hacemos para obtener el nuevo caracter. 
//1. Usar la formula (indice + llave)%26
// 2. acceder al indice del arreglo y concatenar a un string final ese valor. 
//Si no la encuentra preguntaría si esta en el arreglo de minusculas.
//searchingLetter(lettersLowerCase,'b')
//de encontrarlo regresaría el indice correspondiente. 
function cipher (word){
    var finalWord = "";
    for (var i = 0;i < word.length ; i ++){
        var charCode = word.charCodeAt(i);
        if(charCode >= 65 && charCode < 97 ){

            var charAtIndex = word.charAt(i);
            var letterIndex = searchingLetter(lettersUpperCase,charAtIndex);
            var encryptedLetterIndex = (letterIndex + 33)%26;
            var encryptedLetter = lettersUpperCase[encryptedLetterIndex];
            finalWord+=encryptedLetter;

        }else if(charCode >= 97 && charCode <= 122){
            
            var letterIndex = searchingLetter(lettersLowerCase,word.charAt(i));
            var encryptedLetterIndex = (letterIndex + 33)%26;
            var encryptedLetter = lettersLowerCase[encryptedLetterIndex];
            finalWord+=encryptedLetter;

        }else{
            finalWord += word[i];
        }
    }
    return finalWord;
}
// Descifrar 
//Buscar la letra actual del string en el arreglo de letras Mayusculas
// searchingLetter(lettersUpperCase,'B')
// De encontrarse estaria regresando el indice correspondiente a la letra (X de nuestra formula);
// Qué hacemos para obtener el nuevo caracter. 
//1. Usar la formula (indice - llave)%26
// 2. acceder al indice del arreglo y concatenar a un string final ese valor. 
//Si no la encuentra preguntaría si esta en el arreglo de minusculas.
//searchingLetter(lettersLowerCase,'b')
//de encontrarlo regresaría el indice correspondiente. 

function descifrar (word){
    var finalWord = "";

    for (var i = 0;i < word.length ; i ++){

        var charCode = word.charCodeAt(i);
        var isUpperCase = (charCode >= 65 && charCode < 97);
        var isLowerCase = (charCode >= 97 && charCode <=122 )

        if(isUpperCase){
            var letterIndex = searchingLetter(lettersUpperCase,word.charAt(i));
            var encryptedLetterIndex = (97+letterIndex)%26;
            console.log(encryptedLetterIndex);
            var decipheredLetter = lettersUpperCase[encryptedLetterIndex];
            finalWord+=decipheredLetter;
        }else if(isLowerCase){
            var letterIndex = searchingLetter(lettersLowerCase,word.charAt(i));
            var encryptedLetterIndex = (97+letterIndex)%26;   
            var decipheredLetter = lettersLowerCase[encryptedLetterIndex];     
            finalWord += decipheredLetter;
        }else{
            finalWord+= word[i]; 
        }
    }
    return finalWord;
}
var quote = "Hello world!"
console.log(quote);
var palabraCifrada = cipher(quote);
console.log(palabraCifrada);
var palabraDescifrada = descifrar(palabraCifrada);
console.log(palabraDescifrada);

