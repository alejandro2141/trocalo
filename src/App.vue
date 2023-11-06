
<template>
  <div class="m-4 p-0"  style="width: 350px;">

    <div class=" d-flex justify-content-between">
        <!-- <a href="/">Buscar</a>-->
        <RouterLink  class="" to="/searchView">Buscar</RouterLink>    
        <RouterLink v-if="session_data.user!=null"  class="" to="/login">{{session_data.user}}</RouterLink>
        <RouterLink v-else  class="" to="/login">Tu Cuenta</RouterLink>
    </div> 

    <div v-if="session_data!=null && session_data.user!=null" class="d-flex justify-content-between" >
      <RouterLink  class="" to="/MyInventory">Inventario</RouterLink>    
      <RouterLink  class="" to="/OfReceived">Recibidas</RouterLink>    
      <RouterLink  class="" to="/OfSent">Enviadas</RouterLink>    
    </div>



    <RouterView  v-on:sessionCreated="sessionCreated"   :session_data='session_data' />
  </div>


 


 
 
</template>

<style scoped>

</style>




<script>
import { RouterLink, RouterView } from 'vue-router'


export default {
  
  components: {
    },

    data : function() {
        return {
          session_data : {user:"JUan Alejandro Morales", pass:"eeee"}
        }
    },

    props: [],
    emits: [],

	created() {
		console.log("APP CREATED")
			},



  methods: {
    sessionCreated(session_data)
        {
            console.log("IN APP sessionCreateda :"+JSON.stringify(session_data))
            this.session_data.user = session_data.user
            this.session_data.pass = session_data.pass
            
        },


      },

  watch : {
        }
}
</script>


