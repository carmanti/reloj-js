const mostrarReloj = () => {
    let fecha = new Date();
    let h = formatoHora(fecha.getHours());
    let m = formatoHora(fecha.getMinutes());
    let s = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${h}: ${m}: ${s}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia}, ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}
const formatoHora = (hora) => {
    if(hora < 10)
    hora = '0' + hora;
    return hora;
}
setInterval(mostrarReloj,1000);