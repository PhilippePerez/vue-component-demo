<template>
  <DemoTemplate>
    <CodeFragment src="/code/HorizontalLayoutDemo.txt"/>
    <Section title="Possible alignments" style="align-self: stretch;">
      <HorizontalLayout :padding="false" align-x="center" style="align-self: stretch">
        <Button text="Click me!" @click="onClick"/>
      </HorizontalLayout>
      <HorizontalLayout :padding="false" align-x="start" style="align-self: stretch">
        <Button text="Click me!" @click="onClick"/>
      </HorizontalLayout>
      <HorizontalLayout :padding="false" align-x="end" style="align-self: stretch">
        <Button text="Click me!" @click="onClick"/>
      </HorizontalLayout>
      <HorizontalLayout :padding="false" align-x="stretch" style="align-self: stretch">
        <Button text="Click me!" @click="onClick"/>
      </HorizontalLayout>
    </Section>
    <HorizontalLayout :padding="false">
      <Section title="Gap VS no gap">
        <VerticalLayout>
          <HorizontalLayout :padding="false" style="background: lightgray">
            <Button text="Option A"/>
            <Button text="Option B"/>
            <Button text="Option C"/>
          </HorizontalLayout>
          <HorizontalLayout :padding="false" :gap="false" style="background: lightgray">
            <Button text="Option A"/>
            <Button text="Option B"/>
            <Button text="Option C"/>
          </HorizontalLayout>
        </VerticalLayout>
      </Section>
      <Section title="Padding VS no padding">
        <VerticalLayout>
          <HorizontalLayout style="background: lightgray">
            <Button text="Option A"/>
            <Button text="Option B"/>
            <Button text="Option C"/>
          </HorizontalLayout>
          <HorizontalLayout :padding="false">
            <Button text="Option A"/>
            <Button text="Option B"/>
            <Button text="Option C"/>
          </HorizontalLayout>
        </VerticalLayout>
      </Section>
    </HorizontalLayout>
  </DemoTemplate>
</template>

<script setup>
import {Button, HorizontalLayout, VerticalLayout} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import DemoTemplate from "../DemoTemplate.vue";
import CodeFragment from "../components/CodeFragment.vue";
import Section from "../../../widgets/vue-widgets/src/components/layout/Section.vue";

const onClick = () => {
  window.alert('Clicked');
}
</script>
