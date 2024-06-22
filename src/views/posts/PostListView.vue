<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <!-- <div class="col-4">
        <PostItem title="제목" content="내용" create-at="2024.06.22"></PostItem>
      </div> -->

      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :create-at="post.createAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue'
//#01 api파일을 가져오겠다
import { getPosts } from '@/api/posts'
import { ref } from 'vue' //반응형
//#02 버튼으로 페이지이동
import { useRouter } from 'vue-router'

const posts = ref([])
const fetchPosts = () => {
  posts.value = getPosts()
}
fetchPosts()

//==============버튼눌렀을때 상세 호출
const router = useRouter()
const goPage = (id) => {
  //router.push(`/posts/${id}`)
  router.push({
    name: 'PostDetail',
    params: {
      id
    }
  })
}
</script>

<style lang="scss" scoped></style>
