/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
//Pido memoria para guardar la edad y el nombre.
    var nombre; 

    var edad; 

    nombre = document.getElementById("elNombre").value;

    edad = document.getElementById("laEdad").value;

    alert("Usted se llama " + nombre + " Y tiene " + edad + " años."); 





    
}

