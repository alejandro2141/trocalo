<script setup  >
import { ref } from 'vue'
import axios from 'axios'
import RegisterForm from '../components/RegisterForm.vue' 

import {  REGION_ZONES, BKND_CONFIG } from '../../config.js'

</script>

<template  >
<div class="m-0 p-0 bg-dark" style=" position: absolute; top: 0px;">
    
    <div v-if="isValidCode">   
        <p>Te han invitado a la mayor comunidad de intercambio online</p>
         <RegisterForm  />
    </div>

    <div v-else class="w-100 h-100" style="height:300px ; width=300px ">   
        
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <p>Lo siento, no hemos podido validar tu codigo de invitación.</p>  
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

    </div>



</div>
</template>


<style scoped>

</style>

<script>


export default {

  data : function() {
      return {
        isValidCode : false ,  
        
      }
  },

 props: [],
 //emits: ['closeRegisterForm'] , 


created() {
    //check invitation code 

    console.log("Query invitation code : "+this.$route.query.inv)
     this.validateInvitation(this.$route.query.inv)
    //console.log("APP CREATED : Objects :"+JSON.stringify(this.objects))
    },

  methods: {

     async validateInvitation(inv)
    {
    
        console.log("Validate Invitation: "+inv)
        
        let jsonRequest = {
        invitation_code : inv
        }

        let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_validate_invitation_code",jsonRequest);

        console.log("/public_validate_invitation_code Response:"+JSON.stringify(response_json.data))
        console.log ("response_json.data.length"+response_json.data.length )

        if (response_json.data !=null && response_json.data.length == 1 )
            {     
            this.isValidCode = true 
            }
        else 
           {
            this.isValidCode = false
           }
           
    },




  },

  watch : {
    }

}
</script>

