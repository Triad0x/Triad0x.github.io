import { defineStore } from 'pinia';
import data from '@/data/data.js';

export const useDataStore = defineStore('data', {
  state: () => ({
    general: data.general,
    experiences: data.experiences,
    projects: data.projects,
    skills: data.skills,
    contacts: data.contacts,
    selectedProject: null
  }),
  actions: {
    openProject(project) {
      this.selectedProject = project;
    },
    closeProject() {
      this.selectedProject = null;
    }
  }
});