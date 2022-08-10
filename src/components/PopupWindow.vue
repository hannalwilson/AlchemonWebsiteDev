<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
            <p v-if="message">{{ message }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
.popup-inner {
    background: #FFF;
    padding: 32px;
    z-index: 100;
    padding: 1vw 5vw 2vw;
    position: absolute;
    top: 25%;
}
}
</style>

<script>
export default {
  props: ['message']
}
</script>
