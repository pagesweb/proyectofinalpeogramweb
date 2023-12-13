
document.addEventListener("DOMContentLoaded", function() {
    const numeroInput = document.getElementById("numeroInput");
    const verificarBtn = document.getElementById("verificarBtn");
    const tablaCuerpo = document.getElementById("tablaCuerpo");
 
    verificarBtn.addEventListener("click", function() {
        const numero = parseInt(numeroInput.value);
        const esPar = verificarParImpar(numero);
        const resultado = esPar ? "Par" : "Impar";
        agregarFilaATabla(numero, resultado);
    });
 
    numeroInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
verificarBtn.click();
        }
    });
 
    function verificarParImpar(numero) {
        return numero % 2 === 0;
    }
 
    function agregarFilaATabla(numero, resultado) {
        const fila = document.createElement("tr");
        const numeroCelda = document.createElement("td");
        const resultadoCelda = document.createElement("td");
 
        numeroCelda.textContent = numero;
        resultadoCelda.textContent = resultado;
 
        fila.appendChild(numeroCelda);
        fila.appendChild(resultadoCelda);
        tablaCuerpo.appendChild(fila);
 
        numeroInput.value = "";
    }
});
var alumnosRegistrados = false;
 
function crearTablas() {
  var cantidadAlumnos = parseInt(document.getElementById("cantidadAlumnos").value);
  if (!isNaN(cantidadAlumnos) && cantidadAlumnos > 0) {
    var tablasContainer = document.getElementById("tablasContainer");
    tablasContainer.innerHTML = "";
    for (var i = 0; i < cantidadAlumnos; i++) {
      var tabla = document.createElement("table");
      tabla.innerHTML = `
        <caption>Registros ${i + 1}</caption>
        <tr>
          <th>Tipo</th>
          <th>producto</th>
          <th>Precio</th>
          <th>descuentos</th>
          <th>Carrera</th>
        </tr>
        <tr>
          <td><input type="text" name="nombre${i}" id="nombre${i}"></td>
          <td><input type="text" name="apellido${i}" id="apellido${i}"></td>
          <td><input type="text" name="edad${i}" id="edad${i}"></td>
          <td><input type="text" name="promedio${i}" id="promedio${i}"></td>
          <td><input type="text" name="carrera${i}" id="carrera${i}"></td>
        </tr>
      `;
      tablasContainer.appendChild(tabla);
    }
    alumnosRegistrados = true;
  } else {
    alert("Ingresa una cantidad válida de alumnos.");
  }
}

function guardar() {
  if (alumnosRegistrados) {
    var tablasContainer = document.getElementById("tablasContainer");
    var tablas = tablasContainer.getElementsByTagName("table");
    var studentData = [];
    for (var i = 0; i < tablas.length; i++) {
      var nombreInput = document.getElementById("Tipo" + i);
      var apellidoInput = document.getElementById("Producto" + i);
      var edadInput = document.getElementById("Precio" + i);
      var promedioInput = document.getElementById("Descuento" + i);
      var carreraInput = document.getElementById("carrera" + i);

      var nombre = nombreInput.value;
      var apellido = apellidoInput.value;
      var edad = edadInput.value;
      var promedio = promedioInput.value;
      var carrera = carreraInput.value;

      var studentInfo = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        promedio: promedio,
        carrera: carrera
      };
      studentData.push(studentInfo);
    }
    var resultTable = document.createElement("table");
    var tableHeader = document.createElement("tr");
    tableHeader.innerHTML = "<th>Nombre</th><th>Apellido</th><th>Edad</th><th>Promedio</th><th>Carrera</th>";
    resultTable.appendChild(tableHeader);
    for (var i = 0; i < studentData.length; i++) {
      var rowData = document.createElement("tr");
      rowData.innerHTML = "<td>" + studentData[i].nombre + "</td><td>" + studentData[i].apellido + "</td><td>" + studentData[i].edad + "</td><td>" + studentData[i].promedio + "</td><td>" + studentData[i].carrera + "</td>";
      resultTable.appendChild(rowData);
    }
    var resultContainer = document.getElementById("res");
    resultContainer.innerHTML = "";
    resultContainer.appendChild(resultTable);
  } else {
    alert("Primero debes registrar la cantidad de alumnos.");
  }
}