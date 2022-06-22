import {createRouter, createWebHistory } from 'vue-router';
import Inicio from './views/Inicio.vue';
import Registro from './views/Registro.vue';
import InicioSesion from './views/InicioSesion.vue';

const routes = [
    {path: '/inicio', component: Inicio},
    {path: '/registro', component: Registro},
    {path: '/sesion', component: InicioSesion},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;