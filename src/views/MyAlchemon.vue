<template>
    <div>
        <div class="whiteGrayBackground">
            <img src="../assets/alchedex.png" class="alchedex" />
            <p class="darkBlueHeader spreadText">ALCHEDEX</p>
        </div>

        <!-- Bar containing all sort inputs -->
        <div class="cards">
            <div id="sort-bar">
                <select name="sortBy" id="select" v-model="sortBy" class="boxShadow">
                    <option value="alphabetically">Alphabetically</option>
                    <option value="number">Number</option>
                    <option value="set">Set</option>
                    <option value="rarity">Rarity</option>
                    <option value="type">Type</option>
                </select>
                <button @click="ascending = !ascending" class="sort-button boxShadow">
                    <i v-if="ascending">▲</i>
                    <i v-else>▼</i>
                </button>
                <input type="text" v-model="searchValue" placeholder="Search Alchemon" id="search-input"
                    class="boxShadow" />
                <i class="fa fa-search"></i>
            </div>

            <!-- Where the array of Cards get rendered as cards -->
            <div>
                <alchemon-cards v-for="card in filteredCards" :key="card.assetId" :name="card.name" :id="card.id"
                    :type="card.type" :minted="card.minted">
                </alchemon-cards>
            </div>
        </div>
    </div>
</template>

<script>
import AlchemonCards from '../components/AlchemonCards.vue'

let tempCards

export default {
  components: {
    AlchemonCards
  },
  data () {
    return {
      ascending: false,
      sortBy: 'number',
      searchValue: '',
      cards: [
        {
          name: 'Araknadevil',
          id: '744540333',
          type: 'Insect, Earth, Water, Flying',
          minted: '2000',
          set: 5,
          rarity: 1,
          number: 75
        },
        {
          name: 'Torcydious',
          id: '744539419',
          type: 'Earth, Water',
          minted: '3000',
          set: 5,
          rarity: 2,
          number: 74
        },
        {
          name: 'Araknolyth',
          id: '744538073',
          type: 'Insect, Flying',
          minted: '3000',
          set: 5,
          rarity: 2,
          number: 73
        },
        {
          name: 'Incydious',
          id: '744536686',
          type: 'Earth',
          minted: '5000',
          set: 5,
          rarity: 3,
          number: 72
        },
        {
          name: 'Cydevil',
          id: '744535776',
          type: 'Earth',
          minted: '6500',
          set: 5,
          rarity: 4,
          number: 71
        },
        {
          name: 'Cyd',
          id: '744534630',
          type: 'Earth',
          minted: '8000',
          set: 5,
          rarity: 5,
          number: 70
        },
        {
          name: 'Torrment',
          id: '744533302',
          type: 'Water',
          minted: '5000',
          set: 5,
          rarity: 3,
          number: 69
        },
        {
          name: 'Torrden',
          id: '744532520',
          type: 'Water',
          minted: '6500',
          set: 5,
          rarity: 4,
          number: 68
        },
        {
          name: 'Torr',
          id: '744531764',
          type: 'Water',
          minted: '8000',
          set: 5,
          rarity: 5,
          number: 67
        },
        {
          name: 'Arakumo',
          id: '744530969',
          type: 'Insect',
          minted: '5000',
          set: 5,
          rarity: 3,
          number: 66
        },
        {
          name: 'Araku',
          id: '744530060',
          type: 'Insect',
          minted: '6500',
          set: 5,
          rarity: 4,
          number: 65
        },
        {
          name: 'Kumo',
          id: '744551347',
          type: 'Insect',
          minted: '8000',
          set: 5,
          rarity: 5,
          number: 64
        },
        {
          name: 'Monolyth',
          id: '744528583',
          type: 'Flying',
          minted: '5000',
          set: 5,
          rarity: 3,
          number: 63
        },
        {
          name: 'Golyth',
          id: '744527932',
          type: 'Flying',
          minted: '6500',
          set: 5,
          rarity: 4,
          number: 62
        },
        {
          name: 'Lyth',
          id: '744527019',
          type: 'Flying',
          minted: '8000',
          set: 5,
          rarity: 5,
          number: 61
        },
        {
          name: 'Cyclostorm',
          id: '527486409',
          type: 'Earth, Electric, Ice, Plant',
          minted: '2000',
          set: 4,
          rarity: 1,
          number: 60
        },
        {
          name: 'Chomperz',
          id: '527485015',
          type: 'Earth, Plant',
          minted: '3000',
          set: 4,
          rarity: 2,
          number: 59
        },
        {
          name: 'Voltstorm',
          id: '527483715',
          type: 'Electric, Ice',
          minted: '3000',
          set: 4,
          rarity: 2,
          number: 58
        },
        {
          name: 'Likachomp',
          id: '527481591',
          type: 'Plant',
          minted: '5000',
          set: 4,
          rarity: 3,
          number: 57
        },
        {
          name: 'Chomp',
          id: '509850827',
          type: 'Plant',
          minted: '6500',
          set: 4,
          rarity: 4,
          number: 56
        },
        {
          name: 'Lika',
          id: '490146814',
          type: 'Plant',
          minted: '8000',
          set: 4,
          rarity: 5,
          number: 55
        },
        {
          name: 'Daggerpult',
          id: '527479654',
          type: 'Earth',
          minted: '5000',
          set: 4,
          rarity: 3,
          number: 54
        },
        {
          name: 'Daggerz',
          id: '509848775',
          type: 'Earth',
          minted: '6500',
          set: 4,
          rarity: 4,
          number: 53
        },
        {
          name: 'Dagz',
          id: '493271743',
          type: 'Earth',
          minted: '8000',
          set: 4,
          rarity: 5,
          number: 52
        },
        {
          name: 'Hailstorm',
          id: '527477069',
          type: 'Ice',
          minted: '5000',
          set: 4,
          rarity: 3,
          number: 51
        },
        {
          name: 'Hailpuff',
          id: '509844088',
          type: 'Ice',
          minted: '6500',
          set: 4,
          rarity: 4,
          number: 50
        },
        {
          name: 'Puff',
          id: '490141855',
          type: 'Ice',
          minted: '8000',
          set: 4,
          rarity: 5,
          number: 49
        },
        {
          name: 'Zipacute',
          id: '527475282',
          type: 'Electric',
          minted: '5000',
          set: 4,
          rarity: 3,
          number: 48
        },
        {
          name: 'Zipadol',
          id: '509842608',
          type: 'Electric',
          minted: '6500',
          set: 4,
          rarity: 4,
          number: 47
        },
        {
          name: 'Zip',
          id: '490139078',
          type: 'Electric',
          minted: '8000',
          set: 4,
          rarity: 5,
          number: 46
        },
        {
          name: 'Venoreaper',
          id: '400926043',
          type: 'Earth, Ice, Insect, Psychic',
          minted: '150',
          set: 3,
          rarity: 1,
          number: 45
        },
        {
          name: 'Demoreaper',
          id: '400924498',
          type: 'Earth, Insect',
          minted: '250',
          set: 3,
          rarity: 2,
          number: 44
        },
        {
          name: 'Venafrost',
          id: '400920947',
          type: 'Ice, Psychic',
          minted: '250',
          set: 3,
          rarity: 2,
          number: 43
        },
        {
          name: 'Demolisher',
          id: '400894271',
          type: 'Earth',
          minted: '400',
          set: 3,
          rarity: 3,
          number: 42
        },
        {
          name: 'Demolite',
          id: '400891886',
          type: 'Earth',
          minted: '500',
          set: 3,
          rarity: 4,
          number: 41
        },
        {
          name: 'Demo',
          id: '395703386',
          type: 'Earth',
          minted: '600',
          set: 3,
          rarity: 5,
          number: 40
        },
        {
          name: 'Mantireaper',
          id: '400889657',
          type: 'Insect',
          minted: '400',
          set: 3,
          rarity: 3,
          number: 39
        },
        {
          name: 'Mantigrip',
          id: '400887826',
          type: 'Insect',
          minted: '500',
          set: 3,
          rarity: 4,
          number: 38
        },
        {
          name: 'Manti',
          id: '395702497',
          type: 'Insect',
          minted: '600',
          set: 3,
          rarity: 5,
          number: 37
        },
        {
          name: 'Frostbite',
          id: '400885791',
          type: 'Ice',
          minted: '400',
          set: 3,
          rarity: 3,
          number: 36
        },
        {
          name: 'Icesaber',
          id: '400883933',
          type: 'Ice',
          minted: '500',
          set: 3,
          rarity: 4,
          number: 35
        },
        {
          name: 'Sable',
          id: '395706101',
          type: 'Ice',
          minted: '600',
          set: 3,
          rarity: 5,
          number: 34
        },
        {
          name: 'Venatrix',
          id: '400878709',
          type: 'Psychic',
          minted: '400',
          set: 3,
          rarity: 3,
          number: 33
        },
        {
          name: 'Ventar',
          id: '400877134',
          type: 'Psychic',
          minted: '500',
          set: 3,
          rarity: 4,
          number: 32
        },
        {
          name: 'Vena',
          id: '395700430',
          type: 'Psychic',
          minted: '600',
          set: 3,
          rarity: 5,
          number: 31
        },
        {
          name: 'Shred-X',
          id: '337245090',
          type: 'Fire, Flying, Martial Arts, Water',
          minted: '25',
          set: 2,
          rarity: 1,
          number: 30
        },
        {
          name: 'Lavaslayer',
          id: '337244072',
          type: 'Fire, Flying',
          minted: '45',
          set: 2,
          rarity: 2,
          number: 29
        },
        {
          name: 'Slugginslash',
          id: '337243065',
          type: 'Martial Arts, Water',
          minted: '45',
          set: 2,
          rarity: 2,
          number: 28
        },
        {
          name: 'Lavatrix',
          id: '337239113',
          type: 'Fire',
          minted: '60',
          set: 2,
          rarity: 3,
          number: 27
        },
        {
          name: 'Igniter',
          id: '337238291',
          type: 'Fire',
          minted: '90',
          set: 2,
          rarity: 4,
          number: 26
        },
        {
          name: 'Iggy',
          id: '332018856',
          type: 'Fire',
          minted: '120',
          set: 2,
          rarity: 5,
          number: 25
        },
        {
          name: 'Drathslayer',
          id: '337233127',
          type: 'Flying',
          minted: '60',
          set: 2,
          rarity: 3,
          number: 24
        },
        {
          name: 'Drathula',
          id: '337231891',
          type: 'Flying',
          minted: '90',
          set: 2,
          rarity: 4,
          number: 23
        },
        {
          name: 'Drath',
          id: '332017894',
          type: 'Flying',
          minted: '120',
          set: 2,
          rarity: 5,
          number: 22
        },
        {
          name: 'Sluggernaut',
          id: '337230496',
          type: 'Martial Arts',
          minted: '60',
          set: 2,
          rarity: 3,
          number: 21
        },
        {
          name: 'Slugger',
          id: '337228921',
          type: 'Martial Arts',
          minted: '90',
          set: 2,
          rarity: 4,
          number: 20
        },
        {
          name: 'Slug',
          id: '332016564',
          type: 'Martial Arts',
          minted: '120',
          set: 2,
          rarity: 5,
          number: 19
        },
        {
          name: 'Archislash',
          id: '337226686',
          type: 'Water',
          minted: '60',
          set: 2,
          rarity: 3,
          number: 18
        },
        {
          name: 'Archicut',
          id: '337225085',
          type: 'Water',
          minted: '90',
          set: 2,
          rarity: 4,
          number: 17
        },
        {
          name: 'Arch',
          id: '332014800',
          type: 'Water',
          minted: '120',
          set: 2,
          rarity: 5,
          number: 16
        },
        {
          name: 'Psychosaurus',
          id: '315166675',
          type: 'Electric, Martial Arts, Psychic, Water',
          minted: 5,
          set: 1,
          rarity: 1,
          number: 15
        },
        {
          name: 'Shoctosaur',
          id: '313421275',
          type: 'Electric, Water',
          minted: '10',
          set: 1,
          rarity: 2,
          number: 14
        },
        {
          name: 'Psychomenice',
          id: '313419037',
          type: 'Martial Arts, Psychic',
          minted: '10',
          set: 1,
          rarity: 2,
          number: 13
        },
        {
          name: 'Flightning',
          id: '306191511',
          type: 'Electric',
          minted: '20',
          set: 1,
          rarity: 3,
          number: 12
        },
        {
          name: 'Shockner',
          id: '306190826',
          type: 'Electric',
          minted: '40',
          set: 1,
          rarity: 4,
          number: 11
        },
        {
          name: 'Bolt',
          id: '306190133',
          type: 'Electric',
          minted: '80',
          set: 1,
          rarity: 5,
          number: 10
        },
        {
          name: 'Troctosaur',
          id: '306189097',
          type: 'Water',
          minted: '20',
          set: 1,
          rarity: 3,
          number: 9
        },
        {
          name: 'Troctor',
          id: '306188337',
          type: 'Water',
          minted: '40',
          set: 1,
          rarity: 4,
          number: 8
        },
        {
          name: 'Troc',
          id: '306187531',
          type: 'Water',
          minted: '80',
          set: 1,
          rarity: 5,
          number: 7
        },
        {
          name: 'Miyamenice',
          id: '306186552',
          type: 'Martial Arts',
          minted: '20',
          set: 1,
          rarity: 3,
          number: 6
        },
        {
          name: 'Miyachu',
          id: '306184765',
          type: 'Martial Arts',
          minted: '40',
          set: 1,
          rarity: 4,
          number: 5
        },
        {
          name: 'Miya',
          id: '306183859',
          type: 'Martial Arts',
          minted: '80',
          set: 1,
          rarity: 5,
          number: 4
        },
        {
          name: 'Psychgeist',
          id: '306729637',
          type: 'Psychic',
          minted: '20',
          set: 1,
          rarity: 3,
          number: 3
        },
        {
          name: 'Gheistly',
          id: '306181364',
          type: 'Psychic',
          minted: '40',
          set: 1,
          rarity: 4,
          number: 2
        },
        {
          name: 'Gheist',
          id: '306729637',
          type: 'Psychic',
          minted: '80',
          set: 1,
          rarity: 5,
          number: 1
        }
      ]
    }
  },
  computed: {
    filteredCards () {
      tempCards = this.cards

      // Process search input
      if (this.searchValue !== '' && this.searchValue) {
        tempCards = tempCards.filter((item) => {
          return item.name
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())
        })
      }

      // Sort by alphabetical order
      // eslint-disable-next-line array-callback-return
      tempCards = tempCards.sort((a, b) => {
        if (this.sortBy === 'alphabetically') {
          const fa = a.name.toLowerCase()
          const fb = b.name.toLowerCase()

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0

          // Sort by set
        } else if (this.sortBy === 'set') {
          const fa = a.set
          const fb = b.set

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0
        // Sort by set
        } else if (this.sortBy === 'number') {
          const fa = a.number
          const fb = b.number

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0
          // Sort by rarity
        } else if (this.sortBy === 'rarity') {
          const fa = a.rarity
          const fb = b.rarity

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0
        }
      })

      // Show sorted array in descending or ascending order
      if (!this.ascending) {
        tempCards.reverse()
      }

      return tempCards
    }
  }
}
</script>

<style lang="scss" scoped>

.alchedex {
    width: 35%;
    margin-bottom: 0%;
}

alchemon-cards {
    width: 100vw;
}

#sort-bar {
  margin-left: 10px;
  flex-wrap: wrap;
  padding: 10px;
}

#ascending-icon {
  height: 30px;
  height: 100%;
  width: 30px;
}

#select, .sort-button {
    font-family: poppins;
    text-align: center;
    background-color: orange;
    border: 2px solid orange;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    margin: 1%;
    font-size: inherit;
    padding: 2%;

    &:hover{
          background-color:darkblue;
          color: orange;
    }
}

#search-input {
  width: 50%;
    font-family: poppins;
    border: none;
    padding: 2%;
    font-weight: bold;
    margin-left: 2%;
}

.cards {
    padding: 1%;
    background-image: linear-gradient(to right, #007bff, #00bbff, #8ad1ff);
}

.sortAscending {
    background-image: url('../assets/up-arrow.png');
    width: 100em;
}

.sortDescending {
    background-image: url('../assets/up-arrow.png');
}
</style>
