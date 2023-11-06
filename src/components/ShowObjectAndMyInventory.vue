<template>
<div style="width:400px">


    <div v-if="!showSenderConfirmation">

      <div class="w-100 m-2 "  >
        Propuesta Intercambio   <a href="/"> X </a>
      </div>
      Objeto de tu interes

      <!-- Desire Object + Plus -->
      <div class="d-flex align-content-stretch flex-wrap">
            <InventoryObject      @click="showPartnerObjectDetailed=true"/> 
            <InventoryObjectEmpty @click="showPartnerInventory=true" />
        </div>
        
      <!-- Show Inventory Partner -->
        <div v-if="showPartnerInventory">
          <text @click="showPartnerInventory=false">X</text> 
          <InventoryList />
        </div>

      <!-- Show Object Details  -->  
        <div v-if="showPartnerObjectDetailed">
          <text @click="showPartnerObjectDetailed=false">X</text> 
          <InventoryObjectDetailed />
        </div>

      Selecciona Objetos de tu inventario para intercambiar

      <!-- Desire Object + Plus -->
      <div class="d-flex align-content-stretch flex-wrap">
            <InventoryObject      @click="showMyObjectDetailed=true"/> 
            <InventoryObjectEmpty @click="showMyInventory=true" />
        </div>
      <!-- Show Object Details  -->  
        <div v-if="showMyObjectDetailed">
          <text @click="showMyObjectDetailed=false">X</text> 
          <InventoryObjectDetailed />
        </div>  
      <!-- Show Inventory Partner -->
        <div v-if="showMyInventory">
          <text @click="showMyInventory=false">X</text> 
          <InventoryList />
        </div>

        <br>

        <div class="form-check">  
          <label class="form-check-label" for="flexCheckChecked">
          Abierto a intercambiar por otros productos. 
          </label>
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        </div>

        <div>
          Esta propuesta será valida por: 
          <div class="w-25">
              <select class="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
          </div>
        </div>
        <br>

        <div>
          $39.000 es el costo de Retiro y despacho de estos productos que usted debera pagar. 
        </div>

        <button @click="showSenderConfirmation=true" type="button" class="btn btn-success">Enviar</button>
        <button type="button" class="btn btn-danger">Cancelar</button>

    </div>


    <div v-if="showSenderConfirmation" class="position-absolute top-50 start-50 translate-middle bg-dark">
      <text @click="showSenderConfirmation=false">x</text>
      <ShowSenderTransactionConfirmation />
    </div>


</div>
</template>

<style scoped>

</style>


<script>
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryObject from './InventoryObject.vue'
import InventoryList from './InventoryList.vue'
import InventoryObjectEmpty from './InventoryObjectEmpty.vue'
import ShowSenderTransactionConfirmation from './ShowSenderTransactionConfirmation.vue'


export default {

  components: {
    InventoryObjectDetailed,InventoryList,InventoryObjectEmpty,InventoryObject,ShowSenderTransactionConfirmation
  },
  
  data : function() {
      return {
        //showModalDetails: false,
        //showYourInventory : false ,
        showPartnerInventory : false ,
        showPartnerObjectDetailed: false ,

        showMyObjectDetailed: false,
        showMyInventory: false, 
        showSenderConfirmation : false ,
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

