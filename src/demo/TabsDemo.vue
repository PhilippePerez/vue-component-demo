<template>
  <DemoTemplate align-y="start">
    <CodeFragment src="/code/TabsDemo.txt"/>
    <Tabs style="align-self: stretch;flex-grow: 1">
      <Tab text="File" selected :component="renderTab1"/>
      <Tab text="Edit" :component="renderTab2"/>
      <Tab text="Options" disabled/>
    </Tabs>
  </DemoTemplate>
</template>

<script setup>
import DemoTemplate from "../DemoTemplate.vue";
import {h} from "vue";
import CodeFragment from "../components/CodeFragment.vue";
import {Tabs,Tab} from "vue-component-toolkit/dist/vue-component-toolkit.js";


const renderTab1 = () => {
  return h('div', {innerHTML: 'This is dynamic content but the function can be replace by a regular Vue component'});
};
const renderTab2 = () => {
  return h('div', {innerHTML: 'Lorem ipsum'});
};

</script>
