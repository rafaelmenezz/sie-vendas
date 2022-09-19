import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OperacaoView from '../views/OperacaoView.vue'
import LojisticaView from '../views/LojisticaView.vue'
import FornecedoresView from '../views/FornecedoresView.vue'
import SetoresView from '../views/Setores.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/operacao',
    name: 'Operação',
    component: OperacaoView
  },
  {
    path: '/lojistica',
    name: 'Lojistica',
    component: LojisticaView
  },
  {
    path: '/fornecedores',
    name: 'Fornecedores',
    component: FornecedoresView
  },
  {
    path: '/setores',
    name: 'Setores',
    component: SetoresView
  },
  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
