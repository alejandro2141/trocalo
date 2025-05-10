<script setup>

import { ref } from 'vue'
import axios from 'axios'
import { PATH_BANNER_IMG,BKND_CONFIG } from '../../config.js'

</script>

<template>
<div class="w-100 bg-dark">
        
        <div class="d-flex justify-content-end w-100 ">
            <button @click="$router.push('Welcome')" type="button" class="btn btn-secondary m-1 p-2">
                 <i  style="font-size:40px" class="p-2 m-0 bi bi-x-lg bg-secondary"></i> 
            </button>
        </div>


        <div class="d-flex justify-content-center w-100" style=" width: 350px ">
            <div>
        
 <!-- ***************************************** -->    
 <!-- MAIN LOGIN FORM --> 
 <!-- ***************************************** --> 
      
                
            <img  class="m-0" style="max-width: 320px;   " :src="PATH_BANNER_IMG+'/LogoBuscarREUSAR.png'" />
              <!-- 
               <br>
              <div style="font-size : 16px ;  margin-top: -20px; margin-left:10px">Intercambia, Reusa, Recicla</div>
              -->
            <div style="font-size : 14px ;  margin-top: -20px; margin-left:10px" class="text-warning">
                Lo tienes, lo quiero,  te lo cambio
            </div>

         
            <div id="formLogin" class="mx-auto p-3"  style="width: 95%;">
                <form autocomplete="on" >

                   <input  v-model="form_token" id="form_token" name="form_token" type="hidden"  > 
                   <input class="form-control form-control-lg ml-2" v-model="form_email" id="form_email" name="form_email"  type="email" placeholder="Email" aria-label=".form-control-lg example"   style=" border-radius: 15px;" >
                   <br/>
                   <input class="form-control form-control-lg" v-model="form_pass" id="form_pass" name="form_pass"  type="password" placeholder="Contraseña" aria-label=".form-control-lg example"  style=" border-radius: 15px;" >
                    <br/> 

                    <i  type="submit" v-on:click="sendLogin()" class="btn  btn-lg btn-block text-white bg-primary" style="width: 100%; border-radius: 15px;font-size:25px"  >
                      {{ login_message }} 
                      <i class="m-2 p-2  bi bi-rocket-takeoff"></i> 
                    </i>
                </form>   
            </div>
 <!-- ***************************************** --> 
 <br>

            <div  v-if="!requestReceived" @click="showRecoverPassword=!showRecoverPassword; requestReceived=false" class="m-4 text-secondary">

                <div class="btn btn-success d-flex align-items-start m-2" style="border-radius: 15px;">
                     <img :src="PATH_BANNER_IMG+'/AboutUs/AbuelaCambalache.png'" style="width: 40px;">

                     <div class="p-2" style="font-size:20px">
                        ¿Olvidaste tu contraseña?</div>
                     </div>
            </div>

            <div v-if="showRecoverPassword" style="width: 300px;">
                <div class="mb-3" >
                    <label for="exampleInputEmail1" class="form-label">Ingrese su correo registrado</label>
                    <input v-model="emailToRecover" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div v-if="showErrorEmail" class="text-danger">Revise su dirección de Correo</div>
                    
                    <div v-if="!showErrorEmail" id="emailHelp" class="">Le enviaremos información para restablecer su contraseña</div>
                </div> 
                
                <button v-on:click="recoverPassword();  " type="button" class="btn btn-secondary">Recuperar</button>

             </div>

             <div v-if="requestReceived">
                En los próximos segundos recibirás un email con las instrucciones para cambiar tu contraseña. 
             </div>
            
           
        </div>   
        </div>   

</div>
</template>

<style scoped>
</style>


<script>

export default {
data: function () {

		return {

            form_token:null ,
            form_email:null ,
            form_pass:null ,

            showRecoverPassword : false ,
            login_message:"Ingresar " ,
			
		 }
	
    },

	props : ['session_data'],
  	emits : ['restartSession','sessionCreated'] ,

    created () {
       
        },
 
    methods: {

              async sendLogin()
        { 
            console.log("Login attemp user: "+this.form_email+" password:"+this.form_pass)
           const login_data = {
                              user : this.form_email,
                              pass : this.form_pass
                              }

          if (this.form_email != null && this.form_pass != null )
          {
                console.log("Sending to Login")
                let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_login_user",login_data );
                //console.log("Response Login : "+JSON.stringify(response_json ))

                let session_data_result = {} 
                if (response_json !=null && response_json.data !=null  )
                {
                  session_data_result.user = response_json.data.token
                  session_data_result.user =  response_json.data.names
                  session_data_result.name =  response_json.data.names
                  session_data_result.rut =  response_json.data.id_number
                  session_data_result.phone1 = response_json.data.phone
                  session_data_result.address_street =  response_json.data.address_street_name
                  session_data_result.address_number =  response_json.data.address_street_number
                  session_data_result.address_apartment =  response_json.data.address_street_apartment
                  session_data_result.address_zone1 =  response_json.data.address_location_zone
                  session_data_result.address_zone2 =  "No Set"
                  session_data_result.address_city  =  "No Set"
                  session_data_result.address_country =   "Chile"
                  session_data_result.token  =   response_json.data.token
                  session_data_result.id  =   response_json.data.id
                  session_data_result.invitations = response_json.data.invitations
                  

                //CHECK IF IS A LOGIN FORCED FROM SOCIALVIEWOBJECT
                   let objid= await this.getObjectIdFromSocial()
                   console.log("Object id from social:"+objid)
                   if (objid!=null)
                   {
                   session_data_result.objectid = objid ; 
                   }
                //***************************************************


                  this.$emit('sessionCreated',session_data_result);
                  console.log("session data created in LoginForm:"+JSON.stringify( session_data_result) )
                  
                }
                else 
                {
                  session_data_result = null 
                  this.login_message = "Login Fallido"
                }
                console.log("Login User Session Data : "+JSON.stringify(session_data_result))
           }
           else 
           {
            session_data_result = null 
          
            console.log("Login User Data NULL")
           }

        },

        async getObjectIdFromSocial()
          {
            const url = new URL(window.location.href);
            console.log("param URL url :"+url)
            var objid = url.searchParams.get("objid");
            if (objid != null  )
            {
              console.log("param URL objid:"+objid)
              return objid
            }
          },


    async recoverPassword()
    {
      console.log("Recover Password "+ this.emailToRecover+" validacion:"+await this.validateEmail(this.emailToRecover) ) 
     
      if (await this.validateEmail(this.emailToRecover))
      {
          const json_request = {
                  session_data : this.session_data,
                  email : this.emailToRecover
                              }
          
          if (this.emailToRecover != null  )
              {
                let json_response = await axios.post(BKND_CONFIG.BKND_HOST+"/private_send_recover_password",json_request );
              }

          this.showRecoverPassword = false 
          this.requestReceived=true 
          this.showInsertEmail_password = false     

      }
      else 
      {
        console.log("Desplegando error mensaje Formato Email")
        this.showErrorEmail = true
      }

    },

        async validateEmail(input) {

          //var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          var validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$/ 

          if ( new String(input).match(validRegex)) {
            console.log("Valid email address! "+input);
            return true;
          } 
          else {
            console.log("ERROR Invalid email address! "+input);
            return false;
          }

        },



      	},

        watch : {
        }
  

}
</script>

