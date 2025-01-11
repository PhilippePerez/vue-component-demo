<template>
  <HorizontalLayout class="com-demo-template" style="flex-grow: 1;position: relative" align-y="stretch">
    <HorizontalLayout class="demo-panel" v-if="direction==='x'" align-x="center" style="flex-grow: 1">
      <slot/>
    </HorizontalLayout>
    <VerticalLayout class="demo-panel" v-if="direction==='y'" align-x="center" align-y="start"
                    :style="{'flex-grow': 1, ...(scroll?{}:{'align-self': 'stretch'})}">
      <slot/>
    </VerticalLayout>
    <HorizontalLayout class="demo-panel" v-if="direction==='xy'" align-x="center" style="flex-grow: 1">
      <slot/>
    </HorizontalLayout>
  </HorizontalLayout>
</template>
<script setup>
import {HorizontalLayout, VerticalLayout} from "vue-component-toolkit/dist/vue-component-toolkit.js";


import {defineProps} from 'vue';

defineProps({
  direction: {
    type: String,
    default: 'y',
    required: false
  },
  scroll: {
    type: Boolean,
    required: false
  },
});

</script>

<style scoped>
.demo-panel {
  overflow: hidden;
}
</style>

