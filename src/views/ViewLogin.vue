<script setup>
import { ref } from 'vue'
import ContactUsForm from '../components/ContactUsForm.vue' 
import UserData from '../components/UserData.vue' 
import RegisterForm from '../components/RegisterForm.vue' 
import LoginForm from '../components/LoginForm.vue' 



import axios from 'axios'
import VueAxios from 'vue-axios'

import { PATH_BANNER_IMG,BKND_CONFIG } from '../../config.js'

</script>


<template>
  <div class="w-100 position-absolute top-0 start-0 bg-dark ">

    <div class=" m-1 p-0 w-100" >
    <div class="" >
    <div  style="">
   
    <div v-if="session_data!=null && session_data.user!=null" class="text-center" >
       
        <div class="d-flex flex-row-reverse bd-highlight"> 
                <a @click="$router.push('Welcome')" type="button" class=""><i class="display-2 bi bi-x-lg text-white"></i></a>
        </div>
       
        <div style="height:10px"></div>

        <Transition> 
                <div v-if="showUserData">
                        <UserData v-on:restartSession="$emit('sessionCreated',null )" :session_data="session_data"/>
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
                
                <div class="mb-3" >
                    <label for="exampleInputEmail1" class="form-label">Ingrese su correo registrado y te enviaremos un email para cambiar tu  tu contraseña</label>
                    <input v-model="emailToRecover" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div v-if="showErrorEmail" class="text-danger">Revise su dirección de Correo</div>
                    
                    <div v-if="!showErrorEmail" id="emailHelp" class="">Enviaremos a su correo información para restablecer su contraseña</div>
                </div> 
                
                <button v-on:click="recoverPassword();  " type="button" class="btn btn-secondary">Si, Enviar a mi Correo</button>

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

    <LoginForm />


<!-- REGISTER FORM -->
            <div  v-if="!requestReceived" @click="showRegisterForm=!showRegisterForm; requestReceived=false" class="d-flex justify-content-center w-100">
                <small class="text-secondary">Registarme</small>
            </div>
            
            <div v-if='showRegisterForm' class="position-absolute top-0 start-0 bg-dark w-100 h-100">
              
                <div class="d-flex justify-content-end w-100 ">
                    <button @click="showRegisterForm=false" type="button" class="btn btn-secondary m-1 p-2">
                         <i  style="font-size:40px" class="p-2 m-0 bi bi-x-lg bg-secondary"></i> 
                    </button>
                </div>

            <div class="w-100 d-flex justify-content-center">
              <div style="width:350px" >
                <RegisterForm  />
              </div>
            </div>
            
            </div>
<!-- REGISTER FORM -->

     
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
       // showRecoverPassword : false ,


        showInsertEmail_Data : false, 
        showInsertEmail_password : false ,
        showRegisterForm : false ,

/*
        form_token:null ,
        form_email:null ,
        form_pass:null ,
        */

      //  login_message:"" ,
        requestReceived:null ,

        showUserData : true ,

        showSendInvitation: false ,
        emailToInvite : null ,

        isValidEmail : false ,

        showInvitationSent : false ,

        emailToRecover : null ,

        showErrorEmail : false ,
   
        }
    },

    props: ['session_data'],
    emits: ['sessionCreated'],

	created() {
		    console.log("Login Created")
        console.log("Login session_data:"+JSON.stringify(this.session_data))
			},

  methods: {

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


      },

  watch : {

        async emailToInvite(newval,oldval)
        {
        this.isValidEmail= await this.validateEmail(newval)
        }

      }
}
</script>


