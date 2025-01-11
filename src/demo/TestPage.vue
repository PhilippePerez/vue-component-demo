<template>
  <Form ref="formField" :entries="[
            {path:'firstName',label:'First Name',props:{placeholder:'Jason',autocomplete:'off'}},
            {path:'lastName',label:'Last Name',props:{placeholder:'Blaze',autocomplete:'off'}}
        ]"
        :validationError="{'firstName':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}"
        :layout="VerticalFormLayout"
        v-model="user"
        @update:modelValue="(newValue)=>console.log(newValue)"
  />
</template>

<script setup>
import {ref} from "vue";
import {VerticalFormLayout, Form} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import ValueFeedback from "../components/ValueFeedback.vue";

const user = ref({firstName: 'Peter', lastName: 'Falk'});
const formField = ref();
const handleSubmit = () => {
  // user.value = formField.value.doCommit().value;
};

</script>

<style scoped>
</style>
