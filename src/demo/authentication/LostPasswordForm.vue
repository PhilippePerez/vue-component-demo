<template>
  <div class="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6">
    <h2 class="text-2xl font-bold mb-4 text-center">Reset Password</h2>
    <form @submit.prevent="handleReset" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="email"
          type="email"
          required
          class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Send Reset Link
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")

function handleReset() {
  console.log("Password reset requested for:", email.value)
}
</script>
