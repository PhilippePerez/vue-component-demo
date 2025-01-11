<template>
  <table>
    <tbody>
    <tr>
      <td :id="formId+'-firstName'">
      </td>
      <td :id="formId+'-lastName'">
      </td>
      <td :id="formId+'-email'">
      </td>
      <td :id="formId+'-birthdate'">
      </td>
      <td :id="formId+'-country'">
      </td>
      <td :id="formId+'-password'">
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
