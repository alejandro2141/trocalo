<script setup>
import { ref } from 'vue'
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
                        <i v-if="comment.animo == 1" class="bi bi-emoji-angry h2 text-danger" ></i>
                        <i v-if="comment.animo == 2 || comment.animo == 0 " class="bi bi-emoji-neutral h2 text-secondary"></i>
                        <i v-if="comment.animo == 3" class="bi bi-emoji-heart-eyes h2 text-success"></i>
                       <text>{{ new Date(comment.date_time).toLocaleDateString() }}  {{comment.message}}</text> <br>
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

       comments: [ {id:1, reply:false , message :"esto no funciona esta malo", animo:1, date_time: new Date("2022-03-25")  },
                   {id:1, reply:false , message :"esto no funciona esta malo", animo:1, date_time: new Date("2022-03-25")  },
                   {id:1, reply:false , message :"esto no funciona esta malo", animo:1, date_time: new Date("2022-03-25")  },
                   {id:1, reply:false , message :"esto no funciona esta malo", animo:1, date_time: new Date("2022-03-25")  },
                   {id:1, reply:false , message :"esto no funciona esta malo", animo:1, date_time: new Date("2022-03-25")  },
                   {id:1, reply:false , message :"esto no funciona esta malo", animo:1, date_time: new Date("2022-03-25")  },
                   {id:1, reply:false , message :"esto no funciona esta malo", animo:1, date: new Date("2022-03-25")  },
                   {id:1, reply:true , message :"esto no funciona esta malo", animo:1, date_time: new Date("2022-03-25")  },
                   {id:1, reply:false , message :"esto no funciona esta malo", animo:1, date_time: new Date("2022-03-25")  },
                   {id:1, reply:false , message :"esto no funciona esta malo", animo:1, date_time: new Date("2022-03-25")  },
                   {id:1, reply:false , message :"esto no funciona esta malo", animo:1, date_time: new Date("2022-03-25")  },    
    
    ]
    
}
  },

 props: [],
 //emits: ['closeRegisterForm'] , 

  methods: {
    
    async sendComments()
    {
        console.log("Sending Comments: "+this.message);
        let aux= {id:123, reply:false , message: this.text_message, animo: this.animo , date_time: new Date("2022-03-25")  }
        this.comments.push(aux)
    },
    async showComments()
    {
        console.log("show Comments ");
        this.show_comments=!this.show_comments
    },

  }
}
</script>