<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <router-link to="/" class="navbar-brand">Ian Hutchcraft</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav ml-auto pl-1 pr-1">
        <li class="nav-item mr-2">
          <ScrollLink class="nav-link pl-1 pr-1" href="#top"><i class="fa fa-user-o"></i> Home</ScrollLink>
        </li>
        <li class="nav-item mr-2">
          <ScrollLink class="nav-link pl-1 pr-1" href="#work"><i class="fas fa-folder-open"></i> Work</ScrollLink>
        </li>
        <li class="nav-item mr-2">
          <ScrollLink class="nav-link pl-1 pr-1" href="#projects"><i class="fas fa-laptop-code"></i> Projects</ScrollLink>
        </li>
        <li class="nav-item mr-2">
          <ScrollLink class="nav-link pl-1 pr-1" href="#hobbies"><i class="fa fa-wrench"></i> Hobbies</ScrollLink>
        </li>
        <li class="nav-item">
          <ScrollLink class="nav-link pl-1 pr-1" href="#contact"><i class="fa fa-envelope"></i> Contact</ScrollLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import ScrollLink from './ScrollLink.vue'

export default {
  name: 'Navigation',
  props: {
    msg: String
  },
  components: {
    ScrollLink
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}

</style>
