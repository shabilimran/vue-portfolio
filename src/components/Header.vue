<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'

  const menuOpen = ref(false)
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
    <div
      class="md:flex flex-row w-full h-full border-2 border-border rounded-2xl overflow-hidden hidden"
    >
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
    <div class="md:hidden">
      <div class="flex flex-row items-center">
        <button @click="menuOpen = !menuOpen" class="p-4">
          <svg
            class="w-6 h-6 stroke-text-primary cursor-pointer transition hover:stroke-primary"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div class="header-logo text-xl font-bold">SHABIL IMRAN</div>
      </div>

      <div
        class="relative overflow-hidden transition-all duration-300 ease-in-out rounded-2xl bg-border shadow-md"
        :class="[
          menuOpen ? 'max-h-screen max-w-screen p-4 space-y-4' : 'max-h-0 p-0 space-y-0 max-w-0',
        ]"
      >
        <div class="flex flex-col gap-y-5 cursor-pointer">
          <div
            v-for="(tab, i) in tabs"
            :key="i"
            class="tabs text-gray-800"
            :class="{ 'text-blue-600 font-semibold': activeTab(tab.path) }"
          >
            <p>{{ tab.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
  @import '../style.css' reference;
  .header-container {
    @apply w-full h-28 p-5;
  }
  .header-logo {
    @apply flex items-center h-full md:w-1/3 w-full md:justify-start justify-center text-text-primary text-xl px-10;
  }
  .header-tabs {
    @apply h-full w-2/3 justify-evenly flex flex-row cursor-pointer;
  }
  .tabs {
    @apply flex flex-row items-center justify-center h-full w-full text-text-primary transition;
  }
  .tabs:hover {
    @apply text-hover;
  }
</style>
