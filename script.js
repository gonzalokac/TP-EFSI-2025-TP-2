var tareas=[];
function AgregarTareaPendiente () {

    let Tarea =  document.getElementById("Tarea").value;
    
    let VacíoTarea = document.getElementById("VacíoTarea");

    let TareaValida = document.getElementById("NotaValida");
    
    NotaValida.textContent = "";

     VacíoTarea.textContent = "";


     if (Tarea=="") {
        VacíoTarea.textContent = "Escriba algo antes de agregar la tarea.";
        valido = false;
    } else{

        TareaValida.textContent = "El ingreso de la tarea estuvo bien.";
       var NuevaTarea={
        Tarea:Tarea,
        FechaCreación:new Date(),
        Completada: false
       };
        tareas.push(NuevaTarea);//agrego nueva tarea al array
        Tarea.textContent=" ";
        MostrarTareas();

            
    }
    function MostrarTareas (){

    var Lista=document.getElementById("ListaTarea");
    for(let i = 0; i<tareas.length;i++){

        var ElementoTarea=tareas[i];    }

    }
}