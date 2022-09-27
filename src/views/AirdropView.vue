<template>
    <div class="header">
        <h1>ALCHEGOLD AIRDROP<img src="https://alchemon-website-assets.s3.amazonaws.com/assets/alchegold.png" class="alchegold" /></h1>
    </div>
    <div class="description">
        <strong>Claim your free AlcheGold by filling out the form below!</strong>
    </div>
    <div class="formContainer">
        <form action="https://formspree.io/f/xgeqkngb" method="POST">
            <label>
                Name:
                <input type="text" name="name" required>
            </label><br><br>
            <label>
                Wallet Address:
                <input type="text" name="walletaddress">
            </label><br><br>
            <label>
                Email:
                <input type="email" name="email" required>
            </label><br><br>
            <!-- your other form fields go here -->
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
form {
    margin: 2%;
    text-align: right;
    display: inline-block;
}

img{
    max-width: 3vw;
    margin: 0;
}

.header {
    margin-top: 5%;
}
.description {
    margin: 2%;
}
</style>
