# Cifrado Cesar
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha

Por ejemplo:

Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG.

## Pseudocódigo.

    Tener una forma de comparar las letras ingresadas por el usuario.
1. Crear dos arreglos, cada uno guarda una versión del alfabeto (Mayusculas || Minúsculas)
    * Puedes crear una función que cree una colección de letras a partir de la a del caso
    * Puedes declarar manualmente cada arreglo.
2. Preguntar al usuario la frase que desea cifrar/descifrar.
3. Asegurar que el usuario ingrese algo y esto no sea solo una cadena de numeros.
4. Llamar a las funciones: Cifrar y Descifrar. 

### Funcion "Cifrar":
    Recibe: Una palabra a cifrar(string);
    Devuelve: Una palabra cifrada con la llave especificada.(33);
I. Tendremos que recorrer la palabra recibida (Usar la estructura de repetición de su preferencia).

II. Para cada letra, seguir el siguiente procedimiento: 
    *  Obtener el código ascii de la letra en cuestión.
    * Preguntar si el código ascii de la letra en cuestión, se encuentra en el rango de los códigos ascii de letras mayúsculas o de letras minusculas.
    * Si no se encuentra en ninguno de estos rangos entonces solo se agregará ese caracter a la cadena final. No se transformará de ninguna forma. 

#### II.1 Si la letra es mayuscula:
1. Obtengo el indice de la letra actual y lo almaceno en alguna variable.
2. Utilizo la formula : 
    * (llave+indiceDeLaLetraActual)%26 
        - Esto me da la posicion de la letra que encripta en el alfabeto.
        - Al sumarle 65 obtengo su código ascii. 
        - Almaceno este nuevo caractér
3. Utilizo el método String.fromCharCode(indiceLetra) para obtener el caractér de la letra descifrada.
4. Concateno el nuevo caracter a la cadena finalWord.

#### II.2 Si la letra es minúscula:
1. Obtengo el indice de la letra actual y lo almaceno en alguna variable.
2. Utilizo la formula : 
    * (llave+indiceDeLaLetraActual)%26 
        - Esto me da la posicion de la letra que encripta en el alfabeto.
        - Al sumarle 97 obtengo su código ascii. 
        - Almaceno este nuevo caractér.
3. Utilizo el método String.fromCharCode(indiceLetra) para obtener el caractér de la letra descifrada.
4. Concateno el nuevo caracter a la cadena finalWord.

III. Regreso la palabra cifrada, guardad en finalWord.

### Funcion "Decifrar":

Recibe: Una palabra a descifrar(string);
    Devuelve: Una palabra descifrada con la llave especificada.(33);

I. Tendremos que recorrer la palabra recibida (Usar la estructura de repetición de su preferencia).

II. Para cada letra, seguir el siguiente procedimiento: 
* Obtener el código ascii de la letra en cuestión.
* Preguntar si el código ascii de la letra en cuestión, se encuentra en el rango de los códigos ascii de letras mayúsculas o de letras minusculas.
* Si no se encuentra en ninguno de estos rangos entonces solo se agregará ese caracter a la cadena final. No se transformará de ninguna forma. 

#### II.1 Si la letra es mayuscula:
1. Obtengo el indice de la letra actual y lo almaceno en alguna variable.
2. Utilizo la formula : 
    * (55 + llave +indiceDeLetra)%26 
        - Esto me da la posicion de la letra que encripta en el alfabeto.
        - Al sumarle 65 obtengo su código ascii. 
        - Almaceno este nuevo caractér
3. Utilizo el método String.fromCharCode(indiceLetra) para obtener el caractér de la letra descifrada.
4. Concateno el nuevo caracter a la cadena finalWord.

#### II.2 Si la letra es minúscula:
1. Obtengo el indice de la letra actual y lo almaceno en alguna variable.
2. Utilizo la formula : 
    * (55 + llave +indiceDeLaLetraActual)%26 
        - Esto me da la posicion de la letra que encripta en el alfabeto.
        - Al sumarle 97 obtengo su código ascii. 
        - Almaceno este nuevo caractér.
3. Utilizo el método String.fromCharCode(indiceLetra) para obtener el caractér de la letra descifrada.
4. Concateno el nuevo caracter a la cadena finalWord.

III. Regreso la palabra descifrada.
