<template>
  <li class="accordion__item">
    <div class="accordion__trigger" :class="{ 'accordion__trigger_active': visible }" @click="open">

      <slot name="accordion-trigger"></slot>
    </div>

    <transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">

      <div class="accordion__content" v-show="visible">
        <ul>
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {},
  inject: ['Accordion'],
  data () {
    return {
      index: null
    }
  },
  computed: {
    visible () {
      return this.index === this.Accordion.active
    }
  },
  methods: {
    open () {
      if (this.visible) {
        this.Accordion.active = null
      } else {
        this.Accordion.active = this.index
      }
    },
    start (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end (el) {
      el.style.height = ''
    }
  },
  created () {
    this.index = this.Accordion.count++
  }
}
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  border-radius: 5px;
  border: 1px orange solid;
  border-bottom: none;
  position: relative;
  background: white;
      color: rgb(0, 123, 255);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: normal;
        padding-left: 1%;
            width: 80vw;
            margin: 0px auto;
}
ul {
  background-color: orange;
    background-image: linear-gradient(270deg, orange, rgb(255, 179, 39), rgb(255, 255, 255));
    width: inherit;
    text-align: justify;
    text-transform: none;
    color: black;
    font-weight: normal;
    padding: 1%;
}
.accordion__trigger {
  display: flex;
  justify-content: space-between;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
