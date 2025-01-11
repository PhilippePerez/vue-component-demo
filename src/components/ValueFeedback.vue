<template>
  <VerticalLayout class="comp-value-feedback">
     <slot name="code"/>
    <slot/>
    <HorizontalLayout align-y="center" style="justify-content: space-between;align-self: stretch">
      <Button v-if="commit" text="Commit" @click="emit('click')"/>
      Value : {{ model }}
    </HorizontalLayout>
  </VerticalLayout>
</template>

<script setup>

import {VerticalLayout, Button, HorizontalLayout} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import {computed, defineEmits, defineProps, getCurrentInstance} from "vue";

defineProps({
  model: {
    required: true,
  },
});

const emit = defineEmits(['click']);
const instance = getCurrentInstance();
const commit = computed(() => {
  return !!instance?.vnode?.props?.onClick;
});
</script>
