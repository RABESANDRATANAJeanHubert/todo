import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/PageProduct.vue')
      },
      {
        path: '/category',
        component: () => import('src/pages/PageCategory.vue')
      },
      {
        path: '/formation',
        component: () => import('src/pages/Formation.vue')
      },
      {
        path: '/experience',
        component: () => import('src/pages/Experienceprof.vue')
      },
      {
        path: '/competence',
        component: () => import('src/pages/Competence.vue')
      },
      {
        path: '/competencelinguistique',

        component: () => import('src/pages/Competlinguistique.vue')
      },
      {
        path: '/activate',

        component: () => import('src/pages/Activitesport.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
