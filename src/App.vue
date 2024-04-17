<script setup >
import { BKND_CONFIG } from '../config.js'
import { RouterLink, RouterView } from 'vue-router'

import { useRoute } from 'vue-router'
const location = useRoute();

</script>

<template>
  <div class=" m-1 p-0 w-100" >
   
  <div class="d-flex justify-content-center" >
   
    <div  style="width: 350px;">

      <div  v-if="session_data==null"  class="d-flex justify-content-between">
          

          
          <div>
          </div>
          
         
        <!--
          <RouterLink style="" class='text-decoration-none'    to="/ViewSearch"> 
            <i style="color:#EEEEEE ; font-size : 35px ;" class="bi bi-recycle"></i> <text style="color:#EEEEEE ; font-size : 35px ;">REUSAR.CL</text>
          </RouterLink>
        -->
        <div style="" class='text-decoration-none'    > 
          <a HREF="/" >  <i style="color:#EEEEEE ; font-size : 55px ;" class="bi bi-recycle"></i> <text style="color:#EEEEEE ; font-size : 45px ;">REUSAR.CL</text>
          </a>
          </div>


          <RouterLink  class="" :class="{'text-decoration-underline' :underline_login}"   to="/ViewLogin"> 
             <div class="bg-secondary text-end" style="width:60px;height:50px;border-radius: 0px 0px 0px 100px;" > 
                <i style="font-size:30px" class="bi bi-person-circle text-dark p-2"></i>
             </div>
          </RouterLink>
      </div>

      <div v-if="session_data!=null && session_data.user!=null" class=" d-flex justify-content-between text-white" style="font-size : 20px ">
          <div>
          </div>
          
          <div>
          </div>
          
          <RouterLink  style="font-size : 20px ; border-radius: 10px;"  class="p-0 text-secondary"  :class="[ underline_search ? ' text-white' : 'bg-dark' ]"    to="/ViewSearch">  
            <i style="color:#EEEEEE ; font-size : 35px ;" class="bi bi-recycle"></i> <text style="color:#EEEEEE ; font-size : 35px ;">REUSAR.CL</text>
          </RouterLink>    


           <!-- <a href="/">Buscar</a>  :class="[isActive ? activeClass : '', errorClass]"  --> 
            <RouterLink   class="text-secondary " :class="{'text-decoration-underline' :underline_account}"  to="/Viewlogin">
              <div class="bg-secondary  text-end" style="width:60px;height:50px; border-radius: 0px 0px 0px 100px;" > 
                <text class="text-dark m-1 " style="font-size:17px" >{{session_data.user.split(" ")[0] }}</text>
              </div>
             </RouterLink> 
      </div> 
      
      <div v-if="session_data!=null && session_data.user!=null" class="mt-4 pt-2 mb-4 d-flex justify-content-between  text-white" style="font-size : 20px " >
      <!-- 
        <RouterLink   style="font-size : 45px ; border-radius: 10px;" class="p-2 text-secondary" :class="{'bg-success text-white'  :underline_inventory}" @click="setUnderline(4)" to="/ViewMyInventory">&nbsp;&nbsp;<i class="bi bi-backpack3"></i>&nbsp;&nbsp;</RouterLink>         
        <RouterLink   style="font-size : 45px ; border-radius: 10px;" class="p-0 text-secondary" :class="{'bg-success text-white' :underline_received}" @click="setUnderline(5)" to="/ViewProposalsReceived">&nbsp;&nbsp;<i class=" bi bi-cloud-download"></i>&nbsp;&nbsp;</RouterLink>    
        <RouterLink   style="font-size : 45px ; border-radius: 10px;" class="p-0 text-secondary" :class="{'bg-success text-white' :underline_sent}" @click="setUnderline(6)"  to="/ViewProposalsSent">&nbsp;&nbsp;<i class=" bi bi-cloud-upload"></i>&nbsp;&nbsp;</RouterLink>    
      --> 
      <!-- 
        <RouterLink   style="color:#B88B5C ; font-size : 45px ; border-radius: 0px;" class="p-2" :class="{'border-bottom'  :underline_inventory}" @click="setUnderline(4)" to="/ViewMyInventory">&nbsp;&nbsp;<i class="bi bi-backpack3"></i>&nbsp;&nbsp;</RouterLink>         
      -->
        <RouterLink   style="color:#B88B5C ; font-size : 45px ;"    class="p-2" :class="{'selected' : ( location.name  == 'ViewMyInventory') }"  to="/ViewMyInventory">&nbsp;&nbsp;<i class="bi bi-backpack3"></i>&nbsp;&nbsp;</RouterLink>         
        <RouterLink   style="color:#91D5FE ; font-size : 45px ;" class="p-0" :class="{'selected'  : ( location.name  == 'ViewProposalsReceived') }"  to="/ViewProposalsReceived">&nbsp;&nbsp;<i class=" bi bi-cloud-download"></i>&nbsp;&nbsp;</RouterLink>    
        <RouterLink   style="font-size : 45px ; " class="p-0" :class="{ 'selected' : ( location.name  == 'ViewProposalsSent') }"   to="/ViewProposalsSent">&nbsp;&nbsp;<i class=" bi bi-cloud-upload"></i>&nbsp;&nbsp;</RouterLink>    

      </div>
      
      <RouterView  v-on:sessionCreated="sessionCreated"   :session_data='session_data' />

    </div>
    


  </div>
  </div>
</template>

<style scoped>


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

        }
    },

    props: [],
    emits: [],

	created() {
		console.log("APP CREATED")
			},



  methods: {
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


      },

  watch : {


    
        }
}
</script>


