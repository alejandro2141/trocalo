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
        <div  style="font-size:16px">
            <i style="font-size:30px" class="bi bi-person-standing text-secondary"></i>   {{object.owner_name}}
        </div>
        <div class="bg-secondary" style="width:350px; height:300px">
            <img class=""  style="width:350px; height:300px" :src="PATH_PRODUCT_IMG+'/'+object.img_ref1"  /> 
        </div>
        
        <div class="d-flex justify-content-start ">
                <div class="bg-secondary m-1 " style="width:80px; height:80px">
                    <img class=""  style="width:80px; height:80px" :src="PATH_PRODUCT_IMG+'/'+object.img_ref2"  /> 
                </div>
                <div class="bg-secondary m-1" style="width:80px; height:80px">
                    <img class=""  style="width:80px; height:80px" :src="PATH_PRODUCT_IMG+'/'+object.img_ref3" /> 
                </div>
                <div class="bg-secondary m-1" style="width:80px; height:80px">
                    <img class=""  style="width:80px; height:80px" :src="PATH_PRODUCT_IMG+'/'+object.img_ref4" /> 
                </div>
                <div class="bg-secondary m-1" style="width:80px; height:80px">
                    <img class=""  style="width:80px; height:80px" :src="PATH_PRODUCT_IMG+'/'+object.img_ref5" /> 
                </div>
        </div>

        <div >
            {{object.description}}
        </div>
        
        <!--
        <div class="mt-1" style="font-size:40px">
            <i class="bi bi-shuffle text-secondary"></i>
        </div>
        -->

        <div class="m-2">
            <i style="font-size:20px" class="bi bi-shuffle text-secondary"></i>  {{object.alternative1}}<br>
            <i style="font-size:20px" class="bi bi-shuffle text-secondary"></i> {{object.alternative2}}<br>
            <i style="font-size:20px" class="bi bi-shuffle text-secondary"></i> {{object.alternative3}}<br>
            <i style="font-size:20px" class="bi bi-shuffle text-secondary"></i> Cambiaría por Otros Objetos
                <text v-if="object.otherObj" style="font-size:25px" class="text-success">
                        SI
                </text>
                <text v-else class="text-danger" style="font-size:25px" >
                        NO
                </text>

            <br>
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
            showModal:false 
        }
    },

    props: ['session_data','object_details','object', 'showMakeOffer' ],
    emits: ['closeModalObjectDetails','showMyInventory'],

  created() {
		console.log("created lala inventory Object detailed")
			},

  methods: {
      },

  watch : {
        }
}
</script>
