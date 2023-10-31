
<template>
  <div class="m-1 "  style="margin:0px; padding:0px;  width: 450px;">

    <div class=" d-flex justify-content-around">
        <RouterLink class="" to="/search">Buscar</RouterLink>
        <RouterLink v-if="session_data.user!=null"  class="" to="/login">{{session_data.user}}</RouterLink>
        <RouterLink v-else  class="" to="/login">Tu Cuenta</RouterLink>
    </div> 

  </div>
  <br>
  
  <RouterView v-on:sessionCreated="sessionCreated"   :session_data='session_data' />
 
</template>

<style scoped>

</style>




<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  
    data : function() {
        return {
          session_data : {}
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


