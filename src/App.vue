<template>
  <div>
    <!-- Si es verdadero se muestra el contenido (v-if) -->
    <h1 v-if="userStore.userData">App - {{ userStore.userData.email }}</h1>
    <nav v-if="!userStore.cargandoSesion">
      <router-link to="/inicio" v-if="userStore.userData">Inicio |
      </router-link>
      <router-link to="/sesion" v-if="!userStore.userData">Iniciar sesion |
      </router-link>
      <router-link to="/registro" v-if="!userStore.userData">Registro |
      </router-link>
      <button @click="userStore.cerrarSesion" v-if="userStore.userData">
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
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: url(./assets/papel.jpg);
}
</style>
