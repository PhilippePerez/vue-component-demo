<template>
  <DemoTemplate class='comp-form-demo bg-gray-100' align-x="center" align-y="center">
    <Label :size=4 style="align-self: start">Accessing form data after a user commit action</Label>
    <ValueFeedback class="feedback" :model="value" @click="handleSubmit">
      <CodeFragment src="/code/FormDemo.txt"/>
      <Form ref="formField"
            :entries="[
            {path:'firstName',label:'First Name',props:{placeholder:'Paul',autocomplete:'off'}},
        {path:'lastName',label:'Last Name',props:{placeholder:'Durand',autocomplete:'off'}},
        {path:'email',label:'E-Mail',props:{placeholder:'guess@who.com',type:'email',autocomplete:'off'}},
        {path:'birthdate',label:'Birth Date',props:{placeholder:'10/10/2021',type:'date'}},
        {path:'country',label:'Country',component:SelectField,props:{options:['Berlin','Paris','London','New-York','Moscow','Madrid','Tel-Aviv','Manilla']}},
        {path:'password',label:'Password',props:{placeholder:'Password',type:'password'}}
        ]"
            :initialValue="value"
      />
    </ValueFeedback>
    <Label :size=4 style="align-self: start">Accessing form data in real time</Label>
    <ValueFeedback class="feedback" :model="value2">
      <Form :entries="[{path:'firstName',label:'First Name',props:{placeholder:'Paul',autocomplete:'off'}}]"
            :value="{firstName:'Mike'}"
            v-model="value2"
      />
    </ValueFeedback>
    <Label :size=4 style="align-self: start">Form error handling</Label>
    <ValueFeedback class="feedback" :model="value3">
      <Form :entries="[
            {path:'firstName',label:'First Name',props:{placeholder:'Jason',autocomplete:'off'}},
            {path:'lastName',label:'Last Name',props:{placeholder:'Blaze',autocomplete:'off'}},
        ]"
            :validationError="{'firstName':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}"
            :layout="VerticalFormLayout"
            v-model="value3"
      />
    </ValueFeedback>
  </DemoTemplate>
</template>
<script setup>
import DemoTemplate from "../DemoTemplate.vue";

import {ref} from "vue";
import ValueFeedback from "../components/ValueFeedback.vue";
import CodeFragment from "../components/CodeFragment.vue";
import {Form, VerticalFormLayout, Label} from "vue-component-toolkit/dist/vue-component-toolkit.js";

const formField = ref();
const handleSubmit = () => {
  value.value = formField.value.doCommit().value;
};
const value = ref({firstName: 'Jean', country: 'Lisbon', email: 'paul@acme.com'});

const value2 = ref({firstName: 'Marc', country: 'Paris', email: 'marc@acme.com'});

const value3 = ref({firstName: 'Peter', lastName: 'Falk'});
</script>

<style scoped>
.feedback {
  align-self: stretch;
}
</style>