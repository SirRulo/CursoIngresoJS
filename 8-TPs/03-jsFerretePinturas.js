/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let centigrados;
    let resta;

    fahrenheit=document.getElementById('txtIdTemperatura').value;
    fahrenheit=parseInt(fahrenheit);

    centigrados=32;
    resta=fahrenheit-centigrados;

    alert("La temperatura de "+fahrenheit+" Fahrenheit, da un total de "+resta+" Centigrados.");

	
}

function CentigradosFahrenheit () 
{
    let fahrenheit;
    let centigrados;
    let suma;

    centigrados=document.getElementById('txtIdTemperatura').value;
    centigrados=parseInt(centigrados);

    fahrenheit=32;
    suma=centigrados+fahrenheit;

    alert("La temperatura de "+centigrados+" Centigrados, da un total de "+suma+" Fahrenheit.");

	
}

//txtIdTemperatura