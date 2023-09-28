
function calcularEdad1(fechaNacimiento) {

    
    const fechaActual = new Date();
  

    const fechaNacimientoDate = new Date(fechaNacimiento);
  

    const diferenciaEnDias = fechaActual.getTime() - fechaNacimientoDate.getTime();
  

    const edad = Math.floor(diferenciaEnDias / (365.25 * 24 * 60 * 60 * 1000));
  
    return edad;
  }

  function Calculadora1(){
  const nombre = prompt("¿Cuál es tu nombre?");
  const fechaNacimiento = prompt("¿Cuál es tu fecha de nacimiento (YYYY-MM-DD)?");
  

  const edad = calcularEdad1(fechaNacimiento);
  
  const resultado =  document.getElementById('resultado')
  resultado.innerHTML = (`Hola ${nombre}, tienes ${edad} años!`);
  }

  function TirandoFruta2(){
const frutas = ["Manzana", "Pera", "Plátano", "Sandía", "Melón", "Fresa", "Cereza", "Naranja", "Piña", "Limón"];

console.log("Lista de frutas:");
for (const fruta of frutas) {
  console.log(fruta);
}

const frutaBuscada = prompt("¿Qué fruta quieres buscar?");

const existe = frutas.includes(frutaBuscada);
const resultado =  document.getElementById('resultado')
if (existe) {
    resultado.innerHTML =(`Sí, tenemos ${frutaBuscada}!`);
} else {
    resultado.innerHTML =(`No, no tenemos ${frutaBuscada}!`);
}
  }

function ComparandoDatos3()
{
    const prueba1 = (10 == "10");
    console.log('10 == "10" ' + prueba1 )

    const prueba2 = (10 === "10");
    console.log('10 === "10" ' + prueba2)

    const num = 10.6
    const prueba3 = typeof(num)
    console.log("10.6 = " + prueba3)

    const verdadero = true
    const prueba4 = (verdadero) == 1
    console.log("(true == 1) = " + prueba4)

    const resultado =  document.getElementById('resultado')
    resultado.innerHTML = ("Consola bro");

    console.log("Al poner == comparas unicamente el valor, en cambio cunado pones === comparas el valor y el tipo de dato tambien. Los valores booleanos comprenden a 1 como true y a 0 como falso.")
}

function YoObjeto4(){

    const Ciudad = {
        Nombre:"Nicaragua",
        FechaFuncacion:"2006-01-05",
        Poblacion:1000,
        Extencion:"2000m2"
    }
    for(const propiedad in Ciudad){
        console.log(`${propiedad}: ${Ciudad[propiedad]}`)
    }
    const resultado =  document.getElementById('resultado')
    resultado.innerHTML = ("Consola bro");

}

function DuplicarArray(array) {

    const nuevoArray = [];

    for (const numero of array) {

      const numeroDuplicado = numero * 2;
  
      nuevoArray.push(numeroDuplicado);
    }
  
    return nuevoArray;
  }
  function DobleDeElementos5() {
  const arrayOriginal = [1, 2, 3, 4, 5];
  const arrayDuplicado = DuplicarArray(arrayOriginal);
  
  const resultado =  document.getElementById('resultado')
  resultado.innerHTML = (arrayDuplicado);
  }

  function ArbolAsteriscos6()
 {
  let cantidadAsteriscos = 0
  do{
   cantidadAsteriscos = prompt ("Ingrese la cantidad de asteriscos que quiere que tenga el arbol. Solo numeros impares")

  }while(cantidadAsteriscos % 2 == 0)
  const tipoAsterisco = prompt ("Seleccione el tipo de arbol que quiere")
  let Asteriscos = ""
  switch (tipoAsterisco) {
    case "A":
      for (let i = 0; i < cantidadAsteriscos ; i++){
        Asteriscos =Asteriscos+"*"
        console.log(Asteriscos)
      }
      break;

    case"B":
    console.log(piramide(cantidadAsteriscos));
      break;
default:
      break;
  }
 } 

function piramide(cantidadAsteriscos){
  let cantGuion = cantidadAsteriscos-1;
  for(let i = 0;i<Math.ceil(cantidadAsteriscos/2);i++)
  {
    let piso = "";
    for(let j=0;j<Math.floor(cantGuion/2);j++)
  {
    piso += "-";
  }
  for(let x =0; x< cantidadAsteriscos-cantGuion;x++)piso += "*"
  }
  for(let j=0;j<Math.floor(cantGuion/2);j++)
  {
    piso += "-";
  }
  cantGuion = cantGuion -2;
  console.log(piso)
}
{}
function NombresA7(){
const nombres = prompt("Ingresa una lista de nombres separados por coma:");

const nombresArray = nombres.split(",");

const nombresConA = [];

for (const nombre of nombresArray) {
  if (nombre.charAt(0) === "A") {
    nombresConA.push(nombre);
  }
}

const resultado =  document.getElementById('resultado')
resultado.innerHTML = nombresConA.join(", ");
}

function Remplazar8() {
const cadena = prompt("Ingresa una cadena de texto:");

const palabraAReemplazar = prompt("Ingresa la palabra que deseas reemplazar:");

const palabraDeReemplazo = prompt("Ingresa la palabra de reemplazo:");

const cadenaReemplazada = cadena.replace(palabraAReemplazar, palabraDeReemplazo);

const resultado =  document.getElementById('resultado')
resultado.innerHTML = cadenaReemplazada;

}
function CortarTxt9(){
const cadena = prompt("Ingresa una cadena de texto:");

const numero = prompt("Ingresa un número:");

const longitud = cadena.length;

const cadenaCortada = cadena.slice(0, numero);

const resultado =  document.getElementById('resultado')
resultado.innerHTML = cadenaCortada;

}

function StringSeparado10(){
const elementos = prompt("Ingresa una lista de elementos separados por coma:");

const elementosArray = elementos.split(",");

const cadenaConSeparador = elementosArray.join(" - ");

const resultado =  document.getElementById('resultado')
resultado.innerHTML = cadenaConSeparador;

}


  function Cuenta11() {
    const precios = [
      { nombre: "Pizza", precio: 15.5 },
      { nombre: "Hamburguesa", precio: 8.75 },
      { nombre: "Bebidas", precio: 4.25 },
    ];
  
    const pedidos = prompt("Ingresa una lista de pedidos separados por coma:");
  
    const pedidosArray = pedidos.split(",");
  
    let recaudacionTotal = 0;
  
    for (const pedido of pedidosArray) {
      const precio = precios.find((precio) => pedido === precio.nombre);
  
      if (!precio) {
        alert("El producto '" + pedido + "' no existe");
        return;
      }
  
      recaudacionTotal += precio.precio;
    }
  
    const resultado =  document.getElementById('resultado')
    resultado.innerHTML = `Recaudación total: ${recaudacionTotal}`;
  }
  
