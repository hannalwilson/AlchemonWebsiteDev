<template>
    <div>
        <div class="blueBackground">
            <img id="moveAnimation_1" src="../assets/news.png" alt="News Character">
        </div>
        <div class="roadmap">
            <p class="orangeHeader spreadText">JUNE 2022 UPDATE</p>
            <p>Hello Alcheholics,
                <br><br>
            </p>
            <p class="justifiedText">We have news & an updated roadmap for you. Due to the exploit we have had to
                increase security. Many of
                these have already been developed in response, but the only real solution is to migrate the game logic
                to a server, which we have been working on and making good progress. Until this is out in V1 we will
                continue to airdrop ALCH for wins. This migration was always on our radar, but we did not expect to have
                to do it until Q3 for PVP. It became abundantly clear that to allow people to cash out we will have to
                have this implemented.
                Another very important milestone for V1 has been to make V1 the last game download needed, so we can
                easily make patches & updates. This has taken a lot more time than expected, but it is a vital step to
                be considered a full game launch.
                <br><br>
                Mainly due to these two factors it has become clear we will not make the Q2 deadline for V1. So instead
                of pushing the whole release we have decided to release a Beta 2.0 which will have some of the new
                features of V1. This will allow users to play with their Set 5 cards sooner & also will have the 1st
                Community Set in it as well! It will also come with a new AlcheCoin rewards buff & implement the new
                Hunting Grounds rewards. Also, “ASA Attacks” have been rebranded to Alchebilities & will be included as
                well.
                <br><br>
                While we aren’t excited to share this news, we do want to let people know development is going well,
                there are considerable additions to the roadmap, & we are committed to keep building the right way. We
                have a ton of cool ideas & plans not included here.
                <br><br>
                Clifford (CEO), Hanna (CTO) & Forest (Lead Dev) will be doing an AMA with Algo Gaming Guild on Weds June
                15th at 3PM PST.
            </p>
            <p><br><br><strong>2022 Roadmap (Updated)</strong>
                <br><br>
                <u>Q2 (April-June)</u><br>
                Set 5 Launch<br>
                Website Refresh<br>
                Full Pera Wallet Connect
                <br><br>
                Alchemon Marketplace:<br>
                Sales Smart Contracts<br>
                Crafting Smart Contracts<br>
                Alchebility Sales<br>
                Art Sales
                <br><br>
                Launch Beta 2.0:<br>
                30 New Alchemon<br>
                Passive Abilities Tuned (Buffed)<br>
                AlcheCoin Rewards Increase<br>
                Hunting Grounds Implementation<br>
                Alchebilities in Game<br>
                XP & Leveling in Game (not evolutions)<br>
                <br><br>
                <u>Q3 (July-Sep)</u><br>
                AlcheCoin Governance Voting<br>
                Project Alchemist Launch<br><br>
                Launch Alchemon V1:<br>
                Last Version to Download<br>
                Migrate Game Logic to Server<br>
                Revamped Reward System with AlcheGold<br>
                Add Evolutions in Game<br>
                <br><br>
                <u>Q4 (Oct-Dec)</u><br>
                Land Presale<br>
                Release Alchemon V1.1<br>
                Implement PvP<br>
                Mobile Release (iOS & Android)<br>
                Alchemon Renting System<br>
                <br><br>
                <u>2023 (but hopefully sooner)</u><br>
                More Game Modes (Co-Op Boss Battles, Story Mode, etc.)<br>
                AlcheGold DeFi Launch<br>
                Alchemon Metaverse<br>
                <img class="zoomIn_1" src="../assets/map.png" alt="Roadmap">
            </p><br><br>
        </div>
        <div class="oldRoadmap">
            <p class="grayHeader spreadText">2022 ROADMAP</p>
            <p class="whiteText">Hello all my Alchemists!
                <br><br>
                Make sure you check out our new & improved <router-link to="/token">tokenomics</router-link> if you
                haven't yet!
            </p>
            <img class="zoomIn_1" src="../assets/token.png" alt="token">
            <p class="whiteText">I take pride in having the worst, least-detailed roadmaps in crypto, but here we are.
                The team & I
                pounded this out for you all so you know what we are focused on going into the future. The team is up to
                10 members!
                <br><br>
                Obviously these are target dates & rely on many moving parts so they are not set in stone, but we did
                our best to be conservative in our estimates. This is for major milestones & doesn't include a lot of
                surprises we have up our sleeves, other improvements we intend to make on Training/Hunting Grounds or
                Alchemon releases past Set 5. We assume we will work into some sort of regular Alchemon release cadence
                once V1 of the game is out.
            </p>
            <p class="whiteText"><br><br><strong>2022 Roadmap</strong>
                <br><br>
                Q1 (by end of March)<br>
                Set 4 part 2 release<br>
                Launch MVP(Beta) on TestNet & then MainNet<br>
                Attack ASAs Sales<br>
                <br><br>
                Q2 (April-June)<br>
                Revamped reward system with AlcheGold<br>
                Attack ASAs implemented in Game<br>
                Add XP, Leveling & Evolutions in game<br>
                Set 5<br>
                Launch Alchemon V1<br>
                <br><br>
                Q3 (July-Sep)<br>
                Project Alchemist<br>
                Implement PvP<br>
                Release Alchemon V1.1 update with PvP<br>
                Beta Alchemon Marketplace<br>
                AlcheCoin Governance Voting<br>
                <br><br>
                Q4 (Oct-Dec)<br>
                Full Alchemon Marketplace<br>
                Mobile Release (iOS & Android)<br>
                Alchemon Renting System<br>
                Land Presale<br>
                <br><br>
                2023 (but hopefully sooner):<br>
                More Game Modes (Co-Op Boss Battles, Story Mode, etc.)<br>
                AlcheGold DeFi Launch<br>
                Alchemon Metaverse
            </p><br><br>
        </div>
    </div>
</template>

<style lang="scss" scoped>

img {
    width: 50%;
}
.blueBackground {
    background-image: linear-gradient(to left, #007bff, #2A78F8, #4287F9, #89B4FB, #E7F0FE);
}
.oldRoadmap {
    background-color: #ffa500;
}
p{
    text-align: center;
}
.justifiedText {
    text-align: justify;
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
