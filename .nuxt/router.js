import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72346d7d = () => interopDefault(import('../pages/myPage.vue' /* webpackChunkName: "pages/myPage" */))
const _330ada38 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _57f3bb70 = () => interopDefault(import('../pages/auth/password.vue' /* webpackChunkName: "pages/auth/password" */))
const _5f462910 = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _3e2e3bda = () => interopDefault(import('../pages/posts/create.vue' /* webpackChunkName: "pages/posts/create" */))
const _2997db54 = () => interopDefault(import('../pages/posts/_post/index.vue' /* webpackChunkName: "pages/posts/_post/index" */))
const _62518d78 = () => interopDefault(import('../pages/posts/_post/edit.vue' /* webpackChunkName: "pages/posts/_post/edit" */))
const _c132f1c0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3b286b86 = () => interopDefault(import('../pages/_boards/index.vue' /* webpackChunkName: "pages/_boards/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/myPage",
    component: _72346d7d,
    name: "myPage"
  }, {
    path: "/auth/login",
    component: _330ada38,
    name: "auth-login"
  }, {
    path: "/auth/password",
    component: _57f3bb70,
    name: "auth-password"
  }, {
    path: "/auth/register",
    component: _5f462910,
    name: "auth-register"
  }, {
    path: "/posts/create",
    component: _3e2e3bda,
    name: "posts-create"
  }, {
    path: "/posts/:post?",
    component: _2997db54,
    name: "posts-post"
  }, {
    path: "/posts/:post?/edit",
    component: _62518d78,
    name: "posts-post-edit"
  }, {
    path: "/",
    component: _c132f1c0,
    name: "index"
  }, {
    path: "/:boards",
    component: _3b286b86,
    name: "boards"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
