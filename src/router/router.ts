import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Experience from '../views/Experience.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      name: 'Home',
    },
    {
      path: '/about',
      component: About,
      name: 'About',
    },
    {
      path: '/contact',
      component: Contact,
      name: 'Contact',
    },
    {
      path: '/experience',
      component: Experience,
      name: 'Experience',
    },
    // {
    //   path: '/stack',
    //   component: About,
    //   name: 'About',
    // },
  ],
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
