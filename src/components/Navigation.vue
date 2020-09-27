<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">Ian Hutchcraft</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav ml-auto pl-1 pr-1">
        <li class="nav-item mr-2">
          <a class="nav-link pl-1 pr-1" href="#"><i class="fa fa-user-o"></i> Home</a>
        </li>
        <li class="nav-item mr-2">
          <a class="nav-link pl-1 pr-1" href="#"><i class="fas fa-folder-open"></i> Work</a>
        </li>
        <li class="nav-item dropdown mr-2">
          <a class="nav-link dropdown-toggle pl-1 pr-1" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-keyboard-o"></i> Examples</a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item mr-2">
          <a class="nav-link pl-1 pr-1" href="#"><i class="fas fa-laptop-code"></i> Projects</a>
        </li>
        <li class="nav-item mr-2">
          <a class="nav-link pl-1 pr-1" href="#"><i class="fa fa-wrench"></i> Hobbies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link pl-1 pr-1" href="#"><i class="fa fa-envelope"></i> Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}

</style>
