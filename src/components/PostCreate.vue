<template>
  <div>
    <div class="row">
      <div class="col col-2">
        <select v-model="type" class="form-select" aria-label="Default select example">
          <option value="news">뉴스</option>
          <option value="notice">공지사항</option>
        </select>
      </div>
      <div class="col col-8">
        <input v-model="title" type="text" class="form-control" />
      </div>
      <div class="col col-2 d-grid">
        <button class="btn btn-primary" @click="createPost">추가</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

//부모한테 내행동을 전할려면
// 1. props 옆에 친구를 날린다 context
export default {
  //emits: ['createPost'],
  emits: {
    //에미츠!!
    createPost: (newPost) => {
      if (!newPost.type) {
        return false
      } else if (!newPost.title) {
        return false
      }
      return true
    }
  },
  setup(props, { emit }) {
    const type = ref('news')
    const title = ref('')

    //추가버튼 눌렀을때
    const createPost = () => {
      const newPost = {
        type: type.value,
        title: title.value
      }

      emit('createPost', newPost)

      //초기화
      type.value = 'news'
      title.value = ''
    }
    return {
      createPost,
      title,
      type
    }
  }
}
</script>

<style lang="scss" scoped></style>
