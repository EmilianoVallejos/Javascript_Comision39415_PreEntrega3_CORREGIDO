

//SE CREA OBJETO: Producto//

class Producto {
    constructor ( id, nombre , precio , imagen , stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock;
    }
}

//ARRAY - LISTA DE PRODUCTOS//

let lista_de_productos =[];

lista_de_productos.push(new Producto("Proplan18kg-balanceado-RM-",
                                    "Balanceado ProPlan 18kg -Raza Mediana-", 
                                    13400, 
                                    "./assets/imgs/productos-promociones/promociones1Edit.png", 
                                    8));

lista_de_productos.push(new Producto("Bravecto-collar-RM", 
                                    "Collar Antipulgas Bravecto -Raza Mediana",
                                    3600,
                                    "./assets/imgs/productos-promociones/promociones2Edit.png",
                                    12));

lista_de_productos.push(new Producto("RoyalCanin3kg-balanceado-RP",
                                    "Royal Canin 3kg -Raza Pequeña", 
                                    7500,
                                    "./assets/imgs/productos-promociones/promociones3Edit.png",
                                    22));

lista_de_productos.push(new Producto("Nexgard-antipulgas",
                                    "Nexgard -antipulgas y garrapatas-",
                                    1900,
                                    "./assets/imgs/productos-promociones/promociones4Edit.png",
                                    7));

lista_de_productos.push(new Producto("Dentastix-golosina-mascota",
                                    "Dentastix-Pedigree",
                                    950,
                                    "./assets/imgs/productos-promociones/promociones5Edit.png",
                                    15));

lista_de_productos.push(new Producto("Bravecto-collar-RG",
                                    "Collar Antipulgas Bravecto -Raza Grande",
                                    4800,
                                    "./assets/imgs/productos-promociones/promociones6Edit.png",
                                    6));

lista_de_productos.push(new Producto("Camitas",
                                    "Camitas-colchonetas para mascotas",
                                    7500,
                                    "./assets/imgs/productos-promociones/promociones7Edit.png",
                                    9));

lista_de_productos.push(new Producto("Agility-balanceado-RM",
                                    "Agility 20kg alimento balanceado -Raza Mediana-",
                                    6300,
                                    "./assets/imgs/productos-promociones/promociones8Edit.png", 
                                    14));


//ARRAY VACÍO PARA CARRITO DE COMPRAS//

let carrito_de_compras =[]


// RENDER PARA CARRITO //
let tabla = document.getElementById("tbody");

function carrito_render() {
    tabla.innerHTML = "";

    for(let producto of carrito_de_compras) {
        let fila = document.createElement("tr");
        fila.id = producto.id
        fila.innerHTML = `<td><img src="${producto.imagen}"></td>
            <td><p>${producto.nombre}</p></td>
            <td>${producto.stock}</td>
            <td>${producto.precio}</td>
            <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>`;
        
        tabla.append(fila);
    }
}

// FUNCIÓN DE AGREGAR PRODUCTO AL CARRITO
function agregarProductoAlCarrito(producto) {
    carrito_de_compras.push(producto);
    carrito_render();

    let btnEliminar= document.getElementsByClassName('borrar_elemento')
    console.log(btnEliminar);
    for(let botonEliminar of btnEliminar) {
        botonEliminar.addEventListener("click", function() {
            eliminarProductoDelCarrito(botonEliminar.parentElement.parentElement.id);
        
        });
}
}

//-----------------------------// Eliminar un producto del carrito
function eliminarProductoDelCarrito(producto) {
    console.log(producto);
    const index = carrito_de_compras.map(prod => prod.id).indexOf(producto);
    console.log(index);
    if (index !== -1) {
    carrito_de_compras.splice(index, 1);
}
carrito_render()

}


//llamando al elemento botón COMPRAR -por clase-
let btn = document.getElementsByClassName("buttonPromoFlex");



for(let boton of btn) {
    boton.addEventListener("click", function() {
        // BUSCAR PRODUCTO SEGUN ID
        let producto = lista_de_productos.find(function(p) {
            return p.id === boton.parentElement.id; //asi se busca por el id del padre del boton
        });

        if(producto) {
            agregarProductoAlCarrito(producto);
        }
    });
}

let carrito_de_compras_JSON = JSON.stringify(carrito_de_compras);

///SESSION STORAGE - SET ITEM(key,value): almacenamiento de datos//
sessionStorage.setItem("carrito_de_compras","carrito_de_compras_JSON");

///SESSION STORAGE - GET ITEM : recuperación de datos//
let recuperando_carrito_de_compras = sessionStorage.getItem("carrito_de_compras");

//SE APLICA EL PARSE//
recuperando_carrito_de_compras = JSON.parse (recuperando_carrito_de_compras); 




// let btnEliminar= document.getElementsByClassName('borrar_elemento')
// console.log(btnEliminar);
// for(let botonEliminar of btnEliminar) {
//     botonEliminar.addEventListener("click", function() {
//         eliminarProductoDelCarrito(botonEliminar.parentElement.id)
       
//     });
// }

// for(let boton of btn) {
//     boton.addEventListener("click",agregarProductoAlCarrito) si no pasas el producto no sabe que tiene que hacer
// }
