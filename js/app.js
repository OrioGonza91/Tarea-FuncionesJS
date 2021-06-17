
function obtenerAleatorio(min, max)
{
	return Math.floor(Math.random() * (max - min)) + min;
}

var arr = [];

for (var i = 1; i <= 10; i++) 
{
	arr.push(obtenerAleatorio(1,100));
}

console.log(arr);


//En base al array original, crear un nuevo array que contenga cada elemento del array original x3 y mostrar en consola
var triple = arr.map(function (elemento) {
	return elemento * 3
});

console.log(triple);

//En base al array original, crear un nuevo array con los numeros < a 40 y mostrar en consola
var menoresCuarenta = arr.filter(function (elemento) {
	return elemento < 40
});

console.log(menoresCuarenta);

//En base al array original, calcular el total de la suma de sus elementos y mostrar en consola
var totalArr = arr.reduce(function (acumulador, elemento) {
	return acumulador + elemento
});

console.log(totalArr);


// En base al array original, ordenar los elementos de menor a mayor y mostrar ambos en consola
var arrOrdenadosAsc = arr.sort(function (prev,next) {
	return prev - next
});

console.log(arrOrdenadosAsc); 
