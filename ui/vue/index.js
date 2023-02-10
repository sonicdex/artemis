import walletConnect from './walletconnect.vue'

export default {
    register(app){
        app.component('artemisModal', walletConnect);
    }
}