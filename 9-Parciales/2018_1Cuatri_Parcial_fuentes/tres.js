function mostrar()
{
    let precio=prompt("Introduzca un Precio: ");
    let porcentaje=prompt("Introduzca el Porcentaje de Descuento: ");
    let PrecioDescontado;
    let PrecioFinal;

    precio=parseInt(precio);
    porcentaje=parseInt(porcentaje);

    PrecioDescontado=precio*porcentaje/100;
    PrecioFinal=precio-PrecioDescontado;

    PrecioFinal=document.getElementById('elPrecioFinal').value=PrecioFinal;


}

//elPrecioFinal