
function mostrar()
{
    let longitud1=prompt("Introduzca la Longitud de la base del triangulo: ");
    let longitud2=prompt("Introduzca la Longitud del lado derecho del triangulo: ");
    let longitud3=prompt("Introduzca la Longitud del lado izquierdo del triangulo: ");
    let perimetro;

    longitud1=parseInt(longitud1);
    longitud2=parseInt(longitud2);
    longitud3=parseInt(longitud3);

    perimetro=longitud1+longitud2+longitud3;

    alert("El Perimetro del triangulo es: "+perimetro);


}
