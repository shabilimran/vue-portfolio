<template>
  <div class="relative group w-full max-w-md" ref="cardRef">
    <!-- Base Card -->
    <div
      class="flex flex-col justify-center text-center gap-y-2 p-6 bg-gradient-to-br from-blue-950 to-blue-900 border-2 border-blue-500 text-white rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.015] hover:shadow-xl"
    >
      <div class="flex items-center m-auto h-40 w-40">
        <img class="max-h-full max-w-full" :src="logo" />
      </div>
      <h3 class="text-2xl font-bold mb-1">{{ title }}</h3>
      <p class="text-sm font-semibold">{{ company }}</p>
      <p class="text-xs italic">{{ duration }}</p>
    </div>

    <!-- Hover Popup -->

    <transition name="fade-scale">
      <Teleport to="body"
        ><div
          v-if="showPopup"
          class="z-50 fixed inset-0 m-auto w-1/2 bg-white border border-gray-200 rounded-xl shadow-2xl p-5 max-h-64 overflow-y-auto hover:overflow-y-auto"
          @mouseenter="cancelClose"
          @mouseleave="scheduleClose"
        >
          <h4 class="text-lg font-semibold text-gray-800 mb-2">{{ title }} @ {{ company }}</h4>
          <p class="text-xs text-gray-500 mb-2">{{ duration }}</p>
          <p class="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
            {{ description }}
          </p>
        </div></Teleport
      >
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const props = defineProps<{
    title: string
    company: string
    duration: string
    description: string
    logo: string
  }>()

  const showPopup = ref(false)
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  const cardRef = ref<HTMLElement | null>(null)

  const handleMouseEnter = () => {
    showPopup.value = true
    if (timeoutId) clearTimeout(timeoutId)
  }

  const scheduleClose = () => {
    timeoutId = setTimeout(() => {
      showPopup.value = false
    }, 180)
  }

  const cancelClose = () => {
    if (timeoutId) clearTimeout(timeoutId)
  }

  onMounted(() => {
    cardRef.value?.addEventListener('mouseenter', handleMouseEnter)
    cardRef.value?.addEventListener('mouseleave', scheduleClose)
  })

  onBeforeUnmount(() => {
    cardRef.value?.removeEventListener('mouseenter', handleMouseEnter)
    cardRef.value?.removeEventListener('mouseleave', scheduleClose)
  })
</script>

<style scoped>
  .fade-scale-enter-active,
  .fade-scale-leave-active {
    transition: all 0.2s ease;
  }
  .fade-scale-enter-from,
  .fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }
</style>
