<template>
  <f7-page name="To-Do">
    <!--bloque principal que contiene la estructura HTML-->
    <f7-navbar title="To-Do" back-link="Back"></f7-navbar>
    <!--Componente: define la página con el nombre "To-Do"-->
    <f7-block-title>Prueba</f7-block-title>
    <h3>¡Sigue adelante y organiza tu día!</h3>
    <div class="searchbar-container">
      <!--Contenedor que incluye una barra de búsqueda para buscar elementos dentro de la página.-->
      <form class="searchbar">
        <!--Formulario para la búsqueda con un input tipo search y un ícono de búsqueda.-->
        <input type="search" placeholder="Buscar" />
        <i class="f7-icons">search</i>
      </form>
      <div class="searchbar-cancel"></div>
    </div>

    <!-- Barra de herramientas que contiene pestañas (tabbar), para navegar entre diferentes secciones de la aplicación-->
    <div class="toolbar tabbar">
      <div class="toolbar-inner">
        <a href="#tab1" class="tab-link tab-link-active">Notas</a>
        <a href="#tab2" class="tab-link">Organizate</a>
        <a href="#tab3" class="tab-link">Horario</a>
      </div>
    </div>
    <!-- Contenido -->
    <f7-block>
      <!--Control de música con un toggle. -->
      <div class="item-inner">
        <div class="item-title">Audio motivacional</div>
        <div class="item-after">
          <label class="toggle toggle-init">
            <input type="checkbox" v-model="isMusicPlaying" @change="toggleMusic" />
            <span class="toggle-icon"></span>
          </label>
        </div>
      </div>

      <div class="tabs">
        <!-- Tab 1: Notas -->
        <div id="tab1" class="tab tab-active">
          <div class="button-container">
            <button @click="addNote">Agregar lista de notas</button>
          </div>
          <!-- Contenido de la pestaña "Notas" -->
          <div class="card" v-for="(note, index) in notes" :key="index">
            <div class="card-header">
              Notas
              <button class="delete-note-button" @click="removeNote(index)">
                Eliminar
              </button>
            </div>
            <div class="card-content">
              <div class="card-content-inner">
                <input type="text" v-model="note.title" placeholder="título" />
                <input type="text" v-model="note.subtitle" placeholder="subtítulo" />
                <textarea v-model="note.content" placeholder="nota"></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Organizarte -->
        <div id="tab2" class="tab">
          <!-- Contenido de la pestaña "Organizate" -->
          <h2>
            Te ayudaremos con nuestra especialidad, ayudarte a organizarte.
          </h2>
          <h3>¡¡ Apunta todo !!</h3>
          <!-- Formulario -->
          <div class="list">
            <p>Identificate para aprender a organizarte</p>
            <ul>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Nombre</div>
                  <div class="item-input-wrap">
                    <input type="text" />
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Edad</div>
                  <div class="item-input-wrap">
                    <input type="text" />
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">
                    Carrera o especialidad
                  </div>
                  <div class="item-input-wrap">
                    <input type="text" />
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Hobbys</div>
                  <div class="item-input-wrap">
                    <input type="text" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <f7-block-title>Escoje tus intereses a continuación para adaptarnos a tu forma de
            ser</f7-block-title>
          <f7-list strong-ios outline-ios dividers-ios>
            <f7-list-item checkbox name="my-checkbox" value="Innovador" title="Innovación en Acción"></f7-list-item>
            <f7-list-item checkbox name="my-checkbox" value="Equipo" title="Colaboración Efectiva"></f7-list-item>
            <f7-list-item checkbox name="my-checkbox" value="Perfeccion"
              title="Compromiso con la Excelencia"></f7-list-item>
            <f7-list-item checkbox name="my-checkbox" value="Inspirador" title="Diversidad e Inclusión"></f7-list-item>
          </f7-list>

          <!-- Añadir nuevo ítem  -->
          <f7-list-item>
            <f7-button @click="addItem" fill>Agregar lista</f7-button>
          </f7-list-item>
          <f7-block-title>Lista de tareas</f7-block-title>
          <ul id="sortable" class="list sortable">
            <li v-for="(task, index) in tasks" :key="index" class="item-content" :class="{ completed: task.completed }">
              <div class="item-inner">
                <input v-model="task.text" @blur="() => updateTaskText(index)" class="item-title editable"
                  type="text" />
                <button class="delete-button" @click="removeTask(index)">Eliminar</button>
              </div>
            </li>
          </ul>

          <f7-block-title>Toma consciencia de tus acciones, ¿que harás ahora?</f7-block-title>
          <f7-list strong-ios outline-ios dividers-ios>
            <f7-list-item radio name="radio" value="Sedentarismo" title="Ver el Celular :("></f7-list-item>
            <f7-list-item radio name="radio" value="Lector" title="Leer un libro ;)"></f7-list-item>
            <f7-list-item radio name="radio" value="Inteligente" title="Aprender :)"></f7-list-item>
          </f7-list>
        </div>
        <f7-button fill popup-open="#mi-nota">Nota Rapida</f7-button>

        <!-- Tab 3: Horario -->
        <div id="tab3" class="tab">
          <!-- Contenido de la pestaña "Horario" -->
          <div class="calendar">
            <div class="calendar-header">
              <span class="calendar-prev-month">&lt;</span>
              <span class="calendar-month-year">Agosto 2024</span>
              <span class="calendar-next-month">&gt;</span>
            </div>
            <div class="calendar-weekdays">
              <span>Lunes</span>
              <span>Martes</span>
              <span>Miércoles</span>
              <span>Jueves</span>
              <span>Viernes</span>
              <span>Sábado</span>
              <span>Domingo</span>
            </div>
            <div class="calendar-days">
              <!-- Espacios vacíos para el primer día del mes -->
              <span v-for="n in emptyDays" :key="'empty-' + n"></span>

              <span v-for="day in days" :key="day" class="calendar-day">
                {{ day }}
              </span>
            </div>
          </div>
          <!-- Timeline -->
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-item-date">9 <small>AGO</small></div>
              <div class="timeline-item-divider"></div>
              <div class="timeline-item-content">
                <div class="timeline-item-inner">
                  <div class="timeline-item-title">
                    Evento 1 <input type="text" />
                  </div>
                  <div class="timeline-item-subtitle">
                    Subtitulo <input type="text" />
                  </div>
                  <div class="timeline-item-text">
                    Detalles del evento <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-item-date">10 <small>AGO</small></div>
              <div class="timeline-item-divider"></div>
              <div class="timeline-item-content">
                <div class="timeline-item-inner">
                  <div class="timeline-item-title">
                    Evento 1 <input type="text" />
                  </div>
                  <div class="timeline-item-subtitle">
                    Subtitulo <input type="text" />
                  </div>
                  <div class="timeline-item-text">
                    Detalles del evento <input type="text" />
                  </div>
                </div>
                <div class="timeline-item-date">11 <small>AGO</small></div>
                <div class="timeline-item-divider"></div>
                <div class="timeline-item-content">
                  <div class="timeline-item-inner">
                    <div class="timeline-item-title">
                      <input type="text" />
                    </div>
                    <div class="timeline-item-subtitle">
                      Subtitulo <input type="text" />
                    </div>
                    <div class="timeline-item-text">
                      Detalles del evento <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </f7-block>
    <!-- Audio element -->
    <audio ref="audio" src="../assets/ejemplo.mp3" loop></audio>
  </f7-page>
</template>

<script setup>
import { ref } from "vue";
import '@fortawesome/fontawesome-free/css/all.css';


const isMusicPlaying = ref(false); // Estado para controlar la reproducción de música
const notes = ref([{ title: "", subtitle: "", content: "" }]); // Lista de notas

const tasks = ref([]); // Lista de tareas

// Referencia al elemento de audio
const audio = ref(null);

// Función para alternar la reproducción de música
const toggleMusic = () => {
  if (isMusicPlaying.value) {
    audio.value.play();
  } else {
    audio.value.pause();
  }
};

const updateTaskText = (index) => {
  tasks.value[index].text = tasks.value[index].text.trim();
};

// Función para agregar una nueva nota
const addNote = () => {
  notes.value.push({ title: "", subtitle: "", content: "" });
};

// Función para eliminar una nota
const removeNote = (index) => {
  notes.value.splice(index, 1);
};

// Función para agregar una nueva tarea
const addItem = () => {
  tasks.value.push({ text: "Nueva lista", completed: false });
};

// Función para eliminar una tarea
const removeTask = (index) => {
  tasks.value.splice(index, 1);
};

// Función para alternar la finalización de una tarea
const toggleTaskCompletion = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed;
};

// Obtener la fecha actual
const currentDate = new Date();

// Función para obtener el número de días en el mes
const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

//Crear un array con los días del mes
const days = ref([]);
const updateDays = () => {
  const daysInMonth = getDaysInMonth(
    currentDate.getMonth(),
    currentDate.getFullYear()
  );
  days.value = Array.from({ length: daysInMonth }, (_, i) => i + 1);
};
const emptyDays = ref([]);
// Actualizar los días cuando el componente se monta
updateDays();

onEnd: (event) => {
  console.log('Moved from', event.oldIndex, 'to', event.newIndex);
  const movedTask = tasks.value.splice(event.oldIndex, 1)[0];
  tasks.value.splice(event.newIndex, 0, movedTask);
}

</script>

<style>
.completed input {
  text-decoration: line-through;
  color: #000000;
}

h3 {
  text-align: center;
  margin-left: 10px;
  font-size: 25px;
  color: #666;

  justify-content: space-between;
}

.searchbar-container {
  justify-content: space-between;
  display: flex;
  justify-content: flex-end;
  align-items: center right;
  margin-bottom: 20px;
}

.searchbar {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 5px 10px;
  width: 100%;
  max-width: 400px;
  position: relative;
}

.searchbar input {
  border: none;
  background: none;
  outline: none;
  flex: 1;
  padding-right: 30px;
}

.searchbar i.f7-icons {
  position: absolute;
  right: 10px;
  font-size: 18px;
  color: #333;
}

.calendar {
  border: 1px solid #ddd;
  padding: 10px;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-prev-month,
.calendar-next-month {
  cursor: pointer;
}

.calendar-weekdays,
.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
}

.calendar-weekdays span,
.calendar-days span {
  text-align: center;
  padding: 5px;
  border: 1px solid #ddd;
}

.calendar-days span {
  cursor: pointer;
}

.calendar-days span:hover {
  background-color: #f0f0f0;
}

.timeline {
  padding: 10px;
}

.timeline-item {
  margin-bottom: 10px;
}

.timeline-item-date {
  font-weight: bold;
}

.timeline-item-content {
  display: flex;
  flex-direction: column;
}

.button-container {
  text-align: right;
  margin-bottom: 15px;
}

button {
  height: auto;
  cursor: pointer;
  background: #007aff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s;
}

button:hover {
  background: #005bb5;
}

.delete-note-button {
  float: right;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  width: 7%;
}

.delete-button:hover {
  background: darkred;
}

.delete-button {
  float: right;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  width: 5%;
  font-size: 80%;
}

.delete-button:hover {
  background: darkred;
}

.list {
  margin: 10px 0;
  padding: 0;
  list-style: none;
}

.item-content {
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  background: #fff;
  cursor: move;
  /* Indica que el elemento se puede mover */
}
</style>
