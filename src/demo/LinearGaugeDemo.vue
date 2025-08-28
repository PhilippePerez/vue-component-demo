<template>
  <DemoTemplate :padding="false" align-y="start">
    <CodeFragment src="/code/LinearGaugeDemo.txt"/>
    <Card style="align-items: center;justify-content: center;">
      <HorizontalLayout>
        <VerticalLayout>
          <LinearGauge v-model="value" unit="°C" color="#4F46E5"/>
          <LinearGauge v-model="value2" unit="Kg" :min="10" :max="50"/>
          <LinearGauge v-model="value3" unit="$" color="#4F46E5" :min="1000" :step="100" :max="5000"
                       :format="formatTwoDecimals"/>
        </VerticalLayout>
        <VerticalLayout>
          <LinearGauge :value="value3" unit="$" read-only :format="formatTwoDecimals"/>
        </VerticalLayout>
      </HorizontalLayout>
    </Card>
  </DemoTemplate>
</template>

<script setup>
import {
  HorizontalLayout,
  VerticalLayout,
  Card,
} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import CodeFragment from "@/components/CodeFragment.vue";
import DemoTemplate from "@/DemoTemplate.vue";
import {ref} from "vue";
import LinearGauge from "../../../widgets/vue-widgets/src/components/dashboard/LinearGauge.vue";

const value = ref(33);
const value2 = ref(20.50);
const value3 = ref(1500);
const error = ref(null);

function formatTwoDecimals(num) {
  if (isNaN(num)) return "0.00"; // Handle non-numbers safely
  return Number(num).toFixed(2);
}

</script>

<style scoped>
</style>
