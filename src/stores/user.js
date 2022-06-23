// -> Creamos la tienda de Pina <- //
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../hook/firebaseConfig";
// -> Importamos el Router para poder usar el router.push() <- //
import router from "../router"

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null,
    cargandoUser: false
  }),

  // -> Con los action modificamos con funciones los datos principales del state <- //
  actions: {
    // -> Funcion para crear usuario autentificacion firebase <- //
    async registrarUsuario(email, password) {
      this.cargandoUser = true
      try {
        // -> Destructuramos (el objeto tiene muchas posibilidades), sacamos la propiedad user, que seria la respuesta <-
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // -> Enviamos a Firebase los datos que estamos introduciendo <- //
        this.userData = { email: user.email, uid: user.uid };
        //-> router.push() empuja a donde se quiera una vez se haya registrado el usuario <- //
        router.push("/inicio");
      } catch (error) {
        console.log(error);
      } finally {
        this.cargandoUser = false;
      }
    },
    // -> Funcion para uniciar sesion de usuario creado en Firebase o registrado anteriormente <- //
    async inicioSesion(email, password) {
      this.cargandoUser = true
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = { email: user.email, uid: user.ui };
        //-> router.push() empuja a donde se quiera una vez se haya logeado el usuario <- //
        router.push("/inicio");
      } catch (error) {
        console.log(error);
      } finally {
        this.cargandoUser = false
      }
    },
    async cerrarSesion() {
      try {
        await signOut(auth);
        this.userData = null;
        //-> router.push() empuja a donde se quiera una vez se haya cerrado sesion <- //
        router.push('/sesion')
      } catch (error) {
        console.log(error);
      }
    },
  },
});
