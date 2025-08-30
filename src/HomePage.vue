<template>
  <MainLayout title="Vue Components Showcase ( V 0.2.3 )">
    <HorizontalLayout style="flex-grow: 1;overflow: hidden;" align-y="stretch">
      <VerticalLayout :padding="false" class='widget-list-panel' align-x="stretch" align-y="stretch">
        <Accordion :selected="0" padding-off>
          <Panel text="Core">
            <VerticalLayout align-x="stretch" style="overflow-x:auto;">
              <Button :key='rt.name' v-for="rt in core_routes" :off="route.name !== rt.name" :text="rt.label"
                      @click="()=>{router.push({name: rt.name});}"/>
            </VerticalLayout>
          </Panel>
          <Panel text="Authentication">
            <VerticalLayout align-x="stretch" style="overflow-x:auto;">
              <Button :key='rt.name' v-for="rt in authentication_routes" :off="route.name !== rt.name" :text="rt.label"
                      @click="()=>{router.push({name: rt.name});}"/>
            </VerticalLayout>
          </Panel>
          <Panel text="Dashboard">
            <VerticalLayout align-x="stretch" style="overflow-x:auto;">
              <Button :key='rt.name' v-for="rt in dashboard_routes" :off="route.name !== rt.name" :text="rt.label"
                      @click="()=>{router.push({name: rt.name});}"/>
            </VerticalLayout>
          </Panel>
        </Accordion>
      </VerticalLayout>
      <VerticalLayout :padding="false" class='right-panel' align-x="stretch" align-y="stretch">
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
  Accordion,
  Button,
  HorizontalLayout,
  MainLayout, Panel,
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
import SectionDemo from "./demo/SectionDemo.vue";
import StepFlowDemo from "./demo/StepFlowDemo.vue";
import SplitLayoutDemo from "@/demo/SplitLayoutDemo.vue";
import LoginDemo from "@/demo/authentication/LoginDemo.vue";
import SignupDemo from "@/demo/authentication/SignupDemo.vue";
import LinearGaugeDemo from "@/demo/LinearGaugeDemo.vue";
import CircularGaugeDemo from "@/demo/CircularGaugeDemo.vue";
import LostPasswordDemo from "@/demo/authentication/LostPasswordDemo.vue";

const Category = {
  AUTHENTICATION: "authentication",
  DASHBOARD: "dashboard",
  CORE: "core",
};
const routes = [
  {category: Category.AUTHENTICATION, name: 'login', label: 'Login', component: LoginDemo},
  {category: Category.AUTHENTICATION, name: 'signup', label: 'Signup', component: SignupDemo},
  {category: Category.AUTHENTICATION, name: 'lost-password', label: 'Lost password', component: LostPasswordDemo},
  {category: Category.CORE, name: 'accordion', label: 'Accordion', component: AccordionDemo},
  {category: Category.CORE, name: 'button', label: 'Button', component: ButtonDemo},
  {category: Category.CORE, name: 'confirmation', label: 'Confirmation', component: ConfirmationDemo},
  {category: Category.CORE, name: 'dialog', label: 'Dialog', component: DialogDemo},
  {category: Category.CORE, name: 'form', label: 'Form', component: FormDemo},
  {category: Category.CORE, name: 'grid', label: 'Grid', component: GridDemo},
  {category: Category.CORE, name: 'horizontal-layout', label: 'Horizontal Layout', component: HorizontalLayoutDemo},
  {category: Category.CORE, name: 'label', label: 'Label', component: LabelDemo},
  {category: Category.CORE, name: 'menu', label: 'Menu', component: MenuDemo},
  {category: Category.CORE, name: 'section', label: 'Section', component: SectionDemo},
  {category: Category.CORE, name: 'select', label: 'Select', component: SelectFieldDemo},
  {category: Category.CORE, name: 'side-panel', label: 'SidePanel', component: SidePanelDemo},
  {category: Category.CORE, name: 'split-layout', label: 'Split Layout', component: SplitLayoutDemo},
  {category: Category.CORE, name: 'stepflow', label: 'Step flow', component: StepFlowDemo},
  {category: Category.CORE, name: 'tabs', label: 'Tabs', component: TabDemo},
  {category: Category.CORE, name: 'take-photo', label: 'Take Photo', component: TakePhotoDemo},
  {category: Category.CORE, name: 'text', label: 'Text', component: TextFieldDemo},
  {category: Category.CORE, name: 'vertical-layout', label: 'Vertical Layout', component: VerticalLayoutDemo},
  {category: Category.DASHBOARD, name: 'circular-gauge', label: 'Circular Gauge', component: CircularGaugeDemo},
  {category: Category.DASHBOARD, name: 'linear-gauge', label: 'Linear Gauge', component: LinearGaugeDemo},
];
const authentication_routes = routes.filter(e => e.category === Category.AUTHENTICATION);
const core_routes = routes.filter(e => e.category === Category.CORE);
const dashboard_routes = routes.filter(e => e.category === Category.DASHBOARD);
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
  overflow-y: auto;
  flex-grow: 1;
}

.widget-list-panel {
  overflow: hidden;
  flex-shrink: 0;
  padding-right: 16px;
}
</style>
