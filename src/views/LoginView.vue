<template>
  <div class="about">
    <h1>LoginView</h1>
    
    
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
</template>

<style>
</style>


<script>
//const showForm = ref(false)

export default {
  
    data : function() {
        return {
        user : null ,
        pass : null ,
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


