<template>
<div style="width:400px">



  Estas cambiando: 

  <!-- Desire Object + Plus -->
    <div class="d-flex align-content-stretch flex-wrap">
        <InventoryObject      @click="showPartnerObjectDetailed=true"/> 
        <InventoryObject      @click="showPartnerObjectDetailed=true"/> 
    </div>
 Por los siguientes productos. 
  <!-- Desire Object + Plus -->
    <div class="d-flex align-content-stretch flex-wrap">
        <InventoryObject      @click="showMyObjectDetailed=true"/> 
        <InventoryObject      @click="showMyObjectDetailed=true"/> 
    </div>

    <br>

    <div>
       Abierto a intercambiar por otros productos.  Si. 
    </div>

    <div>
      Esta propuesta será valida por:  25 dias
    </div>
    
    <div>
      $39.000 es el costo de Retiro y despacho de estos productos que usted debera pagar. 
    </div>

    <button @click="showConfirmSend=true;"  type="button" class="btn btn-success">Enviar</button>
   


    <div v-if="showConfirmSend">
        Su solicitud ha sido enviada, podra revisar el estado en el panel superior.
      
        <a class="button" href="/">OK</a>
     </div>


</div>
</template>

<style scoped>

</style>


<script>
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryObject from './InventoryObject.vue'



export default {

  components: {
    InventoryObjectDetailed,InventoryObject
  },
  
  data : function() {
      return {
        showConfirmSend : false ,
        showPartnerObjectDetailed: false ,
        showMyObjectDetailed: false,
             }
  },
  props: ['session_data'],
  emits: ['closeThisModal'],

created() {
  console.log("APP CREATED")
    },

methods: {
    
    closeModalObjectDetails()
    {
      this.showModalDetails= false
    },

    goToMainSearch()
    {
      console.log("goTOMainSearch")
    },

    },

watch : {
      }
}
</script>

