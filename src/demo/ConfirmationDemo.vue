<template>
  <DemoTemplate :padding="false" align-x="center">
    <CodeFragment src="/code/ConfirmationDemo.txt"/>
    <Button text="Open a dialog" @click="openDialog"/>
  </DemoTemplate>
</template>

<script setup>
import {Button, Confirmation} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import {h, inject} from "vue";
import {useI18n} from "vue-i18n";
import DemoTemplate from "../DemoTemplate.vue";
import CodeFragment from "../components/CodeFragment.vue";

const {t} = useI18n();

const openModal = inject("openModal");
const openDialog = () => {
  openModal((closeMethod) => createConfirmation(closeMethod));
}

const createConfirmation = (closeMethod) => {
  return h(Confirmation, {
    title: t('erase'),
    component: h('div', null, t('confirm_delete')),
    onConfirmation: () => {
      // do whatever needs to be done
      closeMethod();
    },
    onClose: closeMethod,
  });
}
</script>


