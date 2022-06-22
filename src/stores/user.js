// -> Creamos la tienda de Pina <- //
import { createUserWithEmailAndPassword } from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../hook/firebaseConfig";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null,
  }),

  // -> Con los action modificamos con funciones los datos principales del state <- //
  actions: {
    // -> Funcion para crear usuario autentificacion firebase <- //
    async registrarUsuario(email, password) {
      try {
        // -> Destructuramos (el obejto tiene muchas posibilidades), sacamos la propiedad user, que seria la respuesta <-
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // -> Enviamos a Firebase los datos que estamos introduciendo <- //
        this.userData = { email: user.email, uid: user.uid };
      } catch (error) {
        console.log(error);
      }
    },
  },
});
