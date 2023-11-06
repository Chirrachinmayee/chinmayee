
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/chinmayee/aboutme', component: () => import('src/pages/AboutMe.vue') },
      { path: '/chinmayee/myskills', component: () => import('src/pages/MySkills.vue') },
      { path: '/chinmayee/myhobbies', component: () => import('src/pages/MyHobbies.vue') },
      { path: '/chinmayee/mypage', component: () => import('src/pages/MyPage.vue')}
    
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
