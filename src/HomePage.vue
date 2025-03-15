<template>
  <MainLayout title="Vue Components Showcase ( V 0.1.23)">
    <HorizontalLayout style="flex-grow: 1;overflow: hidden;" align-y="stretch">
      <VerticalLayout align-x="stretch" align-y="start">
        <Button :key='rt.name' v-for="rt in routes" :off="route.name !== rt.name" :text="rt.label"
                @click="()=>{router.push({name: rt.name});}"/>
      </VerticalLayout>
      <VerticalLayout class='right-panel' align-x="stretch" align-y="stretch">
        <component :is="getComponent"/>
      </VerticalLayout>
    </HorizontalLayout>
  </MainLayout>
</template>

<script setup>
import ButtonDemo from "./demo/ButtonDemo.vue";
import ConfirmationDemo from "./demo/ConfirmationDemo.vue";
import DialogDemo from "./demo/DialogDemo.vue";
import FormDemo from "./demo/FormDemo.vue";
import HorizontalLayoutDemo from "./demo/HorizontalLayoutDemo.vue";
import LabelDemo from "./demo/LabelDemo.vue";
import SidePanelDemo from "./demo/SidePanelDemo.vue";
import VerticalLayoutDemo from "./demo/VerticalLayoutDemo.vue";
import {
  Button,
  HorizontalLayout,
  MainLayout,
  VerticalLayout
} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import {computed} from "vue";
import {useRoute, useRouter} from "vue-router";
import SelectFieldDemo from "./demo/SelectFieldDemo.vue";
import TextFieldDemo from "./demo/TextFieldDemo.vue";
import TabDemo from "./demo/TabsDemo.vue";
import MenuDemo from "./demo/MenuDemo.vue";
import ReadMe from "./ReadMe.vue";
import GridDemo from "./demo/GridDemo.vue";
import TakePhotoDemo from "./demo/TakePhotoDemo.vue";
import AccordionDemo from "./demo/AccordionDemo.vue";

const routes = [
  {name: 'accordion', label: 'Accordion', component: AccordionDemo},
  {name: 'button', label: 'Button', component: ButtonDemo},
  {name: 'confirmation', label: 'Confirmation', component: ConfirmationDemo},
  {name: 'dialog', label: 'Dialog', component: DialogDemo},
  {name: 'form', label: 'Form', component: FormDemo},
  {name: 'grid', label: 'Grid', component: GridDemo},
  {name: 'horizontal-layout', label: 'Horizontal Layout', component: HorizontalLayoutDemo},
  {name: 'label', label: 'Label', component: LabelDemo},
  {name: 'menu', label: 'Menu', component: MenuDemo},
  {name: 'select', label: 'Select', component: SelectFieldDemo},
  {name: 'side-panel', label: 'SidePanel', component: SidePanelDemo},
  {name: 'tabs', label: 'Tabs', component: TabDemo},
  {name: 'take-photo', label: 'Take Photo', component: TakePhotoDemo},
  {name: 'text', label: 'Text', component: TextFieldDemo},
  {name: 'vertical-layout', label: 'Vertical Layout', component: VerticalLayoutDemo},
];
const route = useRoute();
const router = useRouter();

const getComponent = computed(() => {
  const demo = routes.filter(e => e.name === route.name)[0];
  if (!demo) {
    return ReadMe
  }
  return demo && demo['component'];
});
</script>

<style scoped>
.right-panel {
  overflow-x: hidden;
  flex-grow: 1;
}
</style>
