<template>
  <div class="comp-section flex flex-col">
    <Label class="mb-3" :size=4 style="align-self: start">{{ title }}</Label>
    <div class="content flex flex-col gap-4">
      <slot/>
    </div>
  </div>
</template>
<script setup>
import {
  Label
} from "vue-component-toolkit/dist/vue-component-toolkit.js";

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.content {
  @apply ml-4 ;
}
</style>