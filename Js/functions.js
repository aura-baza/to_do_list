//obtencin de fecha y hora.
export function currentTime(weekday,day,month,year,hour,minutes,secunds,amPm) {
  let date = new Date();
  //date
  let weekdayAc = date.getDate();
  let dayAc = date.getDay();
  let monthAc = date.getMonth();
  let yearAc = date.getFullYear();
  //time
  let hourAc = date.getHours();
  let minutesAc = date.getMinutes();
  let secundsAc = date.getSeconds();
  let ampm;

  let days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  day.textContent = days[dayAc];
  if (weekdayAc < 10) {
    weekdayAc = "0" + weekdayAc;
  }
  weekday.textContent = weekdayAc;

  let months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Novienbre",
    "Diciembre",
  ];
  month.textContent = months[monthAc];
  year.textContent = yearAc;

  if (hourAc >= 12) {
    hourAc = hourAc - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  if (hourAc === 0) {
    hourAc = 12;
  }
  if (hourAc < 12) {
    hourAc = "0" + hourAc;
  }
  hour.textContent = hourAc;
  amPm.textContent = ampm;
  if (minutesAc < 10) {
    minutesAc = "0" + minutesAc;
  }
  if (secundsAc < 10) {
    secundsAc = "0" + secundsAc;
  }
  minutes.textContent = minutesAc;
  secunds.textContent = secundsAc;
}

//validando archivos.
export function validateFields(input_task) {
  if (input_task.value === "") {
    return true;
} else {
      return false;
  }
}

let array_local; //declaramos el array que crearemos en el localStorage.
let array_tasks = []; //array para las tareas en proceso(agregadas.)

//funcion añadir tarea
export function addTask(input_task) {
//creamos el array en el localStorage (el nombre de la llave es tasks).
  array_local = JSON.parse(localStorage.getItem("tasks")) || [];
  //creamos el objeto.
  const task_object={
    description:`${input_task.value}`,
    status:false,
    id:`${input_task.value.replaceAll(" ","").toLowerCase()}`
  }
  if (array_local.length>0) {//si el array contiene alguna tarea; buscamos si la tarea ingresada ya existe
    let task_found=array_local.find((task)=>task_object.id===task.id) || "";
    if (task_found !=="") {
        //si la tarea encontrada es diference a string vacio es porque la tarea ya fué ingresada.
        alert("La tarea que quiere agregar ya existe");
      }else{
        array_local.unshift(task_object);
        //sino agregamos la tarea al array del localStorage y lo guardamos.
        saveTaskInLocalStorage();
      }
  }else{
    //si el array local está vacío, creamos un objeto en el array de tareas y lo guardamos en el localStorage.
    array_tasks.unshift(task_object);
    localStorage.setItem("tasks", JSON.stringify(array_tasks));
  }
 
}

//creando funcion para guardar una tarea en el localStorage.
function saveTaskInLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(array_local));
}



