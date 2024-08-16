<script setup  >
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'

import { PATH_PRODUCT_IMG,SHIPPING_PRICE } from '../../config.js'


</script>

<template>
    

<div class="w-100 bg-dark"  style="position:absolute ; top:0px ; right:0px;">
        
    <div style="position:absolute ; top:0px ; right:0px; z-index:10 ;" class="d-flex justify-content-end m-0 p-0 bg-dark"> 
            <i @click="closeModal()" class="bi bi-x-lg display-1" ></i>
    </div>

    
    <div class="d-flex justify-content-center">
    <div  class="mt-4" style="width:350px ; font-size:16px">
        
            <InventoryObjectDetailed  :object=object   :session_data="session_data" />
        
            <p v-if="object!= null"  style="font-size:16px" class="w-100 text-start mt-2">
                    Valor Retiro y Despacho  <text style="font-size:20px" class="text-warning"> ${{SHIPPING_PRICE}} </text> Clp
            </p> 
        
        <div v-if="session_data!=null && object!= null"  class="m-4 pb-4 d-flex justify-content-center" >
              
            <div v-if="session_data.id!=null && session_data.id != object.owner_id" >
                <button @click="nextStep(object)"   type="button" class="btn btn-primary">
                    Me interesa este Objeto
                </button>
            </div>
            <div v-else >
                  Este objeto te pertenece
            </div>



        </div>

        <div v-else class="text-secondary d-flex justify-content-center border border-1 p-4">
            Usted debe estar registrado para comenzar a intercambiar 
        </div>

        <div class="d-flex justify-content-center m-2 text-success">
     
            <a class="button text-success" :href="'whatsapp://send?text='+getTextToShareURLEncoded(object)+' '" data-action="share/whatsapp/share">

                compartir
                <i style="font-size: 26px" class="bi bi-whatsapp text-success p-2"></i>
                

            </a>

        </div>
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

    getTextToShareURLEncoded(obj)
    {
        let text_share=`Este objeto esta disponible para Intercambiar 
         ${obj.title}
         `

         if (obj.description != "null"  )
         {
         text_share = text_share + obj.description 
         }

         if (obj.alternative1 != "null"  )
         {
         text_share = text_share + " Lo cambiaria por:"+obj.alternative1
         }

        text_share=text_share+ `Puedes hacer una propuesta de intercambio en:  https://reusar.cl/ViewObjectFromSocial?id=${obj.id} `;
         

        return  encodeURI(text_share);
    },

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
