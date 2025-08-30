<template>
  <DemoTemplate :padding="false" align-y="start">
    <CodeFragment src="/code/LoginDemo.txt"/>
    <Card style="align-items: center;justify-content: center;">
      <HorizontalLayout>
        <LostPasswordForm/>
        <TwoFactorForm/>
      </HorizontalLayout>
    </Card>
  </DemoTemplate>
</template>

<script setup>
import {
  HorizontalLayout,
  Card,
} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import CodeFragment from "@/components/CodeFragment.vue";
import DemoTemplate from "@/DemoTemplate.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";
import LostPasswordForm from "@/demo/authentication/OldLostPasswordForm.vue";
import TwoFactorForm from "@/demo/authentication/TwoFactorForm.vue";

const route = useRoute();
const validation = ref(null);
const error = ref(null);

</script>

<style scoped>

</style>
