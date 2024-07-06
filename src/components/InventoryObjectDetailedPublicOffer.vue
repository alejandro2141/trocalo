<script setup  >
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'

import { PATH_PRODUCT_IMG } from '../../config.js'


</script>

<template>
    

<div class="modal-centered bg-dark" >
        
    <div style="position:fixed ; top:0px ; right:0px" class="d-flex justify-content-end m-0 p-3 bg-dark"> 
            <i @click="closeModal()" class="bi bi-x-lg display-1" ></i>
    </div>

    
    <br>
    <div  class="mt-4" style="width:350px ; font-size:16px">
        
       

            <InventoryObjectDetailed  :object=object   :session_data="session_data" />
        
            <p v-if="session_data!=null && object!= null"  style="font-size:16px" class="w-100 text-start mt-2">
                    Valor Retiro y Despacho  <text style="font-size:20px" class="text-warning"> $10.000 </text>Clp
            </p>
        
        <div v-if="session_data!=null && object!= null"  class="m-4 pb-4 d-flex justify-content-center" >
              <!-- && session_data.id != objectDetails.owner_id && showModalDetails -->
            <div v-if="session_data.id!=null && session_data.id != object.owner_id" >

               
                <button @click="nextStep(object)"   type="button" class="btn btn-primary">
                    Me interesa este Objeto
                </button>
            </div>
            <div v-else >
                  Este objeto te pertenece
            </div>

        </div>

        <div v-else class="text-secondary d-flex justify-content-center">
            Usted debe estar registrado para comenzar a intercambiar 

            <!-- <button type="button" class="btn btn-success">Debe estar registrado</button> -->
        </div> 

    </div>

</div>
    

</template>

<style scoped>

.modal-centered{ 
    
    position: absolute;
    top: 0% ; 
    /*
    top: 80%;
    left: 50%;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    */
    }

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
           }
    },

    props: ['session_data','object' ],
    emits: ['closeModal','nextStep'],

  created() {
		console.log("created lala inventory Object detailed")
			},

  methods: {
    closeModal()
    {
        this.$emit('closeModal')
    },

    nextStep(obj)
    {
        console.log("go to exchange!! ")
        this.$emit('nextStep',obj)
    }


      },

  watch : {
        }
}
</script>
