<template>
  <section
    id="general"
    class="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 md:px-16 py-12"
  >
    <motion.div
      class="flex-1 text-center md:text-left space-y-4 md:max-w-2xl"
      :initial="{ opacity: 0, x: -50 }"
      :whileInView="{ opacity: 1, x: 0, transition: { duration: 0.8 } }"
    >
      <h1 class="text-4xl md:text-5xl text-jet-500 leading-tight">
        I'm 
        <span class="text-harvest_gold-500 font-semibold">
          {{ general.name }}
        </span>, a <span class="text-jet-100">{{ general.title }}</span> building an impactfull web applications.
      </h1>
      <p v-for="description in general.descriptions" class="text-silver-200 max-w-xl mx-auto md:mx-0">
        <template v-html="description"></template>
      </p>
      <a
        :href="general.resume"
        download
        class="inline-flex items-center mt-4 px-6 py-3 gap-x-2
        bg-harvest_gold-500 hover:bg-harvest_gold-600 shadow
        hover:shadow-md hover:shadow-harvest_gold-600/70
        text-white font-semibold rounded-lg transition"
      >
        Download <FileDown :stroke-width="1.5" />
      </a>
    </motion.div>

    <motion.div
      class="flex-1 flex justify-center"
      :initial="{ opacity: 0, x: 50 }"
      :whileInView="{ opacity: 1, x: 0, transition: { duration: 0.8 } }"
    >
      <img
        :src="general.profilePicture"
        alt="Profile Picture"
        class="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover filter grayscale hover:grayscale-0 transition duration-500 shadow-lg shadow-harvest_gold-300/65 border-4 border-white"
      />
    </motion.div>
  </section>
</template>

<script setup>
import { useDataStore } from '@/stores';
import { motion } from 'motion-v';
import { FileDown } from 'lucide-vue-next';

const { general } = useDataStore();
</script>
