function mostrarMensaje() {

    const fecha = new Date(); 
    const hora = fecha.getHours(); 

    if(hora >= 0 && hora < 12) {
        texto = "Buenos Días"; 
        imagen = "img/dia.png"
    } else if (hora >= 12 && hora < 18) {
        texto = "Buenas Tardes";
        imagen = "img/tarde.png";
    } else if (hora >= 18 && hora < 24) {
        texto = "Buenas Noches";
        imagen = "img/noche.png";
    } 

    document.images["tiempo"].src = imagen; 
    document.getElementById("txtsaludo").innerHTML = texto; 

}