
function recibir(){
    Alumnos = document.getElementById("numero").value
    let spanAlumnos= document.getElementById('CAlumnos')
    spanAlumnos.innerHTML=Alumnos
    
    CalcularF();
}

function CalcularF(){
    for (let i = 0; i < Alumnos; i++){
        var cedula = parseInt(prompt("Ingrese el numero de cedula del alumno " + i));
        var nombre = parseInt(prompt("Ingrese el nombre del alumno " + i));
        var matematicas = parseInt(prompt("Ingrese la nota en matematicas del alumno " + i));
        var fisica = parseInt(prompt("Ingrese la nota en fisica del alumno " + i));
        var programacion = parseInt(prompt("Ingrese la nota en programacion del alumno " + i));

        
     } 
     let FMatematicas =+ parseFloat(matematicas);
        PromedioM = FMatematicas / Alumnos
        console.log(PromedioM)
     
     }