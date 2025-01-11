import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './HomePage.vue';
import TestPage from "./demo/TestPage.vue";

const routes = [
    {path: '/', component: HomePage, name: 'home'},
    {path: '/button', component: HomePage, name: 'button'},
    {path: '/confirmation', component: HomePage, name: 'confirmation'},
    {path: '/dialog', component: HomePage, name: 'dialog'},
    {path: '/form', component: HomePage, name: 'form'},
    {path: '/grid', component: HomePage, name: 'grid'},
    {path: '/horizontal-layout', component: HomePage, name: 'horizontal-layout'},
    {path: '/label', component: HomePage, name: 'label'},
    {path: '/menu', component: HomePage, name: 'menu'},
    {path: '/select', component: HomePage, name: 'select'},
    {path: '/side-panel', component: HomePage, name: 'side-panel'},
    {path: '/tabs', component: HomePage, name: 'tabs'},
    {path: '/text', component: HomePage, name: 'text'},
    {path: '/test', component: TestPage, name: 'test'},
    {path: '/vertical-layout', component: HomePage, name: 'vertical-layout'},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
