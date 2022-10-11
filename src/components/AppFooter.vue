
import { routeLocationKey } from 'vue-router';
<template>
  <footer id="contact">
  <router-link to="/getting-started-step-1"><button v-if="!$route.meta.hideNavbar" class="downloadButton boxShadow">GET STARTED</button></router-link>
    <img class="bolt" src="https://alchemon-website-assets.s3.amazonaws.com/assets/10_bolt_back.gif" alt="Bolt">
    <div>
      <a class="footerLink" href="https://t.me/joinchat/WbyxkfAyJDZmMzE5" target="_blank">Telegram</a> //
      <a class="footerLink" href="https://discord.gg/zr5PTxFTSk" target="_blank">Discord</a> //
      <a class="footerLink" href="https://twitter.com/AlchemonNFT" target="_blank">Twitter</a>
    </div>
    <ul>
      <li>
        <router-link to="/privacypolicy" class="navlinks">Privacy Policy</router-link>
      </li>
      <li>
        <router-link to="/termsandconditions" class="navlinks">Terms and Conditions</router-link>
      </li>
      <li>
        <router-link to="/cookies" class="navlinks">Cookies Policy</router-link>
      </li>
      <li>
        <router-link to="/litepaper" class="navlinks">Litepaper</router-link>
      </li>
      <li>
        <router-link to="/staff" class="navlinks">Staff</router-link>
      </li>
    </ul>
    &copy; {{new Date().getFullYear()}} Alchemon. All Rights Reserved.
    <img class="slug" src="https://alchemon-website-assets.s3.amazonaws.com/assets/19_slug.gif" alt="Slug">
  </footer>
</template>

<style lang="scss" scoped>
footer {
      background-color: #00003f;
      color:white;
      width: 100%;
      padding-bottom: 2%;
      position: relative;
    ul {
      list-style: none;
      padding: 0;
    }
    a {
      color: white;
      text-align: center;
      text-decoration: none;
    }
    .navlinks{
      display: block;
    }
    div {
      padding-top: 2%;
    }
  }
  .bolt {
    position: absolute;
    bottom: 0;
    left: 2vw;
    height: 20vw;
  }
  .slug {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 20vw;
  }
  .footerLink {
    font-weight: bold;
  }
    .downloadButton {
      color: #000080;
      /* Sets the color of the button text to black */
      border: solid #000080;
      /* This makes a solid black border around the button */
      border-radius: 2vw;
      font-weight: bold;
      padding: 1% 3%;
      letter-spacing: 5px;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 100;
    }

    .downloadButton:hover {
      background-color: darkblue;
      border: 2px solid orange;
      color: orange;
    }

    @media only screen and (max-width: 798px) {
      .downloadButton {
        width: 98vw;
        bottom: 5px;
      }
    }
</style>
