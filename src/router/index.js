import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Me from '../views/Me.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/me',
    children: [{
      path: 'me',
      name: 'Me',
      component: Me,
      meta: { transitionName: 'slide', tabNum: 1 },
    }, {
      path: 'skills',
      name: 'Skills',
      component: Skills,
      meta: { transitionName: 'slide', tabNum: 2 },
    }, {
      path: 'projects',
      name: 'Projects',
      component: Projects,
      meta: { transitionName: 'slide', tabNum: 3 },
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
