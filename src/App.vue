<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="w-screen h-screen overflow-auto">
    <router-view />
  </div>
</template>

<style scoped></style>
