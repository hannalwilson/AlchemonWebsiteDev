<template>
  <div>
    <div class="whiteGrayBackground">
      <img src="../assets/alchedex.png" class="alchedex" />
      <p class="darkBlueHeader spreadText">ALCHEDEX</p>
    </div>
    <div class="cards">
      <p class="whiteText">
        View your Alchemon NFT Cards by entering your wallet address below!
      </p>
        <input
          type="text"
          id="text"
          class="darkGrayText_1 boxShadow"
          placeholder="  Enter wallet address"
          ref="address"
      />
      <button
        class="submitButton boxShadow"
        id="btn"
        @click="showNFTS"
      >Submit</button>
      <p class="whiteText">
        Add Alchemon NFT Card Assets to your wallet via Rand Gallery. Click the
        button then click "Add ASAs" in Rand Gallery & sign the transaction with
        MyAlgoWallet.
        <a
          href="https://www.randgallery.com/algo-collection/?address=306180273%2C306181364%2C306729637%2C306183859%2C306184765%2C306186552%2C306187531%2C+306188337%2C306189097"
          target="_blank"
          role="button"
          >#01-09</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=306190133%2C306190826%2C306191511%2C313419037%2C313421275%2C315166675%2C332014800%2C337225085%2C337226686"
          target="_blank"
          role="button"
          >#10-18</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=332016564%2C337228921%2C337230496%2C332017894%2C337231891%2C+337233127%2C332018856%2C337238291%2C337239113"
          target="_blank"
          role="button"
          >#19-27</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=337243065%2C337244072%2C337245090%2C395700430%2C400877134%2C400878709%2C395706101%2C400883933%2C400885791"
          target="_blank"
          role="button"
          >#28-36</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=395702497%2C400887826%2C400889657%2C395703386%2C400891886%2C400894271%2C400920947%2C400924498%2C400926043"
          target="_blank"
          role="button"
          >#37-45</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=490139078%2C509842608%2C527475282%2C490141855%2C509844088%2C527477069%2C493271743%2C509848775%2C527479654"
          target="_blank"
          role="button"
          >#46-54</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=490146814%2C509850827%2C527481591%2C527483715%2C527485015%2C527486409%2C744527019%2C744527932%2C744528583"
          target="_blank"
          role="button"
          >#55-63</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=744551347%2C744530060%2C744530969%2C744531764%2C744532520%2C744533302%2C744534630%2C744535776%2C744536686"
          target="_blank"
          role="button"
          >#64-72</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=744538073%2C744539419%2C744540333"
          target="_blank"
          role="button"
          >#73-75</a
        >
      </p>
      <p class="whiteText marginFix_2">
        Here are all released Alchemon NFT cards!:
      </p>
    <cards-grid></cards-grid>
    </div>
  </div>
</template>

<script>
import CardsGrid from '../components/CardsGrid.vue'

export default {
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    CardsGrid
  },
  methods: {
    showNFTS () {
      window.open('https://www.randgallery.com/algo-collection/?address=' + this.$refs.address.value + '&creator=alchemon')
    }
  },
  data () {
    return {
      card: [
        {
          image: '../assets/60_cyclostorm.png',
          id: '527486409',
          type: 'Earth, Electric, Ice, Plant',
          minted: '2000'
        },
        {
          image: '../assets/59_chomperz.png',
          id: '527485015',
          type: 'Earth, Plant',
          minted: '3000'
        },
        {
          image: '../assets/58_voltstorm.png',
          id: '527483715',
          type: 'Electric, Ice',
          minted: '3000'
        },
        {
          image: '../assets/57_likachomp.png',
          id: '527481591',
          type: 'Plant',
          minted: '5000'
        },
        {
          image: '../assets/56_chomp.png',
          id: '509850827',
          type: 'Plant',
          minted: '6500'
        },
        {
          image: '../assets/55_lika.png',
          id: '490146814',
          type: 'Plant',
          minted: '8000'
        },
        {
          image: '../assets/54_daggerpult.png',
          id: '527479654',
          type: 'Earth',
          minted: '5000'
        },
        {
          image: '../assets/53_daggerz',
          id: '509848775',
          type: 'Earth',
          minted: '6500'
        },
        {
          image: '../assets/52_dagz.png',
          id: '493271743',
          type: 'Earth',
          minted: '8000'
        },
        {
          image: '../assets/51_hailstorm.png',
          id: '527477069',
          type: 'Ice',
          minted: '5000'
        },
        {
          image: '../assets/50_hailpuff.png',
          id: '509844088',
          type: 'Ice',
          minted: '6500'
        },
        {
          image: '../assets/49_puff.png',
          id: '490141855',
          type: 'Ice',
          minted: '8000'
        },
        {
          image: '../assets/48_zipacute.png',
          id: '527475282',
          type: 'Electric',
          minted: '5000'
        },
        {
          image: '../assets/47_zipadol.png',
          id: '509842608',
          type: 'Electric',
          minted: '6500'
        },
        {
          image: '../assets/46_zip.png',
          id: '490139078',
          type: 'Electric',
          minted: '8000'
        },
        {
          image: '../assets/45_venoreaper.png',
          id: '400926043',
          type: 'Earth, Ice, Insect, Psychic',
          minted: '150'
        },
        {
          image: '../assets/44_demoreaper.png',
          id: '400924498',
          type: 'Earth, Insect',
          minted: '250'
        },
        {
          image: '../assets/43_venafrost.png',
          id: '400920947',
          type: 'Ice, Psychic',
          minted: '250'
        },
        {
          image: '../assets/42_demolisher.png',
          id: '400894271',
          type: 'Earth',
          minted: '400'
        },
        {
          image: '../assets/41_demolite.png',
          id: '400891886',
          type: 'Earth',
          minted: '500'
        },
        {
          image: '../assets/40_demo.png',
          id: '395703386',
          type: 'Earth',
          minted: '600'
        },
        {
          image: '../assets/39_mantireaper.png',
          id: '400889657',
          type: 'Insect',
          minted: '400'
        },
        {
          image: '../assets/38_mantigrip.png',
          id: '400887826',
          type: 'Insect',
          minted: '500'
        },
        {
          image: '../assets/37_manti.png',
          id: '395702497',
          type: 'Insect',
          minted: '600'
        },
        {
          image: '../assets/36_frostbite.png',
          id: '400885791',
          type: 'Ice',
          minted: '400'
        },
        {
          image: '../assets/35_icesaber.png',
          id: '400883933',
          type: 'Ice',
          minted: '500'
        },
        {
          image: '../assets/34_sable.png',
          id: '395706101',
          type: 'Ice',
          minted: '600'
        },
        {
          image: '../assets/33_venatrix.png',
          id: '400878709',
          type: 'Psychic',
          minted: '400'
        },
        {
          image: '../assets/32_ventar.png',
          id: '400877134',
          type: 'Psychic',
          minted: '500'
        },
        {
          image: '../assets/31_vena.png',
          id: '395700430',
          type: 'Psychich',
          minted: '600'
        },
        {
          image: '../assets/30_shred-x.png',
          id: '337245090',
          type: 'Fire, Flying, Martial Arts, Water',
          minted: '25'
        },
        {
          image: '../assets/29_lavaslayer.png',
          id: '337244072',
          type: 'Fire, Flying',
          minted: '45'
        },
        {
          image: '../assets/28_slugginslash.png',
          id: '337243065',
          type: 'Martial Arts, Water',
          minted: '45'
        },
        {
          image: '../assets/27_lavatrix.png',
          id: '337239113',
          type: 'Fire',
          minted: '60'
        },
        {
          image: '../assets/26_igniter.png',
          id: '337238291',
          type: 'Fire',
          minted: '90'
        },
        {
          image: '../assets/25_iggy.png',
          id: '332018856',
          type: 'Fire',
          minted: '120'
        },
        {
          image: '../assets/24_drathslayer.png',
          id: '337233127',
          type: 'Flying',
          minted: '60'
        },
        {
          image: '../assets/23_drathula.png',
          id: '337231891',
          type: 'Flying',
          minted: '90'
        },
        {
          image: '../assets/22_drath.png',
          id: '332017894',
          type: 'Flying',
          minted: '120'
        },
        {
          image: '../assets/21_sluggernaut.png',
          id: '337230496',
          type: 'Martial Arts',
          minted: '60'
        },
        {
          image: '../assets/20_slugger.png',
          id: '337228921',
          type: 'Martial Arts',
          minted: '90'
        },
        {
          image: '../assets/19_slug.png',
          id: '332016564',
          type: 'Martial Arts',
          minted: '120'
        },
        {
          image: '../assets/18_archislash.png',
          id: '337226686',
          type: 'Water',
          minted: '60'
        },
        {
          image: '../assets/17_archicut.png',
          id: '337225085',
          type: 'Water',
          minted: '90'
        },
        {
          image: '../assets/16_arch.png',
          id: '332014800',
          type: 'Water',
          minted: '120'
        },
        {
          image: '../assets/15_psychosaurus.png',
          id: '315166675',
          type: 'Electric, Martial Arts, Psychic, Water',
          minted: '5'
        },
        {
          image: '../assets/14_shoctosaur.png',
          id: '313421275',
          type: 'Electric, Water',
          minted: '10'
        },
        {
          image: '../assets/13_psychomenice.png',
          id: '313419037',
          type: 'Martial Arts, Psychic',
          minted: '10'
        },
        {
          image: '../assets/12_flightning.png',
          id: '306191511',
          type: 'Electric',
          minted: '20'
        },
        {
          image: '../assets/11_shockner.png',
          id: '306190826',
          type: 'Electric',
          minted: '40'
        },
        {
          image: '../assets/10_bolt.png',
          id: '306190133',
          type: 'Electric',
          minted: '80'
        },
        {
          image: '../assets/9_troctosaur.png',
          id: '306189097',
          type: 'Water',
          minted: '20'
        },
        {
          image: '../assets/8_troctor.png',
          id: '306188337',
          type: 'Water',
          minted: '40'
        },
        {
          image: '../assets/7_troc.png',
          id: '306187531',
          type: 'Water',
          minted: '80'
        },
        {
          image: '../assets/6_miyamenice.png',
          id: '306186552',
          type: 'Martial Arts',
          minted: '20'
        },
        {
          image: '../assets/5_miyachu.png',
          id: '306184765',
          type: 'Martial Arts',
          minted: '40'
        },
        {
          image: '../assets/4_miya.png',
          id: '306183859',
          type: 'Martial Arts',
          minted: '80'
        },
        {
          image: '../assets/3_psychgeist.png',
          id: '306729637',
          type: 'Psychic',
          minted: '20'
        },
        {
          image: '../assets/2_gheistly.png',
          id: '306181364',
          type: 'Psychic',
          minted: '40'
        },
        {
          image: '../assets/1_gheist.png',
          id: '306729637',
          type: 'Psychic',
          minted: '80'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.alchedex {
  width: 35%;
  margin-bottom: 0%;
}
.cards {
  padding: 1%;
  background-image: linear-gradient(to right, #007bff, #00bbff, #8ad1ff);
}
a {
  margin: 1%;
}
.submitButton {
  width: 20%;
  font-family: poppins;
  text-align: center;
  background-color: orange;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 1%;
}
.submitButton:hover {
  background-color:darkblue;
  border: 2px solid orange;
  color: orange;
}
#text {
  width: 50%;
  font-family: poppins;
  border: none;
  padding: 2%;
  font-weight: bold;
}
</style>
