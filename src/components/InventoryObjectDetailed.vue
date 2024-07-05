<script setup  >

import { PATH_PRODUCT_IMG } from '../../config.js'


</script>

<template>

<!-- 
<div  class="position-absolute top-50 start-50 translate-middle bg-dark">
-->

<div>

    <div  v-if="showObjectDetail" class=" mt-0" style="width:350px ; font-size:16px">

    <div class="" style="width: 100%">
    <!--
        <div>
            <text @click="$emit('closeModalObjectDetails')"> x </text>
        </div>
    -->
        <div style="font-size:20px">
         {{object.title}} 
        </div>
       
        <!--
        <div class="bg-secondary" style="width:350px; height:300px">
            <img @click="zoomImage()"  style="width:350px; height:300px" :src="main_image"  /> 
        </div>
        -->
        <div class="bg-dark text-center" style="max-height: 350px; max-width: 350px;">
            <img @click="zoomImage()"  style="max-height: 350px;max-width:350px;border-radius: 7px;" :src="main_image+'_thumb'"  /> 
        </div>
        
        <div class="d-flex justify-content-start ">
                <div @click="viewImage(image1)" class="bg-dark m-1 " style="width:60px; height:60px">
                    <img class=""  style="max-width:60px;max-height:70px;border-radius: 3px;" :src="image1+'_thumb'"  /> 
                </div>

                <div @click="viewImage(image2)" class="bg-dark m-1 " style="width:60px; height:60px">
                    <img class=""  style="max-width:60px;max-height:70px;border-radius: 3px; " :src="image2+'_thumb'"  /> 
                </div>
                <div @click="viewImage(image3)" class="bg-dark m-1" style="width:60px; height:60px">
                    <img class=""  style="max-width:60px;max-height:70px;border-radius: 3px; " :src="image3+'_thumb'" /> 
                </div>
                <div @click="viewImage(image4)" class="bg-dark m-1" style="width:60px; height:60px">
                    <img class=""  style="max-width:60px;max-height:70px;border-radius: 3px; " :src="image4+'_thumb'" /> 
                </div>
                <div v-if="image5!=null" @click="viewImage(image5)" class="bg-dark m-1" style="width:60px; height:60px">
                    <img class=""  style="max-width:60px;max-height:90px;border-radius: 3px;" :src="image5+'_thumb'" /> 
                </div>
        </div>
        
        <div >
            {{object.description}}
        </div>
        
    <!--
        <div  style="font-size:16px" class="w-100 text-start">
           Pertenece a: {{object.owner_name}}
        </div>
    -->

        <div v-if="object.blocked_due_proposal_accepted">
            <i style="font-size:40px" class="bi bi-unlock text-secondary"></i> 
            Objeto asociado a intercambio aceptado. 
        </div>
        <!--
        <div class="mt-1" style="font-size:40px">
            <i class="bi bi-shuffle text-secondary"></i>
        </div>
        -->
        <div  v-if="object.alternative1 != 'null' || object.alternative2 != 'null' || object.alternative3 != 'null'  ">
            <br>
            <text class="text-white" style="font-size:16px"> <b>{{object.owner_name}}</b> cambiaria por:</text>
            <div class="m-2">
                <i v-if="object.alternative1 != 'null'" style="font-size:16px" class="bi bi-shuffle text-white"> &nbsp;&nbsp; {{object.alternative1}} </i> <br v-if="object.alternative1 != 'null'">
                <i v-if="object.alternative2 != 'null'" style="font-size:16px" class="bi bi-shuffle text-white"> &nbsp;&nbsp; {{object.alternative2}} </i> <br v-if="object.alternative2 != 'null'">
                <i v-if="object.alternative3 != 'null'" style="font-size:16px" class="bi bi-shuffle text-white"> &nbsp;&nbsp; {{object.alternative3}} </i> <br v-if="object.alternative3 != 'null'">
                <!--
                <i style="font-size:20px" class="bi bi-shuffle text-secondary"></i> Cambiaría por Otros Objetos
                    <text v-if="object.otherObj" style="font-size:25px" class="text-success">
                            SI
                    </text>
                    <text v-else class="text-danger" style="font-size:25px" >
                            NO
                    </text>
                -->
             </div>
        </div>

        


        <!-- 
        <div class="mt-1" style="font-size:20px">
           Cambiaria por otros objetos:  
           <text v-if="object.otherObj" class="text-success">
                 SI
           </text>
           <text v-else class="text-danger" >
                 NO
           </text>

        </div>
    -->
  </div> 

  </div>


  <div v-if="showZoomImage" class="bg-dark zoom" style="max-width:350px;"  >
        <div style="opacity: 0.9;position:fixed; right:0; top:0" class="bg-secondary"> <i  @click="showZoomImage=false ;showObjectDetail=true  " class="display-1 bi bi-x-lg"></i>  </div>
        <img   :src="main_image"  /> 
  </div>


</div>
</template>

<style scoped>

.zoom {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 99;
}


/*
.zoom {      
-webkit-transition: all 0.35s ease-in-out;    
-moz-transition: all 0.35s ease-in-out;    
transition: all 0.35s ease-in-out;     
cursor: -webkit-zoom-in;      
cursor: -moz-zoom-in;      
cursor: zoom-in;  
} 

.zoom:hover,  
.zoom:active,   
.zoom:focus {
-ms-transform: scale(2.5);    
-moz-transform: scale(2.5);  
-webkit-transform: scale(2.5);  
-o-transform: scale(2.5);  
transform: scale(2.5);    
position:relative;      
z-index:100;  
}
*/
</style>


<script  >
//const showForm = ref(false)
import InventoryList from './InventoryList.vue'

export default {

    components: {
        InventoryList
    },
    
    data : function() {
        return {
            showModal:false  ,
            main_image: PATH_PRODUCT_IMG+'/'+this.object.img_ref1 ,
            image1: PATH_PRODUCT_IMG+'/'+this.object.img_ref1 ,
            image2: PATH_PRODUCT_IMG+'/'+this.object.img_ref2 ,
            image3: PATH_PRODUCT_IMG+'/'+this.object.img_ref3 ,
            image4: PATH_PRODUCT_IMG+'/'+this.object.img_ref4 ,
            image5: PATH_PRODUCT_IMG+'/'+this.object.img_ref5 ,

            showObjectDetail : true ,
            showZoomImage : false , 


        }
    },

    props: ['session_data','object_details','object', 'showMakeOffer' ],
    emits: ['closeModalObjectDetails','showMyInventory'],

  created() {
		console.log("created lala inventory Object detailed")
			},

  methods: {

        zoomImage()
        {
            this.showObjectDetail=false 
            this.showZoomImage = true 
            
        },

        viewImage(image)
        {
            this.main_image = image
            console.log("image to view: "+image)    
        }

      },

  watch : {
        }
}
</script>
