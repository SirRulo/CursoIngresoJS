/*Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx
y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".*/
function mostrar()
{
 let nombrePareja1=prompt("Introduzca su nombre: ");
 let nombrePareja2=prompt("Introduzca el nombre de su pareja: ");
 let pesoPareja1=prompt("Introduzca su peso(kg): ");
 let pesoPareja2=prompt("Introduzca el peso(kg) de su pareja: ");
 let sumaKilos;
 let promedioKilos;

 pesoPareja1=parseInt(pesoPareja1);
 pesoPareja2=parseInt(pesoPareja2);

 sumaKilos=pesoPareja1+pesoPareja2;
 promedioKilos=sumaKilos/2;

 alert("ustedes se llaman "+nombrePareja1+" y "+nombrePareja2+" y pesan "+pesoPareja1+" y "+pesoPareja2+" kilos, que sumados son "+sumaKilos+" kilos y el promedio de peso "+promedioKilos);

}
