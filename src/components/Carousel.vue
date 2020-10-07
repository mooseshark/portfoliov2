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

          <img :src="item.src" class="rounded d-none d-md-block" style="padding: 0px 150px 150px 150px;">
          <div class="carousel-caption d-none d-md-block">
            <h5><strong>{{ item.heading }}</strong></h5>
            <p>{{ item.caption }}</p>
          </div>

         <img :src="item.src" class="rounded d-block d-md-none img-fluid">
         <div class="d-block d-md-none">
           <h5><strong>{{ item.heading }}</strong></h5>
           <p>{{ item.caption }}</p>
         </div>

        </div>

    </div>
    <a class="carousel-control-prev text-decoration-none" href="#bootstrapDarkCarousel" role="button" data-slide="prev">
      <i class="far fa-caret-square-left fa-4x d-none d-md-block"></i>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next text-decoration-none" href="#bootstrapDarkCarousel" role="button" data-slide="next">
      <i class="far fa-caret-square-right fa-4x d-none d-md-block"></i>
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
          "active": 'd-none d-md-block active',
          "heading": 'I enjoy building and modifying PCs',
          "caption": 'This is my most recent build from Oct 2019'
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-start.png'),
          "alt": 'civic cleaned and prepped for use',
          "active": 'd-none d-md-block',
          "heading": 'I like to take care of my cars',
          "caption": 'This was after a long needed wash and cleaning'
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-flood.png'),
          "alt": 'civic flooded by hurricane and filled with water',
          "active": 'd-none d-md-block',
          "heading": 'And then sometimes those cars get ruined',
          "caption": 'The same car, full of water after a hurricane'
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-apart.png'),
          "alt": 'civic taken apart to be cleaned and dried',
          "active": 'd-none d-md-block',
          "heading": 'So I stripped it',
          "caption": 'drained the water and cleaned every panel inside and out.'
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-together.png'),
          "alt": 'civic reassmbled',
          "active": 'd-none d-md-block',
          "heading": 'I put it back together',
          "caption": 'and drove it for a while with no interior'
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-paint.png'),
          "alt": 'civic with the interior stripped and painted',
          "active": 'd-none d-md-block',
          "heading": 'Then I painted the inside',
          "caption": 'to give it a bit more of a finished look.'
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-manual.png'),
          "alt": 'civic with the automatic transmission being removed',
          "active": 'd-none d-md-block',
          "heading": 'Eventually I pulled the automatic transmission',
          "caption": 'because it was slipping after being filled with mud during the hurricane'
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-swapped.png'),
          "alt": 'civic with the manual transmission installed',
          "active": 'd-none d-md-block',
          "heading": 'And I slapped in a manual transmission',
          "caption": 'because this thing was slowly being transformed into my weekend race car'
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-sunroof.png'),
          "alt": 'civic with the sunroof removed and the hole patched',
          "active": 'd-none d-md-block',
          "heading": 'Then I removed and patched the sunroof',
          "caption": 'for helmet clearance and weight reduction.'
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/civic-lower.png'),
          "alt": 'civic with all new suspension parts',
          "active": 'd-none d-md-block',
          "heading": 'And I replaced all of the 20+ year old suspension',
          "caption": 'with brand new performance parts to improve handling'
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/laurel-gauge.png'),
          "alt": 'gauge pod and stereo surround fabricated for Nissan Laurel',
          "active": 'd-none d-md-block',
          "heading": 'I also like to fabricate small parts',
          "caption": 'This was a gauge pod and stereo surround I made for a different car'
        },{
          "class": 'carousel-item',
          "src": require('@/assets/hobbies/game-gear.png'),
          "alt": 'game gear capacitors replaced',
          "active": 'd-none d-md-block',
          "heading": 'I also enjoy repairing old electronics',
          "caption": 'I replaced all of the capacitors in my old Game Gear to make it work again.'
        }
      ]
    }
  },
  computed: {
    getResolution: function() {
        if(window.screen.width <= 768) {
          return 'd-block d-md-none';
        } else {
          return 'd-none d-md-block';
        }
    }
  }

}
</script>

<style scoped>
.back {
  background: rgb(52,58,64);
  background: linear-gradient(180deg, rgba(52,58,64,1) 0%, rgba(229,236,239,1) 100%);
}

.far{
  color: #343a40;
}
</style>
