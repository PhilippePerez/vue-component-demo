<template>
  <DemoTemplate align-x="center">
    <CodeFragment src="/code/DialogDemo.txt"/>
    <Button text="TEST me!" @click="onClick"/>
  </DemoTemplate>
</template>

<script setup>
import {Button, Dialog} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import DemoTemplate from "../DemoTemplate.vue";
import {h, inject} from "vue";
import {useI18n} from "vue-i18n";
import CodeFragment from "../components/CodeFragment.vue";

const {t} = useI18n();

const openModal = inject("openModal");

const onClick = () => {
  openModal((closeMethod) => createDialog(closeMethod));
}
const createDialog = (closeMethod, width, height) => {
  return h(Dialog, {
    width: width ? width : '50%',
    height: height ? height : '50%',
    title: 'Modify',
    component: h('div', null, t('confirm_delete')),
    ok: t('ok'),
    cancel: t('cancel'),
    onClose: () => {
      closeMethod();
    },
    onCancel: () => {
      closeMethod();
    },
    onOk: () => {
      closeMethod();
    },
  });
}
</script>

