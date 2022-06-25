<template>
    <div>
        <h1>Inicio</h1>
        <p>{{userStore.userData.email}}</p>
    </div>
</template>

<script setup>
// -> Importaciones <- //
import { useUserStore } from '../stores/user';
const userStore = useUserStore()

</script>

<style scoped>

</style>