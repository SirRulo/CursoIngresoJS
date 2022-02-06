/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroDividiendo;
	let numeroDivisor;
    let resto;


	numeroDividiendo=document.getElementById('txtIdNumeroDividendo').value;
	numeroDivisor=document.getElementById('txtIdNumeroDivisor').value;
	numeroDividiendo=parseInt(numeroDividiendo);
	numeroDivisor=parseInt(numeroDivisor);

	resto=numeroDividiendo%numeroDivisor;
	
	alert("El resultado del resto es : "+resto);
}
//txtIdNumeroDividendo
//txtIdNumeroDivisor
//resto=2%10;
//resto=10%2;