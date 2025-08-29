<template>
  <DemoTemplate :padding="false" align-y="start">
    <CodeFragment src="/code/LoginDemo.txt"/>
    <Card style="align-items: center;justify-content: center;">
      <VerticalLayout>
        <LoginForm v-if="!submited" class="app-form" v-model="formData" @submit="sendFormToServer"
                   @subscribe="subscribe" @forgot="forgot"/>
        <VerticalLayout v-if="submited">
          Those form data have been sent to the server
          {{ formData }}
        </VerticalLayout>
      </VerticalLayout>
    </Card>
  </DemoTemplate>
</template>

<script setup>
import {
  LoginForm,
  VerticalLayout,
  Card,
} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import CodeFragment from "@/components/CodeFragment.vue";
import DemoTemplate from "@/DemoTemplate.vue";
import {ref} from "vue";

const error = ref(null);
const submited = ref(false);
const formData = ref({email: '', password: ''});
const sendFormToServer = (data) => {
  submited.value = true;
}

const subscribe = () => {
  console.log('One would here call the router');
}
const forgot = (data) => {
  console.log('One would here call the router ' + data);
}
</script>

<style scoped>
.app-form {
  min-width: 450px;
}
</style>
