<script setup>

import { ref } from 'vue'

import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>


<template  >
<div class="text-center">
    <div v-if="true"  id="form" class=" p-0 " style="margin-top: 2em;">
        <div class="form-row">
        
        <!--
            <p class="text-center h4">Envianos un mensaje <i class="bi bi-send"></i></p>
        -->
        <!--
            class="text-center"
            <div class="form-group ">
                <input type="email" style="border-radius: 10px;" autocomplete="off" class="form-control" id="inputEmail4" placeholder="Ingrese su Email" v-model="email">
            </div>
            <br>
           
            <textarea v-model="message" style="border-radius: 15px;" id="w3review" placeholder="Ingrese su Mensaje" name="w3review" rows="4" cols="50" class="p-3"></textarea>
        -->
    <div class="text-center" v-if="show_confirm == !true">
    <!--
        <text class="text-secondary">Tu Email</text>
        <br>
        
        <div class="d-flex justify-content-center">
        <input type="email" maxlength="40" style="border-radius: 10px;" autocomplete="off" class="form-control w-75 m-1 " id="inputEmail4" placeholder="" v-model="email">
        </div>
    -->
        <text class="text-secondary" style="font-size:20px">¿ Como te sientes ? <i class="bi bi-envelope"></i> </text>
        <div class="d-flex justify-content-center">
						
                        <div>
                            <textarea maxlength="100" style="border-radius: 10px; "  class="form-control-lg h-100 w-90 m-1 " id="story" v-model="text_message" name="story"  placeholder="Muy bien...">
							</textarea>
						</div>
						
		</div>
<br>
     <!--    Como te sientes? <br>-->
        <div class="m-0 d-flex justify-content-evenly">
							
							<text>
								<i @click="animo =1;" class="text-danger bi bi-emoji-angry display-3 m-2 " :class="{ 'border border-5 border-primary' : animo ==1 }"  style="border-radius: 30px; " > </i><br>
                            </text>
							<text>
							<i @click="animo =2;" class="text-secondary bi bi-emoji-neutral display-3 m-2 " :class="{ 'border border-5 border-primary' : animo ==2 }"  style="border-radius: 30px; " ></i><br>
                            </text>
							<text>
							<i @click="animo =3;"  class="text-success bi bi-emoji-heart-eyes display-3 m-2 " :class="{ 'border border-5 border-primary' : animo ==3 }"  style="border-radius: 30px; "></i><br>
                            </text>
							<!--
							<i @click="animo =4;text_message=text_message.concat(' Tiene errores de software.  Arreglalo infame programador !!. ') " class="text-white bi bi-bug h4 p-2"></i><br>
							<i @click="animo =5;text_message=text_message.concat(' Esta bueno. Me gusta.  Puede mejorar !. ') " class="text-white bi bi-balloon-heart h4 p-2"></i><br>
							-->
		</div>

        <br>
        <div class="d-flex justify-content-evenly  ">
            <button @click="showComments()"  type="button" class="btn btn-secondary"> <text> <i class="bi bi-signal"></i> </text></button>
            <button @click="sendComments();show_confirm=true"  type="button" class="btn btn-secondary"> <text> Enviar <i class="bi bi-send " ></i> </text></button>
        </div>
        <br>
    </div>


    <div v-if="show_confirm == true"  class="text-center">
        <text style="font-size:1.3em" > 
            El equipo de HoraPO agradece tus comentarios  <br><i class="display-5 bi bi-emoji-kiss"></i>
        </text>
       <br>

        <a  @click="show_confirm=false; text_message='Mensaje enviado...' " class="btn btn-primary" > Regresar  </a>
    </div>



    <div v-if="show_comments" class=" text-start  w-100 m-2"  >
                
                <text>Estamos trabajando para solucionar: </text>
               <br>
                <div v-for="comment in comments" :key="comment.id" class="mt-2 " >
                
                    <div v-if="comment.reply" >
                        <i class="h2 bi bi-emoji-laughing-fill text-primary"></i><text class="fw-bold"> HORAPO team : 

                        </text>{{comment.message}}<br>  
                    </div>
                    <div v-else>
                        <i v-if="comment.feeling == 1" class="bi bi-emoji-angry h2 text-danger" ></i>
                        <i v-if="comment.feeling == 2 || comment.animo == 0 " class="bi bi-emoji-neutral h2 text-secondary"></i>
                        <i v-if="comment.feeling == 3" class="bi bi-emoji-heart-eyes h2 text-success"></i>
                       <text>{{ new Date(comment.timestamp).toLocaleDateString() }}  {{comment.comment}}</text> <br>
                    </div>

               
                </div>
    </div>

    </div>
</div>
</div>
</template>


<style scoped>

</style>

<script>
//const showForm = ref(false)


export default {
  data : function() {
    return {
       text_message: "",
       email: "" ,
       animo : null , 
       show_confirm : false , 
       show_comments : false ,

       comments: []
    
}
  },

 props: ['session_data'],
 //emits: ['closeRegisterForm'] , 

  methods: {
    
    async sendComments()
    {
        console.log("Send Comments: "+this.message);
        
        if (this.animo == null)
        {this.animo = 1}
       

        let json_request =  { 
        session_data : this.session_data, 
        text_message : this.text_message,
        feeling      : this.animo,
        timestamp    : new Date().toISOString()
          }

        console.log("/private_send_comment Request: "+JSON.stringify(json_request))
        let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_send_comment", json_request);
        this.getComments() 
       // console.log("/private_send_comment Response:"+JSON.stringify(response_json.data))
    },

    async getComments()
    {
        let json_request =  { 
        session_data : this.session_data, 
         }

        console.log("/private_get_comments: "+JSON.stringify(json_request))
        let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_comments", json_request);
        console.log("/private_get_comments: RESPONSE: "+ JSON.stringify(response_json.data) )
        this.comments = response_json.data ; 
    },

    async showComments()
    {
        this.getComments()
        
        console.log("show Comments ");
        this.show_comments=!this.show_comments
    },

  }
}
</script>