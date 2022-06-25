<template>
  <div class="main-home">
    <div class="sobremi">
      <h1>Sobre mi</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto itaque
        autem magnam sint perspiciatis est impedit vero eum possimus totam!
        Dolorem quos excepturi error voluptatem aut tempore officia quam?
        Maiores eveniet, corrupti odit eos asperiores culpa adipisci, eligendi
        reprehenderit ut tempora tempore id, sunt saepe cum nulla. Odio, quaerat
        voluptas?
      </p>
    </div>

    <div class="lenguajes">
      <h2>Lenguajes</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto itaque
        autem magnam sint perspiciatis est impedit vero eum possimus totam!
        Dolorem quos excepturi error voluptatem aut tempore officia quam?
        Maiores eveniet, corrupti odit eos asperiores culpa adipisci, eligendi
        reprehenderit ut tempora tempore id, sunt saepe cum nulla. Odio, quaerat
        voluptas?
      </p>
    </div>

    <div class="laboral">
      <h3>Laboral</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto itaque
        autem magnam sint perspiciatis est impedit vero eum possimus totam!
        Dolorem quos excepturi error voluptatem aut tempore officia quam?
        Maiores eveniet, corrupti odit eos asperiores culpa adipisci, eligendi
        reprehenderit ut tempora tempore id, sunt saepe cum nulla. Odio, quaerat
        voluptas?
      </p>
    </div>

    <div class="formacion">
      <h3>Formacion</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto itaque
        autem magnam sint perspiciatis est impedit vero eum possimus totam!
        Dolorem quos excepturi error voluptatem aut tempore officia quam?
        Maiores eveniet, corrupti odit eos asperiores culpa adipisci, eligendi
        reprehenderit ut tempora tempore id, sunt saepe cum nulla. Odio, quaerat
        voluptas?
      </p>
    </div>
  </div>
</template>

<script setup>
// -> Importaciones <- //
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
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
  overflow: auto;
  margin: auto;
  width: 95%;
  padding: 0.75em;
  grid-area: sobremi;
}

.lenguajes {
  overflow: auto;
  grid-area: lenguajes;
  margin: auto;
  width: 95%;
  padding: 0.75em;
}

.laboral {
  overflow: auto;
  grid-area: laboral;
  margin: auto;
  height: 15rem;
  width: 95%;
  padding: 0.75em;
}

.formacion {
  overflow: scroll;
  overflow: -webkit-overflow-scrolling;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  scroll-behavior: smooth;
  grid-area: formacion;
  margin: auto;
  height: 15rem;
  width: 95%;
  padding: 0.75em;
}
</style>
