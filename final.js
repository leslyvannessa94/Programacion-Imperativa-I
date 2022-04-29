const alumnos = [
  {
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],
  },
  {
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
  },
  {
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
  },
  {
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
  },
  {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
  },
];

/*
EJERCICIO 1 

PUNTO 1a. ¿Qué tipo de dato es? 
Es un array de objetos literales. Además es constante llamada alumnos.

PUNTO 1b. ¿Cuáles son las claves que puedes identificar?
Las claves que se pueden identificar son id, nombre, apellido, legajo y notas.

PUNTO 2
Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma 
descendente.
*/
function ordenaLegajoDesc(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1; j++) {
      if (array[j].legajo < array[j+1].legajo ) {
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
  return array
}
//console.log(ordenaLegajoDesc(alumnos));


/*
EJERCICIO 2

Dado el objeto
*/
let alumno = {
  id: 5,
  nombre: "Lucas",
  apellido: "Astrada",
  legajo: 20220125,
  notas: [10,6,8,7,9],
  promedioNotas: function(){
    let suma = 0
    for (let i = 0; i < this.notas.length; i++) {
      suma = suma + this.notas[i]      
    }
    return suma / this.notas.length
  }
}

console.log(alumno.promedioNotas());

// Crear una función que ordene las notas del alumno de forma ascendente. (*)

function ordenaNotas(array) {
  let notasOrdenadas = array.notas
  for (let i = 0; i < notasOrdenadas.length; i++) {
    for (let j = 0; j < notasOrdenadas.length-1; j++) {
      if (notasOrdenadas[j] > notasOrdenadas[j+1] ) {
        let temp = notasOrdenadas[j]
        notasOrdenadas[j] = notasOrdenadas[j+1]
        notasOrdenadas[j+1] = temp
      }
    }
  }
  array.notas = notasOrdenadas
  return array
}

//console.log(ordenaNotas(alumno));

//--------------------------------------------------------------------------------------------------------

/*
EJERCICIO 3

A. Crea una matriz de 3x3, cuadrada, con números enteros negativos en cada una de sus posiciones.
*/

let matrizCuadrada = [
  [-1, -2, -5], 
  [-8, -4, -6],
  [-3, -2, -10]
]

//Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 5. 

function sumaNumerosMult5(matriz) {
  let suma = 0
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] %5 === 0 ) {
        suma = suma + matriz[i][j]
      }
    }
  }
  return suma
}

//console.log(sumaNumerosMult5(matrizCuadrada));

//Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores 
//de la matriz es impar.

function matrizImpar(matriz) {
  let suma = 0
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma = suma + matriz[i][j]
    }
  }
  return (suma %2 === 1) || (suma %2 === -1)
}

//console.log(matrizImpar(matrizCuadrada));

// Crear una función que retorne la multiplicación de las diagonales de la matriz.

function productoDiagonal(matriz) {
  let producto = 1
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (i=j) {
        producto = producto * matriz[i][j]
        console.log(matriz[i][j]);
      }
    }
  }
  return producto
}


//console.log(productoDiagonal(matrizCuadrada));