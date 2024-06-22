<template>
  <div>
    <main>
      <div class="container py-4">
        <PostCreate @create-post="createPost"></PostCreate>
        <!-- 클릭했을때 추가되는거   -->

        <hr class="my-4" />

        <div class="row g-3">
          <!-- 반복 -->
          <div v-for="post in posts" :key="post.id" class="col col-4">
            <!-- 선언은 대시로 / 원래꺼는 카멜로 -->
            <AppCard
              :type="post.type"
              :title="post.title"
              :contents="post.contents"
              :is-like="post.isLike"
              @toggle-like="post.isLike = !post.isLike"
            ></AppCard>
            <!-- 자식이 부모에게 전달한거 @toggle-like= -->
          </div>
        </div>

        <hr class="my-4" />

        <LabelInput v-model="username" label="이름"></LabelInput>
        <LabelTitle v-model:title="username" label="제목"></LabelTitle>

        <InputUsername v-model:firstname="firstname" v-model:lastname="lastname"></InputUsername>
      </div>
    </main>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import AppCard from './AppCard.vue'
import InputUsername from './InputUsername.vue'
import LabelInput from './LabelInput.vue'
import LabelTitle from './LabelTitle.vue'
import PostCreate from './PostCreate.vue'

export default {
  components: {
    AppCard,
    PostCreate,
    LabelInput,
    LabelTitle,
    InputUsername
  },
  setup() {
    //S: 옵션 내용

    const posts = reactive([
      { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
      { id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
      { id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
      { id: 4, title: '제목4', contents: '내용4', isLike: false, type: 'notice' },
      { id: 5, title: '제목5', contents: '내용5', isLike: false, type: 'notice' }
    ])

    //푸쉬
    const createPost = (newPost) => {
      posts.push(newPost) //포스츠 배열에 추가
    }

    //하단 인풋
    const username = ref('')

    const firstname = ref('')
    const lastname = ref('')

    return { posts, createPost, username, firstname, lastname }
    //E: 옵션 내용
  }
}
</script>

<style lang="scss" scoped></style>
