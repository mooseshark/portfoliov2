<template>
  <Navigation/>
  <HomePage/>
  <Work/>
  <Projects/>
  <Hobbies/>
  <Contact/>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import HomePage from '@/components/HomePage.vue'
import Work from '@/components/Work.vue'
import Projects from '@/components/Projects.vue'
import Hobbies from '@/components/Hobbies.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    HomePage,
    Work,
    Projects,
    Hobbies,
    Contact
  }
}
</script>
