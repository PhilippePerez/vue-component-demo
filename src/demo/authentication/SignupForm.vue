<template>
  <div class="max-w-sm mx-auto bg-white rounded-lg border  p-6">
<!--    bg-white p-8 rounded-lg" :class="props.border?'border rounded-lg':''-->
    <h2 class="text-2xl font-bold mb-4 text-center">Sign Up</h2>
    <form @submit.prevent="handleSignup" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="email"
          type="email"
          required
          class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Password</label>
        <input
          v-model="password"
          type="password"
          required
          class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          v-model="confirmPassword"
          type="password"
          required
          class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Sign Up
      </button>
    </form>

    <!-- switch to login -->
    <div class="mt-4 text-center">
      <p class="text-sm">
        Already have an account?
        <a href="#" class="text-indigo-600 hover:underline"
          @click.prevent="$emit('switchForm', 'login')">
          Log in here
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")
const confirmPassword = ref("")

function handleSignup() {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match")
    return
  }
  console.log("Signup:", email.value, password.value)
}
</script>
