const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene','Feb', 'Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;

    document.getElementById('fecha').innerHTML = fechaTexto;
}

const formatoHora = (hora) =>{
    if(hora < 10)
        hora = '0' + hora;
    return hora;
}

setInterval(mostrarReloj, 1000); 

