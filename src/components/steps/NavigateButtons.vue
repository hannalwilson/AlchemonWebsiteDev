<template>
    <div class="buttonContainer">
        <router-link :to="`${backURL}`"><button class="backButton directionButton">BACK</button></router-link>
        <router-link :to="`${nextURL}`"><button class="directionButton">NEXT</button></router-link>
    </div>

</template>

<style lang="scss" scoped>
button {
    margin-bottom: 3%;
    margin-top: 2%;
    min-width: 20vw;
}

.buttonContainer {
    display: flex;
    justify-content: space-between;
    margin: 3%;
}
@media (max-width: 800px) {
    button {
        min-width: 35vw;
    }
}
</style>

<script>
export default {
  props: ['nextURL', 'backURL']
}
</script>
