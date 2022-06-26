// -> Importaciones <- //
import { collection, getDocs, query } from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { db } from "../hook/firebaseConfig";
import { auth } from "../hook/firebaseConfig";

// -> Definimos nuestra tienda/store para que pueda ser accedido en todos los componentes <- //
export const useDatabaseStore = defineStore("database", {
  state: () => ({
    documents: [],
    cargandoDoc: false,
  }),
  actions: {
    // -> Funcion que nos devuelte los campos de coleccion Firestore <- //
    async getCampos() {
      // -> Reseteo <- //
      if (this.documents.length !== 0) {
        return;
      }
      // -> Loading de los documentos <- //
      this.cargandoDoc = true;
      try {
        // -> Utilizamos query para indicar cual va a ser la coleccion que vamos a utilizar, y el nombre de su coleccion en Firestore <- //
        const q = query(collection(db, "campos"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, doc.data(auth.currentUser.uid));
          // -> Se esta creando el objeto y se esta empujando a documents: [] <- //
          this.documents.push({
            id: doc.id,
            // -> Destructuracion del doc.data() <- //
            ...doc.data(),
          });
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.cargandoDoc = false;
      }
    },
  },
});
