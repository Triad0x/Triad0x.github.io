<template>
  <section class="max-w-6xl mx-auto">
    <motion.div
      class="space-y-6"
      :initial="{ opacity: 0, y: 50 }"
      :exit="{ opacity: 0, y: 50 }"
      :whileInView="{ opacity: 1, y: 0, transition: { duration: 1 } }"
    >
      <h2 class="text-3xl font-bold text-center text-jet-500 mb-6">What I’ve Been Working On</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="project in projects"
          :key="project.name"
          @click="open(project)"
          class="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-lg hover:shadow-harvest_gold/80"
        >
          <img 
            :src="project.ss.prefix+'1.png'"
            :alt="project.name" class="w-full h-60 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-jet-500">{{ project.name }}</h3>
            <div class="flex flex-wrap gap-2 mt-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="tech-stack-badge"
              >
                <img
                  :src="'/techstack/'+String(tech).toLowerCase()+'.png'"
                  alt="tech logo"
                  class="w-3 h-3 object-cover"
                />
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
</template>

<script setup>
import { useDataStore } from '@/stores';
import { motion } from "motion-v"

const store = useDataStore();
const projects = store.projects;

function open(project) {
  store.openProject(project);
}
</script>
