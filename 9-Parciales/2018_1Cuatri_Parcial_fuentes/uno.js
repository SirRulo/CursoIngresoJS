
function mostrar()
{
    let ancho=prompt("Introduzca el Ancho del rectangulo: ");
    let largo=prompt("Introduzca el Largo del rectangulo: ");
    let perimetro;

    ancho=parseInt(ancho);
    largo=parseInt(largo);

    perimetro=(ancho*2)+(largo*2);

    alert("El Perimetro del rectangulo es: "+perimetro);


}
