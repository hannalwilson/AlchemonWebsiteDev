<template>
    <header><h1>DOWNLOAD VIDEO GAME</h1></header>
    <slot></slot>
    <p><i>Please read these instructions in full to ensure you can download and install the game
      properly.</i> <br><br>
      Requirements to play:
      <ol>
        <li>Wallet Connect access via Pera Algo Wallet</li><br>
        <li>At least 3 unique Alchemon NFT Cards (here is the Alchemon NFT store: <router-link to="/store">https://alchemon.net/store</router-link>)</li>
      </ol>
      Due to the fact that this is not a finished game, some operating systems attempt to block the download and
      installation process, thinking that the game is a virus. You can feel free to run your own virus scan. We are in
      the process of becoming a verified publisher.
      <br><br>This game does not operate on mobile platforms, only laptops/desktops. Here are some tips for successfully
      downloading and installing the video game:
      <br><br>WINDOWS 10 USERS:<br>
      <ol>
        <li>If the file won't download, temporarily disable Windows Defender by following the instructions here: <a
        href="https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960"
        target="_blank">Turn off Defender Antivirus Protection in Windows 10 Security</a></li><br>
      <li>After you turn this off, the file should download with no issues. Once you open it, you may receive a
      "Windows protected your PC" warning. If that happens, click "More info" and then select "Run."</li>
      <br><li>Turn Windows Defender back on.</li>
      </ol>
      WINDOWS 11 USERS:<br>
    <ol>
        <li>If the file won't download, temporarily disable Windows Defender by following the instructions here: <a href="https://allthings.how/how-to-enable-or-disable-microsoft-defender-in-windows-11/" target="_blank">How to
            Enable or Disable Microsoft Defender in Windows 11</a></li><br>
        <li>After you turn this off, the file should download with no issues. Once you open it, you may receive a
            "Windows protected your PC" warning. If that happens, click "More info" and then select "Run."</li>
        <br>
        <li>Turn Windows Defender back on.</li>
    </ol>
      MAC USERS:<ol>
        <li>After the file downloads, right click the download and select "Open." You will get a pop-up stating the download can't be
            scanned for malicious files.</li><br>
    <li>Close out of the warning and right click the download a second time. Select "Open" from the pop up menu.</li><br>
    <li>You will get the same pop-up warning but now there will be an "Open" button. Select the "Open" button.</li>
      </ol>
      <strong>Click on the download button for your operating system</strong> (note: for Windows and Mac, you may also get notifications like “This download may not be safe,” which will require you
    to click “Keep” or “Download anyways”):
    </p>
    <a href="https://alch-executables.s3.amazonaws.com/AlchemonDesktopLauncher-v1.0.exe" download>
      <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/pc.png" alt="Windows download"></a><br>
    <a href="https://d2m0gpw5wl8vl6.cloudfront.net/patch/distributions/current/AlchemonOSXInstallerV1.0.4.dmg" download>
      <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/mac.png" alt="Mac download">
    </a>
    <h1><strong>ENJOY!</strong></h1><br>
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
    max-width: 90vw;
 }

ol {
    padding: 1% 5%;
}
</style>
