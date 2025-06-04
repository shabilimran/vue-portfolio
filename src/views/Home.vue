<script setup lang="ts">
  import TechBadge from '../components/TechBadge.vue'
</script>
<template>
  <div class="flex flex-col w-full p-10 gap-y-10">
    <div class="flex md:flex-row flex-col md:py-20 items-center md:gap-x-2 gap-y-4">
      <h1 class="home-title">FULLSTACK DEVELOPER</h1>
      <div class="w-px bg-gradient-to-t from-accent to-hover self-stretch"></div>
      <p class="text-xl text-text-primary dark:text-gray-300 max-w-xl px-10">
        I'm Shabil. I create fullstack web apps powered by
        <span class="font-semibold text-primary">Vue</span>,
        <span class="font-semibold text-primary">Next.js</span>, and AWS serverless tech —
        beautiful, reliable, responsive and ready to scale applications.
      </p>
    </div>

    <div
      class="flex md:flex-row flex-col items-center justify-end ml-auto px-10 md:gap-x-10 gap-y-10"
    >
      <div>
        <p class="home-instruction">
          Learn more about my journey, projects, and the tech I love by clicking this button
        </p>
        <p class="home-instruction">— or browse the tabs above.</p>
      </div>
      <div class="fancy-button__container">
        <p class="bg-background py-3 px-10 rounded-2xl">View my work</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
  @import '../style.css' reference;
  .home-title {
    @apply flex justify-center items-center text-center md:w-1/2 md:text-6xl text-5xl font-bold text-transparent bg-clip-text;

    background-image: linear-gradient(
      90deg,
      #ec4899,
      #6366f1,
      #ec4899
    ); /* pink -> indigo -> pink */
    background-size: 200% 200%;
    background-position: 0% 50%;
    animation: gradient-snipe 3s ease-in-out infinite;
  }

  .home-instruction {
    @apply text-gray-500 dark:text-gray-400 text-sm italic;
  }

  .fancy-button__container {
    @apply flex text-base text-text-primary p-px rounded-2xl cursor-pointer transition-all duration-500 ease-in-out;
    background: linear-gradient(
      90deg,
      var(--color-accent),
      var(--color-hover),
      var(--color-accent)
    );
    background-size: 200% 200%;
    background-position: 0% 50%;
  }

  .fancy-button__container:hover {
    animation: gradient-snipe 1500ms ease-in-out infinite;
    box-shadow: 0 0 12px 4px rgba(99, 102, 241, 0.4);
  }

  @keyframes gradient-snipe {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
