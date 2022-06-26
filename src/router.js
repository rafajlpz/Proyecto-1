import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "./stores/user";
import Inicio from "./views/Inicio.vue";
import Registro from "./views/Registro.vue";
import InicioSesion from "./views/InicioSesion.vue";
import Valoraciones from "./views/Valoraciones.vue"

// -> Antes de que entre a la ruta pasa por aqui con 'beforeEnter' <- //
const requiereAuth = async (to, from, next) => {
  // -> En este caso no se puede usar el store directamente fuera de los componentes, tiene que ser dentro de un metodo como este caso <- //
  const userStore = useUserStore();
  userStore.cargandoSesion = true;
  const user = await userStore.userActual();
  // -> Si existe el user con next va a la ruta correspondiente(InicioSesion) y else lo contrario<- //
  if (user) {
    next();
  } else {
    next("/sesion");
  }
  userStore.cargandoSesion = false;
};

const routes = [
  { path: "/", component: Registro},
  { path: "/inicio", component: Inicio, beforeEnter: requiereAuth },
  { path: "/registro", component: Registro },
  { path: "/sesion", component: InicioSesion },
  { path: "/enviar", component: Valoraciones },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
