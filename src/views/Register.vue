<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    First name: <input v-model="person.nameF" placeholder="first name" type="text">
    <br>
    <br>
    Last name: <input v-model="person.nameL" placeholder="last name" type="text">
    <br>
    <br>
    Social number: <input v-model="person.socialNr" placeholder="social number" type="text">
    <br>
    <br>
    Document number: <input v-model="person.docNr" placeholder="document number" type="text">
    <br>
    <br>
    Username: <input v-model="person.username" placeholder="username" type="text">
    <br>
    <br>
    Password: <input v-model="person.password" placeholder="password" type="text">
    <br>
    <br>
    <br>
    <button v-on:click="saveInHtml()">Save</button>
    <br>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src

let saveInJs = function () {
  this.$http.post('http://localhost:8082/newCustomer', this.person);
  alert('Welcome!')
}
export default {
  name: 'Register',
  components: {},
  data: function () {
    return {
      person: {}
    }
  },
  methods: {
    saveInHtml: saveInJs
  },
  mounted() {
    this.getData();
  }
}
</script>
