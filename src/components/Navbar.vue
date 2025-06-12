<template>
  <nav
    class="fixed z-50
      flex gap-4
      bg-anti-flash_white/50 backdrop-blur-sm shadow-lg shadow-harvest_gold/60
      px-4 py-2 rounded-full
      bottom-4 left-1/2 -translate-x-1/2
      md:bottom-1/2 md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0
      md:flex-col md:rounded-xl md:h-fit"
  >
    <button
      v-for="item in sections"
      :key="item.id"
      @click="$emit('navigate', item.id)"
      :title="item.label"
      class="text-jet-500 hover:text-harvest_gold-500 transition-colors"
    >
      <component :is="item.icon" :size="28" />
    </button>
  </nav>
</template>

<script setup>
import { Home, CircleUserRound, Briefcase, Folder, ChartNoAxesColumn, Mail } from 'lucide-vue-next';

const sections = [
  { id: 'greetings', label: 'Greetings', icon: Home },
  { id: 'general', label: 'Profile', icon: CircleUserRound },
  { id: 'experiences', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'skills', label: 'Skills', icon: ChartNoAxesColumn },
  { id: 'contacts', label: 'Contact', icon: Mail },
];
</script>
