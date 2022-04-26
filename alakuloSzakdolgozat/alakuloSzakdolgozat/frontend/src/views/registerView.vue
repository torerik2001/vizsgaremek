<template>

  <div>
    <h1>Email</h1>
    <input type="email" v-model="data.email"/>
    <h1>jelszó</h1>
    <input type="password" v-model="data.password" />
    <h1>jelszó újra</h1>
    <input type="password" />
    <button @click="register()" class="btn btn-primary">Regisztráció</button>
  </div>

  
</template>

<script>
import dataservice from '../services/dataservice'

export default {
  data(){
    return{
      data:{
       
      }
    }
  },
  methods:{
    register(){
      console.log(this.data)
      dataservice.signup(this.data)
      .then()
      .catch()
    }
  }
}
 
    

</script>
