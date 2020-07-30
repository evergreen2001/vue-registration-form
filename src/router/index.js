//Import vue router and Vue

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// The main pages
import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
import Jobs from '../components/pages/Jobs.vue';


const routes = [
    // Main pages route
    { path: "/", component: Home },
    { path: "/Jobs", component: Jobs },
    { path: "/about", component: About },
  

   

    
];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
})