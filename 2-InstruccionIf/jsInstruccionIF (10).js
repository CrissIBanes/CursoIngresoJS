function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var numero; 
var maximo = 10; 
var minimo = 1; 

numero =Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo); 

alert(numero); 

if (numero >= 9){
	alert ("EXCELENTE!!");
} else if (numero >= 4 && numero <= 8) {
alert ("Aprobado"); 
} else {
alert("Vamos, la proxima se puede!");

}


}//FIN DE LA FUNCIÓN