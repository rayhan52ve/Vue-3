import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/components/Home.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/components/About.vue"),
    },
    {
        path: "/blog/:id",
        name: "Blog-id",
        component: () => import("@/components/Blog.vue"),
    },
];

export default createRouter({
    history: createWebHistory('/'),
    routes,
});
