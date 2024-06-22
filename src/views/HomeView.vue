<template>
  <div>
    <h2>Home View</h2>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </div>
</template>

<script setup>
//페이지를 이동하기위해 메서드를 여기에 만듦
import { useRouter } from 'vue-router'
const router = useRouter()
const goAboutPage = () => {
  router.push('/about')
}
</script>

<style lang="scss" scoped></style>
