<template>
  <div class="allCustomers">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <button v-on:click="getData()">Get report</button>
    <br>
    <br>
    <table border="1" align="center">
      <tr>
        <th>id</th>
        <th>first name</th>
        <th>last name</th>
        <th>social nr</th>
        <th>document nr</th>
        <th>account</th>
        <th>balance</th>
        <th>username</th>
        <th>password</th>
      </tr>
      <tr v-for="row in bank_customers">
        <td>{{row.idNr}}</td>
        <td>{{row.firstName}}</td>
        <td>{{row.lastName}}</td>
        <td>{{row.socialNr}}</td>
        <td>{{row.docNr}}</td>
        <td>{{row.account}}</td>
        <td>{{row.balance}}</td>
        <td>{{row.userName}}</td>
        <td>{{row.password}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
function getData () {
  this.$http.get('http://localhost:8082/allAccounts')
      .then(response => this.bank_customers = response.data)
      .catch(response => console.log(response));
}
export default {
  name: 'allCustomers',
  data: function () {
    return {
      bank_customers: []
    }
  },
  methods: {
    getData: getData
  }
}
</script>
