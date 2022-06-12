<script setup lang="ts"></script>

<template>
  <q-footer elevated>
    <q-tabs class="text-white">
      <q-route-tab
        :to="{ query: { tab: '1' } }"
        exact
        replace
        icon="mail"
        label="Activate in 2s"
      />
      <q-route-tab
        :to="{ query: { tab: '2' } }"
        exact
        replace
        label="Do nothing"
      />
      <q-route-tab
        :to="{ query: { tab: '3' } }"
        exact
        replace
        label="Navigate to the second tab"
      />
      <q-route-tab
        :to="{ query: { tab: '4' } }"
        exact
        replace
        label="Navigate immediately"
      />
    </q-tabs>
  </q-footer>
</template>
