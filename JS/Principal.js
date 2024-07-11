import CL_Personas from "./CL_Persona.js";
import CL_Mayor_Edad from "./CL_Mayor_Edad.js";

let perso1 = new CL_Personas("Luis", 15);
let perso2 = new CL_Personas("Ana", 19);
let perso3 = new CL_Personas("Jose", 21);
let perso4 = new CL_Personas("Carmen", 17);
let perso5 = new CL_Personas("Rosa", 18);
let perso6 = new CL_Personas("Jose", 22);
let perso7 = new CL_Personas("Maria", 17);
let perso8 = new CL_Personas("Luz", 19);
let perso9 = new CL_Personas("Rafael", 23);
let perso10 = new CL_Personas("Liz", 15);
let perso11 = new CL_Personas("Marcos", 20);
let perso12 = new CL_Personas("Leo", 16);

let Mayor_Edad = new CL_Mayor_Edad();
Mayor_Edad.procesarPersonas(perso1);
Mayor_Edad.procesarPersonas(perso2);
Mayor_Edad.procesarPersonas(perso3);
Mayor_Edad.procesarPersonas(perso4);
Mayor_Edad.procesarPersonas(perso5);
Mayor_Edad.procesarPersonas(perso6);
Mayor_Edad.procesarPersonas(perso7);
Mayor_Edad.procesarPersonas(perso8);
Mayor_Edad.procesarPersonas(perso9);
Mayor_Edad.procesarPersonas(perso10);
Mayor_Edad.procesarPersonas(perso11);
Mayor_Edad.procesarPersonas(perso12);

let salida = document.getElementById("salida");

salida.innerHTML += "<br> La cantidad de personas es: " +Mayor_Edad.reporte_Contador();
salida.innerHTML += "<br> La cantidad de personas mayores de edad es: " +Mayor_Edad.reporte_Contador_M();
salida.innerHTML += "<br> El prcoentaje de personas mayores de edad es : " +Mayor_Edad.calcularPorcentaje();"%"