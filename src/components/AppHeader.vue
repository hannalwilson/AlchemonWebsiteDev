<template>
  <nav>
    <router-link to="/"><img alt="Vue Logo" src="../assets/logo.png"></router-link>
    <div v-on:click="openMobileNav()" id="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <ul class="nav-links">
       <li>
            <router-link to="/news">NEWS</router-link>
        </li>
        <li>
            <router-link to="/faq">FAQ</router-link>
        </li>
        <li>
            <router-link to="/howtoplay">HOW&nbsp;TO&nbsp;PLAY</router-link>
        </li>
        <li>
            <router-link to="/token">TOKEN</router-link>
        </li>
        <li>
            <router-link to="/alchedex">ALCHEDEX</router-link>
        </li>
        <!-- <li>
            <router-link to="/crafting">CRAFT</router-link>
        </li>
        <li>
            <router-link to="/evolving">EVOLVE</router-link>
        </li> -->
        <li class="dropdown-link">
                <span>STORE&nbsp;&#x2193;</span>
          <ul class="dropdown-menu">
            <li>
              <a href="https://shop.alchemon.net" target="_blank">MERCH</a>
            </li>
             <li>
               <router-link to="/store">ALCHESHOP</router-link>
            </li>
            <li>
              <a href="https://www.randgallery.com/algo-collection/?address=ALCHY5SJXOXZXADZPD73KO6CYNZXDUWFYANTSXU6RIO3EZACIIXUCS3YDM" target="_blank">RANDGALLERY</a>
            </li>
          </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    openMobileNav () {
      const nav = document.querySelector('.nav-links')
      // const navLinks = document.querySelectorAll('.nav-links li')

      // Toggle navigation on mobile
      nav.classList.toggle('nav-active')
    },
    openDropdownNav () {
      const dropdownLink = document.querySelectorAll('.dropdown-link')
      dropdownLink.forEach((dropdown) => {
        dropdown.addEventListener('mouseover', () => {
          dropdown.children[1].style.display = 'block'
        })
        dropdown.addEventListener('mouseleave', () => {
          dropdown.children[1].style.display = 'none'
        })
      })
    },
    /* Run only on mobile

       This code below here will change the behavior of mobile menu links.
       when you click for once it will open the drop down & by the
       second click it will lead you to the link page if you don't
       want to go in dropdown links
    */
    countClicksOnMobileDropdown () {
      const dropdownLink = document.querySelectorAll('.dropdown-link')
      dropdownLink.forEach((dropdown) => {
        let counts = dropdown.clicks || 0
        dropdown.addEventListener('click', () => {
          counts++
          if (counts % 2 === 0) {
            window.location.href = dropdown.children[0].getAttribute('href')
          } else {
            event.preventDefault()
            dropdown.children[1].style.display = 'block'
            setTimeout(() => {
              dropdown.children[1].style.display = 'none'
            }, 5000)
          }
        })
        setTimeout(() => { counts = 0 }, 8000)
      })
    }
  },
  mounted () {
    this.openDropdownNav()
    if (window.innerWidth < 768) {
      this.countClicksOnMobileDropdown()
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  background-color: rgba(0, 0, 140, 0.5);
  position: fixed;
  width: 100%;
  z-index: 100;
}

li:hover, a:hover, span:hover {
    background-color: orange;
    color: #00006f;
    transition: 0.3s;
    color: white;
}

img {
    position: absolute;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 3.5vw;
    left: 0;
    top: 25%;
    margin: 1%;
}

ul.nav-links {
  display: flex;
  justify-content: right;
  width: 60%;
  padding: 0%;
  margin: 0;
  float: right;
}

@media not all and (min-resolution:.001dpcm)
{ @supports (-webkit-appearance:none) and (stroke-color:transparent) {
ul.nav-links {
margin-right: 5%;
}
}}

ul.nav-links li {
  list-style: none;
  padding: 2% 4%;
}

ul.nav-links a, span {
  text-decoration: none;
  color: #fefefe;
  font-weight: 500;
  display: block;
}
#burger {
  display: none;
  cursor: pointer;
  float: right;
  margin-right: 25px;
}

#burger div {
  width: 30px;
  height: 3px;
  margin: 8px;
  background-color: #fefefe;
  right: 100px;
}

ul.dropdown-menu {
  position: absolute;
  cursor: pointer;
  display: none;
  top: 100%;
  padding: 0%;
  min-width: 200px;
  right: 0%;
}
li {
  text-align: center;
}

ul.dropdown-menu li {
  margin: 0%;
  background-color: rgb(0, 0, 80);
  padding: 0%;
}

ul.dropdown-menu a {
  line-height: 8vh;
  line-height: 50px;
  text-align: center;
  padding: 5% ;
}

.nav-active {
  visibility: visible !important;
  transition: 0.4s;
}

/* Mobile */
@media screen and (max-width: 768px) {
  ul.nav-links {
    align-items: center;
    justify-content: flex-start;
    display: block;
    margin: 0%;
    padding: 0%;
    position: absolute;
    top: 100%;
    background-color: rgba(0, 0, 140, 0.5);
    text-align: center;
    width: 100vw;
    left: 0;
    visibility: hidden;
  }

  ul.nav-links a {
    width: 100%;
  }

  div#burger {
    display: block;
  }

  ul.dropdown-menu {
      width: 100vw;
      right: 0%;
  }
  img {
      height: 5vw;
  }

  ul.dropdown-menu a {
  padding: 1% ;
}
}
</style>
