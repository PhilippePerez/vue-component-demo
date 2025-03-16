<template>
  <DemoTemplate align-x="start" align-y="start" :scroll="true">
    <Section title="Hard-coded options">
      <CodeFragment src="/code/SelectFieldDemo-1.txt"/>
      <ValueFeedback :model="value1">
        <SelectField v-model="value1"
                     :options="['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']"/>
      </ValueFeedback>
    </Section>

    <Section title="Local filtered options">
      <CodeFragment src="/code/SelectFieldDemo-2.txt"/>
      <ValueFeedback :model="value2">
        <SelectField v-model="value2"
                     :options="(filter)=>{return ['Cat','Dog','Cow','Sheep'].filter(e=>e.toLowerCase().includes(filter));}"/>
      </ValueFeedback>
    </Section>

    <Section title="Server filtered options">
      <CodeFragment src="/code/SelectFieldDemo-0.txt"/>
      <ValueFeedback :model="value4">
        <SelectField v-model="value4" :options="getOptionListFromServer"/>
      </ValueFeedback>
    </Section>

    <Section title="Json object options coming from a server">
      <CodeFragment src="/code/SelectFieldDemo-0-1.txt"/>
      <ValueFeedback :model="value5">
        <SelectField v-model="value5" :options="getDtoListFromServer" :option-label="(option)=>option.name"/>
      </ValueFeedback>
    </Section>

    <Section title="Getting the value only upon commit">
      <CodeFragment src="/code/SelectFieldDemo-3.txt"/>
      <ValueFeedback :model="value3" @click="handleClick">
        <SelectField ref="field3" :initialValue="value3"
                     :options="(filter)=>{return ['Cat','Dog','Cow','Sheep'].filter(e=>e.toLowerCase().includes(filter));}"/>
      </ValueFeedback>
    </Section>

    <Section title="Validation error state">
      <SelectField v-model="value6" :options="()=>{return ['Cat','Dog','Cow','Sheep'];}"
                   validationError="Syntax error"/>
    </Section>
  </DemoTemplate>
</template>

<script setup>
import {ref} from "vue";
import DemoTemplate from "../DemoTemplate.vue";
import {SelectField, Section} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import {Label} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import CodeFragment from "../components/CodeFragment.vue";
import ValueFeedback from "../components/ValueFeedback.vue";

const value1 = ref("Monday");
const value2 = ref(null);
const value3 = ref('Elephant');
const value4 = ref(null);
const value5 = ref(null);
const value6 = ref(null);
const field3 = ref();

const handleClick = () => {
  value3.value = field3.value.doCommit().value;
};

async function mockBackendApiMethod(filter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Apple", "Banana", "Cherry"].filter(e => e.toLowerCase().includes(filter)));
    }, 1000);
  });
}

async function mockBackendApiMethod2(filter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{id: 1, name: "Apple"}, {id: 2, name: "Banana"}, {
        id: 3,
        name: "Cherry"
      }].filter(e => e.name.toLowerCase().includes(filter)));
    }, 1000);
  });
}

const getOptionListFromServer = async (filter) => {
  return await mockBackendApiMethod(filter)
}

const getDtoListFromServer = async (filter) => {
  return await mockBackendApiMethod2(filter)
}

</script>
