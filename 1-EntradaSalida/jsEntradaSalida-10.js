/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let porcentaje;
	let resultado;
	
	sueldo=document.getElementById('txtIdImporte').value;
	sueldo=parseInt(sueldo);
	
	porcentaje=(sueldo*25)/100;
	resultado=sueldo-porcentaje;

	document.getElementById('txtIdResultado').value=resultado;
}
