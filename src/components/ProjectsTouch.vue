<template>
  <div class="pb-4" id="projects" style="color: #ffffff; background-color: #ffffff">projects</div>
  <div class="projects">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="h1 text-center">Projects</div>
          <p class="h4 text-center">
            Old projects and projects I'm continuously updating
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md d-flex align-items-stretch">
          <div class="card shadow-lg">
            <img src="../assets/game-testing.png" class="card-img-top" alt="imgage of lttp sprites for testing in a game project">
            <div class="card-body">
              <h5 class="card-title">Untitled Game Project</h5>
              <p class="card-text">
                A small adventure game project I've recently started. Currently
                in the process of working on movement and gameplay, which is
                why I'm using Link to the Past sprite stand-ins. Planning to do more
                design work after testing if gameplay is fun or not.
              </p>
              <div class="row"><a href="" rel="noopener noreferrer" target="_blank" class="btn disabled btn-dark mb-2 pb-2"><i class="fas fa-gamepad"></i> Give it a play</a></div>
              <div class="row"><a href="" rel="noopener noreferrer" target="_blank" class="btn disabled btn-dark"><i class="fab fa-github"></i> GitHub</a></div>
            </div>
          </div>
        </div>
        <div class="col-md d-flex align-items-stretch">
          <div class="card shadow-lg">
            <img src="../assets/dumbcode.png" class="card-img-top" alt="dumbcode.dev front page">
            <div class="card-body">
              <h5 class="card-title">DumbCode.dev</h5>
              <p class="card-text">
                A tech blog for wierd little projects I build. Written mostly
                with Vanilla JS and Bootstrap 4.
              </p>
              <div class="row"><a href="https://dumbcode.dev/" rel="noopener noreferrer" target="_blank" class="btn btn-dark mb-2 pb-2"><i class="fas fa-book"></i> Take a look</a></div>
              <div class="row"><a href="https://github.com/mooseshark/dumbcode" rel="noopener noreferrer" target="_blank" class="btn btn-dark"><i class="fab fa-github"></i> GitHub</a></div>
            </div>
          </div>
        </div>
        <div class="col-md d-flex align-items-stretch">
          <div class="card shadow-lg">
            <img src="../assets/angular-search.png" class="card-img-top" alt="GitHub User Search Angular homepage">
            <div class="card-body">
              <h5 class="card-title">GitHub Search in AngularJS</h5>
              <p class="card-text">
                A small project written in AngularJS utilizing Angular Apollo to connect
                to the GitHub v4 GraphQL API.
              </p>
              <div class="row"><a href="https://angulargithubsearch.xyz/" rel="noopener noreferrer" target="_blank" class="btn btn-dark mb-2 pb-2"><i class="fas fa-book"></i> Take a look</a></div>
              <div class="row"><a href="https://github.com/mooseshark/angular-github-search" rel="noopener noreferrer" target="_blank" class="btn btn-dark"><i class="fab fa-github"></i> GitHub</a></div>
            </div>
          </div>
        </div>
        <div class="col-md d-flex align-items-stretch">
          <div class="card shadow-lg">
            <img src="../assets/vue-search.png" class="card-img-top" alt="GitHub User Search Vue homepage">
            <div class="card-body">
              <h5 class="card-title">GitHub Search in Vue.js</h5>
              <p class="card-text">
                A small project written in Vue.js utilizing Vue Apollo to connect
                to the GitHub v4 GraphQL API.
              </p>
              <div class="row"><a href="https://githubusersearch.xyz/#/" rel="noopener noreferrer" target="_blank" class="btn btn-dark mb-2 pb-2"><i class="fas fa-book"></i> Take a look</a></div>
              <div class="row"><a href="https://github.com/mooseshark/github-user-search" rel="noopener noreferrer" target="_blank" class="btn btn-dark"><i class="fab fa-github"></i> GitHub</a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md d-flex align-items-stretch">
          <div class="card shadow-lg">
            <img src="../assets/button-clicks.png" class="card-img-top" alt="Button Clicks homepage">
            <div class="card-body">
              <h5 class="card-title">Button Clicks</h5>
              <p class="card-text">
                A bad, unfun Vanilla JS/jQuery game where you click a bunch of
                buttons.
              </p>
              <!-- <router-link to="/button-clicks" class="navbar-brand">Button Clicks</router-link> -->
              <div class="row"><a href="https://buttonclicks.net/" rel="noopener noreferrer" target="_blank" class="btn btn-dark mb-2 pb-2"><i class="fas fa-gamepad"></i> Give it a play</a></div>
              <div class="row"><a href="https://github.com/mooseshark/button-clicks" rel="noopener noreferrer" target="_blank" class="btn btn-dark"><i class="fab fa-github"></i> GitHub</a></div>
            </div>
          </div>
        </div>
        <div class="col-md d-flex align-items-stretch">
          <div class="card shadow-lg">
            <img src="../assets/space-defense.png" class="card-img-top" alt="space defense force 9 start screen">
            <div class="card-body">
              <h5 class="card-title">Space Defence Force 9</h5>
              <p class="card-text">
                A bad GameMaker Space Invaders Clone I threw together in
                about 8 hours one night.
              </p>
              <div class="row"><a class="btn btn-dark mb-2 pb-2"><i class="fas fa-times-circle"></i> Unable to play on mobile</a></div>
              <div class="row"><a href="https://github.com/mooseshark/space-defense-force-9" rel="noopener noreferrer" target="_blank" class="btn btn-dark"><i class="fab fa-github"></i> GitHub</a></div>
            </div>
          </div>
        </div>
        <div class="col-md d-flex align-items-stretch">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'projects'
}
</script>

<style scoped>
a.disabled {
  /* Make the disabled links grayish*/
  color: gray;
  /* And disable the pointer events */
  pointer-events: none;
}

.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}


.projects{
  background-color: #e9ecef;
}
</style>
