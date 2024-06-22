import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostListView from '@/views/posts/PostListView.vue'

//라우츠
const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView
  },
  //게시판들
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailView
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView
  }
]

//라우터 정의
const router = createRouter({
  history: createWebHistory('/'),
  routes
})

//외부에서 라우터를 사용할려면 엑스폴트 시켜야한다!!
export default router
