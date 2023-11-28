<script setup>
import { ref } from 'vue'
import ContactUsForm from '../components/ContactUsForm.vue' 
import UserData from '../components/UserData.vue' 
</script>



<template>
  <div class="w-100 position-absolute top-0 start-0 bg-dark ">
   
    <div v-if="session_data!=null && session_data.user!=null" class="text-center" >

       
        <div class="d-flex flex-row-reverse bd-highlight"> 
                    <a HREF="/" type="button" class=""><i class="display-5 bi bi-x-lg text-white"></i></a>
        </div>
       
        <div style="height:80px"></div>

       
        <div class="d-flex justify-content-around ">
            <div class=" arrow-up text-secondary " :class="{ 'fw-bold': showMyInfo }"  @click="showMyInfo=!showMyInfo; sendComments=false "> Mi <br>Informacion </div>
            <div class="p-4 bg-danger" :class="{ 'fw-bold': sendComments }" @click="sendComments=!sendComments ; showMyInfo=false"> Tus <br>Comentarios </div>
        </div>

             
        <Transition> 
                <div v-if="showMyInfo">
                    <UserData :session_data="session_data"/>
                </div>
            
        </Transition>    
            

          <Transition> 
            <ContactUsForm  v-if="sendComments" />
        </Transition>    
        <div style="height:200px"></div>
        <br>
        <br>
     

      
        
       
        

    </div>

    <div v-else>

        <h1>Ingreso</h1>

        <div class="container">   
            <label>Username : </label>   
            <input type="text"  v-model="user" autocomplete="off" autocorrect="off" spellcheck="false"  placeholder="Enter Username" name="username" required>  
            <label>Password : </label>   
            <input type="password" v-model="pass" autocomplete="off" autocorrect="off" spellcheck="false"  placeholder="Enter Password" name="password" required>  
            <br>
            <button @click="sendLogin(user,pass)" >Login</button>   
            <button type="button" > Cancel</button>    
            <br>
            <input type="checkbox" checked="checked"> Remember me   
            <br>
            Forgot <text> password? </text>   
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
        }
    },

    props: ['session_data'],
    emits: ['sessionCreated'],

	created() {
		console.log("Login Created")
        console.log("Login session_data:"+JSON.stringify(this.session_data))
	
			},



  methods: {
        sendLogin(user_d,pass_d)
        {
            console.log("Login - user: "+user_d+" password:"+pass_d)
           const session_data = {
                            user : user_d,
                            pass : pass_d
                            }
            //query backend for login
            this.$emit('sessionCreated',session_data); 
            console.log("Login - Emit Sent")
            this.$router.push('search') 

        }


      },

  watch : {
        }
}
</script>


