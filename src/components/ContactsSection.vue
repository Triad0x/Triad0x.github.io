<template>
  <section class="max-w-xl mx-auto text-center">
    <motion.div
      class="space-y-6"
      :initial="{ opacity: 0, y: 30 }"
      :whileInView="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
    >
      <h2 class="text-silver text-xl md:text-3xl font-bold">
        Feel free to reach out to me through
        <a :href="'mailto:'+contacts.email+'?subject=%5BJobs%20Opportunity%5D&bo'"
          target="_blank"
          rel="noopener noreferrer"
          class="text-harvest_gold-500">
          {{contacts.email}}
        </a> or any platform below.
      </h2>
      <div class="flex flex-wrap justify-center gap-6">
        <a
          :href="'https://wa.me/'+String(contacts.phone).replaceAll('+', '')"
          class="social-btn"
          target="_blank"
        >
          <MessageCircle :size="40" />
        </a>
        <a
          :href="contacts.linkedin"
          class="social-btn"
          target="_blank"
        >
          <Linkedin :size="40" />
        </a>
        <a
          :href="contacts.instagram"
          class="social-btn"
          target="_blank"
        >
          <Instagram :size="40" />
        </a>
      </div>
      <br>
      <p class="text-silver">
        Coded in  
        <a class="text-white hover:text-harvest_gold-500" target="_blank" href="https://code.visualstudio.com/">VS Code.</a> 
        Built with 
        <a class="text-white hover:text-harvest_gold-500" target="_blank" href="https://vuejs.org/">Vue.js </a> 
        and 
        <a class="text-white hover:text-harvest_gold-500" target="_blank" href="https://v3.tailwindcss.com/">Tailwind CSS.</a> 
        <br>
        Techstack icon by <a class="text-white hover:text-harvest_gold-500" target="_blank" href="https://icons8.com">Icons8</a>
      </p>
    </motion.div>
  </section>
</template>

<script setup>
import { useDataStore } from '@/stores';
import { MessageCircle, Linkedin, Instagram } from 'lucide-vue-next';
import { motion } from 'motion-v';

const store = useDataStore();
const contacts = store.contacts;
</script>

<style scoped lang="scss">
.social-btn {
  @apply text-harvest_gold-500 hover:text-harvest_gold-600 transition-colors duration-300 hover:animate-pulse hover:scale-105
}
</style>