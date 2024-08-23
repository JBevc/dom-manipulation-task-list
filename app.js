let tasks = [
  // {
  //   id: 0,
  //   owner: "Pelado Cáceres",
  //   name: "Wash the car",
  //   description: "Wash the car before crash it 💥🚗",
  //   imgUrl:
  //     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  // },
  // {
  //   id: 1,
  //   owner: "Developer #432",
  //   name: "Take humans out of Earth",
  //   description: "Looking for a new planet to destroy 🌎",
  //   imgUrl:
  //     "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  // },
  // {
  //   id: 2,
  //   owner: "Another big fish",
  //   name: "Testing in Production",
  //   description: `We don't worry about testing, we test in production 🤪`,
  //   imgUrl:
  //     "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  // // },
  // {
  //   id: 3,
  //   owner: "The return of the Pug",
  //   name: "Thinking about all the mankind problems",
  //   description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
  //   imgUrl:
  //     "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  // },
  // {
  //   id: 4,
  //   owner: "Mark Zuckerberg",
  //   name: "Destroy the entire planet earth",
  //   description: "Encourage people to live in a metaverse🌈",
  //   imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  // },
];

let currentIdNumber = tasks.length;
// 0 - Bajar repo, todos los ejercicios seran parte
// del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task

function createTaskComponent(taskElement) {
  const templateContent = `
    <div class = "task"> 
      <h2 class = "taskName"> ${taskElement.name} </h2>
      <h3 class = "taskOwner"> ${taskElement.owner} </h3>
      <p class = "classDescription"> ${taskElement.description} </p>
      <img src= ${taskElement.imgUrl}> 
    </div>
  `;

  const ul = document.querySelector("ul");
  const elementoAgregar = document.createElement("div");
  elementoAgregar.innerHTML = templateContent;
  ul.appendChild(elementoAgregar);
}

function loadTasks(taskList) {
  taskList.forEach((element) => {
    createTaskComponent(element);
  });
}

// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form
function addTaskAlert(newTask) {}

// 2 - Funcion
// Agregar elemento en la lista al llenar el formulario
function addTaskHandler() {
  // ignora evento reset de submit button
  event.preventDefault(true);

  const nameInput = document.getElementById("nameInput").value.trim();
  const ownerInput = document.getElementById("ownerInput").value.trim();
  const descInput = document.getElementById("descriptionInput").value.trim();
  const imgInput = document.getElementById("imgUrlInput").value.trim();

  if (nameInput && ownerInput && descInput && imgInput) {
    const id = tasks.length + 1;
    const tareaNueva = {
      id: id,
      owner: ownerInput,
      name: nameInput,
      description: descInput,
      imgUrl: imgInput,
    };
    tasks.push(tareaNueva);
    createTaskComponent(tareaNueva);
  }
  // para resetear el texto del form
  document.querySelector(".main__form").reset();
}

// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
function deleteTaskHandler(taskElement) {}

// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
function deleteAllTaskHandler() {
  //event.preventDefault();
  const ul = document.querySelector("ul");
  while (tasks.length != 0) {
    ul.removeChild(ul.lastElementChild);
  }
}

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
function redirectWhenNoTask() {}

loadTasks(tasks);

const addTaskButton = document.getElementsByClassName("submit-button")[0];
addTaskButton.addEventListener("click", () => {
  addTaskHandler();
});

const clearTasksButton = document.getElementsByClassName("clear-button")[0];
clearTasksButton.addEventListener("click", () => {
  deleteAllTaskHandler();
});
