<template>
  <DemoTemplate align-y="start">
    <Label :size=4 style="align-self: start">Picture goes into a variable</Label>
    <CodeFragment src="/code/TakePhotoDemo1.txt"/>
    <VerticalLayout>
      <HorizontalLayout align-y="center">
        <TakePhoto ref="takePhoto1" button-overlay :checkPhoto="false" v-model="photo1"/>
        <VerticalLayout>
          <img :src="photo1"/>
        </VerticalLayout>
      </HorizontalLayout>
      <Button v-if="photo1" text='Take another picture' @click="takeOneMorePicture"/>
    </VerticalLayout>
    <Label :size=4 style="align-self: start">No button overlay</Label>
    <CodeFragment src="/code/TakePhotoDemo2.txt"/>
    <VerticalLayout>
      <HorizontalLayout align-y="center">
        <TakePhoto ref="takePhoto2" button-overlay v-model="photo2" :uploadHandler="uploadHandler"/>
        <VerticalLayout>
          <img :src="photo2"/>
        </VerticalLayout>
      </HorizontalLayout>
    </VerticalLayout>
    <Label :size=4 style="align-self: start">Icons instead of buttons</Label>
    <CodeFragment src="/code/TakePhotoDemo3.txt"/>
    <VerticalLayout>
      <TakePhoto button-overlay :button-text="false"/>
    </VerticalLayout>
    <Label :size=4 style="align-self: start">Buttons without text</Label>
    <CodeFragment src="/code/TakePhotoDemo4.txt"/>
    <VerticalLayout>
      <TakePhoto :button-text="false"/>
    </VerticalLayout>
  </DemoTemplate>
</template>

<script setup>
import DemoTemplate from "../DemoTemplate.vue";
import {ref} from "vue";
import {HorizontalLayout, Button, VerticalLayout, Label,TakePhoto} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import CodeFragment from "../components/CodeFragment.vue";

const photo1 = ref(null);
const takePhoto1 = ref(null);
const photo2 = ref(null);
const takePhoto2 = ref(null);

const uploadHandler = (dataUriImage) => {
  window.alert('ok');
}
const takeOneMorePicture = () => {
  takePhoto1.value.reset();
}
</script>
