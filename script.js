// Seleccionamos los elementos del formulario y la tabla
const form = document.getElementById("clienteForm");
const tablaClientes = document.getElementById("tablaClientes");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtenemos los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const compania = document.getElementById("compania").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const email = document.getElementById("email").value;
    const usuario = document.getElementById("usuario").value;

    // Obtenemos la fecha y hora actuales
    const fechaHora = new Date();
    const fechaIngreso = fechaHora.toLocaleString(); // Esto da una fecha y hora en formato local

    // Creamos una nueva fila para la tabla
    const nuevaFila = document.createElement("tr");

    // Insertamos las celdas con los datos del cliente y el usuario que ingresó los datos
    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${compania}</td>
        <td>${telefono}</td>
        <td>${direccion}</td>
        <td>${email}</td>
        <td>${fechaIngreso}</td>
        <td>${usuario}</td>
    `;

    // Añadimos la fila a la tabla
    tablaClientes.appendChild(nuevaFila);

    // Limpiamos los campos del formulario después de agregar el cliente
    form.reset();
});
