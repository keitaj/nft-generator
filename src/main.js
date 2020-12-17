import Vue from 'vue'
import App from './App.vue'

import detectEthereumProvider from '@metamask/detect-provider'
ethereumProvider();

async function ethereumProvider() {
  const provider = await detectEthereumProvider()

  if (provider) {
    console.log('Ethereum successfully detected!')
    // From now on, this should always be true:
    // provider === window.ethereum
    // Access the decentralized web!
  } else {
    // if the provider is not detected, detectEthereumProvider resolves to null
    console.error('Please install MetaMask!')
  }
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
