<script setup>
import { ref } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BKND_CONFIG } from '../../config.js'
</script>



<template>
  <div class="w-100 position-absolute top-0 start-0 bg-dark ">

    <div class=" m-1 p-0 w-100" >
    <div class="d-flex justify-content-start" >
    
        <div  style="">
            ADMIN MONITORING <br>
 -------- Pending activities ------------- <br>
            <div v-for="message in messages"  > 
                <text :class="{'text-success' : message.fixed }" >
           <text class="text-success" @click="fixit(message.id)">fixed</text> <text @click="unfixit(message.id)" class="text-danger">NoFixed</text> :::  {{message.user_name}} - {{message.comment}} -- {{message.feeling}}  <br> 
                </text>
            </div>


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
        messages : null ,
        }
    },

    props: ['session_data'],
    emits: ['sessionCreated'],

	created() {
		console.log("Login Created")
        this.getComments();
        	},



  methods: {

        async fixit(id)
        {
            console.log("FIXING comment  "+id)
            const login_data = {
                              id : id,
                               }

            let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_fix_comment",login_data );
            //this.messages = response_json.data ; 
            this.getComments()

        },

        async unfixit(id)
        {
            console.log("UNFIXING comment  "+id)
            const login_data = {
                              id : id,
                               }

            let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_unfix_comment",login_data );
            //this.messages = response_json.data ; 
            this.getComments()

        },

        async getComments()
        {
            console.log("GET comments ")
            const login_data = {
                              token : "asdfge",
                               }

            let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_all_comments",login_data );
            this.messages = response_json.data ; 
        },
    
    },

  watch : {
        }
}
</script>


