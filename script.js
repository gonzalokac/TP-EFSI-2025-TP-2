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
       
        
            
    }

}