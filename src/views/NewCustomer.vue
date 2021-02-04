<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    First name: <input v-model="nameF" placeholder="first name" type="text">
    <br>
    <br>
    Last name: <input v-model="nameL" placeholder="last name" type="text">
    <br>
    <br>
    Social number: <input v-model="socialNr" placeholder="social number" type="text">
    <br>
    <br>
    Document number: <input v-model="docNr" placeholder="document number" type="text">
    <br>
    <br>
    Username: <input v-model="userName" placeholder="username" type="text">
    <br>
    <br>
    Password: <input v-model="password" placeholder="password" type="text">
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
function saveInJs() {
  if (this.nameF.length === 0 || this.nameL.length === 0 || this.socialNr.length === 0 || this.docNr.length === 0 || this.userName.length === 0 || this.password.length === 0) {
    this.answer = "All fields are required!";
  } else {
    this.$http.post('http://localhost:8082/newCustomer', {},
        {
          params: {
            nameF: this.nameF,
            nameL: this.nameL,
            socialNr: this.socialNr,
            docNr: this.docNr,
            userName: this.userName,
            password: this.password,
          }
        })
        .then (response => this.answer = response.data)
        .catch(error => this.answer = error.response.data.message);
  }
}
export default {
  name: 'NewCustomer',
  data: function () {
    return {
      nameF: '',
      nameL: '',
      socialNr: '',
      docNr: '',
      userName: '',
      password: '',
      answer: ''
    }
  },
  methods: {
    saveInHtml: saveInJs
  }
}
</script>
