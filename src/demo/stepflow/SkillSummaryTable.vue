<template>
  <Card class="p-4 shadow-lg rounded-lg" title="You entered the following information in  the process"
        description="Your summary component here">
    <table class="w-full border border-gray-300 text-left">
      <tbody>
      <tr>
        <td class="px-4 py-2 font-semibold bg-gray-200 border border-gray-300">First Name</td>
        <td class="px-4 py-2 border border-gray-300">{{ form.firstName }}</td>
      </tr>
      <tr>
        <td class="px-4 py-2 font-semibold bg-gray-200 border border-gray-300">Last Name</td>
        <td class="px-4 py-2 border border-gray-300">{{ form.lastName }}</td>
      </tr>
      <tr>
        <td class="px-4 py-2 font-semibold bg-gray-200 border border-gray-300">Skill 1</td>
        <td class="px-4 py-2 border border-gray-300">{{ form.skill1 }}</td>
      </tr>
      <tr>
        <td class="px-4 py-2 font-semibold bg-gray-200 border border-gray-300">Skill 2</td>
        <td class="px-4 py-2 border border-gray-300">{{ form.skill2 }}</td>
      </tr>
      </tbody>
    </table>
  </Card>
</template>

<script setup>
import {Card} from "vue-component-toolkit/dist/vue-component-toolkit.js";

defineProps({
  form: {
    type: Object,
    required: true,
  }
});

</script>