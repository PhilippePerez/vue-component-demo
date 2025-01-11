<template>
  <DemoTemplate align-x="start" align-y="start" :scroll="true">
    <CodeFragment src="/code/TextFieldDemo-1.txt"/>
    <ValueFeedback :model="value1">
      <TextField v-model="value1"/>
      <TextField v-model="value1" validationError="Syntax error"/>
    </ValueFeedback>
    <CodeFragment src="/code/TextFieldDemo-2.txt"/>
    <ValueFeedback :model="value2" @click="handleClick2">
      <TextField ref='field2' label="Full Name" :initial-value="value2"/>
    </ValueFeedback>
    <CodeFragment src="/code/TextFieldDemo-3.txt"/>
    <ValueFeedback :model="value3" @click="handleClick3">
      <TextField ref='field3' label="Full Name" :initial-value="value3"/>
    </ValueFeedback>
  </DemoTemplate>
</template>

<script setup>
import {ref} from "vue";
import CodeFragment from "../components/CodeFragment.vue";
import DemoTemplate from "../DemoTemplate.vue";
import ValueFeedback from "../components/ValueFeedback.vue";
import {TextField} from "vue-component-toolkit/dist/vue-component-toolkit.js";

const value1 = ref("John Moustache");
const value2 = ref("123");

const field2 = ref();
const handleClick2 = () => {
  value2.value = field2.value.doCommit().value;
};

const value3 = ref("Brick");
const field3 = ref();
const handleClick3 = () => {
  value3.value = field3.value.doCommit().value;
};

</script>

