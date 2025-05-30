<script setup lang="ts">
import TechBadge from '../components/TechBadge.vue';
</script>
<template>
  <section class="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
    <h1 class="text-5xl font-bold mb-4">Hey, I’m Shabil Imran 👋</h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
      I build fullstack apps with <span class="font-semibold text-primary">Vue</span>,
      <span class="font-semibold text-primary">Next.js</span>, and AWS serverless tech.
    </p>

    <div class="flex gap-4 mt-6 flex-wrap justify-center">
      <TechBadge name="Vue 3" description="cincau" />
      <TechBadge name="Next.js 14" description="cincau" />
      <TechBadge name="Tailwind CSS" description="cincau" />
      <TechBadge name="Vercel" description="cincau" />
      <TechBadge name="Serverless Framework"description="cincau"  />
      <TechBadge name="AWS Lambda" description="cincau" />
      <TechBadge name="DynamoDB" description="cincau" />
    </div>
  </section>
</template>
