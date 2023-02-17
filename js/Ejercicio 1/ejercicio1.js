
let tipoA = 0
let tipoB = 0
let tipoC = 0
let tipoD = 0



function recibir(){
    Alumnos = document.getElementById("numero").value
    let spanAlumnos= document.getElementById('CAlumnos')
    spanAlumnos.innerHTML=Alumnos
    
    CalcularF();
}

function CalcularF(){
    for (let i = 0; i < Alumnos; i++){
        var neto = parseInt(prompt("Escriba el peso del alumno " + i))
        if (neto < 41) {
            let spanTipoA= document.getElementById('ATipoA')
            tipoA++
            let final = tipoA / Alumnos*100;
            spanTipoA.innerHTML=final
        } else if(neto > 40 && neto < 51) {
            let spanTipoB= document.getElementById('ATipoB')
            tipoB++
            let final = tipoB / Alumnos*100;
            spanTipoB.innerHTML=final
        } else if(neto > 50 && neto < 60) {
        let spanTipoC= document.getElementById('ATipoC')
        tipoC++
        let final = tipoC / Alumnos*100;
        spanTipoC.innerHTML=final
        }else if(neto > 59) {
        let spanTipoD= document.getElementById('ATipoD')
        tipoD++
        let final = tipoD / Alumnos*100;
        spanTipoD.innerHTML=final
    }
    }
}