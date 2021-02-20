//ejercicio 1

let edadFernandoSimon = 57;

let miedad= 27

if  (edadFernandoSimon>miedad) {
    console.log("eres más joven que FS")
}
else if(edadFernandoSimon==miedad) {
    
    console.log("Tienes la misma edad que FS")
}

else{
    console.log("eres mayor que FS")
}

//2



// function comprobarpar(){

//     let x=prompt("escribe un numero");

//     let par= x%2;

//     if (par==0) {
//         document.write( x + " es par ");
//     }
//     else{
//         document.write( x + " es impar ");

//     }

// }

// comprobarpar()

//3

let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];

let multiplosdetres= [];

for (let i = 0; i < numeros.length; i++) {
    
    

    let valor = numeros[i];

    if( valor%3 == 0){

        multiplosdetres.push(valor);    
                        
    }

        
}
console.log(multiplosdetres);
    

//4

function menornum(numeros){

    let minimo = numeros[0]

    for (let i = 0; i < numeros.length; i++) {
        
        if(numeros[i]<minimo){
            minimo=numeros[i]
        }     
        
    }

    document.write("\n El valor minimo es " + minimo )
}


menornum(numeros)

//5

function mayornum(numeros){
    let maximo = numeros[0]

    for (let i = 0; i < numeros.length; i++) {
        
        if(numeros[i]>maximo){
            maximo=numeros[i]
        }
        
    }

    document.write("El valor maximo es " + maximo )
}

mayornum(numeros);


//6

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

console.log(duplicados)

console.log(numeros.indexOf(345))//el resultado es -1 perquè 345 no esta al array numeros.

//7

document.write(numeros)

for (let i = 0; i < numeros.length; i++) {
  
    if (numeros[i]%2 === 0){ 
               
        numeros.splice(i,1)

        i=i-1
             
    }
    
}


document.write("nuevo array" +numeros);

//8

function lanzardados(){

    let dado1= Math.floor(Math.random()*6)+1;
    let dado2= Math.floor(Math.random()*6)+1;
    
    let sumadados= dado1+dado2
    return sumadados
    
    
        
}

    
let arraysuma=[];


for (let i = 0; i < 36000; i++) {
    
    lanzardados()
    arraysuma.push(lanzardados())
    
}
console.log(arraysuma);
//----------------------------

//nº2
let apariciones2=[];
for (let i = 0; i < arraysuma.length; i++) {
    if (arraysuma[i]==2){
        apariciones2.push(arraysuma[i])
    }
    
}

console.log(apariciones2.length)


//nº3
let apariciones3=[];
for (let i = 0; i < arraysuma.length; i++) {
    if (arraysuma[i]==3){
        apariciones3.push(arraysuma[i])
    }
    
}

console.log(apariciones3.length)

//nº4
let apariciones4=[];
for (let i = 0; i < arraysuma.length; i++) {
    if (arraysuma[i]==4){
        apariciones4.push(arraysuma[i])
    }
    
}

console.log(apariciones4.length)

//nº5
let apariciones5=[];
for (let i = 0; i < arraysuma.length; i++) {
    if (arraysuma[i]==5){
        apariciones5.push(arraysuma[i])
    }
    
}

console.log(apariciones5.length)

//nº6
let apariciones6=[];
for (let i = 0; i < arraysuma.length; i++) {
    if (arraysuma[i]==6){
        apariciones6.push(arraysuma[i])
    }
    
}

console.log(apariciones6.length)

//nº7
let apariciones7=[];
for (let i = 0; i < arraysuma.length; i++) {
    if (arraysuma[i]==7){
        apariciones7.push(arraysuma[i])
    }
    
}

console.log(apariciones7.length)

//nº8
let apariciones8=[];
for (let i = 0; i < arraysuma.length; i++) {
    if (arraysuma[i]==8){
        apariciones8.push(arraysuma[i])
    }
    
}

console.log(apariciones8.length)

//nº9
let apariciones9=[];
for (let i = 0; i < arraysuma.length; i++) {
    if (arraysuma[i]==9){
        apariciones9.push(arraysuma[i])
    }
    
}

console.log(apariciones9.length)

//nº10
let apariciones10=[];
for (let i = 0; i < arraysuma.length; i++) {
    if (arraysuma[i]==10){
        apariciones10.push(arraysuma[i])
    }
    
}

console.log(apariciones10.length)

//nº11
let apariciones11=[];
for (let i = 0; i < arraysuma.length; i++) {
    if (arraysuma[i]==11){
        apariciones11.push(arraysuma[i])
    }
    
}

console.log(apariciones11.length)

//nº12
let apariciones12=[];
for (let i = 0; i < arraysuma.length; i++) {
    if (arraysuma[i]==12){
        apariciones12.push(arraysuma[i])
    }
    
}

console.log(apariciones12.length)



// let apariciones2= indices2.length; console.log(apariciones2)