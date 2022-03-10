import Home from './pages/home/Home.vue'
import Dashboard from './pages/Dashboard/Dashboard.vue'

export const routes = [
    {
        path: '', component: Home, name: 'Home'
    },
    {
        path: '/dashboard/:id', component: Dashboard, name: 'Dashboard'
    }


]