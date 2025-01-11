<template>
  <DemoTemplate class="comp-button-demo" align-x="center">
    <CodeFragment src="/code/ButtonDemo.txt"/>
    <HorizontalLayout>
      <Button text="Click me!" @click="onClick"/>
      <Button variant="secondary" text="Click me!" @click="onClick"/>
      <Button variant="danger" text="Click me!" @click="onClick"/>
    </HorizontalLayout>
  </DemoTemplate>
</template>

<script setup>
import {Button, HorizontalLayout} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import DemoTemplate from "../DemoTemplate.vue";
import CodeFragment from "../components/CodeFragment.vue";

const onClick = () => {
  window.alert('Clicked');
}
</script>

