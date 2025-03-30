<template>
  <DemoTemplate align-y="start">
    <Accordion style="align-self: stretch;flex-grow: 1" :selected="0">
      <Panel text="Horizontal">
        <CodeFragment src="/code/SplitLayoutDemo1.txt"/>
        <SplitLayout horizontal style="height: 500px;background: white;">
          <template #panel1>
            <SplitPanel>
              <div style="padding:16px;">
                <Form class=" max-w-sm w-full"
                      border
                      :entries="[
                   {path:'name',label:'Name',props:{placeholder:'',autocomplete:'off'}},
                   {path:'phone',label:'Phone',props:{placeholder:'',autocomplete:'off'}},
                   {path:'email',label:'EMail',props:{placeholder:'',autocomplete:'off'}},
                   {path:'address',label:'Address',props:{placeholder:'',autocomplete:'off'}},
                    ]"
                      v-model="form" :validationError="validation"
                >
                </Form>
              </div>
            </SplitPanel>
          </template>
          <template #panel2>
            <SplitPanel class="flex justify-center items-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to
              make a type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </SplitPanel>
          </template>
        </SplitLayout>
      </Panel>
      <Panel text="Vertical">
        <CodeFragment src="/code/SplitLayoutDemo2.txt"/>
        <SplitLayout vertical divider="250" style="height: 500px;background: white;">
          <template #panel1>
            <SplitPanel>
              <div style="padding:16px;">
                <Form class=" max-w-sm w-full"
                      border
                      :entries="[
                   {path:'name',label:'Name',props:{placeholder:'',autocomplete:'off'}},
                   {path:'phone',label:'Phone',props:{placeholder:'',autocomplete:'off'}},
                   {path:'email',label:'EMail',props:{placeholder:'',autocomplete:'off'}},
                   {path:'address',label:'Address',props:{placeholder:'',autocomplete:'off'}},
                    ]"
                      v-model="form" :validationError="validation"
                >
                </Form>
              </div>
            </SplitPanel>
          </template>
          <template #panel2>
            <SplitPanel class="flex justify-center items-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to
              make a type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </SplitPanel>
          </template>
        </SplitLayout>
      </Panel>
    </Accordion>
  </DemoTemplate>
</template>

<script setup>
import {SplitPanel, Form, Accordion, Panel, SplitLayout} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import {ref} from "vue";
import CodeFragment from "../components/CodeFragment.vue";
import DemoTemplate from "../DemoTemplate.vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n();
const form = ref({'company': '', 'slogan': '', 'name': '', 'role': '', 'phone': '', 'address': '', 'email': ''});
const validation = ref(null);


</script>
