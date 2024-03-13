//alert("Hola este es mi Javascript");

//let nombre = "Emily";
//nombre = "Maria";

//var nombre1 = "Wuinder";

//const nombre2 = "Ayame";
//nombre2 = "Maria";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//SELECCIONAR ELEMENTOS

let contenidoTitulo = "Inicio";

let titulo = document.querySelector(".logo")
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Inicio"){
titulo.innerHTML = "Otro";
} else{
    console.log("no se cumple");
}

//FUNCIONES

let nombre = "Emi";
let edad = "29";
let carrera = "Chocolate";

let parrafo = document.querySelector(".seccion1");


function cambiarTexto(nombre, edad, carrera) {
    let contenido = 'Me llamo ${nombre} Tengo ${edad} años estoy iniciando la ${carrera} de desarollo web';
    
    return contenido;
}