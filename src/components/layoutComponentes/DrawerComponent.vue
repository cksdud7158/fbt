<script setup lang="ts">
defineProps<{ drawer: boolean }>();

const emit = defineEmits(['change']);

const changeDrawerState = (): void => {
  emit('change');
};
</script>

<template>
  <q-drawer
    show-if-above
    side="left"
    :model-value="drawer"
    bordered
    @hide="changeDrawerState"
  >
  </q-drawer>
</template>
