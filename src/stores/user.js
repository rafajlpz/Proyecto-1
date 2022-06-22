// -> Creamos la tienda de Pina <- //
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null,
  }),
  
  actions: {
    usuarioRegistrado(nombre){
      this.userData = nombre
    }
  }
});
