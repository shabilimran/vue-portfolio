<script setup lang="ts">
  const aboutMe =
    'Hi, I’m Shabil — a fullstack developer passionate about building robust, scalable applications using Vue, Next.js, and AWS serverless technologies.'
  const aboutJourney =
    "I started my dev journey building small Angular projects in university, then transitioned to JavaScript fullstack development. Over the years, I've worked across multiple stacks, but always lean toward clean UI, strong architecture, and automation. Lately, I'm deep into serverless and frontend frameworks like Vue and Next.js."
</script>
<template>
  <div class="flex flex-col w-full p-10 text-white">
    <h2 class="text-3xl font-bold mb-4">About Me</h2>
    <p class="mb-6">{{ aboutMe }}</p>
    <h3 class="text-xl font-semibold">My Journey</h3>
    <p>{{ aboutJourney }}</p>
    <h3 class="text-xl font-semibold mt-6">Values</h3>
    <ul>
      <li>Clean code & readable architecture</li>
      <li>End-to-end thinking</li>
      <li>Empathy in user experience</li>
    </ul>
  </div>
</template>
