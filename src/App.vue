<template>
    <app-header/>
<div class="website">
    <router-view/>
  </div>
  <app-footer/>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  top:0; //withremoves white space at top of website
  left:0; //withremoves white space at left of website
  width: 100%;
  min-height: 100vh; //ensures webpage takes up full view height so footer sticks to bottom view
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
    overflow-x: hidden;
    overflow-wrap: break-word;
}
.website {
  max-width: 100vw;
  display: flex;
    flex-direction: column;
    flex-grow: 1;
}
p{
  text-align: justify;
  padding: 0 5%;
}
li {
  text-align: justify;
}
img {
  margin: 3% 0;
}
.spreadText{ //for header text
  font-weight: bold;
  text-align: center;
  padding: 3%;
  margin: 0;
}
.darkBlueHeader {
  color: #136af8;
}
.orangeHeader {
  color: orange;
}
.grayHeader {
  color: #838383;
}
.spreadText:hover { //spread animation for header text
  letter-spacing: .5vw;
  transition: letter-spacing 1s;
}
.whiteGrayBackground {
  background-color: white;
  background-image: linear-gradient(to right, #F2F2F2, #F8F8F8, #FFFFFF, #FFFFFF);
}
.yellowHeader {
  color: yellow;
}
.whiteText {
  color: white;
}
.whiteHeader {
  color: white;
}
.boxShadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
}
/*Responsive body text size*/
@media (min-width: 1px) {
body, button, input, select { font-size: 5vw; }
.directionButton { font-size: 10vw;}}
@media (min-width: 300px) {
body, button, input,
  select { font-size: 4vw; }
.directionButton { font-size: 8vw;}}
@media (min-width: 350px) {
body, button, input,
  select { font-size: 3.5vw; }
.directionButton { font-size: 7vw;}}
@media (min-width: 500px) {
body, button, input,
  select { font-size: 3vw; }
.directionButton { font-size: 6vw;}}
@media (min-width: 650px) {
body, button, input,
  select { font-size: 2.5vw; }
.directionButton { font-size: 5vw;}}
@media (min-width: 800px) {
body, button, input,
  select { font-size: 2vw; }
.directionButton { font-size: 4vw;}}
@media (min-width: 1100px) {
body, button, input,
  select { font-size: 1.5vw; }
.directionButton { font-size: 3vw;}}
@media (min-width: 1800px) {
body, button, input,
  select { font-size: 1.25vw; }
.directionButton,
select { font-size: 2.5vw;}}
@media (min-width:2500px) {
body, button, input,
  select { font-size: 1vw; }
.directionButton { font-size: 2vw;}}
@media (min-width:3400px) {
body, button, input,
  select { font-size: .9vw; }
.directionButton { font-size: 2vw;}}
@media (min-width:4000px) {
body, button, input,
  select { font-size: .8vw; }
.directionButton { font-size: 2vw;}}
@media (min-width:4200px) {
body, button, input,
  select { font-size: .7vw; }
.directionButton { font-size: 2vw;}}
@media (min-width:4900px) {
body, button, input,
  select { font-size: .65vw; }
.directionButton { font-size: 2vw;}}

@keyframes move9 {
    0%   {left:65%; top:0;opacity:0;}
    10%  {left:55%; top:0;opacity:1;}
    50%  {left:0%; top:0;opacity:1;}
    100% {left:-65%; top:0;}
}
#moveAnimation_1 {
    vertical-align: middle;
    position: relative;
    animation-name: move9;
    animation-duration: 10s;
    animation-iteration-count:infinite;
}
.zoomIn_1:hover {
  transition: transform 1s;
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
button, select {
  font-family: poppins;
  text-align: center;
  background-color: orange;
  border: 2px solid orange;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 1%;
  text-transform: uppercase;
  font-weight: bold;
}
button:hover, select:hover {
  background-color:darkblue;
  border: 2px solid orange;
  color: orange;
}
.backButton { //navigation buttons for getting started/free nft/alchegold airdrop pages
  background-color: darkblue;
  border: 2px solid darkblue;
  color: white;
}

.backButton:hover {
  background-color: orange;
  border: 2px solid darkblue;
  color: darkblue;
}

//scroll bar styling below

/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ffa500;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ffa6007e;
}
</style>
