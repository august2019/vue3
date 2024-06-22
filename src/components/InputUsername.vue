<template>
  <div>
    <LabelInput
      :model-value="firstname"
      @update:model-value="(value) => $emit('update:firstname', value)"
      label="성"
    ></LabelInput>
    <LabelInput
      :model-value="lastname"
      @update:model-value="(value) => $emit('update:lastname', value)"
      label="이름"
    ></LabelInput>
  </div>
</template>

<script>
import LabelInput from './LabelInput.vue'

export default {
  //위로 함수지정
  props: ['firstname', 'lastname'],
  emits: ['update:firstname', 'update:lastname'],

  components: {
    LabelInput
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
