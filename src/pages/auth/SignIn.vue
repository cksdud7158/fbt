<script setup lang="ts">
import { useQuasar } from 'quasar';
import logo from 'src/assets/mainLogo.png';
import { computed } from 'vue';

const $q = useQuasar();

const logoHeight = computed(() => {
  return $q.screen.height * 0.2 + 'px';
});
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-img :src="logo" :height="logoHeight" fit="scale-down" />
  </q-layout>
</template>
