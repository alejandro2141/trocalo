
<template>
  <div class="m-4 p-0"  style="width: 350px;">

    <div class=" d-flex justify-content-between text-white" style="font-size : 20px ">
        <!-- <a href="/">Buscar</a>-->
        <RouterLink  class="text-white"  to="/searchView">Buscar</RouterLink>    
        <RouterLink v-if="session_data.user!=null"  class="text-white" to="/login">{{session_data.user.split(" ")[0] }}</RouterLink>
        <RouterLink v-else  class="text-white" to="/login">Tu Cuenta</RouterLink>
    </div> 

    <div v-if="session_data!=null && session_data.user!=null" class="mt-2 d-flex justify-content-between  text-white" style="font-size : 20px " >
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
          session_data : {user:"Juan Alejandro Morales", pass:"eeee"}
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


