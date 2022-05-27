<template>
<div>
    <alchemon-cards v-for="card in cards"
    :key="card.assetId"
    :image="card.image"
    :id="card.id"
    :type="card.type"
    :minted="card.minted"
    >
    </alchemon-cards>
</div>
</template>

<script>
import AlchemonCards from './AlchemonCards.vue'

export default {
  components: {
    AlchemonCards
  },
  data () {
    return {
      cards: [
        {
          image: '75_araknadevil.png',
          id: '744540333',
          type: 'Insect, Earth, Water, Flying',
          minted: '2000'
        },
        {
          image: '74_torcydious.png',
          id: '744539419',
          type: 'Earth, Water',
          minted: '3000'
        },
        {
          image: '73_araknolyth.png',
          id: '744538073',
          type: 'Insect, Flying',
          minted: '3000'
        },
        {
          image: '72_incydious.png',
          id: '744536686',
          type: 'Earth',
          minted: '5000'
        },
        {
          image: '71_cydevil.png',
          id: '744535776',
          type: 'Earth',
          minted: '6500'
        },
        {
          image: '70_cyd.png',
          id: '744534630',
          type: 'Earth',
          minted: '8000'
        },
        {
          image: '69_torrment.png',
          id: '744533302',
          type: 'Water',
          minted: '5000'
        },
        {
          image: '68_torrden.png',
          id: '744532520',
          type: 'Water',
          minted: '6500'
        },
        {
          image: '67_torr.png',
          id: '744531764',
          type: 'Water',
          minted: '8000'
        },
        {
          image: '66_arakumo.png',
          id: '744530969',
          type: 'Insect',
          minted: '5000'
        },
        {
          image: '65_araku.png',
          id: '744530060',
          type: 'Insect',
          minted: '6500'
        },
        {
          image: '64_kumo.png',
          id: '744551347',
          type: 'Insect',
          minted: '8000'
        },
        {
          image: '63_monolyth.png',
          id: '744528583',
          type: 'Flying',
          minted: '5000'
        },
        {
          image: '62_golyth.png',
          id: '744527932',
          type: 'Flying',
          minted: '6500'
        },
        {
          image: '61_lyth.png',
          id: '744527019',
          type: 'Flying',
          minted: '8000'
        },
        {
          image: '60_cyclostorm.png',
          id: '527486409',
          type: 'Earth, Electric, Ice, Plant',
          minted: '2000'
        },
        {
          image: '59_chomperz.png',
          id: '527485015',
          type: 'Earth, Plant',
          minted: '3000'
        },
        {
          image: '58_voltstorm.png',
          id: '527483715',
          type: 'Electric, Ice',
          minted: '3000'
        },
        {
          image: '57_likachomp.png',
          id: '527481591',
          type: 'Plant',
          minted: '5000'
        },
        {
          image: '56_chomp.png',
          id: '509850827',
          type: 'Plant',
          minted: '6500'
        },
        {
          image: '55_lika.png',
          id: '490146814',
          type: 'Plant',
          minted: '8000'
        },
        {
          image: '54_daggerpult.png',
          id: '527479654',
          type: 'Earth',
          minted: '5000'
        },
        {
          image: '53_daggerz.png',
          id: '509848775',
          type: 'Earth',
          minted: '6500'
        },
        {
          image: '52_dagz.png',
          id: '493271743',
          type: 'Earth',
          minted: '8000'
        },
        {
          image: '51_hailstorm.png',
          id: '527477069',
          type: 'Ice',
          minted: '5000'
        },
        {
          image: '50_hailpuff.png',
          id: '509844088',
          type: 'Ice',
          minted: '6500'
        },
        {
          image: '49_puff.png',
          id: '490141855',
          type: 'Ice',
          minted: '8000'
        },
        {
          image: '48_zipacute.png',
          id: '527475282',
          type: 'Electric',
          minted: '5000'
        },
        {
          image: '47_zipadol.png',
          id: '509842608',
          type: 'Electric',
          minted: '6500'
        },
        {
          image: '46_zip.png',
          id: '490139078',
          type: 'Electric',
          minted: '8000'
        },
        {
          image: '45_venoreaper.png',
          id: '400926043',
          type: 'Earth, Ice, Insect, Psychic',
          minted: '150'
        },
        {
          image: '44_demoreaper.png',
          id: '400924498',
          type: 'Earth, Insect',
          minted: '250'
        },
        {
          image: '43_venafrost.png',
          id: '400920947',
          type: 'Ice, Psychic',
          minted: '250'
        },
        {
          image: '42_demolisher.png',
          id: '400894271',
          type: 'Earth',
          minted: '400'
        },
        {
          image: '41_demolite.png',
          id: '400891886',
          type: 'Earth',
          minted: '500'
        },
        {
          image: '40_demo.png',
          id: '395703386',
          type: 'Earth',
          minted: '600'
        },
        {
          image: '39_mantireaper.png',
          id: '400889657',
          type: 'Insect',
          minted: '400'
        },
        {
          image: '38_mantigrip.png',
          id: '400887826',
          type: 'Insect',
          minted: '500'
        },
        {
          image: '37_manti.png',
          id: '395702497',
          type: 'Insect',
          minted: '600'
        },
        {
          image: '36_frostbite.png',
          id: '400885791',
          type: 'Ice',
          minted: '400'
        },
        {
          image: '35_icesaber.png',
          id: '400883933',
          type: 'Ice',
          minted: '500'
        },
        {
          image: '34_sable.png',
          id: '395706101',
          type: 'Ice',
          minted: '600'
        },
        {
          image: '33_venatrix.png',
          id: '400878709',
          type: 'Psychic',
          minted: '400'
        },
        {
          image: '32_ventar.png',
          id: '400877134',
          type: 'Psychic',
          minted: '500'
        },
        {
          image: '31_vena.png',
          id: '395700430',
          type: 'Psychic',
          minted: '600'
        },
        {
          image: '30_shred-x.png',
          id: '337245090',
          type: 'Fire, Flying, Martial Arts, Water',
          minted: '25'
        },
        {
          image: '29_lavaslayer.png',
          id: '337244072',
          type: 'Fire, Flying',
          minted: '45'
        },
        {
          image: '28_slugginslash.png',
          id: '337243065',
          type: 'Martial Arts, Water',
          minted: '45'
        },
        {
          image: '27_lavatrix.png',
          id: '337239113',
          type: 'Fire',
          minted: '60'
        },
        {
          image: '26_igniter.png',
          id: '337238291',
          type: 'Fire',
          minted: '90'
        },
        {
          image: '25_iggy.png',
          id: '332018856',
          type: 'Fire',
          minted: '120'
        },
        {
          image: '24_drathslayer.png',
          id: '337233127',
          type: 'Flying',
          minted: '60'
        },
        {
          image: '23_drathula.png',
          id: '337231891',
          type: 'Flying',
          minted: '90'
        },
        {
          image: '22_drath.png',
          id: '332017894',
          type: 'Flying',
          minted: '120'
        },
        {
          image: '21_sluggernaut.png',
          id: '337230496',
          type: 'Martial Arts',
          minted: '60'
        },
        {
          image: '20_slugger.png',
          id: '337228921',
          type: 'Martial Arts',
          minted: '90'
        },
        {
          image: '19_slug.png',
          id: '332016564',
          type: 'Martial Arts',
          minted: '120'
        },
        {
          image: '18_archislash.png',
          id: '337226686',
          type: 'Water',
          minted: '60'
        },
        {
          image: '17_archicut.png',
          id: '337225085',
          type: 'Water',
          minted: '90'
        },
        {
          image: '16_arch.png',
          id: '332014800',
          type: 'Water',
          minted: '120'
        },
        {
          image: '15_psychosaurus.png',
          id: '315166675',
          type: 'Electric, Martial Arts, Psychic, Water',
          minted: '5'
        },
        {
          image: '14_shoctosaur.png',
          id: '313421275',
          type: 'Electric, Water',
          minted: '10'
        },
        {
          image: '13_psychomenice.png',
          id: '313419037',
          type: 'Martial Arts, Psychic',
          minted: '10'
        },
        {
          image: '12_flightning.png',
          id: '306191511',
          type: 'Electric',
          minted: '20'
        },
        {
          image: '11_shockner.png',
          id: '306190826',
          type: 'Electric',
          minted: '40'
        },
        {
          image: '10_bolt.png',
          id: '306190133',
          type: 'Electric',
          minted: '80'
        },
        {
          image: '9_troctosaur.png',
          id: '306189097',
          type: 'Water',
          minted: '20'
        },
        {
          image: '8_troctor.png',
          id: '306188337',
          type: 'Water',
          minted: '40'
        },
        {
          image: '7_troc.png',
          id: '306187531',
          type: 'Water',
          minted: '80'
        },
        {
          image: '6_miyamenice.png',
          id: '306186552',
          type: 'Martial Arts',
          minted: '20'
        },
        {
          image: '5_miyachu.png',
          id: '306184765',
          type: 'Martial Arts',
          minted: '40'
        },
        {
          image: '4_miya.png',
          id: '306183859',
          type: 'Martial Arts',
          minted: '80'
        },
        {
          image: '3_psychgeist.png',
          id: '306729637',
          type: 'Psychic',
          minted: '20'
        },
        {
          image: '2_gheistly.png',
          id: '306181364',
          type: 'Psychic',
          minted: '40'
        },
        {
          image: '1_gheist.png',
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
div {
  align-items: stretch;
}
alchemon-cards {
  width: 100vw;
}
</style>
