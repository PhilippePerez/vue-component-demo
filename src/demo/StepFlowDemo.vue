<template>
  <Section title="Example">
    <VerticalLayout align-x="stretch">
      <CodeFragment src="/code/StepFlowDemo1.txt"/>
      <StepFlow ref="flow1" @select="(step,index)=>currentPanel={index:index,step:step}">
        <Step caption="Identity" :validator="validateStep1">
          <Card title="Please fill the form below" style="align-items: center;">
            <Form class=" max-w-sm w-full"
                border
                :entries="[
                {path:'firstName',label:'First Name',props:{placeholder:'Paul',autocomplete:'off'}},
                {path:'lastName',label:'Last Name',props:{placeholder:'Jetson',autocomplete:'off'}},
                ]"
                v-model="user"
            >
              <template v-slot:footer>
                <HorizontalLayout padding-off align-center class="pt-4">
                  <Button text="Next" @click="()=>{flow1.nextStep();}"/>
                </HorizontalLayout>
              </template>
            </Form>
          </Card>
        </Step>
        <Step caption="Skills" :validator="validateStep2">
          <Card title="Please fill the form below" style="align-items: center;">
            <Form class=" max-w-sm w-full"
                border
                :entries="[
                {path:'skill1',label:'Skill 1',props:{placeholder:'Singing',autocomplete:'off'}},
                {path:'skill2',label:'Skill 2',props:{placeholder:'Dancing',autocomplete:'off'}},
                ]"
                v-model="skills"
            >
              <template v-slot:footer>
                <HorizontalLayout padding-off align-center class="pt-4">
                  <Button text="Previous" @click="()=>{flow1.previousStep();}"/>
                  <Button text="Next" @click="()=>{flow1.nextStep();}"/>
                </HorizontalLayout>
              </template>
            </Form>
          </Card>
        </Step>
        <Step caption="Done" :validator="validateStep3">
          <SkillSummaryTable :form="form"/>
        </Step>
      </StepFlow>
      <VerticalLayout>
        <span>Selection event : {{ JSON.stringify(currentPanel) }}</span>
        <span>User model : {{ JSON.stringify(user) }}</span>
        <span>Skills model : {{ JSON.stringify(skills) }}</span>
      </VerticalLayout>
    </VerticalLayout>
  </Section>
  <Section title="Bullet variants">
    <CodeFragment src="/code/StepFlowDemo2.txt"/>
    <StepFlow index="2">
      <Step id='1' caption="Step 1"/>
      <Step id='2' caption="Step 2"/>
      <Step id='3' caption="Final step" :icon="IconFaceSmile"/>
    </StepFlow>
    <StepFlow index="1">
      <Step :icon="IconShoppingCart"/>
      <Step :icon="IconCurrencyDollar"/>
      <Step :icon="IconTruck"/>
    </StepFlow>
  </Section>
</template>

<script setup>
import IconShoppingCart from "./stepflow/IconShoppingCart.vue";
import IconTruck from "./stepflow/IconTruck.vue";
import IconCurrencyDollar from "./stepflow/IconCurrencyDollar.vue";
import {
  Button,
  StepFlow, Step,
  Card, Confirmation,
  Form,
  Section,
  HorizontalLayout,
  VerticalLayout
} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import {computed, h, inject, ref} from "vue";
import IconFaceSmile from "./stepflow/IconFaceSmile.vue";
import SkillSummaryTable from "./stepflow/SkillSummaryTable.vue";
import {useI18n} from "vue-i18n";
import CodeFragment from "@/components/CodeFragment.vue";

const {t} = useI18n();

const currentPanel = ref();
const flow1 = ref();
const user = ref({firstName: '', lastName: ''});
const skills = ref({skill1: '', skill2: ''});
const form = computed(() => {
  return {...user.value, ...skills.value};
});

const createConfirmation = (message, closeMethod) => {
  return h(Confirmation, {
    title: t('confirmation'),
    component: h('div', null, message),
    onConfirmation: () => {
      closeMethod(true);
    },
    onClose: () => {
      closeMethod(false);
    }
  });
}

const openModal = inject("openModal");

const validateStep1 = (nextStep) => {
  openModal((closeDialog) => createConfirmation("Leave step 1", (confirmed) => {
    closeDialog();
    if (confirmed) {
      nextStep();
    }
  }));
}

const validateStep2 = (nextStep) => {
  openModal((closeDialog) => createConfirmation("Leave step 2", (confirmed) => {
    closeDialog();
    if (confirmed) {
      nextStep();
    }
  }));
}

const validateStep3 = (nextStep) => {
}
</script>
