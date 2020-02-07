/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//1
var sueldo;
var aumento; 
var sueldofinal
sueldo = document.getElementById("sueldo").value; 
sueldo = parseInt(sueldo); 
//2
aumento = sueldo * 10 / 100;
//3 
sueldofinal = sueldo + aumento; 
//4 
document.getElementById("resultado").vaule = sueldofinal; 




 







	
}
