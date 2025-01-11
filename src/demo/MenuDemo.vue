<template>
  <DemoTemplate align-y="start">
    <CodeFragment src="/code/MenuDemo.txt"/>
    <Menu style="align-self: stretch;flex-grow: 1" :drawer="false">
      <MenuItem text="File" selected>
        <MenuItem text="Open" selected :component="openFile"/>
        <MenuItem text="Close" selected :component="closeFile"/>
        <MenuItem text="Delete" selected :component="deleteFile"/>
      </MenuItem>
      <MenuItem text="Edit" :component="edit"/>
      <MenuItem text="Options" disabled/>
    </Menu>
  </DemoTemplate>
</template>

<script setup>
import DemoTemplate from "../DemoTemplate.vue";
import {h} from "vue";
import CodeFragment from "../components/CodeFragment.vue";
import {Menu,MenuItem} from "vue-component-toolkit/dist/vue-component-toolkit.js";


const openFile = () => {
  return h('div', {innerHTML: 'Open file panel , This is dynamic content but the function can be replace by a regular Vue component'});
};
const closeFile = () => {
  return h('div', {innerHTML: 'Close file panel , This is dynamic content but the function can be replace by a regular Vue component'});
};
const deleteFile = () => {
  return h('div', {innerHTML: 'Delete file panel , This is dynamic content but the function can be replace by a regular Vue component'});
};
const edit = () => {
  return h('div', {innerHTML: 'Edit panel , This is dynamic content but the function can be replace by a regular Vue component'});
};

</script>
