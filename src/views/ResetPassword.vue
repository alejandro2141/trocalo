<script setup>
import { ref } from 'vue'
import RegisterForm from '../components/RegisterForm.vue' 
import { BKND_CONFIG } from '../../config.js'

import axios from 'axios'

</script>


<template>
  

  <div class="w-100 bg-dark d-flex justify-content-center" style="">
    <div v-if="!showSuccess">
        Formulario para actualizar su contraseña.<br>
        Este link solo será valido por 30 minutos.   
  <form >
        <br>

      <div class="bg-dark d-flex justify-content-start m-2 p-2" >
        <div style="width:300px" class="">

            <div>
                <label for="fname">Ingrese su Email</label><br>
                <input type="text" class="form-control" id="email"  v-model="email" name="email" placeholder="@" ><br>
                <text class="text-warning " v-if="valid_email!=3 "> Email inválido <br> </text>
            </div>

            <div class="form-group  " >

                <div>
                        <div class=" m-1 ">
                            <label for="passwd">Ingrese contraseña </label>
                            <input :type="type_password1"  autocomplete="off" class="form-control border-2" :class="[{ 'border-success' : (valid_passwd==1)},{'border-danger' : (passwd != passwd2 && passwd2!=null)},{ 'border-danger' : (valid_passwd==1)}]"  placeholder="***" id="inputPassword4"  v-model="passwd">
                        </div>
                </div>
                
                <div class=" m-1 ">
                         <label >Repita contraseña</label> 
                         <input :type="type_password1"  autocomplete="off" class="form-control border-2" :class="[{ 'border-success' : (valid_passwd==1)},{'border-danger' : (passwd != passwd2 && passwd2!=null)   },{ 'border-danger' : (valid_passwd==1)}]" placeholder="***" id="inputPassword2"  v-model="passwd2">
                </div>
                
                <div class="mt-4 ml-2">
                        <i @click="showMePassword1()" style="font-size:30px" class="bi" :class="{ 'bi-eye-slash': !showPassword1 , 'bi-eye': showPassword1   }" > </i>
                </div>
               
                    
          </div>

        </div> 
      </div>

  </form>
  
  <br>
  
        <button @click="sendPasswd()" type="button" class="btn btn-success">Actualizar Contraseña</button>

          <div v-if="showError" class="text-danger" >

              {{ShowErrorMessage}}

          </div>

        




  </div>

  <div v-if="showSuccess" class="text-success" >

              <i class="bi bi-check-square" style="font-size:40px"></i>
              <br>
              Su contraseña ha sido modificada.
              <br>
              <button @click="$router.push('ViewLogin')"  type="button" class="btn btn-secondary">Ir a login</button>


          </div>


  
 </div>


</template>

<style>

</style>


<script>
//const showForm = ref(false)

export default {
  
    data : function() {
        return {
          email : "" ,
          valid_email : 1, 
          
          passwd  : null ,
          passwd2  : null ,
          valid_passwd : 0,

          showPassword1 : false ,
          type_password1 : "password" ,

          showError : false ,
          ShowErrorMessage : "No Set" , 

          showSuccess : false ,
          

        }
    },

    props: [''],
    emits: [''],

	created() {
		 	},

  methods: {

    async sendPasswd()
    {
      console.log("send New Password : "+this.passwd+"   email:"+this.email)

      const json = { 
                   email : this.email,
                   passwd  : this.passwd,
                   };
        //app.config.globalProperties.dbhost = 'http://192.168.0.114:8080' ;       
        console.log ("send Reset Password  REQUEST :"+ JSON.stringify(json)  );
        let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_reset_password",json );
        console.log ("private_reset_password RESPONSE:"+JSON.stringify(response_json.data)) ;

        if (response_json.data.error)
        {
          this.showError = true ;
          this.ShowErrorMessage = "Error al intentar procesar su requerimiento"

        }
        else 
        {
          this.showError = false  ;
          this.showSuccess = true ; 
        }



    },

    showMePassword1()
    {
    this.showPassword1= !this.showPassword1  

        if ( this.showPassword1) 
        { 
            this.type_password1 = "text"
        } 
        else 
        {
            this.type_password1 = "password"
        }

    },


    compare () {
        if (this.passwd2 === this.passwd)
        {
            console.log("contraseña es igual")
            this.valid_passwd=3
        }
        else 
        {
            console.log("contraseña no coincide")
    
        }
      },
    

      
      },

  watch : {

        email(newVal,oldVal)
        {
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (this.email.match(validRegex)) 
            {
                this.valid_email = 3
            }
        },

        // NO SE ACTUALIZAAAA
        passwd2(oldval,newval)
        { 
            console.log("passwd2 cambia");
            this.compare()
        },
        passwd(oldval,newval)
        { 
            console.log("passwd1 cambia"); 
            this.compare()
        },
       

      }
}
</script>


