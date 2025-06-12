<template>
  <section class="grid grid-cols-1 md:grid-cols-4 min-w-[80vw] gap-6">
    <motion.div
      v-for="skill in skills" :key="skill.name"
      class="space-y-6 w-full"
      :initial="{ opacity: 0 }"
      :whileInView="{ opacity: 1, transition: { duration: 0.8 } }"
    >
      <h2 class="text-2xl font-bold text-center text-jet-500 mb-6">{{ skill.name }}</h2>
      <div 
        v-for="tech in skill.tech" :key="tech.name"
      >
        <div class="flex justify-start items-center text-sm font-semibold text-silver-400 gap-2">
          <img
            :src="'/techstack/'+String(tech.name).toLowerCase()+'.png'"
            alt="tech logo"
            class="w-6 h-6 object-cover"
          />
          <span>{{ tech.name }}</span>
        </div>
        <div class="w-full h-3 bg-anti-flash_white-400 rounded-full mt-1">
          <motion.div
            :initial="{ width: '0%' }"
            :whileInView="{ width: tech.percentage+'%'}"
            :transition="{ duration: 3 }"
            class="h-full bg-harvest_gold-500 rounded-full"

          ></motion.div>
        </div>
      </div>
    </motion.div>
  </section>
</template>

<script setup>
import { useDataStore } from '../stores';
import { motion } from "motion-v"

const store = useDataStore();
const skills = store.skills;
</script>
