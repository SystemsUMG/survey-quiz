import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "../views/BaseLayout.vue";
import AdminLayout from "../views/AdminLayout.vue";
import Database from "../pages/Database.vue";
import Survey from "../pages/Survey.vue";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

const routes = [
    {
        path: "/",
        name: "/",
        redirect: "/survey",
    },
    {
        path: '/database',
        component: BaseLayout,
        children: [
            {
                path: '',
                name: 'database',
                component: Database
            }
        ]
    },
    {
        path: '/survey',
        component: BaseLayout,
        children: [
            {
                path: '',
                name: 'survey',
                component: Survey
            }
        ]
    },
    {
        path: '/tables',
        component: AdminLayout,
        children: [
            {
                path: "",
                name: "tables",
                component: Tables,
            },
        ]
    },
    {
        path: "/dashboard-default",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/billing",
        name: "Billing",
        component: Billing,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/signin",
        name: "Signin",
        component: Signin,
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.APP_URL),
    routes,
    linkActiveClass: "active",
});

export default router;
