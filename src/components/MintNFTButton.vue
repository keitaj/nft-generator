<template>
  <div class="mint-nft">
    <button class="mintNFTButton" @click="clickMintNFTButton">Mint</button>
  </div>
</template>

<script>

export default {
  name: 'MintNFTButton',
  methods: {
    clickMintNFTButton: function () {
      this.$emit('mintNFT')
    }
  }
}
</script>
