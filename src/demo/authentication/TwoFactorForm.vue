<template>
  <div class="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6">
    <h2 class="text-2xl font-bold mb-4 text-center">Two-Factor Authentication</h2>
    <p class="text-gray-600 text-sm text-center mb-4">
      Enter the 6-digit code sent to your email or phone
    </p>

    <form @submit.prevent="handleVerify" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Verification Code</label>
        <input
          v-model="code"
          type="text"
          maxlength="6"
          pattern="[0-9]{6}"
          required
          class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 tracking-widest text-center text-xl"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Verify
      </button>
    </form>

    <!-- option to go back -->
    <div class="mt-4 text-center">
      <a href="#" class="text-sm text-indigo-600 hover:underline"
        @click.prevent="$emit('switchForm', 'login')">
        Back to Login
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const code = ref("")

function handleVerify() {
  if (!/^\d{6}$/.test(code.value)) {
    alert("Please enter a valid 6-digit code")
    return
  }
  console.log("2FA code entered:", code.value)
}
</script>
