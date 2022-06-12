<script setup lang="ts">
import HeaderComponent from 'src/components/layoutComponentes/HeaderComponent.vue';
import DrawerComponent from 'src/components/layoutComponentes/DrawerComponent.vue';
import { ref } from 'vue';
import FotterComponent from 'src/components/layoutComponentes/FotterComponent.vue';

const drawer = ref(false);

const onDrawerChange = () => {
  drawer.value = !drawer.value;
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <HeaderComponent @change="onDrawerChange" />
    <DrawerComponent :drawer="drawer" @change="onDrawerChange" />

    <q-page-container>
      <router-view />
    </q-page-container>
    <FotterComponent />
  </q-layout>
</template>
