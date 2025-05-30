<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  name: string
  description: string
}

const props = defineProps<Props>()

const showPopup = ref(false)
</script>

<template>
  <div
    class="relative inline-block group"
    @mouseenter="showPopup = true"
    @mouseleave="showPopup = false"
  >
    <!-- Badge -->
    <span
      class="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full
             text-gray-700 dark:text-gray-200 shadow-sm cursor-pointer"
    >
      {{ props.name }}
    </span>

    <!-- Hover Popup -->
    <transition name="fade">
      <div
        v-if="showPopup"
        class="absolute z-20 bottom-full mb-2 left-1/2 -translate-x-1/2
               w-max max-w-xs bg-white dark:bg-gray-900 text-sm text-gray-800
               dark:text-gray-100 px-4 py-2 rounded-lg shadow-lg
               border border-gray-200 dark:border-gray-700"
      >
        {{ props.description }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
