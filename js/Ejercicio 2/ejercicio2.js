
let uno = 0
let dos = 0
let tres = 0
let cuatro = 0
let cinco = 0
let seis = 0
let siete = 0
let ocho = 0
let nueve = 0
let diez = 0 
let once = 0 
let doce = 0


function recibir(){
    Inicial = document.getElementById("numero").value
    let spanAlumnos= document.getElementById('CAlumnos')
    spanAlumnos.innerHTML=Inicial
    
    CalcularF();
}

function CalcularF(){
   
        uno = (parseFloat(Inicial) + 250) * 1.0125
        interesUno= (parseFloat(Inicial) + 250) * 0.0125
        let spanTipoA= document.getElementById('Vuno')
        spanTipoA.innerHTML=uno
        let spanInteresUno= document.getElementById('Interes1')
        spanInteresUno.innerHTML=interesUno

        dos = (parseFloat(uno) + 250) * 1.0125
        interesDos= (parseFloat(uno) + 250) * 0.0125
        let spanValor2= document.getElementById('Vdos')
        spanValor2.innerHTML=dos
        let spanInteresDos= document.getElementById('Interes2')
        spanInteresDos.innerHTML=interesDos

        tres = (parseFloat(dos) + 250) * 1.0125
        interesTres= (parseFloat(dos) + 250) * 0.0125
        let spanValor3= document.getElementById('Vtres')
        spanValor3.innerHTML=tres
        let spanInteresTres= document.getElementById('Interes3')
        spanInteresTres.innerHTML=interesTres

        cuatro = (parseFloat(tres) + 250) * 1.0125
        interesCuatro= (parseFloat(tres) + 250) * 0.0125
        let spanValor4= document.getElementById('Vcuatro')
        spanValor4.innerHTML=cuatro
        let spanInteresCuatro= document.getElementById('Interes4')
        spanInteresCuatro.innerHTML=interesCuatro
        
        cinco = (parseFloat(cuatro) + 250) * 1.0125
        interesCinco= (parseFloat(cuatro) + 250) * 0.0125
        let spanValor5= document.getElementById('Vcinco')
        spanValor5.innerHTML=cinco
        let spanInteresCinco= document.getElementById('Interes5')
        spanInteresCinco.innerHTML=interesCinco

        seis = (parseFloat(cinco) + 250) * 1.0125
        interesSeis= (parseFloat(cinco) + 250) * 0.0125
        let spanValor6= document.getElementById('Vseis')
        spanValor6.innerHTML=seis
        let spanInteresSeis= document.getElementById('Interes6')
        spanInteresSeis.innerHTML=interesSeis

        siete = (parseFloat(seis) + 250) * 1.0125
        interesSiete= (parseFloat(seis) + 250) * 0.0125
        let spanValor7= document.getElementById('Vsiete')
        spanValor7.innerHTML=siete
        let spanInteresSiete= document.getElementById('Interes7')
        spanInteresSiete.innerHTML=interesSiete

        ocho = (parseFloat(siete) + 250) * 1.0125
        interesOcho= (parseFloat(siete) + 250) * 0.0125
        let spanValor8= document.getElementById('Vocho')
        spanValor8.innerHTML=ocho
        let spanInteresOcho= document.getElementById('Interes8')
        spanInteresOcho.innerHTML=interesOcho

        nueve = (parseFloat(ocho) + 250) * 1.0125
        interesNueve= (parseFloat(ocho) + 250) * 0.0125
        let spanValor9= document.getElementById('Vnueve')
        spanValor9.innerHTML=nueve
        let spanInteresNueve= document.getElementById('Interes9')
        spanInteresNueve.innerHTML=interesNueve

        diez = (parseFloat(nueve) + 250) * 1.0125
        interesDiez= (parseFloat(nueve) + 250) * 0.0125
        let spanValor10= document.getElementById('Vdiez')
        spanValor10.innerHTML=diez
        let spanInteresDiez= document.getElementById('Interes10')
        spanInteresDiez.innerHTML=interesDiez

        once = (parseFloat(diez) + 250) * 1.0125
        interesOnce= (parseFloat(diez) + 250) * 0.0125
        let spanValor11= document.getElementById('Vonce')
        spanValor11.innerHTML=once
        let spanInteresOnce= document.getElementById('Interes11')
        spanInteresOnce.innerHTML=interesOnce

        doce = (parseFloat(once) + 250) * 1.0125
        interesDoce= (parseFloat(once) + 250) * 0.0125
        let spanValor12= document.getElementById('Vdoce')
        spanValor12.innerHTML=doce
        let spanInteresDoce= document.getElementById('Interes12')
        spanInteresDoce.innerHTML=interesDoce
        } 