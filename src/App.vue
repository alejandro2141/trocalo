
<template>
  <div class="m-4 p-0 "  style="width: 350px;">

    <div class=" d-flex justify-content-between text-white" style="font-size : 20px ">
        <!-- <a href="/">Buscar</a>-->
        <RouterLink  class="text-white" :class="{'text-decoration-underline' :underline_search}" @click="setUnderline(1)"   to="/searchView">Buscar</RouterLink>    
        <RouterLink v-if="session_data.user!=null"  class="text-white" :class="{'text-decoration-underline' :underline_account}" @click="setUnderline(2)" to="/login">{{session_data.user.split(" ")[0] }}</RouterLink>
        <RouterLink v-else  class="text-white"   :class="{'text-decoration-underline' :underline_login}" @click="setUnderline(3)"  to="/login">Tu Cuenta</RouterLink>
    </div> 
    
    <div v-if="session_data!=null && session_data.user!=null" class="mt-2 d-flex justify-content-between  text-white" style="font-size : 20px " >
      <RouterLink  class="text-white" :class="{'text-decoration-underline' :underline_inventory}" @click="setUnderline(4)" to="/MyInventory">Inventario</RouterLink>    
      <RouterLink  class="text-white" :class="{'text-decoration-underline' :underline_received}" @click="setUnderline(5)" to="/OfReceived">Recibidas</RouterLink>    
      <RouterLink  class="text-white" :class="{'text-decoration-underline' :underline_sent}" @click="setUnderline(6)"  to="/OfSent">Enviadas</RouterLink>    
    </div>
    
    <RouterView  v-on:sessionCreated="sessionCreated"   :session_data='session_data' />

  </div>


 
</template>

<style scoped>


a{
  text-decoration: none ;
  transition: 2.4s;

}




</style>




<script>
import { RouterLink, RouterView } from 'vue-router'


export default {
  
  components: {
    },

    data : function() {
        return {
          session_data : {user:"Juan Alejandro Morales", pass:"eeee"} ,
          
          underline_search:false,
          underline_account: false ,
          underline_login: false ,

          underline_inventory: false ,
          underline_received : false ,
          underline_sent : false ,

        }
    },

    props: [],
    emits: [],

	created() {
		console.log("APP CREATED")
			},



  methods: {

    setUnderline(val)
    {

      switch (val) {
          case 1:
            this.setUnderlineOff()
            this.underline_search=true
            break
          case 2:
            this.setUnderlineOff()
            this.underline_account=true
            break
          case 3:
            this.setUnderlineOff()
            this.underline_login=true
            break
          case 4:
            this.setUnderlineOff()
            this.underline_inventory=true
            break
          case 5:
            this.setUnderlineOff()
            this.underline_received =true
            break
          case 6:
            this.setUnderlineOff()
            this.underline_sent=true
            break
          default:
            //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
            break
        }


    },
    setUnderlineOff()
    {
        this.underline_search=false 
        this.underline_account= false 
        this.underline_login= false 
        this.underline_inventory= false 
        this.underline_received = false 
        this.underline_sent = false 
    },

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


