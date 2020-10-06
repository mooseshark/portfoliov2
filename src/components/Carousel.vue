<template>



  <div id="bootstrapDarkCarousel" class="carousel carousel-dark slide carousel-fade" data-ride="carousel">
    <ol  class="carousel-indicators">
      <!--<li v-if="index === 0" data-target="#bootstrapDarkCarousel" data-slide-to="0" class="active">{{index}}</li>
      <li v-else data-target="#bootstrapDarkCarousel" v-bind:data-slide-to="index">{{index}}</li>-->
      <li v-for="(item, index) in carousel" :key="index" data-target="#bootstrapDarkCarousel" :data-slide-to="index" :class="item.active"></li>
    </ol>
    <div class="carousel-inner">

     <div
        v-for="(item, index) in carousel" :key="index"
        :class="item.class"
        data-interval="10000"
      >
        <img :src="item.src" class="rounded d-block back" style="padding-bottom: 150px;">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>

    </div>
    <a class="carousel-control-prev text-decoration-none" href="#bootstrapDarkCarousel" role="button" data-slide="prev">
      <i class="far fa-caret-square-left fa-4x"></i>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next text-decoration-none" href="#bootstrapDarkCarousel" role="button" data-slide="next">
      <i class="far fa-caret-square-right fa-4x"></i>
      <span class="visually-hidden align-bottom">Next</span>
    </a>
  </div>


</template>


<script>

export default {
  name: 'carousel',
  data: function() {
    return {
      carousel: [
        {
          "class": 'carousel-item active',
          "src": require('@/assets/hobbies/build-computer.png'),
          "alt": 'most recent computer build',
          "active": 'active',
          "caption": ``
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-start.png'),
          "alt": 'civic cleaned and prepped for use',
          "active": '',
          "caption": ``
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-flood.png'),
          "alt": 'civic flooded by hurricane and filled with water',
          "active": '',
          "caption": ``
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-apart.png'),
          "alt": 'civic taken apart to be cleaned and dried',
          "active": '',
          "caption": ``
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-together.png'),
          "alt": 'civic reassmbled',
          "active": '',
          "caption": ``
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-paint.png'),
          "alt": 'civic with the interior stripped and painted',
          "active": '',
          "caption": ``
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-manual.png'),
          "alt": 'civic with the automatic transmission being removed',
          "active": '',
          "caption": ``
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-swapped.png'),
          "alt": 'civic with the manual transmission installed',
          "active": '',
          "caption": ``
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-sunroof.png'),
          "alt": 'civic with the sunroof removed and the hole patched',
          "active": '',
          "caption": ``
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-lower.png'),
          "alt": 'civic with all new suspension parts',
          "active": '',
          "caption": ``
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/laurel-gauge.png'),
          "alt": 'gauge pod and stereo surround fabricated for Nissan Laurel',
          "active": '',
          "caption": ``
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/game-gear.png'),
          "alt": 'game gear capacitors replaced',
          "active": '',
          "caption": ``
        }
      ]
    }
  },

}
</script>

<style scoped>
.back {
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(229,236,239,1) 100%);
}

</style>
