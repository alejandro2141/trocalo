<script setup>
import { ref } from 'vue'
import ContactUsForm from '../components/ContactUsForm.vue' 
import UserData from '../components/UserData.vue' 
import RegisterForm from '../components/RegisterForm.vue' 

import axios from 'axios'
import VueAxios from 'vue-axios'

import { BKND_CONFIG } from '../../config.js'
</script>



<template>
  <div class="w-100 position-absolute top-0 start-0 bg-dark ">

    <div class=" m-1 p-0 w-100" >
    <div class="d-flex justify-content-center" >
    <div  style="width: 350px;">

   
    <div v-if="session_data!=null && session_data.user!=null" class="text-center" >
       
        <div class="d-flex flex-row-reverse bd-highlight"> 
                <a @click="$router.push('Welcome')" type="button" class=""><i class="display-2 bi bi-x-lg text-white"></i></a>
        </div>
       
        <div style="height:10px"></div>
<!-- 
        <button  style="font-size:20px" type="button" class="btn btn-primary m-2 ">
          <text @click="showUserData=!showUserData" class="" style="border-radius:15px"  > 
             &nbsp;&nbsp;&nbsp;&nbsp; {{session_data.name}} (Tu)&nbsp;&nbsp;&nbsp;&nbsp;  
             <i class="bi bi-person-lines-fill"></i>
          </text>
        </button>
-->
        <Transition> 
                <div v-if="showUserData">
                        <UserData v-on:restartSession="$emit('sessionCreated',null )" :session_data="session_data"/>
                    
                        <!-- CHANGE MY DATA -->
                      <!--
                        <button style="font-size:20px" class="btn btn-secondary m-2 ">
                          <text @click="showInsertEmail_Data=!showInsertEmail_Data" class="" style="border-radius:15px"  > 
                              &nbsp;&nbsp;&nbsp;&nbsp; Modificar Mis Datos &nbsp;&nbsp;&nbsp;&nbsp; 
                              <i class="bi bi-person-lines-fill"></i>
                          </text>
                        </button>

                      -->
                        <hr>
                  </div>
        </Transition>    


        <!--  INSER EMAIL CHANGE DATA -->
        <div v-if="showInsertEmail_Data" class="position-absolute top-0 start-0 bg-dark w-100 ">
          <div class="d-flex justify-content-center w-100">

            <div> 

              <div class="d-flex justify-content-end">
                    <text @click="showInsertEmail_Data=false" type="button" class=""><i class="display-2 bi bi-x-lg text-white" ></i></text>
              </div>
             
            <div style="height:200px"></div>
                <text>Te enviaremos un link para modificar tus datos al correo actualmente registrado </text>
                
                <br><br>
                 <button  @click="showInsertEmail_Data=false"  type="button" class="btn btn-secondary">Si, enviar a mi correo</button>
                <!-- 
                <br>
                <input type="text" placeholder=" Ingresa tu correo aqui para modificar tus datos" v-model="email_changeData" style="text-align:center; font-size:20px ;border-radius:15px" class=" mt-1 bg-dark text-white border border-1 p-0" required minlength="4" maxlength="60" size="13" />
                -->
                <div style="height:1900px"></div>
            </div>

          </div>
        </div>
        <!--  INSER EMAIL CHANGE DATA -->
        

        <br>
         <!-- CHANGE MY DATA -->  

         <!-- CLOSE SESION -->
        <button  style="font-size:20px" type="button" class="btn btn-warning m-2 ">
          <text class="" style="" @click="$emit('sessionCreated',null ); " > 
            
              &nbsp;&nbsp;&nbsp;&nbsp; Cerrar Sesion &nbsp; Exit &nbsp;&nbsp;
              <i class="bi bi-door-open"></i> 
          </text>
        </button>
        <br>
         <!-- CLOSE SESION -->  



        <!-- CAMBIAR PASSWORD -->
        <button  style="font-size:20px"  type="button" class="btn btn-danger m-2"  >
          <text @click="showInsertEmail_password=!showInsertEmail_password" class="" style="border-radius:15px"  > 
            
            &nbsp;&nbsp;&nbsp;&nbsp; Cambiar Password  &nbsp;&nbsp;&nbsp;&nbsp;
            <i class="bi bi-key"></i>
          </text>
        </button>

        <!--  INSER EMAIL CHANGE PASSWORD -->
        <div v-if="showInsertEmail_password" class="position-absolute top-0 start-0 bg-dark w-100 ">
          <div class="d-flex justify-content-center w-100  ">

            <div> 

              <div class="d-flex justify-content-end">
                    <text @click="showInsertEmail_password=false" type="button" class=""><i class="display-2 bi bi-x-lg text-white" ></i></text>
              </div>
             
            <div style="height:200px"></div>
                <text>Te enviaremos un link para cambiar tu contraseña al correo actualmente registrado </text>
                
                <br><br>
                 <button  @click="showInsertEmail_password=false"  type="button" class="btn btn-secondary">Si, enviar a mi correo</button>
                <!-- 
                <br>
                <input type="text" placeholder=" Ingresa tu correo aqui para modificar tus datos" v-model="email_changeData" style="text-align:center; font-size:20px ;border-radius:15px" class=" mt-1 bg-dark text-white border border-1 p-0" required minlength="4" maxlength="60" size="13" />
                -->
                <div style="height:1900px"></div>
            </div>

          </div>
        </div>
        <!--  INSER EMAIL CHANGE PASSWORD -->

        <br>
         <!-- CAMBIAR PASSWORD -->  


        <!-- INVITATIONS TO OTHER USERS   -->
        
      <div v-if="session_data!=null  && session_data.invitations !=null && session_data.invitations > 0 ">
        <button  style="font-size:20px" type="button" class="btn btn-success m-2">
          <text @click="showSendInvitation=!showSendInvitation ; showInvitationSent=false" class="" style="border-radius:15px"  > 
            
            <!-- {{ session_data.invitations }} -->
            &nbsp;&nbsp;&nbsp;&nbsp;  Invitar a un amigo &nbsp;&nbsp;&nbsp;&nbsp;
            <i class="bi bi-people"></i>
          </text>
        </button>

       
         
            <div v-if="showSendInvitation" style="width: 300px;">
                <div class="mb-3" >
                  <br>
                  <p class="text-start">Envia una invitacion a tu amigo para unirse a nuestra comunidad de intercambios.</p>
                    <div class="d-flex justify-content-between">
                        <input v-model="emailToInvite" type="email" placeholder="Ingresa el correo de tu amigo"  class="form-control w-75" :class="{ 'border border-4 border-success': isValidEmail }" id="exampleInputEmail1" aria-describedby="emailHelp">
                    
                        <div v-if="isValidEmail" class="text-end">
                          <button v-on:click="sendInvitation(); showSendInvitation = false; requestReceived=true  " type="button" class="btn btn-success">  
                              Enviar
                            </button>
                        </div>
                    </div>
                  </div> 
            </div>


        </div>
        <div v-if="showInvitationSent" style="font-size: 20px;">
          <i class="bi bi-emoji-kiss"></i>  Invitacion enviada
        </div>

     
        <!-- END SEND INVITATIONS  -->

        <hr>
        <br>
        <br>

        <Transition> 
          <div class="" style="border-radius:15px; " >
            <ContactUsForm :session_data='session_data'  v-if="true" />
          </div>
          </Transition>    
        <div style="height:200px"></div>

    </div>

    <!-- SESION IS NULL SO SHOW LOGIN -->
    <div v-else>

      <div>
      
        
        <div class=" m-3 bg-dark" style=" border-radius: 15px;">

        <div class="d-flex justify-content-end">
          <a  @click="$router.push('Welcome')"  class="text-white"><i class="display-5 bi bi-x-lg"></i></a> 
        </div>
       
     
 <!-- LOGIN FORM --> 

            <div class="d-flex justify-content-center mt-5">
                    <div class=""  > 
                        <!--
                        <a HREF="/index.html" class="display-4 text-decoration-none" style="color :#2e5668"> 
                        <i class="bi bi-clipboard-pulse" style="font-size: 2rem; color: cornflowerblue;"></i>
                            horapo 
                        </a>
                        --> 
                        <a HREF="/nested/publicSearch.html" class="text-decoration-none" style="color :#2e5668"> 
                            <text class="display-4">REUSAR.CL</text>  
                        </a> 
                    
                        <div class="text-secondary">Lo tienes, lo quiero,  te lo cambio 
                        </div>
                    </div>
            </div>
		
         
            <div id="formLogin" class="mx-auto p-3"  style="width: 95%;">
                <form autocomplete="on" >
                   <input  v-model="form_token" id="form_token" name="form_token" type="hidden"  > 
                   <input class="form-control form-control-lg ml-2" v-model="form_email" id="form_email" name="form_email"  type="email" placeholder="Email" aria-label=".form-control-lg example"   style=" border-radius: 15px;" >
                   <br/>
                   <input class="form-control form-control-lg" v-model="form_pass" id="form_pass" name="form_pass"  type="password" placeholder="Contraseña" aria-label=".form-control-lg example"  style=" border-radius: 15px;" >
                    <br/> 

                    <i  type="submit" v-on:click="sendLogin()" class="btn  btn-lg btn-block text-white bg-secondary " style="width: 100%; border-radius: 15px;"  >
                      {{ login_message }} 
                      <i class="m-2 p-2 bi bi-arrow-right-square"></i> 
                    </i>
                </form>   
            </div>


<!-- REGISTER FORM -->
             <div  v-if="!requestReceived" @click="showRegisterForm=!showRegisterForm; requestReceived=false" class="d-flex justify-content-center w-100">
                <small class="text-secondary">Registarme</small>
             </div>
            
            <div v-if='showRegisterForm' class="position-absolute top-0 start-0 bg-dark w-100 h-100 d-flex justify-content-center ">
              
              <div style="width:350px" >
                <p  @click="showRegisterForm=false "  class="text-white text-end"><i class="display-5 bi bi-x-lg"></i></p> 
                <RegisterForm  />
              </div>
            
            </div>
<!-- REGISTER FORM -->

            <div  v-if="!requestReceived" @click="showRecoverPassword=!showRecoverPassword; requestReceived=false" class="m-4 text-secondary"><small>¿Olvidaste tu contraseña?</small></div>
 
            <div v-if="showRecoverPassword" style="width: 300px;">
                <div class="mb-3" >
                    <label for="exampleInputEmail1" class="form-label">Ingrese su correo registrado</label>
                    <input v-model="emailToRecover" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">Enviaremos a su correo registrado un link para actualizar su contraseña</div>
                </div> 
                
                <button v-on:click="recoverPassword(); showRecoverPassword = false; requestReceived=true  " type="button" class="btn btn-secondary">Recuperar</button>

             </div>

             <div v-if="requestReceived">
                Le enviaremos información para recuperar su cuenta.
             </div>
            
            <div class="m-5 p-5 ">
            </div>

        </div>		

      </div>
     




    </div>
    <!-- END SESSION IS NULL -->

  </div>
</div>
</div>
  
  </div>
</template>

<style>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  
  border-bottom:75px solid yellow;
}


</style>


<script>
//const showForm = ref(false)

export default {
  
    data : function() {
        return {
        user : null ,
        pass : null ,
        sendComments:false ,
        showMyInfo : false,
        showRecoverPassword : false ,


        showInsertEmail_Data : false, 
        showInsertEmail_password : false ,
        showRegisterForm : false ,

        form_token:null ,
        form_email:null ,
        form_pass:null ,

        login_message:"" ,
        requestReceived:null ,

        showUserData : true ,

        showSendInvitation: false ,
        emailToInvite : null ,

        isValidEmail : false ,

        showInvitationSent : false ,

        emailToRecover : false ,
       

        }
    },

    props: ['session_data'],
    emits: ['sessionCreated'],

	created() {
		    console.log("Login Created")
        console.log("Login session_data:"+JSON.stringify(this.session_data))
			},

  methods: {

    recoverPassword()
    {
      console.log("Recover Password "+ this.emailToRecover)

    },

    async validateEmail(input) {

          //var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          var validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$/ 

          if ( new String(input).match(validRegex)) {
            console.log("Valid email address! "+input);
            return true;
          } 
          else {
            console.log("Invalid email address! "+input);
            return false;
          }

        },

        async sendInvitation()
        {
          console.log("send Invitation")
          const json_request = {
                              session_data : this.session_data,
                              email : this.emailToInvite
                              }
          
          if (this.emailToInvite != null && this.session_data != null )
              {
                let json_response = await axios.post(BKND_CONFIG.BKND_HOST+"/private_send_invitation",json_request );
              }
            
              this.session_data.invitations -= 1 

              this.showInvitationSent=true

        },

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
                  
                  this.$emit('sessionCreated',session_data_result);
                  console.log("session data created:"+JSON.stringify( session_data_result) )
                  
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


           

        /*
          let session_data_result = {user:"JAMO123", active:true , pass:"eeee", name:"Juan Alejandro Morales Miranda", rut:"139093712"  , phone1:"56975397200", phone2:"56975397200" , address_street:"Avenida San Pablo" , address_number:"123" , address_apartment:true , address_house:true ,  address_zone1:"Independencia" ,  address_zone2:"Region Metropolitana" ,  address_city:"Santiago" ,  address_country:"Chile"  } 
        
            //query backend for login
            this.$emit('sessionCreated',session_data_result); 
            console.log("Login - Emit Sent")
          */
            //this.$router.push('/dashboard')

        }


      },

  watch : {

        async emailToInvite(newval,oldval)
        {
        this.isValidEmail= await this.validateEmail(newval)
        }

      }
}
</script>


