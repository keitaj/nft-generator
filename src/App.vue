<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <WalletConnectButton v-on:connectWallet="connectWallet()"/>
    <p>Account: {{ walletAccount }}</p>
  </div>
</template>

<script>
import WalletConnectButton from './components/WalletConnectButton.vue'

export default {
  name: 'App',
  data: function () {
    return {
      walletAccount: ''
    }
  },
  components: {
    WalletConnectButton
  },
  methods: {
    connectWallet: async function () {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      this.walletAccount = account;
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
