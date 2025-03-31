import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/login",
    component: () => import("../pages/login/index.vue"),
    meta: {
      layout: "auth",
    },
  },

  {
    path: "/",
    component: () => import("../pages/deposit/index.vue"),
    meta: {
      layout: "default",
    },
  },

  {
    path: "/test-withdraw",
    component: () => import("../pages/withdraw/test-withdraw.vue"),
    name: 'test-withdraw',
    meta: {
      layout: "default",
    },
  },

  {
    path: "/test-deposit",
    component: () => import("../pages/deposit/test-deposit.vue"),
    name: 'test-deposit',
    meta: {
      layout: "default",
    },
  },

  {
    path: "/success",
    component: () => import("../pages/success/index.vue"),
    name: 'success',
    meta: {
      layout: "default",
    },
  },

  {
    path: "/payment-deposit/:order_id",
    component: () => import("../pages/deposit/payment-deposit.vue"),
    name: 'payment',

    meta: {
      layout: "default",
    },
  },
  {
    path: "/withdraw",
    component: () => import("../pages/withdraw/index.vue"),
    meta: {
      layout: "default",
    },
  },
  {
    path: "/transactions",
    component: () => import("../pages/transactions/index.vue"),
    name: "transaction",
    meta: {

      layout: "authenticated",
      requiresAuth: true,
    },
  },
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


router.beforeEach((to, from, next) => {
    const isAuthenticated =  localStorage.getItem('token');
    if(to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    }
    else {
        next();
    }
})
export default router;