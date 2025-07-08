<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import TopHeader from './components/Header.vue'
  const router = useRouter()
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-auto bg-background">
    <TopHeader></TopHeader>
    <router-view />
  </div>
</template>

<style scoped></style>
