<template>
  <div class="transfer">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    Payer's account number: <input v-model="from" placeholder="account number" type="text">
    <br>
    <br>
    Receiver account number: <input v-model="to" placeholder="account number" type="text">
    <br>
    <br>
    Sum: <input v-model="money" placeholder="sum" type="text">
    <br>
    <br>
    <button v-on:click="transfer()">Do payment</button>
    <br>
    <br>
    {{answer}}
  </div>
</template>

<script>
function transfer(){
  if(this.from.length === 0 || this.to.length === 0 || this.money.length === 0){
    this.answer ="All fields are required!";
  } else {
    this.$http.put('http://localhost:8082/transfer', {}, {
      params: {
        from: this.from,
        to: this.to,
        money: this.money
      }
    })
        .then(response => this.answer = response.data)
    .catch(error => this.answer = error.response.data.message);
  }
}
export default {
  name: "Transfer",
  data: function () {
    return {
     from: '',
      to: '',
      money: '',
      answer: ''
    }
  },
  methods: {
    transfer: transfer
  }
}
</script>

<style scoped>

</style>