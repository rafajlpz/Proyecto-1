// -> Creamos la tienda de Pina <- //
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../hook/firebaseConfig";
// -> Importamos el Router para poder usar el router.push() <- //
import router from "../router";

// -> Definimos nuestra tienda/store para que pueda ser accedido en todos los componentes <- //
export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null,
    cargandoUser: false,
    cargandoSesion: false,
  }),

  // -> Con los action modificamos con funciones los datos principales del state <- //
  actions: {
    // -> Funcion para crear usuario autentificacion firebase <- //
    async registrarUsuario(email, password) {
      this.cargandoUser = true;
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
      this.cargandoUser = true;
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
        this.cargandoUser = false;
      }
    },
    // -> Funcion que cierra la sesion del usuario de Firebase loggeado. <- //
    async cerrarSesion() {
      try {
        await signOut(auth);
        this.userData = null;
        //-> router.push() empuja a donde se quiera una vez se haya cerrado sesion <- //
        router.push("/sesion");
      } catch (error) {
        console.log(error);
      }
    },
    // -> Funcion que verifica si hay un usuario conectado y que pueda ver la ruta protegida, en este caso Inicio/Home <- //
    userActual() {
      // -> Resuesta positiva(resolve), negativa(reject) <- //
      return new Promise((resolve, reject) => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            this.userData = { email: user.email, uid: user.uid };
          } else {
            this.userData = null;
          }
          resolve(user);
        });
        unsuscribe();
      });
    },
  },
});
