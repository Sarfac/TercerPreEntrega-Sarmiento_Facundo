/*simulacion de una tienda online con inventario, permitiendo ordenar los elementos, imprimiendo los resultados en el DOM 
y almacenando datos en el LocalStorage con el modo oscuro para guardar preferencias para el proximo ingreso,
proximante se sumara un carrito de compras permitiendo agregar los productos que desea del array inventario a otro array que 
haga decarrito de compras e imprimiendo los resultados en DOM
 */

const inventario=[]

class Producto{
    constructor(id,nombre,precio,img){
        this.id=id,
        this.nombre=nombre,
        this.precio=precio
        this.img=img
    }
    mostrarProducto(){
        console.log(`Articulo:${this.nombre} Precio:${this.precio}`)
    }
}

const git= new Producto(1,"Git",1000,"git.jpg")
const html5= new Producto(2,"HTML5",2000,"html.jpg")
const javaScript= new Producto(3,"JavaScript",1500,"javascript.jpg")
const nodeJS= new Producto(4,"NodeJS",1000,"node.jpg")
const react= new Producto(5,"React",1500,"react.jpg")
const sass= new Producto(6,"SASS",2500,"sass.jpg")

inventario.push(git,html5,javaScript,nodeJS,react,sass)
console.log(inventario)

let nuevoProducto=document.getElementById("inventario")

function mostarInventario(array){
    nuevoProducto.innerHTML=``
    for(let camiseta of array){
    let nuevoProductoDiv = document.createElement("div")
    nuevoProductoDiv.className="col-12 col-md-6 col-lg-4 my-2"
    nuevoProductoDiv.innerHTML= `<div id="${camiseta.id}" class="card" style="width: 18rem;">
                                <img class="card-img-top img-fluid" style="height: 200px;"src="img/${camiseta.img}" alt="${camiseta.titulo}}">
                                <div class="card-body">
                                <h3 class="card-title">${camiseta.nombre}</h3>
                                <p class="">Precio: $ ${camiseta.precio}</p>
                                <button id="" class="btn btn-outline-success">Agregar al carrito</button>
                                </div>
                                </div>`
nuevoProducto.appendChild(nuevoProductoDiv)
}}
mostarInventario(inventario)

//ordenar array del inventario
let selectOrden = document.getElementById("selectOrden")

selectOrden.addEventListener("change", () => {
   console.log(selectOrden.value)
   switch(selectOrden.value){
      case "1":
         ordenarMayorMenor(inventario)
      break
      case "2":
         ordenarMenorMayor(inventario)
      break
      case "3":
         ordenarAlfabeticamenteTitulo(inventario)
      break
      default:
        mostarInventario(inventario)
      break
   }
}
)
//Metodos de ordenamiento para el inventario
function ordenarMenorMayor(array){
   //copia del array, aplicar sort y no modificar el original
   const menorMayor = [].concat(array)
   console.log(menorMayor)
   //forma ascendente
   menorMayor.sort((a,b) => a.precio - b.precio)
   mostarInventario(menorMayor)
 }
 
 function ordenarMayorMenor(array){
   const mayorMenor = [].concat(array)
   //forma descendente 
   mayorMenor.sort((a ,b) => b.precio - a.precio)
   mostarInventario(mayorMenor)
 }
 
 function ordenarAlfabeticamenteTitulo(array){
   const arrayAlfabetico = [].concat(array)
   arrayAlfabetico.sort( (a,b) =>{
      if (a.titulo > b.titulo) {
         return 1
       }
       if (a.titulo < b.titulo) {
         return -1
       }
       // a must be equal to b
       return 0
   })
 
   mostarInventario(arrayAlfabetico)
 }

//DARKMODE: 
let botonDarkMode = document.getElementById("botonDarkMode")
let botonLightMode = document.getElementById("botonLightMode")

//consulta localStorage
let modoOscuro = localStorage.getItem("modoOscuro")
console.log(modoOscuro)

if(modoOscuro == "true"){
   document.body.classList.add("darkMode")
}

botonDarkMode.addEventListener("click", ()=>{
   //agregar clase de modo oscuro
   document.body.classList.add("darkMode")
   localStorage.setItem("modoOscuro", true)
})

botonLightMode.addEventListener("click", ()=>{
   //elimina class darkMode
   document.body.classList.remove("darkMode")
   localStorage.setItem("modoOscuro", false)
})
 
