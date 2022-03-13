import Home from './views/home/Home.vue'
import Dashboard from './views/Dashboard/Dashboard.vue'

export const routes = [
    {
        path: '', component: Home, name: 'Home'
    },
    {
        path: '/dashboard', component: Dashboard, name: 'Dashboard'
    }


]