<template>
  <DemoTemplate>
    <CodeFragment src="/code/HorizontalLayoutDemo.txt"/>

    <HorizontalLayout align-x="center" style="align-self: stretch">
      <Button text="Click me!" @click="onClick"/>
    </HorizontalLayout>
    <HorizontalLayout align-x="start" style="align-self: stretch">
      <Button text="Click me!" @click="onClick"/>
    </HorizontalLayout>
    <HorizontalLayout align-x="end" style="align-self: stretch">
      <Button text="Click me!" @click="onClick"/>
    </HorizontalLayout>
    <HorizontalLayout align-x="stretch" style="align-self: stretch">
      <Button text="Click me!" @click="onClick"/>
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
