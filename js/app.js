function convertirHora(hora){
    if(hora === 0){
        return "00"
    }else if(hora >= 1 && hora <=9){
        return `0${hora}`
    }else if(hora >= 13 && hora <= 21){
        return `0${hora-12}`
    }else if(hora >= 22 && hora <= 23){
        return `${hora-12}`
    }
    return hora
}
const obtenerReloj = () => {
    const fecha = new Date
    const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    
    const detalleFecha = document.querySelector('#fecha')
    detalleFecha.textContent = `${semana[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`
    const detalleHoraMinuto = document.querySelector('#horaMinuto')
    let horaMinuto
    horaMinuto = convertirHora(fecha.getHours())
    console.log(horaMinuto)
    if(fecha.getMinutes()<10){
        horaMinuto +=` : 0${fecha.getMinutes()} :`
    }else {
        horaMinuto +=` : ${fecha.getMinutes()} :`
    }
    detalleHoraMinuto.textContent = horaMinuto
    const detalleSegundos = document.querySelector('#segundos')
    if(fecha.getSeconds() < 10){
        detalleSegundos.textContent = `0${fecha.getSeconds()}`
    }else{
        detalleSegundos.textContent = `${fecha.getSeconds()}`
    }
    const detalleAmPm = document.querySelector('#amPm')
    if(fecha.getHours()>=12){
        detalleAmPm.textContent = 'PM'
    }else {
        detalleAmPm.textContent = 'AM'
    }
}

setInterval(obtenerReloj, 1000)

