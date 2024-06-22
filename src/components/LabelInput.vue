<template>
  <label>
    {{ label }}
    <!-- <input
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
      type="text"
    /> 이렇게 하지말고 vue3은 이걸 한줄로 v-model="value"  -->
    <input v-model="value" type="text" />
  </label>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['modelValue', 'label'], //입력을 받은값!!
  emits: ['update:modelValue'], //입력을 받은값을 부모에게 절달할꺼야!!

  setup(props, { emit }) {
    const value = computed({
      get() {
        //입력한값
        return props.modelValue
      },
      set(value) {
        //업데이트 변경된값을 넘겨줌
        emit('update:modelValue', value)
      }
    })
    return { value }
  }
}
</script>

<style lang="scss" scoped></style>
