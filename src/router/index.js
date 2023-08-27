import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useSidebarStore } from '../stores/sidebar'
import { useUserStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'general',
      component: () => import('../views/GeneralPage.vue')
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsPage.vue')
    },
    {
      path: '/user/account',
      name: 'account',
      component: () => import('../views/user/AccountPage.vue')
    }
  ]
})

const secureRoutes = ['admin']
router.beforeEach(async (to) => {
  const authStore = useAuthStore()
  const userStore = useUserStore()
  const sidebarStore = useSidebarStore()

  sidebarStore.closeSidebar('main')

  if (secureRoutes.includes(to.name) && userStore?.user?.role !== 'admin') {
    return { name: 'NotFound' }
  } else if (to.name === 'account' && !authStore.isAuthenticated) {
    return { name: 'general' }
  }
})

export default router
