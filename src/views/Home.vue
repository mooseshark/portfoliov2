<template>
  <Navigation/>
  <HomePage/>
  <Work/>
  <Projects v-if="isNotTouchDevice"/>
  <ProjectsTouch v-else/>
  <Hobbies/>
  <Contact/>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import HomePage from '@/components/HomePage.vue'
import Work from '@/components/Work.vue'
import Projects from '@/components/Projects.vue'
import ProjectsTouch from '@/components/ProjectsTouch.vue'
import Hobbies from '@/components/Hobbies.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    HomePage,
    Work,
    Projects,
    ProjectsTouch,
    Hobbies,
    Contact
  },
  computed:{
    isNotTouchDevice: function () {
      try {
        document.createEvent("TouchEvent");
        return false;
      } catch (e) {
        return true;
      }
    }
  }
}
</script>
