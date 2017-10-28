var cifrar = function (str){
    var stringCrifrada = ""
    for(var i=0;i<str.length;i++){
        var codigoAscii = str.charCodeAt(i);
        if(codigoAscii === 32){
            stringCrifrada += " ";
            
        }else{
            var nuevoAscii = generadorCodigo(codigoAscii);
            if(codigoAscii >= 97 ){
                stringCrifrada += String.fromCharCode(nuevoAscii).toLowerCase();
            }else if(codigoAscii <= 97 && codigoAscii >= 65){
                stringCrifrada += String.fromCharCode(nuevoAscii);                
            }
        }
    }
    return (stringCrifrada);
};
var descifrar = function(str){
    var string = ""
    for(var i = 0 ; i < str.length ; i++){
       var codigoLetra = str.charCodeAt(i);
       var nuevoCodigo = generadorCodigo(codigoLetra);
       if(codigoLetra >= 97){
        string += String.fromCharCode(nuevoCodigo).toLowerCase();
       }else if(codigoLetra <= 97 && codigoLetra >= 65){
        string += String.fromCharCode(nuevoCodigo-14);
       }else{
           string += String.fromCharCode(codigoLetra);
       }
    }
    return string;
}
var generadorCodigo = function(ascii){
    return ((ascii + 33- 65) % 26) +65
};

var frase = "ABeli";
var fraseCifrada  = cifrar(frase);
var fraseDescifrada = descifrar(fraseCifrada);
console.log("La frase cifrada es: "+fraseCifrada);
console.log("La frase descifrada es: " + fraseDescifrada);

// var arr = [72,79,76,122]
// var Numcifrado = []

// var arregloConLetras = []
// arr.forEach((numero)=>{
//     cifrado.push(numero+33)
// })

// cifrado.forEach((number)=>{arregloConLetras.push(String.fromCharCode(number))});

// console.log(cifrado)