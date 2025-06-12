<template>
  <div class="text-jet-500">
    <!-- Sections with snap scroll -->
    <div
      class="h-screen section-wrapper md:snap-y md:snap-mandatory overflow-y-scroll scroll-smooth"
      ref="scrollContainer"
    >
      <section ref="greetings" class="h-screen snap-start bg-anti-flash_white-400">
        <Greetings />
      </section>
      <section ref="general" class="min-h-screen snap-start bg-silver-900">
        <GeneralSection />
      </section>
      <section ref="experiences" class="min-h-screen snap-start bg-silver-800">
        <ExperiencesSection />
      </section>
      <section ref="projects" class="min-h-screen snap-start bg-silver-800">
        <ProjectsSection />
      </section>
      <section ref="skills" class="min-h-screen snap-start">
        <SkillsSection />
      </section>
      <section ref="contacts" class="h-screen snap-start bg-jet">
        <ContactsSection />
      </section>
    </div>

    <Navbar @navigate="scrollToSection" />
    <ProjectModal />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Greetings from '@/components/Greetings.vue'
import GeneralSection from '@/components/GeneralSection.vue'
import ExperiencesSection from '@/components/ExperiencesSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ProjectModal from '@/components/ProjectModal.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactsSection from '@/components/ContactsSection.vue'
import Navbar from '@/components/Navbar.vue'

const scrollContainer = ref(null)
const greetings = ref(null)
const general = ref(null)
const experiences = ref(null)
const projects = ref(null)
const skills = ref(null)
const contacts = ref(null)

const scrollToSection = (section) => {
  const sectionMap = {
    greetings,
    general,
    experiences,
    projects,
    skills,
    contacts
  }
  sectionMap[section]?.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>
/* Ensure full-screen height snapping behaves consistently */
html,
body,
#app {
  height: 100%;
  margin: 0;
  scroll-behavior: smooth;
}
</style>
