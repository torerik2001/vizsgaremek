<template>
  <div>
    <h1>Email</h1>
    <input type="email" v-model="data.email"/>
    <h1>jelszó</h1>
    <input type="password" v-model="data.password"/>
    <div>
      <button class="btn btn-primary" @click="login()">Bejelentkezés</button>
    </div>
    
  </div>
  
</template>

<script>
import dataservice from "../services/dataservice";

export default {
  data() {
    return {
      data: {},
    };
  },
  methods: {
    login() {
      console.log(this.data);
      dataservice.login(this.data).then().catch();
    },
  },
};
</script>
