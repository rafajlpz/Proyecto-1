<template>
  <div>
    <h1>App</h1>
    <nav>
      <router-link to="/inicio">Inicio</router-link> |
      <router-link to="/sesion">Iniciar sesion</router-link> |
      <router-link to="/registro">Registro</router-link> |
      <button>Logout</button>

    </nav>
    <router-view></router-view>
  </div>
  <nav>
   
  </nav>

</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>