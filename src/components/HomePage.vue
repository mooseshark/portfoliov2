<template>
  <div class="jumbotron" id="home">
    <Construction/>
    <div class="container">
      <h1 class="display-3">Hello, world!</h1>
      <div class="row">
        <div class="col">
          <p>I am Ian Hutchcraft. I'm a developer that mainly focuses on web
            development, though I have an interest most things coding.
          </p>
          <p>
            In my spare time, I enjoy coding small projects, as well as assembling/working
            on computers and hardware. I like to play video games, but also enjoy
            collacting and repairing games, accessories, and consoles.
          </p>
          <p>
            Sometimes I go outside too, where I enjoy skateboarding. I also like to
            modify cars and occationally race them when I can.
          </p>
          <img src="../assets/profile-pic-mask-200.png" class="rounded float-left d-block d-lg-none pb-3" alt="let's take a selfie with a mask on">
        </div>
        <div class="col d-none d-lg-block">
          <img src="../assets/profile-pic-mask-200.png" class="rounded float-right" alt="let's take a selfie with a mask on">
        </div>
      </div>
      <!--<p><a class="btn btn-dark btn-lg" href="#" role="button">Learn more &raquo;</a></p>-->
    </div>
  </div>
</template>

<script>
import Construction from '@/components/Construction.vue'

export default {
  name: 'HomePage',
  props: {
  },
  components: {
    Construction
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  padding: 2rem 1rem;
  margin-top: 40px;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}

@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}
</style>
