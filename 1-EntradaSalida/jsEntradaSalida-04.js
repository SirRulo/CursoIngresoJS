/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado=prompt("Introduzca su nombre");
	//nombreIngresado=txtIdNombre.value;
	//alert("ok");
	//nombreIngresado=document.getElementById('txtIdNombre').value;
    nombreIngresado="Franco";
	document.getElementById('txtIdNombre').value="su nombre es "+ nombreIngresado;
	//alert(nombreIngresado);
    //alert("ok");
}

