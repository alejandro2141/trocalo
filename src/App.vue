<script setup >
import {  PATH_BANNER_IMG,BKND_CONFIG } from '../config.js'
import { RouterLink, RouterView } from 'vue-router'

import { useRoute } from 'vue-router'

import FilterForSearchViewMinimal from './components/FilterForSearchViewMinimal.vue'
import FilterForSearchView from './components/FilterForSearchView.vue'

const location = useRoute();

</script>

<template>

  <div class="" >
   
  <div class="m-0 p-0" >


   
    <div class="bg-dark p-0 m-0" >
     
  <!-- ALWAYS DISPLAY  d-flex flex-wrap justify-content-start -->     
  <div class="bg-dark d-flex align-content-start flex-wrap" >

      <div style="" class="d-flex align-content-start flex-wrap">
        <div>
            <RouterLink  style="font-size : 20px ; "  class="p-0 text-secondary"  :class="[ underline_search ? ' text-white' : 'bg-dark' ]"    to="Welcome">  
             <!--  <i style="color:#FFF ; font-size : 55px ;" class="bi bi-recycle"></i> -->
               
              
               <img  class="m-0" style="max-width: 320px;   " :src="PATH_BANNER_IMG+'/LogoBuscarREUSAR.png'" />
              <!-- 
               <br>
              <div style="font-size : 16px ;  margin-top: -20px; margin-left:10px">Intercambia, Reusa, Recicla</div>
              -->
              <div style="font-size : 14px ;  margin-top: -20px; margin-left:10px" class="text-warning">
                {{getWelcomeMessage()}} 
              </div>
            </RouterLink>

            
        </div>

        <div class="">
            <FilterForSearchViewMinimal @click="categoryToSearch=null" v-on:filterByText="filterByText"   :session_data="session_data"  />
        </div> 


        <!-- BANNER REGISTER -->
        <!--
        <div class=" bg-dark d-flex justify-content-center">
           
            <button @click="$router.push({ name: 'ViewRegister' })" type="button" class="btn btn-warning border border-white m-3 p-0"> 
              <img   class="mb-4" style="max-width: 50px; border-radius:0px;" :src="PATH_BANNER_IMG+'/Promotion/RegisterNow.png'" />
              <text style="font-size:20px">Registrarme</text>
            </button>
        
        </div>
        -->
        <!-- BANNER REGISTER --> 

        <div v-if="session_data==null &&  ($route.name == 'Welcome' || $route.name == 'mainView' )  ">
            &nbsp;&nbsp;
            
            <button  @click="$router.push({ name: 'ViewAboutReusar' })" type="button" style="border-radius: 10px 10px 10px 10px; background-color: rgb(59, 116, 109)"         class="mt-2 mb-4 p-1 border border-0 btn btn-secondary" > 
              &nbsp;&nbsp;
               <text class="" style="font-size:30px" >  <img :src="PATH_BANNER_IMG+'/AboutUs/TataTrueque.png'" style="width:40px;"> ¿Info? </text>
              &nbsp;&nbsp;
            </button> 
            
            &nbsp;&nbsp; &nbsp;&nbsp;

            <button  @click="$router.push({ name: 'ViewRegister' })" type="button" style="border-radius: 10px 10px 10px 10px; background-color:#C27E35 " class="mt-2 mb-4 p-0 border border-0 btn btn-warning p-1"> 
              &nbsp;&nbsp;
               <text style="font-size:30px" > Registro <img :src="PATH_BANNER_IMG+'/AboutUs/AbuelaCambalache.png'" style="width: 40px;"></text>
              &nbsp;&nbsp;
            </button>
        </div>


      </div>

     
      <!-- INVENTORY, RECEIVED, SENT -->
        <div v-if="session_data!=null && session_data.user!=null && $route.name != 'ViewSearch' " class="mt-0 pt-1 mb-4 d-flex justify-content-between  text-white" style="font-size : 20px ; width:350px" >
       
          <RouterLink   style="color:#B88B5C ; font-size : 45px ;"    class="p-2" :class="{'selected' : ( location.name  == 'ViewMyInventory') , 'nonselected' : ( location.name  != 'ViewMyInventory') }"  to="/ViewMyInventory">
              <div class="d-flex align-items-center flex-column" >
                <i class="bi bi-backpack3"></i> 
                <p style="font-size:16px ; " class="m-1" >Inventario</p> 
              </div>
          </RouterLink>   

            
            <RouterLink   style="color:#91D5FE ; font-size : 45px ;" class="p-2" :class="{'selected'  : ( location.name  == 'ViewProposalsReceived') , 'nonselected' : ( location.name  != 'ViewProposalsReceived')  }"  to="/ViewProposalsReceived">
              <div class="d-flex align-items-center flex-column" >
                <i class=" bi bi-cloud-download"></i>
                <p style="font-size:16px" class="m-1">Recibidas</p>
              </div>
            </RouterLink>    
            
            <RouterLink   style="color:#17C000 ; font-size : 45px ; " class="p-2" :class="{ 'selected' : ( location.name  == 'ViewProposalsSent') , 'nonselected' : ( location.name  != 'ViewProposalsSent')  }"   to="/ViewProposalsSent">
              <div class="d-flex align-items-center flex-column" >
                <i class=" bi bi-cloud-upload"></i>
                <p style="font-size:16px" class="m-1">Enviadas</p>
              </div>
            </RouterLink>    

        </div>

      <!--END SELECTION INVENTORY, RECEIVED, SENT -->

      <div class="d-none d-lg-inline-block" style="width:1200px; height:20px">
<!--
         <img  class="m-0" style="max-height: 170px; position: relative;top: -140px;  " :src="PATH_BANNER_IMG+'/MainBannerLargedevices.png'" />-->
      </div>

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
      <!-- <div>
        <FilterForSearchViewMinimal   v-on:filterByText="filterByText" v-on:filterByCategory="filterByCategory"  :session_data="session_data"  />        
      </div>
    -->
      <!-- END SEARCH FORM -->

  </div>

<!-- END PUBLIC  -->


<!-- PRIVATE SESSION -->

  <!-- PRIVATE HEADER  -->
      <div v-if="session_data!=null && session_data.user!=null" class=" d-flex justify-content-between text-white" style="font-size : 20px ">
            
          <!-- login icon -->
          <RouterLink  style="position:absolute ; top:0px ; right:0px "  class="text-secondary " :class="{'text-decoration-underline' :underline_account}"  to="/Viewlogin">
              <div class="bg-secondary  text-end" style="width:60px;height:50px; border-radius: 0px 0px 0px 100px;" > 
                <text class="text-white m-2" style="font-size:17px; text-transform: uppercase;" >{{ getNameLetters(session_data.user)}}</text>
              </div>
          </RouterLink> 
          
          
<!-- 
         <FilterForSearchViewMinimal  v-on:filterByText="filterByText" v-on:filterByCategory="filterByCategory"  :session_data="session_data"  />
-->
        <!--
          <div class="d-flex justify-content-center w-100">
            <RouterLink  style="font-size : 20px ; "  class="p-0 text-secondary"  :class="[ underline_search ? ' text-white' : 'bg-dark' ]"    to="/ViewSearch">  
              <i style="color:#FFF ; font-size : 55px ;" class="bi bi-recycle"></i> <text style="color:#FFF ; font-size : 45px ;"> REUSAR.CL</text>
            </RouterLink>   
          </div> 
        -->
        
          
      </div> 
   

<!-- PRIVATE  INVENTORY, RECEIVED, SENT , SHOW only when is not FOR SEARCH -->
<!--
    <div v-if="session_data!=null && session_data.user!=null && $route.name != 'ViewSearch' " class="mt-4 pt-2 mb-4 d-flex justify-content-between  text-white" style="font-size : 20px ; width:350px" >
   
   
      <RouterLink   style="color:#B88B5C ; font-size : 45px ;"    class="p-2" :class="{'selected' : ( location.name  == 'ViewMyInventory') , 'nonselected' : ( location.name  != 'ViewMyInventory') }"  to="/ViewMyInventory">
          <div class="d-flex align-items-center flex-column" >
            <i class="bi bi-backpack3"></i> 
            <p style="font-size:16px ; " class="m-1" >Inventario</p> 
          </div>
      </RouterLink>   

        
        <RouterLink   style="color:#91D5FE ; font-size : 45px ;" class="p-2" :class="{'selected'  : ( location.name  == 'ViewProposalsReceived') , 'nonselected' : ( location.name  != 'ViewProposalsReceived')  }"  to="/ViewProposalsReceived">
          <div class="d-flex align-items-center flex-column" >
            <i class=" bi bi-cloud-download"></i>
            <p style="font-size:16px" class="m-1">Recibidas</p>
          </div>
        </RouterLink>    
        
        <RouterLink   style="color:#17C000 ; font-size : 45px ; " class="p-2" :class="{ 'selected' : ( location.name  == 'ViewProposalsSent') , 'nonselected' : ( location.name  != 'ViewProposalsSent')  }"   to="/ViewProposalsSent">
          <div class="d-flex align-items-center flex-column" >
            <i class=" bi bi-cloud-upload"></i>
            <p style="font-size:16px" class="m-1">Enviadas</p>
          </div>
        </RouterLink>    

    </div>
  -->
<!-- END PRIVATE SESSION --> 
    
      <RouterView  v-on:sessionCreated="sessionCreated" :categoryToSearch="categoryToSearch" :textToSearch="textToSearch" :session_data='session_data' v-on:showCategory="showCategory" />
    
    </div>

  </div>
  
<!--
  <div  v-if="$route.name == 'mainView' || $route.name == 'Welcome' " style="position: fixed; bottom: 0px; width: 350px;" >
      <div class="d-flex justify-content-center">
          <a href="whatsapp://send?text=REUSAR.CL.%20Intercambia%2C%20reusa%2C%20recicla%20tus%20objetos%20en%20nuestra%20comunidad%20https%3A%2F%2Freusar.cl" data-action="share/whatsapp/share"><i style="font-size: 26px" class="bi bi-whatsapp text-success p-2"></i></a>
      </div>
  </div>
-->

  

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

.nonselected{
border-radius: 17px; 
border : solid ; 
border-color: #333 ;
}

.selected{

border-radius: 17px; 
border : solid ;  

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
          categoryToSearch : null , 

          
          welcomeMessage: ['¡Intercambia y paga solo el envío!' , 'El mejor lugar de Permutas de Chile' ,'Si algo te estorba, cambialo!','Puedes cambiar hasta tu suegra!','A puesto a que te cambiamos hasta el ánimo!','Permutamos hasta tu abuela!','Intercambia Objetos de forma segura!']  ,


        }
    },

    props: [],
    emits: [],

	created() {
		console.log("APP CREATED")
			},



  methods: {

    getWelcomeMessage()
    {
      let aux_rand =  Math.floor(Math.random() *  this.welcomeMessage.length );

      return this.welcomeMessage[aux_rand] 

    },

    showCategory(cat)
    {
      console.log("in APP category to show"+cat)
      this.categoryToSearch = cat 
      this.$router.push({ name: 'ViewSearch' })
    },

    getNameLetters(name)
    {
      let aux  = name.split(" ")
      let lettersName =   aux[0].charAt(0) + aux[0].charAt(1) + aux[0].charAt(2)
      return lettersName  
    },

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
           this.underline_search=true 


           if ( session_data!=null && session_data.objid !=null )
           {
            $router.push({ path: 'ViewObjectFromSocial', query: { id: session_data.objid } })
           }
           else 
           {
           this.$router.push('Welcome') 
           }


            
      },

      goToLogin()
      {
        this.session_data = null ; 
        this.$router.push('ViewLogin') 
      },




      },

  watch : {
/*
      $route (to, from)
      {
        //console.log("router changes : "+JSON.stringify(to) )
      } 
      */
    
       
}
}
</script>


