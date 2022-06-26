<template>
  <!-- Loader que se ejecuta mientras cargan los datos de Firebase -->
  <span v-if="databaseStore.cargandoDoc">Cargando datos...</span>
  <div class="main-home" v-else>
    <div class="sobremi">
      <!-- <img class="alpaca" src="../assets/alpaquita.jpg" alt="avatar"> -->
      <h1 class="titulos">Sobre mi</h1>
      <p v-for="item of databaseStore.documents" :key="item.id">
        {{ item.sobremi }}
      </p>
    </div>

    <div class="lenguajes">
      <h2 class="titulos">Lenguajes</h2>
      <ul class="icons">
        <li><img src="../assets/icons8-html-5-48.png" alt="html" /></li>
        <li><img src="../assets/icons8-css3-48.png" alt="css" /></li>
        <li><img src="../assets/icons8-javascript-48.png" alt="js" /></li>
        <li><img src="../assets/icons8-vue-js-48.png" alt="vue" /></li>
        <li><img src="../assets/icons8-git-48.png" alt="git" /></li>
      </ul>
      <p v-for="item of databaseStore.documents" :key="item.id">
        {{ item.lenguajes }}
      </p>
    </div>

    <div class="laboral" v-for="item of databaseStore.documents" :key="item.id">
      <h3 class="titulos">Laboral</h3>
      <ul>
        <li>{{ item.laboral1 }}</li>
        <li>{{ item.laboral2 }}</li>
      </ul>
    </div>

    <div
      class="formacion"
      v-for="item of databaseStore.documents"
      :key="item.id"
    >
      <h3 class="titulos">Formacion</h3>
      <ul>
        <li>{{ item.titulo1 }}</li>
        <li>{{ item.titulo2 }}</li>
        <li>{{ item.titulo3 }}</li>
        <li>{{ item.titulo4 }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// -> Importaciones <- //
import { useUserStore } from "../stores/user";
import { useDatabaseStore } from "../stores/database";

const userStore = useUserStore();
const databaseStore = useDatabaseStore();
databaseStore.getCampos();
</script>

<style scoped>
.main-home {
  margin-left: auto;
  margin-right: auto;
  max-width: 62.5rem;
  height: 100vh;
  -webkit-box-shadow: 44px 29px 23px 6px rgba(161, 156, 161, 0.62);
  -moz-box-shadow: 44px 29px 23px 6px rgba(161, 156, 161, 0.62);
  box-shadow: 44px 29px 23px 6px rgba(161, 156, 161, 0.62);
  background-color: rgba(174, 194, 194, 0.4);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "sobremi sobremi sobremi sobremi"
    "lenguajes lenguajes lenguajes lenguajes"
    "laboral laboral formacion formacion";
}

.sobremi {
  margin: auto;
  width: 95%;
  padding: 0.75em;
  grid-area: sobremi;
}

.lenguajes {
  grid-area: lenguajes;
  margin: auto;
  width: 95%;
  padding: 0.75em;
}

.laboral {
  grid-area: laboral;
  margin: auto;
  height: 15rem;
  width: 95%;
  padding: 0.75em;
}

.formacion {
  grid-area: formacion;
  margin: auto;
  height: 15rem;
  width: 95%;
  padding: 0.75em;
}

.titulos {
  display: flex;
  justify-content: center;

  
  

 text-decoration: underline;
 
 

  padding: 1rem;
}

.icons {
  display: flex;
  list-style: none;

  justify-content: center;
}

.icons li {
  padding: 2rem;
}

/* .alpaca{
  float:inline;
  border: 1px solid #ddd;
    padding: 0.25rem;
  border-radius: 2%;
  height: 105px;
} */

ul{
  padding: .5rem;
}

p {
  padding: 0.5rem;
}
</style>
