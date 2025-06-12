<template>
  <section class="max-w-4xl mx-auto py-10">
    <motion.div
      class="space-y-6"
      :initial="{ opacity: 0, y: 40 }"
      :whileInView="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
    >
      <h2 class="inline-flex items-center gap-2 text-3xl font-bold text-left text-jet-500 mb-6">
        <Footprints :size="40" :stroke-width="2" class="-ml-4" />
        My Dev Logs
      </h2>
      <motion.div 
        class="relative border-l-2 border-silver-500">
        <div
          v-for="exp in experiences"
          :key="exp.role + exp.company"
          class="ml-6 mb-8 relative"
        >
          <motion.div
            :initial="{ scale: 0.2, y: -100 }"
            :exit="{ scale: 0.2, y: -100 }"
            :whileInView="{ scale: 1, y: 0 }"
            :transition="{ duration: 0.8 }"
            class="absolute w-4 h-4 bg-harvest_gold-500 rounded-full -left-8 top-1/2 transform -translate-y-1/2"></motion.div>
          <motion.div
            :initial="{ opacity: 0, x: 100 }"
            :exit="{ opacity: 0, x: 100 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :whileHover="{ x: 10, y: -20, scale: 1.02, transition: { duration: 0.1 } }"
            :transition="{ duration: 0.8 }"
            class="bg-white p-4 rounded-2xl shadow-md">
            <h3 class="text-xl font-semibold text-jet-500">{{ exp.role }}</h3>
            <p class="text-sm text-silver-500 mb-1">{{ exp.company }}</p>
            <p class="text-xs text-silver-400 italic mb-2">{{ exp.date }}</p>
            <p class="text-silver-600 leading-relaxed">{{ exp.desc }}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  </section>
</template>

<script setup>
import { Footprints } from "lucide-vue-next"
import { motion } from "motion-v"
import { useDataStore } from '@/stores';
const store = useDataStore();
const experiences = store.experiences;
</script>
