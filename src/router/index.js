import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateView from '../views/CreateView.vue';
import EditView from '../views/EditView.vue';
import AboutView from '../views/AboutView.vue';
import GraficaView from '../views/GraficaView.vue';
import ReporteView from '../views/ReporteView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  }
  ,
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/grafica',
    name: 'grafica',
    component: GraficaView
  },
  {
    path: '/reporte',
    name: 'reporte',
    component: ReporteView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
