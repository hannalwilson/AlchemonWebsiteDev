<template>
    <div>
        <button @click="getAlchecoinWallets">Get Wallets</button>
        <button @click="castVote('A')">VOTE A</button>
        <button @click="castVote('B')">VOTE B</button>
    </div>
</template>

<style lang="scss" scoped>
div {
    margin: 5%;
}
</style>

<script>
import { reactive } from 'vue'

const userBalances = reactive({})

export default {
  methods: {
    async getAlchecoinWallets () {
      const algosdk = require('algosdk')
      const token = ''
      const server = 'https://algoindexer.algoexplorerapi.io/'
      const port = ''
      const client = new algosdk.Indexer(token, server, port)

      // /indexer/javascript/SearchTransactionsPaging.js
      let nexttoken = ''
      let numtx = 1;
      // loop until there are no more transactions in the response
      // for the limit(max limit is 1000  per request)
      (async () => {
        const minAmount = 1
        const limit = 1000
        while (numtx > 0) {
          // execute code as long as condition is true
          const nextPage = nexttoken
          const response = await client.lookupAssetBalances(310014962)
            .limit(limit)
            .currencyGreaterThan(minAmount)
            .nextToken(nextPage).do()
          const transactions = response.balances
          numtx = transactions.length
          if (numtx > 0) {
            nexttoken = response['next-token']
            for (const key of transactions) {
              userBalances[key.address] = key.amount
            }
          }
        }
      })().catch(e => {
        console.log(e)
        console.trace()
      })
    },
    castVote (userVote) {
      const address = localStorage.userAddress
      const vote = userVote
      console.log(address, vote)
    }
  }
}
</script>
