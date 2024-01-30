<script setup>

import { PATH_PRODUCT_IMG } from '../../config.js'


</script>

<template>

<!-- 
<div  class="position-absolute top-50 start-50 translate-middle bg-dark">
-->
<div  class=" mt-0" style="width:350px ; font-size:16px">

    <div class="" style="width: 100%">
    <!--
        <div>
            <text @click="$emit('closeModalObjectDetails')"> x </text>
        </div>
    -->
        <div style="font-size:20px">
          &nbsp;&nbsp;&nbsp;&nbsp;  {{object.title}}
        </div>
        
        <div class="bg-secondary" style="width:350px; height:300px">
            <img class=""  style="width:350px; height:300px" :src="main_image"  /> 
        </div>
        
        <div class="d-flex justify-content-start ">
                <div @click="viewImage(image1)" class="bg-secondary m-1 " style="width:60px; height:60px">
                    <img class=""  style="width:60px; height:60px" :src="image1"  /> 
                </div>

                <div @click="viewImage(image2)" class="bg-secondary m-1 " style="width:60px; height:60px">
                    <img class=""  style="width:60px; height:60px" :src="image2"  /> 
                </div>
                <div @click="viewImage(image3)" class="bg-secondary m-1" style="width:60px; height:60px">
                    <img class=""  style="width:60px; height:60px" :src="image3" /> 
                </div>
                <div @click="viewImage(image4)" class="bg-secondary m-1" style="width:60px; height:60px">
                    <img class=""  style="width:60px; height:60px" :src="image4" /> 
                </div>
                <div @click="viewImage(image5)" class="bg-secondary m-1" style="width:60px; height:60px">
                    <img class=""  style="width:60px; height:60px" :src="image5" /> 
                </div>
        </div>
        
        <div >
            {{object.description}}
        </div>
        

        <div  style="font-size:16px" class="w-100 text-start">
            <!--  <i style="font-size:30px" class="bi bi-person-standing text-secondary"></i> --> 
              {{object.owner_name}}
        </div>

        <div v-if="object.blocked_due_proposal_accepted">
            <i style="font-size:40px" class="bi bi-unlock text-secondary"></i> 
            Objeto asociado a intercambio aceptado. 
        </div>
        <!--
        <div class="mt-1" style="font-size:40px">
            <i class="bi bi-shuffle text-secondary"></i>
        </div>
        -->
        <div  v-if="object.alternative1 != 'null' && object.alternative2 != 'null' && object.alternative3 != 'null'  ">
            <br>
            <text class="text-secondary " style="font-size:20px">De preferencia cambiaria por:</text>
            <div class="m-2">
                <i v-if="object.alternative2 != 'null'" style="font-size:20px" class="bi bi-shuffle text-secondary"> &nbsp;&nbsp; {{object.alternative1}} </i> <br>
                <i v-if="object.alternative2 != 'null'" style="font-size:20px" class="bi bi-shuffle text-secondary"> &nbsp;&nbsp; {{object.alternative2}} </i> <br>
                <i v-if="object.alternative2 != 'null'" style="font-size:20px" class="bi bi-shuffle text-secondary"> &nbsp;&nbsp; {{object.alternative3}} </i> <br>
                <!--
                <i style="font-size:20px" class="bi bi-shuffle text-secondary"></i> Cambiaría por Otros Objetos
                    <text v-if="object.otherObj" style="font-size:25px" class="text-success">
                            SI
                    </text>
                    <text v-else class="text-danger" style="font-size:25px" >
                            NO
                    </text>
                -->
                <br>
            </div>
        </div>

        <br>
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

</template>

<style scoped>

</style>


<script>
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


        }
    },

    props: ['session_data','object_details','object', 'showMakeOffer' ],
    emits: ['closeModalObjectDetails','showMyInventory'],

  created() {
		console.log("created lala inventory Object detailed")
			},

  methods: {

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
