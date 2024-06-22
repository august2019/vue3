<template>
  <div>
    <div class="card">
      <div class="card-body">
        <span class="badge text-bg-secondary">{{ typeName }}</span>
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ contents }}
        </p>
        <!--
        <a v-if="isLike" href="#" class="btn btn-danger">좋아요</a>
        <a v-else href="#" class="btn btn-outline-danger">좋아요</a>
        -->
        <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">좋아요</a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  //S:내용
  props: {
    type: {
      type: String,
      default: 'news'
    },
    title: {
      type: String,
      required: true
    },
    contents: {
      type: String
      //required: true
    },
    isLike: {
      type: Boolean,
      default: false
    }
  },
  //E:내용

  //부모에게 전달하고싶다 에밋!!
  emits: ['toggleLike'],

  setup(props, context) {
    //프롭스 전달한다!!
    //뱃지
    const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'))

    //좋아요
    const isLikeClass = computed(() => (props.isLike ? 'btn-danger' : 'btn-outline-danger'))

    //자식에서 부모에게 적용시켜줘!!
    const toggleLike = () => {
      //props.isLike = !props.isLike;
      context.emit('toggleLike')
    }

    return { typeName, isLikeClass, toggleLike }
  }
}
</script>

<style lang="scss" scoped></style>
