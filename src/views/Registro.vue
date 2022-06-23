<template>
  <div class="contenedor">
    <div class="caja-formulario">
      <h1 class="titulo-admin">Registro</h1>
      <hr />
      <br />
      <form class="myForm" @submit.prevent="enviarForm" action="#" id="myForm">
        <div class="control">
          <label for="email"> Correo electronico </label>
          <input
            class="inputs"
            type="email"
            id="email"
            v-model.trim="email"
            required
          />
        </div>
        <div class="control">
          <label for="password"> Contraseña </label>
          <input
            class="inputs uno"
            type="password"
            id="password"
            v-model.trim="password"
          />
        </div>
        <br />
        <button class="botones" type="submit" :disabled="userStore.cargandoUser">Crear usuario</button>
        <br />
      </form>
    </div>
  </div>
</template>

<script setup>
// -> Importaciones de librerias <- //
import { ref } from "vue";
import { useUserStore } from "../stores/user";

// -> Constantes o variables <- //
const userStore = useUserStore();
const email = ref("");
const password = ref("");

// -> Funcion para validar/enviar formulario <- //
const enviarForm = async () => {
  if (!password.value || !email.value) {
    return alert(`No se admiten campos vacios`);
  }
  if (password.value.length < 6) {
    return alert(`Password muy debil`);
  }
  try {
    // -> Tiene que tener await por que estamos esperando que se cumpla la promesa del user.js registrarUsuario() <-  //
    await userStore.registrarUsuario(email.value, password.value);
  } catch (error) {
    console.log(error);
  }
};
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
