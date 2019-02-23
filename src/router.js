import HeaderPart from './assets/components/HeaderPart.vue'
import ContactPart from './assets/components/ContactPart.vue'

export const routes = [
  {path: '', component: HeaderPart},
  {path: '/contact', component: ContactPart, name: 'appContact'}
]
