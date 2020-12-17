<template>
  <div class="walletconnect">
    <button class="enableEthereumButton" @click="clickWalletConnectBtn">Enable Ethereum</button>
  </div>
</template>

<script>

export default {
  name: 'WalletConnect',
  methods: {
    clickWalletConnectBtn: function () {
      this.$emit('connectWallet')
    }
  }
}
</script>
