<script setup>
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
            {{object.name}}
        </div>
        <div style="font-size:16px">
            {{object.owner}}
        </div>
        <div class="bg-secondary" style="width:350px; height:300px">
            IMAGE
        </div>
        
        <div class="d-flex justify-content-start ">
                <div class="bg-secondary m-1 " style="width:60px; height:60px">
                    IMAGE
                </div>
                <div class="bg-secondary m-1" style="width:60px; height:60px">
                    IMAGE
                </div>
                <div class="bg-secondary m-1" style="width:60px; height:60px">
                    IMAGE
                </div>
                <div class="bg-secondary m-1" style="width:60px; height:60px">
                    IMAGE
                </div>
        </div>

        <div >
            {{object.description}}
        </div>
        <div class="mt-1" style="font-size:20px">
           Cambiaria por:  
        </div>
        <div>
            {{object.alt1}}<br>
            {{object.alt2}}<br>
            {{object.alt3}}<br>
        </div>
        <div class="mt-1" style="font-size:20px">
           Cambiaria por otros objetos:  
           <div v-if="object.otherObj">
                SI
           </div>
           <div v-else >
                NO
           </div>

        </div>

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
