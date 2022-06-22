<template>
    <div class="contenedor">

        <div class="caja-formulario">
            <h1 class="titulo-admin">Registro</h1>
            <p></p>

            <hr />
            <br />
            <form class="myForm" @submit.prevent="enviarForm" action="#" id="myForm">
                <div class="control">
                    <label for="email"> Correo electronico </label>
                    <input class="inputs" type="email" id="email" v-model.trim="email" required />
                </div>
                <div class="control">
                    <label for="password"> Contraseña </label>
                    <input class="inputs uno" type="password" id="password" v-model.trim="password" />
                </div>
                <br />
                <button class="botones">
                    Login
                </button>
                <input class="botones" type="button" value="Logout" />
                <br />

            </form>
        </div>
    </div>
</template>

<script setup>
// -> Importaciones de librerias <- //
import { ref } from 'vue'
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';


// -> Constantes o variables <- //
const userStore = useUserStore();
const router = useRouter();
const email = ref('rafajlpz@prueba.es')
const password = ref('1234')

// -> Funcion para validar/enviar formulario <- //
const enviarForm = async () => {
    if (!password.value || !email.value) {
        return alert(`No se admiten campos vacios`)
    } if (password.value.length < 6) {
        return alert(`Password muy debil`)
    }
    try {
        /* 
        -> router.push() empuja a donde se quiera una vez se haya registrado el usuario <- 
        -----------------------------------------------------------------------------------------------------------------
         -> Tiene que tener await por que estamos esperando que se cumpla la promesa del user.js registrarUsuario() <-  */
        await userStore.registrarUsuario(email.value, password.value)
        router.push('/inicio')
    }
    catch (error) {
        console.log(error)
    }

}

</script>

<style scoped>
.contenedor {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

}

.caja-formulario {
    border: 1px solid grey;
    padding: 1.5em;
    border-radius: 4px;
}

.control {
    display: flex;
    flex-direction: row;
    width: fit-content;
    align-items: center;
}

.inputs {
    width: 100%;
    background: cornsilk;
    display: flex;
    padding: 0.4rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    border: 1px solid orange;
}

.uno {
    margin-left: 10px;
}

.botones {
    /* border-radius: 4px; */
    padding: 0.3rem;
    margin-right: 0.5rem;
    border: 1px solid orange;
    border-radius: 4px;
    background: cornsilk;
}

.titulo-admin {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    text-shadow: 1rem 1rem 1.1rem;
}
</style>