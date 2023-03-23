
function recibir(){
    Nombre = document.getElementById("nombre").value
    Cedula = document.getElementById("cedula").value
    HD = document.getElementById("dia").value
    HV = document.getElementById("tarde").value
    HN = document.getElementById("noche").value

    let spanNombre= document.getElementById('Interes1')
    spanNombre.innerHTML=Nombre

    let spanCedula= document.getElementById('Interes2')
    spanCedula.innerHTML=Cedula
    
    
    CalcularF();
}

function CalcularF(){
    PagoD = (parseFloat(HD)*675)
    PagoV = (parseFloat(HV)*700)
    PagoN = (parseFloat(HN)*956.23)
    PagoDHoras= (parseFloat(PagoD)+parseFloat(PagoV)+parseFloat(PagoN)) 
    let spanAlumnos= document.getElementById('CAlumnos')
    spanAlumnos.innerHTML=PagoDHoras
    
    if (PagoDHoras < 85000) {

        DescuentoDAhorro = ((parseFloat(PagoDHoras) * 0.001) / 2 )

        let spanDescuentoA= document.getElementById('Interes3')
        spanDescuentoA.innerHTML=DescuentoDAhorro

        DescuentoDSS = ((parseFloat(PagoDHoras) * 0.0015) /2 )

        let spanDSS= document.getElementById('Interes4')
        spanDSS.innerHTML=DescuentoDSS

        PagoCDescuento =((parseFloat(PagoDHoras) - ((DescuentoDAhorro) + parseFloat(DescuentoDSS))))

        let spanPagoCD= document.getElementById('Interes5')
        spanPagoCD.innerHTML=PagoCDescuento
    } else if (PagoDHoras > 84999 && PagoDHoras < 150001 ) {

        DescuentoDAhorro = ((parseFloat(PagoDHoras) * 0.0015) / 2 )

        let spanDescuentoA= document.getElementById('Interes3')
        spanDescuentoA.innerHTML=DescuentoDAhorro

        DescuentoDSS = ((parseFloat(PagoDHoras) * 0.002) /2 )

        let spanDSS= document.getElementById('Interes4')
        spanDSS.innerHTML=DescuentoDSS

        PagoCDescuento =((parseFloat(PagoDHoras) - ((DescuentoDAhorro) + parseFloat(DescuentoDSS))))

        let spanPagoCD= document.getElementById('Interes5')
        spanPagoCD.innerHTML=PagoCDescuento
    }   else if (PagoDHoras > 150000) {

        DescuentoDAhorro = ((parseFloat(PagoDHoras) * 0.003) / 2 )

        let spanDescuentoA= document.getElementById('Interes3')
        spanDescuentoA.innerHTML=DescuentoDAhorro

        DescuentoDSS = ((parseFloat(PagoDHoras) * 0.0025) /2 )

        let spanDSS= document.getElementById('Interes4')
        spanDSS.innerHTML=DescuentoDSS

        PagoCDescuento =((parseFloat(PagoDHoras) - ((DescuentoDAhorro) + parseFloat(DescuentoDSS))))

        let spanPagoCD= document.getElementById('Interes5')
        spanPagoCD.innerHTML=PagoCDescuento
    }
}