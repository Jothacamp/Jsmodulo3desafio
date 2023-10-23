document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded fired!");

    let cantidad = 0; 
    let precio = 400000;

    let precioInicialSpan = document.querySelector(".precio-inicial");
    precioInicialSpan.innerHTML = precio;

    document.getElementById("btnSumar").addEventListener("click", sumar);
    document.getElementById("btnRestar").addEventListener("click", restar);

    function sumar() {
        cantidad = cantidad + 1;
        console.log("Función sumar() llamada. Nueva cantidad:", cantidad);
        actualizarPrecioCantidad();
    }

    function restar() {
        if (cantidad > 0) {
            cantidad = cantidad - 1;
            console.log("Función restar() llamada. Nueva cantidad:", cantidad);
        } else {
            console.log("Función restar() llamada, pero la cantidad ya es 0.");
        }
        actualizarPrecioCantidad();
    }

    function actualizarPrecioCantidad() {
        let precioTotal = precio * cantidad;
        let precioSpan = document.querySelector(".precio-total"); 
        precioSpan.innerHTML = precioTotal;

        let cantidadSpan = document.querySelector(".cantidad-total");
        cantidadSpan.innerHTML = cantidad;
        
        console.log("ActualizarPrecioCantidad() llamada. Cantidad:", cantidad, "Precio Total:", precioTotal);
    }

    // Inicializar los valores al cargar la página
    actualizarPrecioCantidad();
});
