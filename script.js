alert("Bienvenidos a la segunda práctica de JS");
var nombre=prompt("Ingrese el nómbre del Alumno: ");
document.write(`<h1>Calcuando Promedios con JS </h1>`);
var prom1=parseFloat(prompt("Ingrese el promedio 1"));
var prom2=parseFloat(prompt("Ingrese el promedio 2"));
var prom3=parseFloat(prompt("Ingrese el promedio 3"));
var promtot=(prom1+prom2+prom3)/3
alert("Promedio calculado!")
document.write(`<h3>El Promedio del Alumno ${nombre} es ${promtot}</h3>`);
