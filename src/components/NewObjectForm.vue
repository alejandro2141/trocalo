<script setup  >
import InventoryObject from '../components/InventoryObject.vue'
import InventoryObjectDetailed from '../components/InventoryObjectDetailed.vue'
import InventoryList from '../components/InventoryList.vue' 
import SpinnerLoading from '../components/SpinnerLoading.vue'

import { CATEGORIES,  BKND_CONFIG } from '../../config.js'
import axios from 'axios'
</script>

<template>
 
 <div>
  <SpinnerLoading  :onOff=spinnerOn />

<!--
  <div class="">
 <p>PREVIEW IMAGES</p>
      Image Original 
      <br>
      <img :src='previewImage_1' style="width:200px" />
      <br>
      image thumb<br>
     
      <br>
      <img :src='previewImage_1_thumb'  />   
      <br>
   
      <div v-if="previewImage_1_thumb !=null" >
            DATAURL
            <br>
            {{previewImage_1_thumb.toDataURL()}}
            <br>
            toBlob
            <br>
            {{previewImage_1_thumb.toBlob( (blob) => { /* … */ }, "image/jpeg", 0.95,  )}}
            <br>
      </div>
    

  </div>
-->
  <div v-if="showForm && !spinnerOn">
  
  <div>
      <input type="text" placeholder="Titulo"  v-model="input_name" id="searchText" name="searchText" class="form-control-lg mt-1 bg-dark    text-white border-white" required minlength="4" maxlength="40"  />
    <br>
    <text class="text-warning" v-if="!validate_input_name" > Debe ingresar el nombre de tu producto.  </text>
    </div>


    <div class="d-flex flex-wrap w-100">

      <div @click="$refs.show_uploadPicture_1_input.click()" style="width:200px; height:200px ; border-radius:15px" class="bg-dark border m-1 text-center">
          <i v-if="!show_uploadPicture_1_preview" style="font-size:100px" class="bi bi-camera text-secondary pt-3"></i>
          <img v-else   :src='previewImage_1_thumb' class="uploading-image" style="max-width:200px; max-height:200px ; border-radius:15px"  />   
          <input ref="show_uploadPicture_1_input" type="file" accept="image/*" capture="camera" @change='uploadImage_1' style="display: none">
          <br>
          <text class="text-warning" v-if="!validate_input_img1" > Debe ingresar una Imagen principal de tu producto.  </text>

      </div>

<!--
<br>
<br>max-height: 100px; max-width: 100px;
      <input type="file" accept="image/*" capture="camera" id="camera" />
<br>
<br>
      <input ref="show_uploadPicture_1_input" type="file" accept="image/*" capture="camera" id="camera" @change='uploadImage_1' style="display: none">
<br>
<br>          
    -->

      <div @click="$refs.show_uploadPicture_2_input.click()" style="width:100px; height:100px ; border-radius:15px" class="bg-dark border m-1 text-center">
          <i v-if="!show_uploadPicture_2_preview" style="font-size:50px" class="bi bi-camera text-secondary pt-3"></i>
          <img v-else   :src='previewImage_2_thumb' class="uploading-image" style="max-width:100px; max-height:100px ; border-radius:15px"  />   
          <input ref="show_uploadPicture_2_input" type="file" accept="image/*" capture="camera" @change='uploadImage_2' style="display: none">
      </div>

      <div @click="$refs.show_uploadPicture_3_input.click()" style="width:100px; height:100px ; border-radius:15px" class="bg-dark border m-1 text-center">
          <i v-if="!show_uploadPicture_3_preview" style="font-size:50px" class="bi bi-camera text-secondary pt-3"></i>
          <img v-else   :src='previewImage_3_thumb' class="uploading-image" style="max-width:100px; max-height:100px ; border-radius:15px"  />   
          <input ref="show_uploadPicture_3_input" type="file" accept="image/*" capture="camera" @change='uploadImage_3' style="display: none">
      </div>

      <div @click="$refs.show_uploadPicture_4_input.click()" style="width:100px; height:100px ; border-radius:15px" class="bg-dark border m-1 text-center">
          <i v-if="!show_uploadPicture_4_preview" style="font-size:50px" class="bi bi-camera text-secondary pt-3"></i>
          <img v-else   :src='previewImage_4_thumb' class="uploading-image" style="max-width:100px; max-height:100px ; border-radius:15px"  />   
          <input ref="show_uploadPicture_4_input" type="file" accept="image/*" capture="camera" @change='uploadImage_4' style="display: none">
      </div>

      <div @click="$refs.show_uploadPicture_5_input.click()" style="width:100px; height:100px ; border-radius:15px" class="bg-dark border m-1 text-center">
          <i v-if="!show_uploadPicture_5_preview" style="font-size:50px" class="bi bi-camera text-secondary pt-3"></i>
          <img v-else   :src='previewImage_5_thumb' class="uploading-image" style="max-width:100px; max-height:100px ; border-radius:15px"  />   
          <input ref="show_uploadPicture_5_input" type="file" accept="image/*" capture="camera" @change='uploadImage_5' style="display: none">
      </div>

      
    </div>

    <div>
      <textarea  v-model="input_description" maxlength="100"  placeholder="Descripcion del objeto" class="form-control-lg mt-1 bg-dark text-white border-white" id="exampleFormControlTextarea1" rows="3"></textarea>
      <br>
      <text class="text-warning" v-if="!validate_input_description" > Debe ingresar una descripcion de tu producto.  </text>
    </div>
    
    <br>


    <div class="d-flex justify-content-between w-75">

        <select v-model="input_exchange_category1" class=" w-50 form-select bg-dark text-white" aria-label="Default select example">
            <option v-for="category in CATEGORIES" :value=category.id >
              {{category.name}} 
            </option>
        </select>
    </div>
    <br>
    <text class="text-warning" v-if="!validate_input_category1" > Debe ingresar una categoria</text>

    
    <br>
    <div>
        <p style="font-size:20px">
          De preferencia lo cambiaria por: 
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
  <!-- 
    <div>
        <p style="font-size:20px">
         Cambiaria por otros Objetos? <br> <button @click="input_exchange_other=false"  type="button" :class="[!input_exchange_other ? 'btn btn-success' : 'btn btn-dark']"  >NO</button>  <button  @click="input_exchange_other=true" type="button" :class="[input_exchange_other ? 'btn btn-success' : 'btn btn-dark']" >SI</button>
        </p>
    </div>
  -->
  <!--
      <div class="d-flex justify-content-center">
        <div class="border border-1 border-success w-50 ">
          <div @click="upload_product()" style="font-size:25px" class="text-success  bg-dark p text-center" >
              <text> Guardar </text> 
              <i style="font-size:35px"  class="bi bi-cloud-arrow-up"></i> 
            </div>
        </div>
      </div>
    -->

    <div class="d-flex justify-content-center">
      <button @click="upload_product()" style="font-size:25px" type="button" class="btn btn-success">
          <text> Guardar </text> 
          <i style="font-size:35px"  class="bi bi-cloud-arrow-up"></i> 
      </button>
    </div>

    <!-- 
      <div class="d-flex justify-content-center">
        <div class="border border-1 border-success w-50 ">
          <div @click="upload_product()" style="font-size:25px" class="text-success  bg-dark p text-center" >
              <text> Guardar </text> 
              <i style="font-size:35px"  class="bi bi-cloud-arrow-up"></i> 
            </div>
        </div>
      </div>
    -->


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

body {
    overscroll-behavior: none 
}


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


<script  >



export default {

/*
  components: {
    InventoryObject,InventoryObjectDetailed,InventoryList
  },
  */
  data : function() {
      return {
        spinnerOn:false ,
        step1 : true ,
        showRequestConfirmation: false,
        input_exchange_option1 : null ,
        input_exchange_option2 : null ,
        input_exchange_option3 : null ,
        input_exchange_other : true ,

        input_name : null, 
        input_description : null ,
        input_exchange_category1 : 0 ,
        input_exchange_category2 : 0 ,
        input_exchange_category3 : 0 ,

        previewImage_1:null,
        previewImage_1_thumb:null,
        previewImage_2:null,
        previewImage_2_thumb:null,
        previewImage_3:null,
        previewImage_3_thumb:null,
        previewImage_4:null,
        previewImage_4_thumb:null,
        previewImage_5:null,
        previewImage_5_thumb:null,
        show_uploadPicture_1_preview : false , 
        show_uploadPicture_2_preview : false , 
        show_uploadPicture_3_preview : false , 
        show_uploadPicture_4_preview : false , 
        show_uploadPicture_5_preview : false , 

        // INPUT VALIDATION 
        validate_input_name : true ,
        validate_input_description : true ,
        validate_input_img1 : true ,
        validate_input_img2 : true ,
        validate_input_img3 : true ,
        validate_input_img4 : true ,
        validate_input_img5 : true ,
        validate_input_category1 : true , 
        validate_exchange_option1 : false ,
        validate_exchange_option2 : false ,
        validate_exchange_option3 : false ,
        validate_exchange_option4 : false ,
        validate_exchange_option5 : false ,
        //***************** */
        showForm : true,

        temporal_urldata_image : null , 

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
    capitalizeNames(newVal) {
        if (newVal!=null && newVal.length>0)
        {
            name= newVal.charAt(0).toUpperCase() + newVal.slice(1).toLowerCase() ;

            /*
            for (let i = 0; i < newVal.length; i++) {
                    
                    if ( newVal[i-1] === " "  )
                    {
                    console.log("Text Before SPace:-"+newVal.slice(0,i)+"-");
                    console.log("Text Afetr Space:-"+newVal.slice(i)+"-");
                    name= newVal.slice(0,i) + newVal.charAt(i).toUpperCase() + newVal.slice(i+1).toLowerCase() 

                  // name=  newVal.slice(0,i) +  newVal.charAt(i+1).toUpperCase()+ newVal.slice(i+2).toLowerCase()
                    }
                }
                */
            return name 
        }
        else 
        {
            return null 
        }
    }, 

/*
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
    */
   
    /*
    async lala1(aux)
    {
      return aux+"soylala1" 
    },

    async lala2(aux)
    {
      return aux+"soylala2"
    },
    
    
    async resize_image(image , newWidth) 
    {
      var urldataImage = "NOSET" ;

      const reader = new FileReader();
      reader.readAsDataURL(image);
      //reader.onload = readedResult =>{ this.previewImage_2 = readedResult.target.result;};
      //this.show_uploadPicture_2_preview=true
      
      reader.onload = async resultReader =>{ 
                  let img_aux = await document.createElement("img"); 
                  img_aux.src = await resultReader.target.result;
                  console.log("RESIZE  img_aux.src "+ img_aux.src)
                  let canvas_aux = await document.createElement("canvas");
        
                  let factor = (img_aux.height / img_aux.width)
                  // Set the canvas to new dimensions using factor
                  canvas_aux.width = newWidth;
                  canvas_aux.height = factor * newWidth;
         
                  let ctx = await canvas_aux.getContext("2d");
                  await ctx.drawImage(img_aux, 0, 0, canvas_aux.width ,  canvas_aux.height);
                  this.temporal_urldata_image  = await canvas_aux.toDataURL(image.type)
                  console.log("RESIZE image RETURN  : "+ urldataImage)
                  
                  return function(e) {
                    return (e)
                  }

                  return (urldataImage)
        }; 
        
    },
    */
    

    async uploadImage_1(e)
    {
      const image  = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload =  async readedResult =>{ 
        this.previewImage_1 = readedResult.target.result;
        };    
      
      //reader for thumbnail
      let image2 = e.target.files[0];
      let reader2 = new FileReader();
      reader2.readAsDataURL(image2);
      reader2.onload = async resultReader =>{ 
                  let img =  await document.createElement("img"); 
                  img.src =  await resultReader.target.result;
                  let canvas = await  document.createElement("canvas");
        
                  let factor = (img.height / img.width)
                  // Set the canvas to new dimensions using factor
                  canvas.width = 200;
                  canvas.height = factor * 200;
         
                  let ctx = await canvas.getContext("2d");
                  ctx.drawImage(img, 0, 0, canvas.width ,  canvas.height);
                  this.previewImage_1_thumb =  await canvas.toDataURL(image2.type)
                  this.show_uploadPicture_1_preview=true
        }; 
        //end reader for thumbnail 
     
    },



 //  IMAGE 2 
    uploadImage_2(e)
    {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = readedResult =>{ this.previewImage_2 = readedResult.target.result;};
      //this.show_uploadPicture_2_preview=true

      //reader for thumbnail
      let image_thumb = e.target.files[0];
      let reader_thumb = new FileReader();
      reader_thumb.readAsDataURL(image);
      reader_thumb.onload = async resultReader =>{ 
                  let img_thumb = await document.createElement("img"); 
                  img_thumb.src = await resultReader.target.result;
                  let canvas_thumb = await document.createElement("canvas");
        
                  let factor = (img_thumb.height / img_thumb.width)
                  // Set the canvas to new dimensions using factor
                  canvas_thumb.width = 200;
                  canvas_thumb.height = factor * 200;
         
                  let ctx = await canvas_thumb.getContext("2d");
                  ctx.drawImage(img_thumb, 0, 0, canvas_thumb.width ,  canvas_thumb.height);
                  this.previewImage_2_thumb =  await canvas_thumb.toDataURL(image_thumb.type)

                  this.show_uploadPicture_2_preview=true
        }; 
        //end reader for thumbnail 
    },

//  IMAGE 3
    uploadImage_3(e)
    {
      
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload =  readerResult =>{ this.previewImage_3 = readerResult.target.result;};

      //reader for thumbnail
      const image2 = e.target.files[0];
      const reader2 = new FileReader();
      reader2.readAsDataURL(image2);
      reader2.onload = async readerResult =>{ 
            
            let img = await document.createElement("img"); 
            img.src =  await readerResult.target.result;
            let canvas = await document.createElement("canvas");
        
            let factor = (img.height / img.width)
            // Set the canvas to new dimensions using factor
            canvas.width = 200;
            canvas.height = factor * 200;
         
            let ctx = await canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, 200 , factor * 200);
            this.previewImage_3_thumb =  await canvas.toDataURL(image2.type)
            
            this.show_uploadPicture_3_preview=true
        }; 
        //end reader for thumbnail 
    },

 //  IMAGE 4 
    uploadImage_4(e)
    {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload =  readerResult =>{ this.previewImage_4 = readerResult.target.result;};
      this.show_uploadPicture_4_preview=true

           //reader for thumbnail
      const image2 = e.target.files[0];
      const reader2 = new FileReader();
      reader2.readAsDataURL(image2);
      reader2.onload = async readerResult =>{ 
            let img = await document.createElement("img"); 
            img.src = await readerResult.target.result;
            let canvas = await document.createElement("canvas");
        
            let factor = (img.height / img.width)
            // Set the canvas to new dimensions using factor
            canvas.width = 200;
            canvas.height = factor * 200;
            let ctx = await  canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width ,  canvas.height);
            this.previewImage_4_thumb =  await canvas.toDataURL(image2.type)
        }; 
        //end reader for thumbnail 

    },
 //  IMAGE 5 
    async uploadImage_5(e)
    {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload =  readerResult =>{ this.previewImage_5 = readerResult.target.result;};
      this.show_uploadPicture_5_preview=true

           //reader for thumbnail
      const image2 = e.target.files[0];
      const reader2 = new FileReader();
      reader2.readAsDataURL(image2);
      reader2.onload = async readerResult =>{ 
            let img = await document.createElement("img"); 
            img.src = await readerResult.target.result;
            let canvas = await document.createElement("canvas");
        
            let factor = (img.height / img.width)
            // Set the canvas to new dimensions using factor
            canvas.width = 200;
            canvas.height = factor * 200;
            let ctx = await  canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width ,  canvas.height);
            this.previewImage_5_thumb =  await canvas.toDataURL(image2.type)
        }; 
        //end reader for thumbnail 


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
                          category1 : this.input_exchange_category1 , 
                          category2 : this.input_exchange_category2 , 
                          category3 : this.input_exchange_category3 , 

                          exchange_option1 : this.input_exchange_option1  ,
                          exchange_option2 : this.input_exchange_option2 ,
                          exchange_option3 : this.input_exchange_option3 ,
                          exchange_other :   this.input_exchange_other,

                          session_data : this.session_data , 

                          image1 : this.previewImage_1,
                          image1_thumb : this.previewImage_1_thumb,
                          image2 : this.previewImage_2,
                          image2_thumb : this.previewImage_2_thumb,
                          image3 : this.previewImage_3,
                          image3_thumb : this.previewImage_3_thumb,
                          image4 : this.previewImage_4,
                          image4_thumb : this.previewImage_4_thumb,
                          image5 : this.previewImage_5,   
                          image5_thumb : this.previewImage_5_thumb,
                              }
        /*
        validate_input_name : false ,
        validate_input_description : false ,
        validate_input_img1 : false ,
        validate_input_img2 : false ,
        validate_input_img3 : false ,
        validate_input_img4 : false ,
        validate_input_img5 : false ,
        validate_category1 : false , 
        validate_exchange_option1 : false ,
        validate_exchange_option2 : false ,
        validate_exchange_option3 : false ,
        validate_exchange_option4 : false ,
        validate_exchange_option5 : false ,
        */


      //input validations
              //validate Product Name
              if ( data_product != null &&  data_product.name != null &&  data_product.name.length > 4 )
              {
               this.validate_input_name = true 
              } 
              else 
              {
                this.validate_input_name = false 
              }
              //validate Product Description
              if ( data_product != null &&  data_product.description != null &&  data_product.description.length > 4 )
              {
                this.validate_input_description = true 
              } 
              else 
              {
                this.validate_input_description = false 
              }
              //validate Product Category1
              if ( data_product != null &&  data_product.category1 != null   &&  data_product.category1 != 0   )
              {
                this.validate_input_category1 = true 
              } 
              else 
              {
                this.validate_input_category1 = false 
              }
              //validate Product validate_input_img1
              if ( data_product != null &&  data_product.image1 != null )
              {
                this.validate_input_img1 = true 
              } 
              else 
              {
                this.validate_input_img1 = false 
              }
              //validate Product validate_input_img2
              if ( data_product != null &&  data_product.image2 != null )
              {
                this.validate_input_img2 = true 
              } 
              else 
              {
                this.validate_input_img2 = false 
              }
              //validate Product validate_input_img3
              if ( data_product != null &&  data_product.image3 != null )
              {
                this.validate_input_img3 = true 
              } 
              else 
              {
                this.validate_input_img3 = false 
              }

          if ( this.validate_input_name  &&  this.validate_input_description && this.validate_input_category1  && this.validate_input_img1 )
          {
          console.log("Sending to /user_create_product" + JSON.stringify(data_product) )
          this.spinnerOn=true
          let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/user_create_product",data_product );
          //step1=false;
          this.spinnerOn=false
          this.showForm = false 
          this.showRequestConfirmation=true

          }


    
        },





    },

watch : {
      input_name(newVal,oldVal)
      {
       this.input_name=this.capitalizeNames(newVal)
      }

      }
}
</script>


