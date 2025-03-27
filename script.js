let tareas = [];

function AgregarTareaPendiente() {
    let inputTarea = document.getElementById("Tarea");
    let mensajeError = document.getElementById("VacíoTarea");
    
    if (inputTarea.value.trim() === "") {
        mensajeError.textContent = "Por favor, ingrese una tarea.";
        return;
    }
    mensajeError.textContent = ""; 
    
    let nuevaTarea = {
        texto: inputTarea.value,
        completado: false,
        creado: new Date(),
        completadoEn: ""
    };
    
    tareas.push(nuevaTarea);
    inputTarea.value = "";
    ActualizarLista();
}

function ActualizarLista() {
    let tablaTareas = document.getElementById("tablaTareas");
    tablaTareas.innerHTML = "";
    
    tareas.forEach((tarea, index) => {
        let fila = tablaTareas.insertRow();
        
        let celdaCheckbox = fila.insertCell(0);
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completado;
        checkbox.addEventListener("change", function() {
            tarea.completado = this.checked;
            tarea.completadoEn = this.checked ? new Date() : "";
            ActualizarLista();
        });
        celdaCheckbox.appendChild(checkbox);
        
        let celdaTexto = fila.insertCell(1);
        celdaTexto.textContent = tarea.texto;
        if (tarea.completado) {
            celdaTexto.style.textDecoration = "line-through";
        }
        
        let celdaCreado = fila.insertCell(2);
        celdaCreado.textContent = tarea.creado;
        
        let celdaCompletado = fila.insertCell(3);
        celdaCompletado.textContent = tarea.completadoEn;
    });
}
function TareaMasRapida() {
    let completadas = tareas.filter(t => t.completado);
    
    if (completadas.length == 0) {
        alert("No hay tareas completadas aún.");
        return;
    }

    let tiempos = completadas.map(t => {
        let tiempoCreacion = new Date(t.creado);
        let tiempoCompletado = new Date(t.completadoEn);
        
        if (isNaN(tiempoCreacion.getTime()) || isNaN(tiempoCompletado.getTime())) {
            console.log("Error en las fechas de las tareas", t);
            return null;
        }

        let tiempo = (tiempoCompletado - tiempoCreacion) / 1000;
        
        return {
            texto: t.texto,
            tiempo: tiempo
        };
    }).filter(t => t !== null); 

    if (tiempos.length === 0) {
        alert("No hay tareas completadas correctamente.");
        return;
    }

    
    let masRapida = tiempos.reduce((min, tarea) => tarea.tiempo < min.tiempo ? tarea : min, tiempos[0]);

    alert(`La tarea más rápida en completarse fue: "${masRapida.texto}" en ${masRapida.tiempo.toFixed(2)} segundos.`);
}
