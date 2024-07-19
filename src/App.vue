<script setup >
import { BKND_CONFIG } from '../config.js'
import { RouterLink, RouterView } from 'vue-router'

import { useRoute } from 'vue-router'

import FilterForSearchViewMinimal from './components/FilterForSearchViewMinimal.vue'
import FilterForSearchView from './components/FilterForSearchView.vue'

const location = useRoute();



</script>

<template>

  <div class="" >
   
  <div class="m-0 p-0" >
    
   
    <div class="bg-dark p-0 m-0" style="width: 350px; top:0px">

     
  <!-- ALWAYS DISPLAY  -->     
          <div class="d-flex justify-content-center w-100">
            <RouterLink  style="font-size : 20px ; "  class="p-0 text-secondary"  :class="[ underline_search ? ' text-white' : 'bg-dark' ]"    to="Welcome">  
              <i style="color:#FFF ; font-size : 55px ;" class="bi bi-recycle"></i> <text style="color:#FFF ; font-size : 45px ;"> REUSAR.CL</text>
            </RouterLink>   
          </div> 
  <!-- END ALWAYS DISPLAY  -->
     
<!-- PUBLIC  -->
  <div v-if="session_data==null" >
      <div    class="d-flex justify-content-between">
          
        <!-- login icon -->
        <RouterLink  style="position:absolute ; top:0px ; right:0px " class="" :class="{'text-decoration-underline' :underline_login}"   to="/ViewLogin"> 
             <div class="bg-secondary text-end" style="width:60px;height:50px;border-radius: 0px 0px 0px 100px;" > 
                <i style="font-size:30px" class="bi bi-person-circle text-dark p-2"></i>
             </div>
        </RouterLink> 


      </div>

      <!-- SEARCH FORM -->
      <div>
        <FilterForSearchViewMinimal @click="$router.push({ name: 'ViewSearch' })"  v-on:filterByText="filterByText" v-on:filterByCategory="filterByCategory"  :session_data="session_data"  />        
      </div>
      <!-- END SEARCH FORM -->

  </div>

<!-- END PUBLIC  -->


<!-- PRIVATE SESSION -->

  <!-- PRIVATE HEADER  -->
      <div v-if="session_data!=null && session_data.user!=null" class=" d-flex justify-content-between text-white" style="font-size : 20px ">
            
          <!-- login icon -->
          <RouterLink  style="position:absolute ; top:0px ; right:0px "  class="text-secondary " :class="{'text-decoration-underline' :underline_account}"  to="/Viewlogin">
              <div class="bg-secondary  text-end" style="width:60px;height:50px; border-radius: 0px 0px 0px 100px;" > 
                <text class="text-dark  " style="font-size:17px" >{{session_data.user.split(" ")[0] }}</text>
              </div>
          </RouterLink> 
          
          

         <FilterForSearchViewMinimal v-on:filterByText="filterByText" v-on:filterByCategory="filterByCategory"  :session_data="session_data"  />

        <!--
          <div class="d-flex justify-content-center w-100">
            <RouterLink  style="font-size : 20px ; "  class="p-0 text-secondary"  :class="[ underline_search ? ' text-white' : 'bg-dark' ]"    to="/ViewSearch">  
              <i style="color:#FFF ; font-size : 55px ;" class="bi bi-recycle"></i> <text style="color:#FFF ; font-size : 45px ;"> REUSAR.CL</text>
            </RouterLink>   
          </div> 
        -->
        
          
      </div> 
    
<!-- PRIVATE  INVENTORY, RECEIVED, SENT -->

    <div v-if="session_data!=null && session_data.user!=null" class="mt-4 pt-2 mb-4 d-flex justify-content-between  text-white" style="font-size : 20px " >
     
        <RouterLink   style="color:#B88B5C ; font-size : 45px ;"    class="p-2" :class="{'selected' : ( location.name  == 'ViewMyInventory') }"  to="/ViewMyInventory">
          <div class="d-flex align-items-center flex-column" >
            <i class="bi bi-backpack3"></i> 
            <p style="font-size:16px ; " class="m-1" >Inventario</p> 
          </div>
        </RouterLink>         
        
        <RouterLink   style="color:#91D5FE ; font-size : 45px ;" class="p-2" :class="{'selected'  : ( location.name  == 'ViewProposalsReceived') }"  to="/ViewProposalsReceived">
          <div class="d-flex align-items-center flex-column" >
            <i class=" bi bi-cloud-download"></i>
            <p style="font-size:16px" class="m-1">Recibidas</p>
          </div>
        </RouterLink>    
        
        <RouterLink   style="color:#17C000 ; font-size : 45px ; " class="p-2" :class="{ 'selected' : ( location.name  == 'ViewProposalsSent') }"   to="/ViewProposalsSent">
          <div class="d-flex align-items-center flex-column" >
            <i class=" bi bi-cloud-upload"></i>
            <p style="font-size:16px" class="m-1">Enviadas</p>
          </div>
        </RouterLink>    

    </div>
<!-- END PRIVATE SESSION --> 
  
      <RouterView  v-on:sessionCreated="sessionCreated"  :textToSearch="textToSearch" :session_data='session_data' />
    
    
    
    
    
    </div>

  </div>

</div>
</template>

<style scoped>
body {
    overscroll-behavior: none 
}


a{
  text-decoration: none ;
  color : white
  /*transition: 0.4s;*/

}

.activeClass{
font-size: 50px ;
color:white

}

.nonActiveClass{
font-size:40px ;
color:white
}

.selected{
/*background-color  : #172F14*/
/*background-color  : #1F321D */
/* background-color  : #122810 */ 
/*background-color  : #063000 */

/*background-color  : #6c757d*/

background-color  : #111 ;
border-radius: 17px; 

}


</style>




<script>


export default {
  


    data : function() {
        return {
         // session_data : {user:"JAMO123", active:true , pass:"eeee", name:"Juan Alejandro Morales Miranda", rut:"139093712"  , phone1:"56975397200", phone2:"56975397200" , address_street:"Avenida San Pablo" , address_number:"123" , address_apartment:true , address_house:true ,  address_zone1:"Independencia" ,  address_zone2:"Region Metropolitana" ,  address_city:"Santiago" ,  address_country:"Chile"  } ,
          session_data : null ,
          underline_search:true,
          underline_account: false ,
          underline_login: false ,

          underline_inventory: false ,
          underline_received : false ,
          underline_sent : false ,

          textToSearch : null,


        }
    },

    props: [],
    emits: [],

	created() {
		console.log("APP CREATED")
			},



  methods: {

    filterByText(val)
    {
      console.log("search by text:"+val)
      //this.$router.push({ name: 'ViewSearch',  params: { textToSearch: val }    })
      this.$router.push({ name: 'ViewSearch' })
      this.textToSearch=val
    },

    

/*
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
    */

    sessionCreated(session_data)
      {
            console.log("IN APP sessionCreateda :"+JSON.stringify(session_data))
            /*
            this.session_data.user = session_data.user
            this.session_data.pass = session_data.pass
            */
           this.session_data = session_data ; 
           this.$router.push('ViewSearch') 
           this.underline_search=true 
            
      },

      goToLogin()
      {
        this.session_data = null ; 
        this.$router.push('ViewLogin') 
      },




      },

  watch : {

      $route (to, from)
      {
        console.log("router changes : "+to)
      } 
    
       
}
}
</script>


