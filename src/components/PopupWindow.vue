<template>
    <div class="popup">
    <div class="popup-inner">
        <slot />
        <button class="boxShadow" @click="$emit('wallet', 'myalgo')">
        MyAlgo
        </button>
         <button class="boxShadow" @click="$emit('wallet', 'pera')">
        WalletConnect
        </button>
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
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
.popup-inner {
    background: #FFF;
    padding: 32px;
    z-index: 100;
}
button {
    font-family: poppins;
    text-align: center;
    background-color: orange;
  border: 2px solid orange;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    padding: 0 5%;
    margin: 2% 4%;
}
button:hover {
  background-color:darkblue;
  border: 2px solid orange;
  color: orange;
}
}
</style>
