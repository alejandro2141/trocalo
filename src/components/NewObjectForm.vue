<script setup>
import InventoryObject from '../components/InventoryObject.vue'
import InventoryObjectDetailed from '../components/InventoryObjectDetailed.vue'
import InventoryList from '../components/InventoryList.vue' 


import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'
</script>

<template>
 
 <div>

  <div v-if="step1">

    <div>
      <input type="text" placeholder="Titulo"  v-model="input_name" id="searchText" name="searchText" class="form-control-lg mt-1 bg-dark    text-white border-white" required minlength="4" maxlength="40"  />
    </div>

    <div class="d-flex flex-wrap w-100">

      <div @click="$refs.show_uploadPicture_1_input.click()" style="width:200px; height:200px ; border-radius:15px" class="bg-dark border m-1 text-center">
          <i v-if="!show_uploadPicture_1_preview" style="font-size:100px" class="bi bi-camera text-secondary pt-3"></i>
          <img v-else   :src='previewImage_1' class="uploading-image" style="width:200px; height:200px ; border-radius:15px"  />   
          <input ref="show_uploadPicture_1_input" type="file" accept="image/jpeg;capture=camera" @change='uploadImage_1' style="display: none">
      </div>

      <div @click="$refs.show_uploadPicture_2_input.click()" style="width:100px; height:100px ; border-radius:15px" class="bg-dark border m-1 text-center">
          <i v-if="!show_uploadPicture_2_preview" style="font-size:50px" class="bi bi-camera text-secondary pt-3"></i>
          <img v-else   :src='previewImage_2' class="uploading-image" style="width:100px; height:100px ; border-radius:15px"  />   
          <input ref="show_uploadPicture_2_input" type="file" accept="image/jpeg;capture=camera" @change='uploadImage_2' style="display: none">
      </div>

      <div @click="$refs.show_uploadPicture_3_input.click()" style="width:100px; height:100px ; border-radius:15px" class="bg-dark border m-1 text-center">
          <i v-if="!show_uploadPicture_3_preview" style="font-size:50px" class="bi bi-camera text-secondary pt-3"></i>
          <img v-else   :src='previewImage_3' class="uploading-image" style="width:100px; height:100px ; border-radius:15px"  />   
          <input ref="show_uploadPicture_3_input" type="file" accept="image/jpeg;capture=camera" @change='uploadImage_3' style="display: none">
      </div>

      <div @click="$refs.show_uploadPicture_4_input.click()" style="width:100px; height:100px ; border-radius:15px" class="bg-dark border m-1 text-center">
          <i v-if="!show_uploadPicture_4_preview" style="font-size:50px" class="bi bi-camera text-secondary pt-3"></i>
          <img v-else   :src='previewImage_4' class="uploading-image" style="width:100px; height:100px ; border-radius:15px"  />   
          <input ref="show_uploadPicture_4_input" type="file" accept="image/jpeg;capture=camera" @change='uploadImage_4' style="display: none">
      </div>

      <div @click="$refs.show_uploadPicture_5_input.click()" style="width:100px; height:100px ; border-radius:15px" class="bg-dark border m-1 text-center">
          <i v-if="!show_uploadPicture_5_preview" style="font-size:50px" class="bi bi-camera text-secondary pt-3"></i>
          <img v-else   :src='previewImage_5' class="uploading-image" style="width:100px; height:100px ; border-radius:15px"  />   
          <input ref="show_uploadPicture_5_input" type="file" accept="image/jpeg;capture=camera"  @change='uploadImage_5' style="display: none">
      </div>

      
    </div>

    <div>
      <textarea  v-model="input_description" maxlength="100"  placeholder="Descripcion del objeto" class="form-control-lg mt-1 bg-dark text-white border-white" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    
    <br>
    <div>
        <p style="font-size:20px">
          Cambiaria Por: 
        </p>
        <div>
          <input v-model="input_exchange_option1" type="text" placeholder="Robot asesino Gigante"   id="searchText" name="searchText" class="form-control-lg mt-1 bg-dark text-white border-white" required minlength="4" maxlength="30"  />
        </div>
        <div>
          <input v-model="input_exchange_option2" type="text" placeholder="Delorean polarizado"   id="searchText" name="searchText" class="form-control-lg mt-1 bg-dark text-white border-white" required minlength="4" maxlength="30"  />
        </div>
        <div>
          <input v-model="input_exchange_option3" type="text" placeholder="Ferrary 4fwd"   id="searchText" name="searchText" class="form-control-lg mt-1 bg-dark text-white border-white" required minlength="4" maxlength="30"  />
        </div>
    </div>
    
    <br>
    <div>
        <p style="font-size:20px">
         Cambiaria por otros Objetos? <br> <button @click="input_exchange_other=false"  type="button" :class="[!input_exchange_other ? 'btn btn-success' : 'btn btn-dark']"  >NO</button>  <button  @click="input_exchange_other=true" type="button" :class="[input_exchange_other ? 'btn btn-success' : 'btn btn-dark']" >SI</button>
        </p>
    </div>

    <br>
    <div style="font-size:20px" class=" text-success w-100 bg-dark p-3 text-center" >
       <text> Guardar en mi inventario </text> <br>
       <i @click=" upload_product() ; step1=false;showRequestConfirmation=true" class="bi bi-cloud-arrow-up"></i> 
    </div>
    

  </div>


  <div v-if="showRequestConfirmation"  style="width:350px;height:500px">
     <div class="position-absolute top-0  text-center start-0 bg-dark w-100 h-100" >
        <div>
            <!-- SPACE FILLER -->
            <p style="height:200px">
            </p>
            Articulo Guardado con Exito en tu Inventario
        </div>
      <br>


        <div class="d-flex justify-content-center">
           <div class=" text-success w-100 bg-dark p-3 ">  
              <div class="d-flex justify-content-center">

                <a style="font-size:25px" @click="$emit('closeNewObjectForm')" >
                  <i class="bi bi-arrow-left-square"></i>  Regresar al Inventario
                </a>
              
              </div>
            </div>
        </div>
    </div>
  </div>


     <!-- SPACE FILLER -->
     <p style="height:300px">
    </p>

 </div>

</template>

<style>
input::placeholder {
  color: #888;
  font-size: 0.9em;
  font-style: italic;
}
textareainput::placeholder {
  color: #888;
  font-size: 0.9em;
  font-style: italic;
}

</style>


<script>



export default {

/*
  components: {
    InventoryObject,InventoryObjectDetailed,InventoryList
  },
  */
  data : function() {
      return {
        step1 : true ,
        showRequestConfirmation: false,
        input_exchange_option1 : null ,
        input_exchange_option2 : null ,
        input_exchange_option3 : null ,
        input_exchange_other : true ,

        input_name : null, 
        input_description : null ,

        previewImage_1:null,
        previewImage_2:null,
        previewImage_3:null,
        previewImage_4:null,
        previewImage_5:null,
        show_uploadPicture_1_preview : false , 
        show_uploadPicture_2_preview : false , 
        show_uploadPicture_3_preview : false , 
        show_uploadPicture_4_preview : false , 
        show_uploadPicture_5_preview : false , 


      }
  },
  props: ['session_data'],
  emits: ['closeNewObjectForm'],

created() {
  console.log("NewObjectForm Session_data : "+JSON.stringify(this.session_data))
    },

methods: {

 //  IMAGE 1 
 /*   
 show_uploadPicture_1()
    {
        this.$refs.show_uploadPicture_1_input.click()
    },
    */
    uploadImage_1(e)
    {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{ 
        this.previewImage_1 = e.target.result;
      //  this.upload(e.target.result, 1 )

      };

      
    
      this.show_uploadPicture_1_preview=true
    },

 //  IMAGE 2 
    uploadImage_2(e)
    {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{ this.previewImage_2 = e.target.result;};
    this.show_uploadPicture_2_preview=true
    },

//  IMAGE 3
    uploadImage_3(e)
    {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{ this.previewImage_3 = e.target.result;};
    this.show_uploadPicture_3_preview=true
    },

 //  IMAGE 4 
    uploadImage_4(e)
    {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{ this.previewImage_4 = e.target.result;};
    this.show_uploadPicture_4_preview=true
    },
 //  IMAGE 5 
    uploadImage_5(e)
    {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{ this.previewImage_5 = e.target.result;};
    this.show_uploadPicture_5_preview=true
    },

//  IMAGE upload
/*
async upload(reader, img_num)
    {
        
          const data_image = {
                          img_num : img_num ,
                          session_data : this.session_data ,                 
                          image : reader,    
                              }
          console.log("Sending to /user_upload_product_image " + JSON.stringify(data_image) )
          
          let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/user_upload_product_image",data_image );

    },
*/

//  IMAGE upload
    async upload_product()
    {
        
          const data_product = {
                          name : this.input_name , 
                          description : this.input_description , 

                          exchange_option1 : this.input_exchange_option1  ,
                          exchange_option2 : this.input_exchange_option2 ,
                          exchange_option3 : this.input_exchange_option3 ,
                          exchange_other :   this.input_exchange_other,

                          session_data : this.session_data ,                 
                          image1 : this.previewImage_1,
                          image2 : this.previewImage_2,
                          image3 : this.previewImage_3,
                          image4 : this.previewImage_4,
                          image5 : this.previewImage_5,   

                              }
          console.log("Sending to /user_create_product" + JSON.stringify(data_product) )
          
          let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/user_create_product",data_product );

    },





    },

watch : {
      }
}
</script>


