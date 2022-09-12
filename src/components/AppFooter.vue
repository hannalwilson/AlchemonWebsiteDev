<template>
  <footer id="contact">
    <img class="bolt" src="https://alchemon-website-assets.s3.amazonaws.com/assets/10_bolt_back.gif" alt="Bolt">
    <div>
      <a class="footerLink" href="https://t.me/joinchat/WbyxkfAyJDZmMzE5" target="_blank">Telegram</a> //
      <a class="footerLink" href="https://discord.gg/TmMJRjHH" target="_blank">Discord</a> //
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
      bottom: 0;
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
</style>
