<template>
  <table>
    <tbody>
    <tr>
      <td>
        <div class="mr-2" :id="formId+'-firstName'"/>
      </td>
      <td>
        <div class="mr-2" :id="formId+'-lastName'"/>
      </td>
    </tr>
    <tr>
      <td>
        <div class="mr-2" :id="formId+'-email'"/>
      </td>
      <td>
        <div class="mr-2" :id="formId+'-birthdate'"/>
      </td>
    </tr>
    <tr>
      <td>
        <div class="mr-2" :id="formId+'-country'"/>
      </td>
      <td>
        <div class="mr-2" :id="formId+'-password'"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  formId: {
    type: String,
    required: true
  }
});
</script>
