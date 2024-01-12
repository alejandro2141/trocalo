<script setup>
import { BKND_CONFIG } from '../config.js'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class=" m-1 p-0 w-100" >
  <div class="d-flex justify-content-center" >
   
    <div  style="width: 350px;">

      <div  v-if="session_data==null"  class="d-flex justify-content-between">
          
          
          <div>
          </div>
          
          <div>
          </div>

          <RouterLink style="" class='text-decoration-none'  @click="setUnderline(7)"  to="/ViewSearch"> 
            <i style="color:#EEEEEE ; font-size : 35px ;" class="bi bi-recycle"></i> <text style="color:#EEEEEE ; font-size : 35px ;">REUSAR.CL</text>

          </RouterLink>

          <RouterLink  class="" :class="{'text-decoration-underline' :underline_login}" @click="setUnderline(3)"  to="/ViewLogin"> 
              <i style="font-size:40px" class="bi bi-person-circle"></i>
          </RouterLink>
      </div>

      <div v-if="session_data!=null && session_data.user!=null" class=" d-flex justify-content-between text-white" style="font-size : 20px ">
          <div>
          </div>
          
          <div>
          </div>
          
          <RouterLink  style="font-size : 20px ; border-radius: 10px;"  class="p-0 text-secondary"  :class="[ underline_search ? ' text-white' : 'bg-dark' ]"  @click="setUnderline(1)"   to="/ViewSearch">  
            
            <div style="background-image: url('/public/Logo.png') ;  height: 150px; width: 200px;  background-repeat: no-repeat, no-repeat;" >

             
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-recycle" viewBox="0 0 16 16">
                  <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
                </svg>

            </div>
          </RouterLink>    


           <!-- <a href="/">Buscar</a>  :class="[isActive ? activeClass : '', errorClass]"  --> 
            <RouterLink   class="text-secondary mt-3" :class="{'text-decoration-underline' :underline_account}" @click="setUnderline(2)" to="/Viewlogin">{{session_data.user.split(" ")[0] }}</RouterLink> 
      </div> 
      
      <div v-if="session_data!=null && session_data.user!=null" class="mt-4 pt-2 mb-4 d-flex justify-content-between  text-white" style="font-size : 20px " >
      <!-- 
        <RouterLink   style="font-size : 45px ; border-radius: 10px;" class="p-2 text-secondary" :class="{'bg-success text-white'  :underline_inventory}" @click="setUnderline(4)" to="/ViewMyInventory">&nbsp;&nbsp;<i class="bi bi-backpack3"></i>&nbsp;&nbsp;</RouterLink>         
        <RouterLink   style="font-size : 45px ; border-radius: 10px;" class="p-0 text-secondary" :class="{'bg-success text-white' :underline_received}" @click="setUnderline(5)" to="/ViewProposalsReceived">&nbsp;&nbsp;<i class=" bi bi-cloud-download"></i>&nbsp;&nbsp;</RouterLink>    
        <RouterLink   style="font-size : 45px ; border-radius: 10px;" class="p-0 text-secondary" :class="{'bg-success text-white' :underline_sent}" @click="setUnderline(6)"  to="/ViewProposalsSent">&nbsp;&nbsp;<i class=" bi bi-cloud-upload"></i>&nbsp;&nbsp;</RouterLink>    
      --> 
        <RouterLink   style="color:#B88B5C ; font-size : 45px ; border-radius: 0px;" class="p-2" :class="{'border-bottom'  :underline_inventory}" @click="setUnderline(4)" to="/ViewMyInventory">&nbsp;&nbsp;<i class="bi bi-backpack3"></i>&nbsp;&nbsp;</RouterLink>         
        <RouterLink   style="color:#91D5FE ; font-size : 45px ; border-radius: 0px;" class="p-0" :class="{'border-bottom' :underline_received}" @click="setUnderline(5)" to="/ViewProposalsReceived">&nbsp;&nbsp;<i class=" bi bi-cloud-download"></i>&nbsp;&nbsp;</RouterLink>    
        <RouterLink   style="font-size : 45px ; border-radius: 0px;" class="p-0" :class="{ 'border-bottom' :underline_sent}" @click="setUnderline(6)"  to="/ViewProposalsSent">&nbsp;&nbsp;<i class=" bi bi-cloud-upload"></i>&nbsp;&nbsp;</RouterLink>    

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


