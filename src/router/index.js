import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "User" */ '../views/User.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "Menu" */ '../views/Menu.vue')
  },
  {
    path: '/portal/:id?',
    name: 'Portal',
    component: () => import(/* webpackChunkName: "Portal" */ '../views/Portal.vue')
  },
  {
    path: '/TabView/:id?',
    name: 'TabView',
    component: () => import(/* webpackChunkName: "TabView" */ '../views/TabView.vue')
  }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
