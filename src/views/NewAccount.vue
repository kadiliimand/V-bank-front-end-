<template>
  <div class="newAccount">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <br>
    Social number: <input v-model="socialNr" placeholder="social number" type="text">
    <br>
    <br>
    Account number: <input v-model="account" placeholder="account number" type="text">
    <br>
    <br>
    <br>
    <button v-on:click="saveInHtml()">Save</button>
    <br>
    <br>
    {{answer}}
  </div>
</template>

<script>
function newAccount(){
  if (this.socialNr.length === 0 || this.account.length === 0) {
    this.answer = "All fields are required!";
  } else {
    this.$http.put('http://localhost:8082/newAccount', {}, {
      params: {
        socialNr: this.socialNr,
        account: this.account
      }
    })
    .then (response => this.answer = response.data)
    .catch(error => this.answer = error.response.data.message);
  }
}
export default {
  name: "NewAccount",
  data: function (){
    return {
      socialNr: '',
      account: '',
      answer: ''
    }
  },
  methods: {
    saveInHtml : newAccount
  }
}
</script>

<style scoped>

</style>