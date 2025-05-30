<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const tabs: { name: string; path: string }[] = [
    {
      name: 'About Me',
      path: '/about',
    },
    {
      name: 'Experience',
      path: '/experience',
    },
    {
      name: 'Projects',
      path: '/project',
    },
    {
      name: 'Technologies',
      path: '/stack',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]

  function activeTab(tab: string): boolean {
    return tab === route.path
  }
</script>
<template>
  <div class="header-container">
    <div class="flex flex-row w-full h-full border-2 border-border rounded-2xl overflow-hidden">
      <div class="header-logo">SHABIL IMRAN</div>
      <div class="header-tabs">
        <div
          v-for="(tab, i) in tabs"
          :key="i"
          class="tabs"
          :class="{ 'text-hover': activeTab(tab.path) }"
        >
          <p>{{ tab.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  @import '../style.css' reference;
  .header-container {
    @apply w-full h-28 p-5;
  }
  .header-logo {
    @apply flex items-center h-full w-1/3 text-text-primary text-xl px-10;
  }
  .header-tabs {
    @apply h-full w-2/3 justify-evenly flex flex-row cursor-pointer;
  }
  .tabs {
    @apply flex items-center justify-center h-full w-full text-text-primary transition;
  }
  .tabs:hover {
    @apply text-hover;
  }
</style>
