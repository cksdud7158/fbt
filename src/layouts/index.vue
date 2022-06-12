<script setup lang="ts">
import MainLayout from './MainLayout.vue';
import SignIn from 'src/pages/auth/SignIn.vue';
import { ref } from 'vue';

const loggedIn = ref('false');
</script>

<template>
  <div>
    <MainLayout v-if="!loggedIn" />
    <SignIn v-else />
  </div>
</template>
