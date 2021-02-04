<template>
  <div class="balance">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    Account number: <input v-model="account" placeholder="account number" type="text">
    <button v-on:click="getData()">Get balance</button>
    <br>
    <br>
    {{ answer }}
  </div>
</template>

<script>
function getData() {
  if (this.account.length === 0) {
    this.answer ="All fields are required!";
  } else {
    this.$http.get('http://localhost:8082/getBalance',
        {
          params: {
            account: this.account
          }
        })
        .then(response => this.answer = response.data);
  }
}

export default {
  name: "Balance",
  data: function () {
    return {
      account: '',
      answer: ''
    }
  },
  methods: {
    getData: getData
  }
}

</script>

<style scoped>

</style>