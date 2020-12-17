<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <WalletConnectButton v-on:connectWallet="connectWallet()"/>
    <p>Account: {{ walletAccount }}</p>
    <MintNFTButton v-on:mintNFT="mintNFT()"/>
    <p>{{ counter }} minted</p>
  </div>
</template>

<script>
import WalletConnectButton from './components/WalletConnectButton.vue'
import MintNFTButton from './components/MintNFTButton.vue'

export default {
  name: 'App',
  data: function () {
    return {
      walletAccount: '',
      counter: 0
    }
  },
  components: {
    WalletConnectButton,
    MintNFTButton
  },
  methods: {
    connectWallet: async function () {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      this.walletAccount = account;
    },
    mintNFT: function () {

      // TODO env
      const contractAddress = '0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab';

      let len = 64;
      let str = Math.floor(Math.random() * Math.floor(99)).toString(16);
      let hexStr = "0".repeat(len - str.length) + str;

      //Sending Ethereum to an contract address
      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: this.walletAccount,
            to: contractAddress,
            data: '0xa0712d68' + hexStr,
            gasPrice: '0x09184e72a000'
          },
        ],
      })
      .then((txHash) => {
        console.log(txHash);
        this.counter += 1;
      })
      .catch((error) => console.error(error));
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
