<script setup lang="ts">
import logo from 'src/assets/logo.png';

const emit = defineEmits(['change']);

const changeDrawerState = (): void => {
  emit('change');
};
</script>

<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar
      class="full-width row wrap justify-between items-start content-start"
    >
      <q-btn
        dense
        flat
        round
        icon="menu"
        @click="changeDrawerState"
        class="col-4 items-start"
      />
      <div class="col-4">
        <q-img :src="logo" height="40px" fit="scale-down" />
      </div>
      <div class="col-4"></div>
    </q-toolbar>
  </q-header>
</template>
