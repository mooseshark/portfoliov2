<template>
  <div class="pb-4" id="contact" style="color: #ffffff; background-color: #ffffff">contact</div>
  <div class="contact">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="h1 text-center">Contact</div>
          <p class="h4 text-center">
            Reach out to me or view my socials
          </p>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md text-center d-none d-lg-block zoom" tabindex="0" data-toggle="tooltip" title="Click to copy">
          <i class="fas fa-envelope-square fa-3x" id="email" @click="copyTextArea('email')" > ianhutchraft@gmail.com</i>
        </div>
        <div class="col-md text-center d-block d-lg-none" data-toggle="tooltip" data-placement="top" title="Click to copy">
          <i class="fas fa-envelope-square fa-2x" id="email" @click="copyTextArea('email')" > ianhutchraft@gmail.com</i>
        </div>
      </div>
      <div class="row">
        <div class="col-md text-center d-none d-lg-block">
          <a href="https://www.linkedin.com/in/ian-hutchcraft-2b547b2a/" rel="noopener noreferrer" target="_blank" class="btn btn-dark zoom"><i class="fab fa-linkedin fa-3x"></i></a>
          <a href="https://github.com/mooseshark" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-4 zoom"><i class="fab fa-github fa-3x"></i></a>
          <a href="https://dev.to/moosesharkgames" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-4 zoom"><i class="fab fa-dev fa-3x"></i></a>
          <a href="https://www.instagram.com/moosesharkgames/" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-4 zoom"><i class="fab fa-instagram fa-3x"></i></a>
          <a href="https://twitter.com/moosesharkgames" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-4 zoom"><i class="fab fa-twitter fa-3x"></i></a>
        </div>
        <div class="col-md text-center d-block d-lg-none">
          <a href="https://www.linkedin.com/in/ian-hutchcraft-2b547b2a/" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-2"><i class="fab fa-linkedin fa-2x"></i></a>
          <a href="https://github.com/mooseshark" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-2"><i class="fab fa-github fa-2x"></i></a>
          <a href="https://dev.to/moosesharkgames" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-2"><i class="fab fa-dev fa-2x"></i></a>
          <a href="https://www.instagram.com/moosesharkgames/" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-2"><i class="fab fa-instagram fa-2x"></i></a>
          <a href="https://twitter.com/moosesharkgames" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-2"><i class="fab fa-twitter fa-2x"></i></a>
        </div>
      </div>
    </div>
    <div class="contact text-center">
      <i v-if="randomizedIcon" :class="randomizedIcon.class" data-placement="top" data-toggle="tooltip" :title="randomizedIcon.title"></i>
      <span class="reserved">©2020. All Rights Reserved</span>
    </div>
  </div>
</template>

<script>
const loadIcon = [
  {
    "class": 'fas fa-jedi icon',
    "title": 'May the force be with you.'
  },{
    "class": 'fas fa-hat-wizard icon',
    "title": `Keep on wizardin'!`
  },{
    "class": 'fab fa-vuejs icon',
    "title": 'Built with Vue.JS'
  },{
    "class": 'fas fa-globe-asia icon',
    "title": `Hire me if you're in NZ`
  },{
    "class": 'fab fa-edge-legacy icon',
    "title": `I didn't test this in IE`
  },{
    "class": 'fas fa-kiwi-bird icon',
    "title": `Hire me if you're in NZ`
  },{
    "class": 'fas fa-memory icon',
    "title": 'Memory IS RAM!'
  },{
    "class": 'fab fa-playstation icon',
    "title": 'If you hire me, I can buy a PS5'
  },{
    "class": 'fab fa-xbox icon',
    "title": 'Game Pass is really good.'
  },{
    "class": 'fas fa-dog icon',
    "title": 'Much Donate, Very Dogecoin: DJ1i19SnPdzW5sHdTfc8t5JnvwJMk99Zvu'
  },{
    "class": 'fab fa-battle-net icon',
    "title": 'BE Prot Paladin'
  },{
    "class": 'fas fa-battery-full icon',
    "title": 'This site is powered by a 4400mAh lithium ion battery'
  },{
    "class": 'fas fa-door-open icon',
    "title": '*AIM user sign on noise*'
  },{
    "class": 'fas fa-cube icon',
    "title": 'Remember that movie Cube?'
  },{
    "class": 'fas fa-ghost icon',
    "title": `Listen to Let's Get Haunted`
  },{
    "class": 'fab fa-npm icon',
    "title": 'npm run serve'
  },{
    "class": 'fas fa-voicemail icon',
    "title": 'you have 3 new voicemails'
  },{
    "class": 'fas fa-hands-wash icon',
    "title": 'Wash your hands!'
  },{
    "class": 'fas fa-code icon',
    "title": 'Now available as a .hta HTML Application'
  },{
    "class": 'fas fa-couch icon',
    "title": 'Couch co-op with friends is the best way to experience this portfolio.'
  }
];


export default {
  name: 'contact',
  computed: {
    randomizedIcon: function() {
      return loadIcon[Math.floor(Math.random() * loadIcon.length)];
    }
  },
  methods: {
    copyTextArea: function (id) {
      this.selectText(document.getElementById(id));
      document.execCommand("copy");
    },
    selectText(element) {
      let range;
      if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    }
  }
}
</script>

<style scoped>
.contact{
  background-color: #e9ecef;
}

.icon {
  color: #e9ecef;
}

.icon:hover {
  color: #000000;
}

.reserved {
  float: right;
  font-size: 0.67em;
  margin-top: 0.33em;
  margin-right: 0.33em;
}

.zoom {
  transition: transform .2s;
}

.zoom:hover {
  -ms-transform: scale(1.4); /* IE 9 */
  -webkit-transform: scale(1.4); /* Safari 3-8 */
  transform: scale(1.4);
}
</style>
