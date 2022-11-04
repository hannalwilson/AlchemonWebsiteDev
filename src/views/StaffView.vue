<template>
<div class="staffpage">
<p class="darkBlueHeader spreadText">ALCHEMON STAFF</p>
    <div class="staff">
        <div class="holder boxShadow">
            <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/Cliff.png" alt="Cliff Cannon">
            <p class="darkBlueHeader">Clifford Cannon</p>
            <p class="darkBlueHeader">Co-Founder and CEO</p>
        </div>
        <div class="holder boxShadow">
            <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/Maxine.jpg" alt="Max Cannon">
            <p class="darkBlueHeader">Maxine Cannon</p>
            <p class="darkBlueHeader">Co-Founder and Designer</p>
        </div>
        <div class="holder boxShadow">
            <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/Jack.jpg" alt="Jack Stanley">
            <p class="darkBlueHeader">Jack Stanley</p>
            <p class="darkBlueHeader">President</p>
        </div>
        <div class="holder boxShadow">
            <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/Emily.jpg" alt="Borderless Capital">
            <p class="darkBlueHeader">Emily Stanley</p>
            <p class="darkBlueHeader">Chief Financial Officer</p>
        </div>
    </div>
<p class="darkBlueHeader spreadText">INVESTORS</p>
    <div class="staff">
        <a href="https://www.borderlesscapital.io/" target="blank" class="holder boxShadow">
            <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/borderless.png" alt="Borderless Capital">
            <p class="darkBlueHeader">Borderless Capital</p>
        </a>
        <a href="https://yieldly.finance/" target="blank" class="holder boxShadow">
            <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/yieldly.png" alt="Borderless Capital">
            <p class="darkBlueHeader">Yieldly</p>
        </a>
        <a href="https://www.pillar.vc/" target="blank" class="holder boxShadow">
            <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/pillar.png" alt="Borderless Capital">
            <p class="darkBlueHeader">Pillar</p>
        </a>
    </div>
</div>
</template>

<style lang="scss" scoped>
.staffpage {
    padding-top: 5%;
    background-image: linear-gradient(to left, #F2F2F2, #F8F8F8, #FFFFFF, #FFFFFF);
}
.staff {
    background-image: linear-gradient(to right, #007bff, #00bbff, #8ad1ff);
    display: inline-flex;
    flex-wrap: wrap;
}
.holder {
    background-color: white;
    margin: 3% auto;
    width: 40%;
    padding-bottom: 1%;
}
img {
    width: 90%;
}
p {
    text-align: center;
    font-weight: bold;
}

</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
