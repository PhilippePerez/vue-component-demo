import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './HomePage.vue';

const routes = [
    {path: '/', component: HomePage, name: 'home'},
    // {path: '/signup', component: HomePage, name: 'signup'},
    {path: '/accordion', component: HomePage, name: 'accordion'},
    {path: '/button', component: HomePage, name: 'button'},
    {path: '/circular-gauge', component: HomePage, name: 'circular-gauge'},
    {path: '/confirmation', component: HomePage, name: 'confirmation'},
    {path: '/dialog', component: HomePage, name: 'dialog'},
    {path: '/form', component: HomePage, name: 'form'},
    {path: '/grid', component: HomePage, name: 'grid'},
    {path: '/horizontal-layout', component: HomePage, name: 'horizontal-layout'},
    {path: '/label', component: HomePage, name: 'label'},
    {path: '/linear-gauge', component: HomePage, name: 'linear-gauge'},
    {path: '/login', component: HomePage, name: 'login'},
    {path: '/signup', component: HomePage, name: 'signup'},
    {path: '/menu', component: HomePage, name: 'menu'},
    {path: '/section', component: HomePage, name: 'section'},
    {path: '/select', component: HomePage, name: 'select'},
    {path: '/side-panel', component: HomePage, name: 'side-panel'},
    {path: '/split-layout', component: HomePage, name: 'split-layout'},
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
