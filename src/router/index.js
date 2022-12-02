import { createRouter, createWebHistory} from 'vue-router'
import ShopPage from "@/views/ShopPage.vue";
import GalleryPage from "@/views/GalleryPage.vue";
import CreatingPage from "@/views/CreatingPage.vue";

const routes = [
  {
    path: '/',
    name: 'ShopPage',
    component: ShopPage
  },
  {
    path: '/gallery',
    name: 'GalleryPage',
    component: GalleryPage
  },
  {
    path: '/createnft',
    name: 'CreatingPage',
    component: CreatingPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
