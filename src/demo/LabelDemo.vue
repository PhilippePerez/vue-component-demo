<template>
  <DemoTemplate align-y="start">
    <CodeFragment src="/code/LabelDemo.txt"/>
    <Label :key="1" :size=1>The quick brown fox ...</Label>
    <Label :size=2>The quick brown fox ...</Label>
    <Label :size=3>The quick brown fox ...</Label>
    <Label :size=4>The quick brown fox ...</Label>
    <Label :size=5>The quick brown fox ...</Label>
  </DemoTemplate>
</template>

<script setup>
import {Label} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import DemoTemplate from "../DemoTemplate.vue";
import CodeFragment from "../components/CodeFragment.vue";
</script>
