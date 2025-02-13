<template>
  <DemoTemplate align-x="start" align-y="start" :scroll="true">
    <ValueFeedback :model="value4">
      <SelectField v-model="value4" :options="asynchrounousFunctionExample"/>
    </ValueFeedback>

    <CodeFragment src="/code/SelectFieldDemo-1.txt"/>
    <ValueFeedback :model="value1">
      <SelectField v-model="value1"
                   :options="['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']"/>
    </ValueFeedback>
    <CodeFragment src="/code/SelectFieldDemo-2.txt"/>
    <ValueFeedback :model="value2">
      <SelectField v-model="value2"
                   :options="(filter)=>{return ['Cat','Dog','Cow','Sheep'].filter(e=>e.toLowerCase().includes(filter));}"/>
    </ValueFeedback>
    <SelectField v-model="value2" :options="()=>{return ['Cat','Dog','Cow','Sheep'];}"
                 validationError="Syntax error"/>
    <CodeFragment src="/code/SelectFieldDemo-3.txt"/>
    <ValueFeedback :model="value3" @click="handleClick">
      <SelectField ref="field3" :initialValue="value3"
                   :options="(filter)=>{return ['Cat','Dog','Cow','Sheep'].filter(e=>e.toLowerCase().includes(filter));}"/>
    </ValueFeedback>
  </DemoTemplate>
</template>

<script setup>
import {ref} from "vue";
import DemoTemplate from "../DemoTemplate.vue";
import {SelectField} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import CodeFragment from "../components/CodeFragment.vue";
import ValueFeedback from "../components/ValueFeedback.vue";

const value1 = ref("Monday");
const value2 = ref(null);
const value3 = ref('Elephant');
const value4 = ref(null);
const field3 = ref();

const handleClick = () => {
  value3.value = field3.value.doCommit().value;
};

async function mockServerCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Apple", "Banana", "Cherry"]);
    }, 1000);
  });
}

const asynchrounousFunctionExample = async (filter) => {
  console.log("Fetching data..." + filter);
  const data = await mockServerCall();
  console.log("Data received:", data);
  return data
}

</script>
