<template>
  <div class="hobbies pb-4" id="hobbies" style="color: #e9ecef; background-color: #e9ecef">hobbies</div>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="h1 text-center">Hobbies</div>
          <p class="h4 text-center">
            What I do when I'm not coding
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md text-center">
        </div>
        <div class="col-md text-center">
          <Carousel/>
        </div>
        <div class="col-md text-center">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
  name: 'hobbies',
  components: {
    Carousel
  }
}
</script>
