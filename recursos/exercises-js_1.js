//Formas de pintar los resultados:
console.log(edadFernandoSimon);


//1. Compara tu edad (o una cualquiera) con la de Fernando Simón. muestra en consola si eres menor, mayor o tienes la misma edad que él.
//if()

let edadFernandoSimon = 57;

let miedad=27;

if  (edadFernandoSimon > miedad) {
    console.log("eres más joven que FS")
}
else if (edadFernandoSimon == miedad) {
    
    console.log("Tienes la misma edad que FS")
}

else{
    console.log("eres mayor que FS")
}



//2. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una string que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
//if(), %

function comprobarpar(x){

    let par= x%2

    if (par==0) {
        document.write( x + " és par")
    }
    else{
        document.write( x + " és impar")

    }

}

comprobarpar(22)


//3. recorre la array y muestra los valores múltiplos de 3 en consola
//for(), if(), %
let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];



for (let i = 0; i < numeros.length; i++) {
    
    let valor = numeros[i]
    if( valor%3 == 0){
    console.log(valor)
    }
    else{

    }
}
//4. Dada la array, escribe una función que encuentre el número menor. (No utilizar Math.min())
//for(), if()

let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];

function menornum(numeros){

    let minimo = numeros[0]

    for (let i = 0; i < numeros.length; i++) {
        
        if(numeros[i]<minimo){
            minimo=numeros[i]
        }     
        
    }

    document.write("El valor minimo es " + minimo)
}


menornum(numeros)

//5. Utilizando la array anterior, encuentra el número más grande. (No utilizar Math.max())
//for(), if()

function mayornum(numeros){
    let maximo = numeros[0]

    for (let i = 0; i < numeros.length; i++) {
        
        if(numeros[i]>maximo){
            maximo=numeros[i]
        }
        
    }

    document.write("El valor maximo es " + maximo)
}

mayornum(numeros)


//6. Utilizando la array anterior, encontrar los números que se repiten, guardarlos en una array (si aun no existen en esta) y mostrarlos en consola
//for(), if(), push(), includes()
// let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];


// let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];


let duplicados = [];

for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] == numeros[j]) {
            if (duplicados.indexOf(numeros[i]) == -1) {
                duplicados.push(numeros[i]);
            }
        }
    }
}

console.log(duplicados);

// console.log(numbers.indexOf(345));

//7. Utilizando la array anterior, elimina los numeros pares
//for(), if(), %, splice()


document.write(numeros)

for (let i = 0; i < numeros.length; i++) {
  
    if (numeros[i]%2 === 0){ 
               
        numeros.splice(i,1)

        i=i-1
             
    }
    
}

//8. Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random() para obtener números aleatorios 
//entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
//repitiendo 36.000 veces esta operación.
//Math.random(), for(), push()

function lanzardados(){

let dado1= Math.floor(Math.random());

console.log(dado1);
    
}


lanzardados()

let apariciones2=[]
let apariciones3=[]
let apariciones4=[]
let apariciones5=[]
let apariciones6=[]
let apariciones7=[]
let apariciones8=[]
let apariciones9=[]
let apariciones10=[]
let apariciones11=[]
let apariciones12=[]



//9. Haz que el ejercicio anterior pase la array obtenida a la función de este ejercicio. Calcula el promedio de todos los lanzamientos de dados.
//for()




//10. Haz una copia de la array del ejercicio 3, ordenala de forma ascendente, y coloca el siguiente número donde le corresponda.
//Array.from(), sort(), splice(), for(), if()


//11. Dado el siguiente objeto, muestra en consola una string con el nombre y apellido.
let mentor = {
    nombre: "Lluís",
    apellido: "Garcia",
    edad: 26,
    poblacion: "Sallent",
    empresa: "Let's Coder",
    hobbies: ["futbol", "codigo", "videojuegos"],
    mascotas: [{
        nombre: "Tuca",
        tipo: "perro",
        sexo: "hembra"
    },
    {
        nombre: "Tam",
        tipo: "perro",
        sexo: "macho"
    }]
};


//12. Dado el objecto anterior, crea una array con todas las keys y luego úsala para mostrar en consola todas las values
//Object.keys(), for()


//13. Dado el objeto anterior, añade las edades a las mascotas. Luego muestra cada una de las mascotas en consola por separado
let edadTuca = 4;
let edadTam = 2;









//ejercicio de FER, tener objectos json en archivos independientes.

// investigar como se puede tener datos en archivo aparte i mostrar json en consola.