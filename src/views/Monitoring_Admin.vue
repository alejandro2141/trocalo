<script setup>
import { ref } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BKND_CONFIG } from '../../config.js'
</script>



<template>
  <div class="w-100 position-absolute top-0 start-0 bg-dark ">

    <div v-if="showLogin" class="w-100 h-100 bg-darg" >
        
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <br>
            <input type="text" v-model="username" placeholder="Enter Username" name="uname" required>
            <br>
            <label for="psw"><b>Password</b></label>
            <br>
            <input type="password" v-model="password" placeholder="Enter Password" name="psw" required>
            <br>
            <button @click="sendLogin()" >Login</button>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          </div>

    </div>

    <div v-else>
        <div class=" m-1 p-0 w-100" >
        <div class="" >

        <button @click="loadOrdered()" >Reload</button>
        

        <text>Pending activities </text> <br>
        <div class="border border-1 w-100" style="height:200px ; overflow: scroll;">
            <div v-for="message in messages"  > 
                <text :class="{'text-success' : message.fixed }" >
           <text class="text-success" @click="fixit(message.id)">fixed</text> <text @click="unfixit(message.id)" class="text-danger">NoFixed</text> :::  {{message.user_name}} - {{message.comment}} -- {{message.feeling}}  <br> 
                </text>
            </div>
        </div>


        <text>Users Registered </text> <br>
        <div class="border border-1 w-100" style="height:200px ; overflow: scroll;">
            <div v-for="user in users"  > 
                <text class="" >
                    {{JSON.stringify(user) }} 
                </text>
            </div>
        </div>

        <text>Last 39 Users Objects </text> <br>
        <div class="border border-1 w-100" style="height:200px ; overflow: scroll;">
            <div v-for="object in objects"  > 
                <text class="" >
                    {{JSON.stringify(object) }} 
                </text>
            </div>
        </div>

        <text>Invitations </text> <br>
        <div class="border border-1 w-100" style="height:200px ; overflow: scroll;">
            <div v-for="invitation in invitations"  > 
                <text class="" >
                    {{JSON.stringify(invitation) }} 
                </text>
            </div>
        </div>

        <text>Proposals </text> <br>
        <div class="border border-1 w-100" style="height:200px ; overflow: scroll;">
            <div v-for="proposal in proposals"  > 
                <text class="" >
                    {{JSON.stringify(proposal) }} 
                </text>
            </div>
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
        users : null ,
        objects : null ,
        invitations : null ,
        proposals : null ,

        showLogin : true ,

        username : null, 
        password : null ,

        message : null ,

        }
    },

    props: ['session_data'],
    emits: ['sessionCreated'],

	created() {
		console.log("Login Created")
        

        	},



  methods: {

        async sendLogin()
        {
            console.log("SEND LOGIN")
            const login_data = {
                              username : this.username ,
                              password : this.password ,
                               }
            let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_login_admin_portal",login_data );
            this.messages = response_json.data ; 
            console.log("Login Response : "+JSON.stringify(this.messages) )
            console.log("Login Response response code  : "+this.messages.response_code )

            if (this.messages.response_code == 200 )
            {
                console.log ("Login OK ")
                this.loadOrdered()
                this.showLogin = false 
            }

        },

        async loadOrdered()
        {
        await this.getComments()
        await this.getUsers()  
        await this.getObjects()  
        await this.getInvitations()
        await this.getProposals()
        },

        async getUserLogin()
        {
            console.log("SEND LOGIN")
            const login_data = {
                              username : this.username ,
                              password : this.password ,
                               }
            let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_login_admin_portal",login_data );
            this.messages = response_json.data ; 
            console.log("Login Response : "+JSON.stringify(this.messages) )
        },


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

         async getUsers()
        {
            console.log("GET users")
            const login_data = {
                              token : "asdfge",
                               }

            let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_all_users",login_data );
            this.users = response_json.data ; 
        },

        async getObjects()
        {
            console.log("GET Objects")
            const login_data = {
                              token : "asdfge",
                               }

            let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_last",login_data );
            this.objects = response_json.data ; 
        },

        async getInvitations()
        {
            console.log("GET Objects")
            const login_data = {
                              token : "asdfge",
                               }

            let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_all_invitations",login_data );
            this.invitations = response_json.data ; 
        },


        async getProposals()
        {
            console.log("GET Proposals")
            const login_data = {
                              token : "asdfge",
                               }

            let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_all_proposals",login_data );
            this.proposals = response_json.data ; 
        },


    
    },

  watch : {
        }
}
</script>


