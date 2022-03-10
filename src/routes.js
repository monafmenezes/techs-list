import Home from './pages/home/Home.vue'
import Dashboard from './pages/Dashboard/Dashboard.vue'

export const routes = [
    {
        path: '', component: Home
    },
    {
        path: '/dashboard', component: Dashboard
    }

]