<template>
  <Navigation/>
  <HomePage/>
  <Work/>
  <Projects/>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import HomePage from '@/components/HomePage.vue'
import Work from '@/components/Work.vue'
import Projects from '@/components/Projects.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    HomePage,
    Work,
    Projects
  }
}
</script>
