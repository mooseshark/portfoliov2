<template>
<!--  <div class="container">
    <div class="menuDiv" style="float: right">
      <ul class="menu">
          <li>
            <a href="#"><img class="menuImage" src="imagery/menuButton.png" /></a>
            <ul>
              <li><span><a href="#"  class="menuItem" value="Stats" onclick="clickStats();">Stats</a></span></li>
              <li><span><a href="#"  class="menuItem" value="Reset" onclick="clickReset();">Reset</a></span></li>
            <li><span><a href="#"  class="menuItem" value="New Game" onclick="clickNewGame();">New Game</a></span></li>
            <li><span><a href="https://ianhutchcraft.com/"  class="menuItem" value="Quit">Quit</a></span></li>
            </ul>
          </li>
        </ul>
    </div>
    <header style="text-align: center">Button Clicks</header>
      <h2 style="text-align: center" class="title">Set Difficulty</h2>
      <h3 style="text-align: center" class="stats"></h3>
      <article class="contentWrap">
      <article class="content">
        <input id="easy" type="button" value="Easy" onclick="setDifficulty(this.id);" style="float: left; width: 120px;" />
        <input id="medium" type="button" value="Medium" onclick="setDifficulty(this.id);" style="float: left; width: 120px;" />
        <input id="hard" type="button" value="Hard" onclick="setDifficulty(this.id);" style="float: left; width: 120px;" />
        <input id="insanity" type="button" value="Insanity" onclick="setDifficulty(this.id);" style="float: left; width: 120px;" />
      </article>
    </article>
  </div> -->
</template>

<script>

export default {
  // name: 'ButtonClicks',
  // props: {
  // },
  // mounted() {
  // },
  // data: function() {
  //   return {
  //
  //   }
  // },
  // computed: {
  // },
  // methods: {
  //
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "utf-8";
body {
	font: 100%/1.4 Verdana, Arial, Helvetica, sans-serif;
	background-color: #FFFFFF;
	margin: 0;
	padding: 0;
	color: #FFFFFF;
}
/* Element/tag selectors */
ul, ol, dl {
	padding: 0;
	margin: 0;
}
h1, h2, h3, h4, h5, h6, p {
	margin-top: 0;
	padding-right: 15px;
	padding-left: 15px;
}

.container {
	height: 100%;
	width: 1000px;
	background-color: #FFFFFF;
	margin: 0 auto;
}

header {
	margin: 0 auto;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: #FFFFFF;
	font-size: 40px;
	font-weight: bold;
	width: 500px;
	color: #56BBFF;
	-moz-border-radius: 100%;
    -webkit-border-radius: 100%;
	border: 5px solid #A2ADE5;
	border-radius:25px;
}

.menu{
	float: right;
	display: block;
	margin: 0px;
	padding: 0px;
	position: absolute;
	list-style: none;

}

.menu li{
	position: relative;
	display: block;
}

.title{
	margin: 0 auto;
	margin-bottom: 10px;
	background-color: #FFFFFF;
	color: #56BBFF;
	width: 700px;
	-moz-border-radius: 100%;
    -webkit-border-radius: 100%;
	border: 5px solid #A2ADE5;
	border-radius:25px;
}

.endMessage {
	margin: 0 auto;
	margin-bottom: 10px;
	background-color: #FFFFFF;
	color: #56BBFF;
}

.stats{
	margin: 0 auto;
	margin-bottom: 10px;
	background-color: #FFFFFF;
	color: #56BBFF;
	width: 825px;
	-moz-border-radius: 100%;
    -webkit-border-radius: 100%;
	border: 5px solid #A2ADE5;
	border-radius:25px;
}

.contentWrap{
	height: auto;
	float: left;
	width: 990px;
	background-color: #FFFFFF;
	-moz-border-radius: 100%;
    -webkit-border-radius: 100%;
	border: 5px solid #A2ADE5;
	border-radius:25px;
}
.content {
	height: auto;
	padding-top: 5px;
	padding-left: 5px;
	padding-right: 5px;
	padding-bottom: 5px;
	margin: 0 auto;
	width: 500px;
	background-color: #FFFFFF;
	-moz-border-radius: 100%;
    -webkit-border-radius: 100%;
	border-radius:25px;
}

.content ul, .content ol {
	padding: 0 15px 15px 40px;
}

input[type="button"]{
	padding: 10px 10px 10px 10px;
	margin-bottom: 10px;
	margin-left: 5px;
	display: block;
	width: 95px;
	text-decoration: none;
	background-color: #56BBFF;
	color: #FFFFFF;
	-moz-border-radius: 100%;
    -webkit-border-radius: 100%;
	border: 5px solid #A2ADE5;
	border-radius:25px;
	font-size:16px;
	font-weight:bold;
}

input[type="button"]:focus {outline:0 !important;}

input[type="button"]:hover{
	background-color: #759999;
	color: #FFFFFF;
}

span{
	display: block;
	float: right;
	width: 110px;
	text-decoration: none;
	background-color: #FFFFFF;
	-moz-border-radius: 100%;
    -webkit-border-radius: 100%;
	border: 4px solid #FFFFFF;
	border-radius: 25px;
}

.menuItem {
	text-align: center;
	text-decoration: none;
	display: block;
	float: right;
	width: 100px;
	text-decoration: none;
	background-color: #56BBFF;
	color: #FFFFFF;
	-moz-border-radius: 100%;
    -webkit-border-radius: 100%;
	border: 3px solid #A2ADE5;
	border-radius: 25px;
	font-size: 10px;
	font-weight: bold;
}

.menuItem:hover{
	text-decoration: none;
	background-color: #759999;
	color: #FFFFFF;
}

header, section, footer, aside, article, figure {
	display: block;
}
</style>
