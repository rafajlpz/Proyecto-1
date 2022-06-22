<template>
  <div>
    <h1>App</h1>
    <nav>
      <router-link to="/inicio">Inicio</router-link> |
      <router-link to="/sesion">Iniciar sesion</router-link> |
      <router-link to="/registro">Registro</router-link> |
    </nav>
    <router-view></router-view>
  </div>
  <nav>

  </nav>

</template>

<script setup>

</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }


</style>