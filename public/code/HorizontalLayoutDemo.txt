<template>
  <DemoTemplate align-x="start">
    <CodeFragment src="/code/HorizontalLayoutDemo.txt"/>
    <div class="root">
      <VerticalLayout align-y="center">
        <Button text="Click me!" @click="onClick"/>
      </VerticalLayout>
      <VerticalLayout align-y="start">
        <Button text="Click me!" @click="onClick"/>
      </VerticalLayout>
      <VerticalLayout align-y="end">
        <Button text="Click me!" @click="onClick"/>
      </VerticalLayout>
      <VerticalLayout align-y="stretch">
        <Button text="Click me!" @click="onClick"/>
      </VerticalLayout>
    </div>
  </DemoTemplate>
</template>

<script setup>
import DemoTemplate from "../DemoTemplate.vue";
import {Button, VerticalLayout} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import CodeFragment from "../components/CodeFragment.vue";

const onClick = () => {
  window.alert('Clicked');
}
</script>

<style scoped>
.root {
  display: flex;
  flex-grow: 1;
}
</style>

