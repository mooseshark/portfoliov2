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
        <div class="col-md text-center d-none d-lg-block" tabindex="0" data-toggle="tooltip" title="Click to copy">
          <i class="fas fa-envelope-square fa-3x" id="email" @click="copyTextArea('email')" > ianhutchraft@gmail.com</i>
        </div>
        <div class="col-md text-center d-block d-lg-none" data-toggle="tooltip" data-placement="top" title="Click to copy">
          <i class="fas fa-envelope-square fa-2x" id="email" @click="copyTextArea('email')" > ianhutchraft@gmail.com</i>
        </div>
      </div>
      <div class="row">
        <div class="col-md text-center d-none d-lg-block">
          <a href="https://www.linkedin.com/in/ian-hutchcraft-2b547b2a/" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-2"><i class="fab fa-linkedin fa-3x"></i></a>
          <a href="https://github.com/mooseshark" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-2"><i class="fab fa-github fa-3x"></i></a>
          <a href="https://dev.to/moosesharkgames" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-2"><i class="fab fa-dev fa-3x"></i></a>
          <a href="https://www.instagram.com/moosesharkgames/" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-2"><i class="fab fa-instagram fa-3x"></i></a>
          <a href="https://twitter.com/moosesharkgames" rel="noopener noreferrer" target="_blank" class="btn btn-dark ml-2"><i class="fab fa-twitter fa-3x"></i></a>
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
      <i class="fas fa-jedi" data-placement="top" data-toggle="tooltip" title="May the force be with you."></i>
      <span class="reserved">©2020. All Rights Reserved</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  mounted() {

      // let popperJS = document.createElement('script');
      //
      // popperJS.setAttribute('src', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js');
      // popperJS.setAttribute('integrity', 'sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo');
      // popperJS.setAttribute('crossorigin', 'anonymous');
      //
      // let bootstrapJS = document.createElement('script');
      //
      // bootstrapJS.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js');
      // bootstrapJS.setAttribute('integrity', 'sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/');
      // bootstrapJS.setAttribute('crossorigin', 'anonymous');
      //
      // let initializeToolTip = document.createElement('script');
      //
      // initializeToolTip.setAttribute('innerHTML', `
      //   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
      //   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      //     return new bootstrap.Tooltip(tooltipTriggerEl);
      //   })
      // `);
      //
      // document.head.appendChild(popperJS);
      // document.head.appendChild(bootstrapJS);
      // document.head.appendChild(initializeToolTip);
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

.fa-jedi {
  color: #e9ecef;
}

.fa-jedi:hover {
  color: #000000;
}

.reserved {
  float: right;
  font-size: 0.67em;
  margin-top: 0.33em;
  margin-right: 0.33em;
}
</style>
