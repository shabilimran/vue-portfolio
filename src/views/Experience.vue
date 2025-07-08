<script setup lang="ts">
  import { ref } from 'vue'
  import ExpCard from '../components/ExpCard.vue'

  const hardcodeData = ref([
    {
      title: 'Cloud Developer',
      company: 'Ecloudvalley Technology Sdn Bhd',
      duration: 'Jan 2022 - Present',
      description: `• Built modern UI in Vue 3
                    • Collaborated with backend team
                    • Led migration to TypeScript`,
      logo: '/job_2.svg',
    },
    {
      title: 'Full Stack Developer',
      company: 'Discoverix Sdn Bhd',
      duration: 'April 2022 - Dec 2022',
      description: `• Built modern UI in Vue 3
                    • Collaborated with backend team
                    • Led migration to TypeScript`,
      logo: '/job_1.png',
    },
    {
      title: 'Intern Developer',
      company: 'Datum Clearmind Sdn Bhd',
      duration: 'April 2022 - Dec 2022',
      description: `• Built modern UI in Vue 3
                    • Collaborated with backend team
                    • Led migration to TypeScript`,
      logo: '/job_1.png',
    },
  ])
</script>

<template>
  <div class="flex flex-row gap-y-10 p-10 w-full justify-center flex-wrap">
    <div v-for="(expData, i) in hardcodeData" :key="i" class="flex justify-center w-1/2">
      <ExpCard
        :title="expData.title"
        :company="expData.company"
        :duration="expData.duration"
        :description="expData.description"
        :logo="expData.logo"
      />
    </div>
  </div>
</template>
