import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './HomePage.vue';

const routes = [
    {path: '/', component: HomePage, name: 'home'},
    {path: '/accordion', component: HomePage, name: 'accordion'},
    {path: '/button', component: HomePage, name: 'button'},
    {path: '/confirmation', component: HomePage, name: 'confirmation'},
    {path: '/dialog', component: HomePage, name: 'dialog'},
    {path: '/form', component: HomePage, name: 'form'},
    {path: '/grid', component: HomePage, name: 'grid'},
    {path: '/horizontal-layout', component: HomePage, name: 'horizontal-layout'},
    {path: '/label', component: HomePage, name: 'label'},
    {path: '/menu', component: HomePage, name: 'menu'},
    {path: '/section', component: HomePage, name: 'section'},
    {path: '/select', component: HomePage, name: 'select'},
    {path: '/side-panel', component: HomePage, name: 'side-panel'},
    {path: '/stepflow', component: HomePage, name: 'stepflow'},
    {path: '/tabs', component: HomePage, name: 'tabs'},
    {path: '/take-photo', component: HomePage, name: 'take-photo'},
    {path: '/text', component: HomePage, name: 'text'},
    {path: '/vertical-layout', component: HomePage, name: 'vertical-layout'},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
