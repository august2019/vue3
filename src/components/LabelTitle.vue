<template>
  <label>
    {{ label }}
    <input v-model="value" type="text" />
  </label>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['modelValue', 'label'],
  emits: ['update:modelValue'], //부모에게 절달할꺼야

  setup(props, { emit }) {
    const value = computed({
      get() {
        //입력한값
        return props.modelValue
      },
      set(value) {
        //엔터값
        emit('update:modelValue', value)
      }
    })
    return { value }
  }
}
</script>

<style lang="scss" scoped></style>
