<template>
  <teleport to="body">
    <motion.div
      v-if="project"
      class="fixed inset-0 bg-jet bg-opacity-80 z-50 flex items-center justify-center"
      @click.self="close"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      transition="{ duration: 0.3 }"
    >
      <motion.div
        class="bg-white w-full max-w-4xl mx-auto rounded-lg shadow-xl overflow-y-auto max-h-[90vh] p-6 relative"
        :initial="{ scale: 0.5, opacity: 0 }"
        :animate="{ scale: 1, opacity: 1 }"
        :exit="{ scale: 0.95, opacity: 0 }"
        :transition="{ duration: 0.3 }"
      >
        <button
          @click="close"
          class="absolute top-4 right-4 text-silver-500 hover:text-jet-500 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 class="text-2xl font-bold text-jet-500 mb-2">{{ project.name }}</h2>
        <p class="text-silver-600 mb-4" v-html="project.desc"></p>

        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-2 mb-6">
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

        <!-- Live Demo Button -->
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-2xl bg-harvest_gold-500 text-white font-medium hover:bg-harvest_gold-600 transition-colors"
        >
          <Link :size="16" />
          Live Demo
        </a>

        <!-- Screenshots -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            v-for="index in project.ss.count"
            :key="index"
            :src="project.ss.prefix+index+'.png'"
            :alt="`Screenshot ${index + 1}`"
            class="w-full rounded-lg border border-silver-200"
          />
        </div>
      </motion.div>
    </motion.div>
  </teleport>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '@/stores';
import { motion } from 'motion-v';
import { Link } from 'lucide-vue-next'

const store = useDataStore();
const { selectedProject: project } = storeToRefs(store); // make it reactive

function close() {
  store.closeProject();
}
</script>
