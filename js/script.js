// cotizar de dolar
// Función para calcular la cotización
function calcularCotizacion() {
    // Variable para almacenar el valor actual del dólar
    let dolarActual = 38;
    console.log("Valor actual del dólar:", dolarActual);
  
    // Obtener el elemento del DOM que representa la cantidad de dólares ingresada
    let cantidadDolaresInput = document.getElementById("cantidadDolares");
    console.log("Cantidad de dólares ingresada:", cantidadDolaresInput.value);
  
    // Obtener el elemento del DOM donde se mostrará el resultado de la cotización
    let resultadoCotizacion = document.getElementById("resultadoCotizacion");
  
    // Obtener el valor de la cantidad de dólares ingresada, convirtiéndolo a número de punto flotante
    let cantidadDolares = parseFloat(cantidadDolaresInput.value);
    console.log("Cantidad de dólares convertida:", cantidadDolares);
  
    // Verificar si la cantidad de dólares es un número válido
    if (!isNaN(cantidadDolares)) {
      // Calcular la cotización en pesos
      let cotizacionPesos = cantidadDolares * dolarActual;
      console.log("Cotización en pesos:", cotizacionPesos);
  
      // Mostrar el resultado de la cotización en el elemento del DOM
      resultadoCotizacion.textContent = "El valor de sus dólares es de " + cotizacionPesos.toFixed(2) + " $";
    } else {
      // Mostrar un mensaje de error si la cantidad de dólares no es válida
      resultadoCotizacion.textContent = "Debe ingresar una cantidad válida de dólares.";
    }
  }



///////////////////////////////////////////////////////////



// Pedir nombre de usuario
let nombreUsuario = prompt("¿Cómo te llamas?");
console.log("Nombre de usuario:", nombreUsuario);

// Dar la bienvenida mediante un alert
alert("¡Bienvenido " + nombreUsuario + "!");

let Hola = "Hola";
console.log("Valor de la variable Hola:", Hola);

// Obtener el elemento del DOM con el ID "saludo"
let usuario = document.getElementById("saludo");
console.log("Elemento del DOM 'saludo':", usuario);

// Mostrar "Hola" + nombreUsuario en el HTML
saludo.textContent = "Mira el mercado " + nombreUsuario;
console.log("Contenido del elemento 'saludo':", saludo.textContent);

// Lista de productos
const productos = [
    // Pistolas
    {
        id: "skin1",
        titulo: "skin 1",
        imagen: "./assets/skin1.webp",
        categoria: {
            nombre: "pistolas",
            id: "pistolas"
        },
        precio: 1000
    },
    {
        id: "skin2",
        titulo: "skin 2",
        imagen: "./assets/skin2.png",
        categoria: {
            nombre: "pistolas",
            id: "pistolas"
        },
        precio: 1000
    },
    {
        id: "skin3",
        titulo: "skin 3",
        imagen: "./assets/skin3.webp",
        categoria: {
            nombre: "pistolas",
            id: "pistolas"
        },
        precio: 1000
    },

    // Fusiles
    {
        id: "skin4",
        titulo: "skin 4",
        imagen: "./assets/skin4.png",
        categoria: {
            nombre: "fusiles",
            id: "fusiles"
        },
        precio: 1000
    },
    {
        id: "skin5",
        titulo: "skin 5",
        imagen: "./assets/skin5.png",
        categoria: {
            nombre: "fusiles",
            id: "fusiles"
        },
        precio: 1000
    },
    {
        id: "skin6",
        titulo: "skin 6",
        imagen: "./assets/skin6.png",
        categoria: {
            nombre: "fusiles",
            id: "fusiles"
        },
        precio: 1000
    },

    // Cuchillos
    {
        id: "skin7",
        titulo: "skin 7",
        imagen: "./assets/skin7.png",
        categoria: {
            nombre: "Pantalones",
            id: "cuchillos"
        },
        precio: 1000
    },
    {
        id: "skin8",
        titulo: "skin 8",
        imagen: "./assets/skin8.png",
        categoria: {
            nombre: "cuchillos",
            id: "cuchillos"
        },
        precio: 1000
    }
];
console.log("Lista de productos:", productos);

// Seleccionar el contenedor de productos en el DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
console.log("Elemento del DOM 'contenedorProductos':", contenedorProductos);

// Seleccionar todos los botones de categoría en el DOM
const botonesCategorias = document.querySelectorAll(".boton-categoria");
console.log("Elementos del DOM 'botonesCategorias':", botonesCategorias);

// Función para cargar los productos en el contenedor del HTML
function cargarProductos(productosElegidos) {
    // Limpiar el contenido del contenedor de productos
    contenedorProductos.innerHTML = "";
    console.log("Contenedor de productos limpiado.");

    // Iterar sobre los productos elegidos
    productosElegidos.forEach(producto => {
        // Crear un nuevo elemento div para representar el producto
        const div = document.createElement("div");
        // Establecer el contenido HTML del div del producto
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen img-fluid" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        // Agregar el div del producto al contenedor de productos
        contenedorProductos.append(div);
    });
    console.log("Productos cargados en el contenedor.");
}

// Cargar los productos iniciales
cargarProductos(productos);

// Event listener para los botones de categoría
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        // Remover la clase "active" de todos los botones de categoría
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        // Agregar la clase "active" al botón de categoría seleccionado
        e.currentTarget.classList.add("active");

        // Verificar si se ha seleccionado el botón "todos"
        if (e.currentTarget.id === "todos") {
            cargarProductos(productos);
        } else {
            const productosFiltrados = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosFiltrados);
        }
    });
});
