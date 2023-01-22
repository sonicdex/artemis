<template>
  <div class="hello">
    <h1>Artemis IC Connector</h1>
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <button class="btn btn-info f18" @click="connectWallet('plug')"> Connect Plug </button>
        </div>
        <div class="col">
          <button class="btn btn-info f18" @click="connectWallet('stoic')"> Connect Stoic </button>
        </div>
        <div class="col">
          <button class="btn btn-info f18" @click="connectWallet('infinityswap')"> Connect infinityswap </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
        console.log(this.artemis) // 'hello'
  },
  emits: {

  },
  methods: {
    connectWallet:async function(wallet){
      var connectParams = { whitelist: [], host: "https://boundary.ic0.app/" }
     var s= await this.artemis[wallet].connectWallet(connectParams);
     console.log(s)
    }
  }
}
</script>

<style scoped>
button{
  font-size: 20px;
  padding: 10px 20px;
  background: lightseagreen;
  cursor: pointer;
}
</style>
