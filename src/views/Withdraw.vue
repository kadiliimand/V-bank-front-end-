<template>
  <div class="withdraw">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    Account number: <input v-model="account" placeholder="account number" type="text">
    <br>
    <br>
    Sum: <input v-model="money" placeholder="sum" type="text">
    <br>
    <br>
    <button v-on:click="withdrawMoney()">Do payment</button>
    <br>
    <br>
    {{answer}}
  </div>
</template>

<script>
function withdrawMoney(){
  if(this.account.length === 0|| this.money.length === 0){
    this.answer ="All fields are required!";
  } else {
    this.$http.put('http://localhost:8082/withdrawMoney', {}, {
          params: {
            account: this.account,
            money: this.money
    }})
        .then(response => this.answer = response.data)
        .catch(error => this.answer = error.response.data.message);
  }
}
export default {
  name: "Withdraw",
  data: function () {
    return {
      account: '',
      money: '',
      answer: ''
    }
  },
  methods: {
    withdrawMoney: withdrawMoney
  }
}
</script>

<style scoped>

</style>