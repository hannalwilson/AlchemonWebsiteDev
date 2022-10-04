<template>
    <header><h1>DOWNLOAD VIDEO GAME</h1>
        <h3>STEP 10</h3></header>
    <p><i>Please read these instructions in full to ensure you can download and install the game
      properly.</i> <br><br>
      Requirements to play: <br><br>
      1. Wallet Connect access via Pera Algo Wallet
      <br>2. At least 3 unique Alchemon NFT Cards (here is the Alchemon NFT store: <router-link to="/store">https://alchemon.net/store</router-link>)
      <br><br>Due to the fact that this is not a finished game, some operating systems attempt to block the download and
      installation process, thinking that the game is a virus. You can feel free to run your own virus scan. We are in
      the process of becoming a verified publisher.
      <br><br>This game does not operate on mobile platforms, only laptops/desktops. Here are some tips for successfully
      downloading and installing the video game:
      <br><br>WINDOWS 10 USERS:<br>
      <br>1. If the file won't download, temporarily disable Windows Defender by following the instructions here: <a
        href="https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960"
        target="_blank">Turn off Defender Antivirus Protection in Windows 10 Security</a>
      <br>2. After you turn this off, the file should download with no issues. Once you open it, you may receive a
      "Windows protected your PC" warning. If that happens, click "More info" and then select "Run."
      <br>3. Turn Windows Defender back on.
      <br><br>WINDOWS 11 USERS:<br>
      <br>1. If the file won't download, temporarily disable Windows Defender by following the instructions here: <a
        href="https://allthings.how/how-to-enable-or-disable-microsoft-defender-in-windows-11/" target="_blank">How to
        Enable or Disable Microsoft Defender in Windows 11</a>
      <br>2. After you turn this off, the file should download with no issues. Once you open it, you may receive a
      "Windows protected your PC" warning. If that happens, click "More info" and then select "Run."
      <br>3. Turn Windows Defender back on.
      <br><br>MAC USERS:<br>
      <br>After the file downloads, right click the download and select open. The first time you try to open it, you just get a
    pop up warning that it can't be scanned for malicious files. However, if you right click on it a second time and select
    open from the pop up menu, the pop up will now display an open button that you are able to click and launch the game.
      <br><br>
      <strong>Click on the download button for your operating system</strong> (note: for Windows and Mac, you may also get notifications like “This download may not be safe,” which will require you
    to click “Keep” or “Download anyways”):
    </p>
    <a href="https://alch-executables.s3.amazonaws.com/AlchemonBetaSetup.exe" download>
      <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/pc.png" alt="Windows download"></a><br>
    <a href="https://alch-executables.s3.amazonaws.com/AlchemonBeta.zip" download>
      <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/mac.png" alt="Mac download">
    </a>
        <div class="buttonContainer">
            <router-link to="/getting-started-step-9"><button class="backButton directionButton">BACK</button></router-link>
        </div>
</template>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
header {
    margin-top: 6%;
}

 img {
    margin: 0;
 }
button {
    margin-bottom: 3%;
    margin-top: 2%;
    min-width: 20vw;
}

.buttonContainer {
    display: flex;
    justify-content: left;
    margin: 3%;
}

@media (max-width: 800px) {
    button {
        min-width: 35vw;
    }
}
</style>
