<template>
  <div>
    <!-- Si es verdadero se muestra el contenido (v-if) -->
    <h1 v-if="userStore.userData">Beta App - {{ userStore.userData.email }}</h1>
    <nav class="nav" v-if="!userStore.cargandoSesion">
      <router-link to="/inicio" v-if="userStore.userData"
        >Inicio |
      </router-link>
      <router-link to="/sesion" v-if="!userStore.userData"
        >Iniciar sesion |
      </router-link>
      <router-link to="/registro" v-if="!userStore.userData"
        >Registro |
      </router-link>
      <button
        class="cerrar"
        @click="userStore.cerrarSesion"
        v-if="userStore.userData"
      >
        Cerrar sesion
      </button>
    </nav>
    <div v-else>Cargando usuario...</div>
    <router-view></router-view>
  </div>
  <nav></nav>
</template>

<script setup>
import { useUserStore } from "./stores/user";
const userStore = useUserStore();

userStore.userActual();
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  padding: 0.5rem;
}

.cerrar {
  padding: 0.25rem;
  background-color: red;
  border: none;
  border-radius: 4px;
  color: white;
}

body {
  background: url(./assets/papel.jpg);
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: larger;
}

.nav {
  top: 0;
  right: 0;
  width: 100%;
}

.nav a {
  text-decoration: none;
  padding: 0.5em;
  color: black;
}
</style>
