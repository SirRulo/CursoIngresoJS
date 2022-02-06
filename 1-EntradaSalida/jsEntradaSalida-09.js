/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let porcentaje;
	let resultado;
	
	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	
	porcentaje=(sueldo*10)/100;
	resultado=sueldo+porcentaje;

	document.getElementById('txtIdResultado').value=resultado;
	
}
//sueldo((sueldo/100)*10);
//txtIdSueldo
//txtIdResultado
//mensaje="el sueldo inicial es de "+sueldo+" con un aumento de %"+ +"el resultado es "+resultado;
//	importeTotal=importeIngresado-importeIngresado*0,25;