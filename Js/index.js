import {currentTime,validateFields,addTask} from "./functions.js";
window.addEventListener("DOMContentLoaded", () => {
  //date
  let weekday = document.querySelector(".weekday");
  let day = document.querySelector(".day");
  let month = document.querySelector(".month");
  let year = document.querySelector(".year");
  //time
  let hour = document.querySelector(".hour");
  let minutes = document.querySelector(".minutes");
  let secunds = document.querySelector(".secunds");
  let amPm = document.querySelector(".am__pm");

  // variables para funcionalidades.
  let input_task=document.querySelector(".input_task");
  let icon=document.querySelector(".icon");

 //ejecucion de funciones llamadas desde functions.js.
  currentTime(weekday,day,month,year,hour,minutes,secunds,amPm);
  setInterval(() => {
    currentTime(weekday,day,month,year,hour,minutes,secunds,amPm);
  }),1000;

  icon.addEventListener("click", ()=>{
    if(validateFields(input_task)){
    alert("No puede agregar una tarea sin contenido");
    }else{
      addTask(input_task);
      input_task.value="";
    }
  });
  /**
   * funcion agregar
   * guardar y obtener del localStorage.
   * funcion eliminar.
   * funcion editar.
   * marcar tarea.
   * modal (editar(actualizar contenido), eliminar(confirmacion), informacion(llenar campos vacíos))
   * validar campos vacíos. 
   * tareas terminadas.
   * buscar tarea.
   */
  //index.js:contendrá los arrays, eventos, elementos html. y servicios.js: contendrá las funciones.
});
