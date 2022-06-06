<template>
    <app-header/>
    <div class="website">
    <router-view/>
    <app-footer/>
    </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppFooter,
    AppHeader
  },
  mounted () {
    const mainPanelDiv = document.querySelector('.website')
    const navbar = document.querySelector('.nav-links')
    mainPanelDiv.addEventListener('click', function (event) {
      navbar.classList.remove('nav-active')
    })
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
  top:0;
  left:0;
  width: 100%;
  min-height: 100vh;
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    overflow-wrap: break-word;
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
.spreadText{
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
.spreadText:hover {
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
body, button, input { font-size: 5vw; }}
@media (min-width: 300px) {
body, button, input { font-size: 4vw; }}
@media (min-width: 350px) {
body, button, input { font-size: 3.5vw; }}
@media (min-width: 500px) {
body, button, input { font-size: 3vw; }}
@media (min-width: 650px) {
body, button, input { font-size: 2.5vw; }}
@media (min-width: 800px) {
body, button, input { font-size: 2vw; }}
@media (min-width: 1100px) {
body, button, input { font-size: 1.5vw; }}
@media (min-width: 1800px) {
body, button, input { font-size: 1.25vw; }
}

// @media (max-width: 650px) {
// #app { margin-right: -5vw; }}

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
</style>
