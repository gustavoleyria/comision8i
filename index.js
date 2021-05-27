
let boleta = JSON.parse(localStorage.getItem('boleta')) || [];
let producto = JSON.parse(localStorage.getItem('producto')) || [];

let contenido = document.querySelector('#Mercaderia');


function Listar () {
    contenido.innerHTML = "";
    producto.forEach(function(item, index){
        contenido.innerHTML += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.producto}</td>
            <td>${item.detalle}</td>
            <td>${item.precio}</td>
            <td>${item.cantidad}</td>
        </tr>
        `;
    });
}

Listar();

function agregarProducto (){
    let productoIn = document.querySelector('#ProductoIn').value;
    let detalleIn = document.querySelector('#DetalleIn').value;
    let precioIn = document.querySelector('#PrecioIn').value;
    let cantidadIn = document.querySelector('#CantidadIn').value;

    producto.push({
        producto: productoIn,
        detalle: detalleIn,
        precio: precioIn,
        cantidad: cantidadIn
    });

    localStorage.setItem('producto', JSON.stringify(producto));
    Listar();
}

function modificarProducto (){

    let num = parseInt(prompt("Elige el producto a modificar en el 1 y " + producto.length));

    producto[num-1].producto = prompt("Escribe el Producto");
    producto[num-1].detalle = prompt("Describe el Producto");
    producto[num-1].precio = parseInt(prompt("Escribe el precio"));
    producto[num-1].cantidad = parseInt(prompt("Escribe la cantidad"));

    localStorage.setItem('producto', JSON.stringify(producto));
    Listar();
}

function eliminarProducto (){
    let lugar = parseInt(prompt("Elige el producto a eliminar entre 1 y " + producto.length));

    producto.splice((lugar-1), 1);

    localStorage.setItem('producto', JSON.stringify(producto));
    Listar();
}


let contenido2 = document.querySelector('#Ventas');

function ListarVentas (){
    contenido2.innerHTML = "";
    boleta.forEach(function(item, index){
        contenido2.innerHTML += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.factura}</td>
            <td>${item.cliente}</td>
            <td>${item.producto}</td>
            <td>${item.precio}</td>
            <td>${item.cantidad}</td>
            <td>${item.total}</td>
        </tr>
        `;
    });
}

ListarVentas();

function comprarProducto (){
    let posicion = document.querySelector("#ProductoOut").value;
    let nombre = document.querySelector("#DetalleOut").value;
    let cantidadOut = document.querySelector("#CantidadIn").value;
    let total = (producto[(posicion-1)].precio)*cantidadOut;

    boleta.push({
        cliente: nombre,
        producto: producto[(posicion-1)].producto,
        precio: producto[(posicion-1)].precio,
        cantidad: cantidadOut,
        total: total
    });

    localStorage.setItem('boleta', JSON.stringify(boleta));

    ListarVentas();
}