<template>
  <div class="walletconnect">
    <button class="enableEthereumButton" @click="clickWalletConnectBtn">Enable Ethereum</button>
  </div>
</template>

<script>

export default {
  name: 'WalletConnectButton',
  methods: {
    clickWalletConnectBtn: function () {
      this.$emit('connectWallet')
    }
  }
}
</script>
