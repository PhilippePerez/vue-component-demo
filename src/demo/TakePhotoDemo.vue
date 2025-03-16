<template>
  <DemoTemplate align-y="start">
    <Accordion style="align-self: stretch;flex-grow: 1" :selected="0">
      <Panel text="Getting the a photo into v-model">
        <VerticalLayout :padding="false">
          <CodeFragment src="/code/TakePhotoDemo1.txt"/>
          <VerticalLayout :padding="false">
            <HorizontalLayout :padding="false" align-y="center">
              <TakePhoto ref="takePhoto1" button-overlay :checkPhoto="false" v-model="photo1"/>
              <VerticalLayout>
                <img :src="photo1"/>
              </VerticalLayout>
            </HorizontalLayout>
            <Button v-if="photo1" text='Take another picture' @click="takeOneMorePicture"/>
          </VerticalLayout>
        </VerticalLayout>
      </Panel>
      <Panel text="Getting the a photo as datauri for upload">
        <VerticalLayout :padding="false">
          <CodeFragment src="/code/TakePhotoDemo2.txt"/>
          <VerticalLayout :padding="false">
            <HorizontalLayout :padding="false" align-y="center">
              <TakePhoto ref="takePhoto2" button-overlay v-model="photo2" :uploadHandler="uploadHandler"/>
              <VerticalLayout>
                <img :src="photo2"/>
              </VerticalLayout>
            </HorizontalLayout>
          </VerticalLayout>
        </VerticalLayout>
      </Panel>
      <Panel text="Icons for controls">
        <VerticalLayout :padding="false">
          <CodeFragment src="/code/TakePhotoDemo3.txt"/>
          <VerticalLayout :padding="false">
            <TakePhoto button-overlay :button-text="false"/>
          </VerticalLayout>
        </VerticalLayout>
      </Panel>
      <Panel text="No overlay for controls">
        <VerticalLayout :padding="false">
          <CodeFragment src="/code/TakePhotoDemo4.txt"/>
          <VerticalLayout :padding="false">
            <TakePhoto :button-text="false"/>
          </VerticalLayout>
        </VerticalLayout>
      </Panel>
    </Accordion>
  </DemoTemplate>
</template>

<script setup>
import DemoTemplate from "../DemoTemplate.vue";
import {ref} from "vue";
import {
  HorizontalLayout,
  Button,
  VerticalLayout,
  Accordion,
  Panel,
  TakePhoto
} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import CodeFragment from "../components/CodeFragment.vue";

const photo1 = ref(null);
const takePhoto1 = ref(null);
const photo2 = ref(null);
const takePhoto2 = ref(null);

const uploadHandler = (dataUriImage) => {
  window.alert('I got the image but you will have to implement the backend to process it ;-)');
}
const takeOneMorePicture = () => {
  takePhoto1.value.reset();
}
</script>
