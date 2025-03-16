<template>
  <DemoTemplate align-x="start">
    <CodeFragment src="/code/SidePanelDemo.txt"/>
    <VerticalLayout :padding="false" style="flex-grow: 1;">
      <HorizontalLayout :padding="false">
        <Button text="West" @click="setWest"/>
        <Button text="East" @click="setEast"/>
        <Button text="North" @click="setNorth"/>
        <Button text="South" @click="setSouth"/>
      </HorizontalLayout>
      <SidePanel :orientation="orientation" style="flex-grow: 1">
        <template v-slot:center>
          <div style="padding: 8px;">
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
            demoralized
            by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and
            trouble
            that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will,
            which
            is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to
            distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being
            able
            to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain
            circumstances
            and owing to the claims of duty or the obligations of business it will frequently occur that pleasures
            have
            to
            be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this
            principle
            of
            selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse
            pains."
          </div>
        </template>
        <template v-slot:east>
          <div style="padding: 8px;">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            in
            some form, by injected humour, or randomised words which don't look even slightly believable. If you are
            going
            to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
            middle
            of
            text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
            this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
            a
            handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </div>
        </template>
      </SidePanel>
    </VerticalLayout>
  </DemoTemplate>
</template>


<script setup>
import DemoTemplate from "../DemoTemplate.vue";
import {SidePanel, VerticalLayout, HorizontalLayout} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import {ref} from "vue";
import {Button} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import CodeFragment from "../components/CodeFragment.vue";

const orientation = ref('east');
const setWest = () => {
  orientation.value = 'west';
};
const setEast = () => {
  orientation.value = 'east';
};
const setNorth = () => {
  orientation.value = 'north';
};
const setSouth = () => {
  orientation.value = 'south';
};
</script>
