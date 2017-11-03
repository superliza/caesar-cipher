
/*
    La función crearAlfabeto genera un arreglo con todo el alfabeto, 
    segun el valor Ascii de la A que pasemos    
    ascii para A(mayuscula) = 65;
    ascii para a (minuscula) = 97;
*/

/*
    Ingresar una frase para cifrarla. 
    La frase debe cifrarse con dos casos: Si son mayusculas, si son minusculas. 
    Los caracteres especiales y también los numeros no deben ser cifrados. 
*/
var crearAlfabeto = function (asciiA){
    var alfabeto = []
    for(var i = 0 ; i < 26 ; i++){
        var caracter = String.fromCharCode(i + asciiA);
        alfabeto.push(caracter);
    }
    return alfabeto;
}
var searchingLetter = function(arr,element){
    var position = 0;
    for (var i = 0; i < arr.length; i++) {
        if (element === arr[i]){
            position = i;
        }    
    }
    return position;
}
var cipher = function(word){
    var finalWord = "";
    for (var i = 0; i < word.length ; i += 1){
        // Obtener el codigo ascii de la letra actual. 
        var charCode = word.charCodeAt(i);
        /* Preguntaremos si es una letra mayuscula o minuscula 
            Las variables isUpperCase y isLowerCase guardan un valor boleano de true o false 
        */
        var isUpperCase = (charCode >= 65 && charCode < 97);
        var isLowerCase = (charCode >= 97 && charCode <=122);
         /* En las siguientes sentencias compararemos los siguientes casos
            * Si la letra es mayuscula (isUpperCase === true), entonces...
            * Si la letra es minuscula (isLowerCase === tre), entonces...
            * Si no es una letra, el caracter actual, lo concatenámos tal cual a la palabra 
            final.No lo ciframos.
        */
        if(isUpperCase){
            var charAtIndex = word.charAt(i);
            /*  
                1. Obtengo el indice de la letra actual y lo almaceno en letterIndex.
                2. (33+letterIndex)%26: Esto me da la posicion de la letra en el alfabeto
                    (la guardo en encryptedLetterIndex).Al sumarle 65 obtengo su código ascii. 
                3. con el método String.fromCharCode(encryptedLetterIndex) obtengo el caracter 
                de la letra descifrada.
                4. Concateno el nuevo caracter a la cadena finalWord
            */
            //1
            var letterIndex = searchingLetter(lettersUpperCase,charAtIndex);
            //2
            var encryptedLetterIndex = (letterIndex +33)%26 + 65;
            //3
            var encryptedLetter = String.fromCharCode(encryptedLetterIndex);
            //4
            finalWord+=encryptedLetter;

        }else if(isLowerCase){  
             /*  
                1. Obtengo el indice de la letra actual y lo almaceno en letterIndex.
                2. (33+letterIndex)%26: Esto me da la posicion de la letra en el alfabeto
                    (la guardo en encryptedLetterIndex).Al sumarle 97 obtengo su código ascii. 
                3. con el método String.fromCharCode(encryptedLetterIndex) obtengo el caracter 
                de la letra descifrada.
                4. Concateno el nuevo caracter a la cadena finalWord
            */
            //1
            var letterIndex = searchingLetter(lettersLowerCase,word.charAt(i));
            //2
            var encryptedLetterIndex = (letterIndex + 33)%26 +97 ;
            //3
            var encryptedLetter = String.fromCharCode(encryptedLetterIndex);
            //4
            finalWord+=encryptedLetter;
        }else{
            //Si ninguno de los casos se cumple, solo concateno el caracter a final word.
            finalWord += word[i];
        }
    }
    //Finalmente regreso un nuevo string con la palabra cifrada.
    return finalWord;
}
var decipher = function(word){
    //La variable finalWord guardará la palabra descifrada.
    var finalWord = "";
    //Este for recorre el parametro word, trabajando sobre cada letra.
    for (var i = 0;i < word.length ; i += 1){
        // 1. Obtenemos el codigo ascii de la letra actual de la palabra
        var charCode = word.charCodeAt(i);
        // Preguntaremos si es una letra mayuscula o minuscula 
        //Las variables isUpperCase y isLowerCase guardan un valor boleano de true o false 
        var isUpperCase = (charCode >= 65 && charCode < 97);
        var isLowerCase = (charCode >= 97 && charCode <=122 )
        /* En las siguientes sentencias compararemos los siguientes casos
            * Si la letra es mayuscula (isUpperCase === true), entonces...
            * Si la letra es minuscula (isLowerCase === tre), entonces...
            * Si no es una letra, el caracter actual, lo concatenámos tal cual a la palabra 
            final.No lo desciframos.
        */
        if(isUpperCase){
            /*  
                1. Obtengo el indice de la letra actual y lo almaceno en letterIndex.
                2. (97+letterIndex)%26: Esto me da la posicion de la letra en el alfabeto
                    (la guardo en encryptedLetterIndex).Al sumarle 65 obtengo su código ascii. 
                3. con el método String.fromCharCode(encryptedLetterIndex) obtengo el caracter 
                de la letra descifrada.
                4. Concateno el nuevo caracter a la cadena finalWord
            */
            /*1*/
            var letterIndex = searchingLetter(lettersUpperCase,word.charAt(i));                
            /*2*/
            var unencryptedLetterIndex = (97+letterIndex)%26+65;
            /*3*/
            var decipheredLetter = String.fromCharCode(unencryptedLetterIndex);
            /*4*/
            finalWord+=decipheredLetter;
        }else if(isLowerCase){
            /*  
                1. Obtengo el indice de la letra actual y lo almaceno en letterIndex.
                2. (97+letterIndex)%26: Esto me da la posicion de la letra en el alfabeto
                    (la guardo en encryptedLetterIndex).Al sumarle 97 obtengo su código ascii. 
                3. con el método String.fromCharCode(encryptedLetterIndex) obtengo el caracter 
                de la letra descifrada.
                4. Concateno el nuevo caracter a la cadena finalWord
            */
            /*1*/
            var letterIndex = searchingLetter(lettersLowerCase,word.charAt(i));
            /*2*/
            var unencryptedLetterIndex = (97+letterIndex)%26+97;
            /*3*/         
            var decipheredLetter = String.fromCharCode(unencryptedLetterIndex)  
            /*4*/
            finalWord += decipheredLetter;
        }else{
            finalWord+= word[i]; 
        }
    }
    return finalWord;
}


/* LettersUpperCase almacena un arreglo de letras mayusculas, obtenido a partir
 del codigoAscii de la letra A mayuscula.(65)*/
var lettersUpperCase = crearAlfabeto(65);
/* LettersLowerCase almacena un arreglo de letras minusculas, obtenido a partir
 del codigoAscii de la letra a minuscula.(97)*/
var lettersLowerCase = crearAlfabeto(97);

do{
    var quote = prompt("Hola ingresa una frase, no cifraré solo numeros ni caracteres especiales.");
    if(quote === "" || !isNaN(quote)){
        alert("ingresa una frase valida para ser descifrada.");
    }  
}while(!isNaN(quote) || quote === "");

var encryptedWord = cipher(quote);
document.write("<h1>Frase cifrada: "+ encryptedWord + "</h1><br>");
console.log("\n\nLa frase ingresada, tras ser cifrada es "+ encryptedWord + "\n\n");
var unencryptedWord = decipher(encryptedWord);
document.write("<h1>Frase descifrada:  " + unencryptedWord + "</h1><br>");
console.log(encryptedWord);
