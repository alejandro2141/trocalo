<script setup>
import { ref } from 'vue'
import RegisterForm from '../components/RegisterForm.vue' 
import { BKND_CONFIG } from '../../config.js'
</script>


<template>
  <div class="w-100 position-absolute top-0 start-0 bg-dark " style="">

    <div class="d-flex justify-content-end">
      <button type="button" @click="$router.push({ name: 'Welcome' })" class="btn btn-secondary"> <i class="bi bi-x-lg display-1" ></i> </button>
    </div>
    

    <div class="w-100 d-flex justify-content-center">
        <RegisterForm  />
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

        emailToRecover : null ,
   
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
                  

                //CHECK IF IS A LOGIN FORCED FROM SOCIALVIEWOBJECT
                   let objid= await this.getObjectIdFromSocial()
                   console.log("Object id from social:"+objid)
                   if (objid!=null)
                   {
                   session_data_result.objectid = objid ; 
                   }
                //***************************************************


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


