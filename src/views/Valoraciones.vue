<template>
    <div>
        <form  @submit.prevent="activaForm">
            <input type="text" placeholder="Ingresa tus datos" v-model="nombre">
            <input type="text" placeholder="Ingresa tus datos" v-model="ciudad">
            <button type="submit">Agregar</button>
            <p v-for="item of databaseStore.documents">{{item}} {{item.ciudad}}</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDatabaseStore} from '../stores/database'
import { useUserStore } from '../stores/user';

const databaseStore = useDatabaseStore();
const userStore = useUserStore();

const nombre = ref('');
const ciudad = ref('');
const activaForm = () =>{
    databaseStore.agregarCampos(nombre.value);
    databaseStore.agregarCampos(ciudad.value)
}

</script>

<style scoped>

</style>