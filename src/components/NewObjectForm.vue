<template>
 
 <div>

  <div v-if="step1">

    <div>
      <input type="text" placeholder="Titulo"   id="searchText" name="searchText" class="form-control-lg mt-1 bg-dark    text-white border-white" required minlength="4" maxlength="20"  />
    </div>

    <div class="d-flex flex-wrap w-100">

      <div style="width:150px; height:150px" class="bg-white m-1 ">
      </div>

      <div style="width:100px; height:100px" class="bg-white m-1 ">
      </div>

      <div style="width:100px; height:100px" class="bg-white m-1 ">
      </div>

      <div style="width:100px; height:100px" class="bg-white m-1 ">
      </div>

      <div style="width:100px; height:100px" class="bg-white m-1 ">
      </div>

    </div>

    <div>
      <textarea  placeholder="Descripcion del objeto" class="form-control-lg mt-1 bg-dark text-white border-white" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    
    <br>
    <div>
        <p style="font-size:20px">
          Cambiaria Por: 
        </p>
        <div>
          <input type="text" placeholder="Robot asesino Gigante"   id="searchText" name="searchText" class="form-control-lg mt-1 bg-dark text-white border-white" required minlength="4" maxlength="20"  />
        </div>
        <div>
          <input type="text" placeholder="Delorean polarizado"   id="searchText" name="searchText" class="form-control-lg mt-1 bg-dark text-white border-white" required minlength="4" maxlength="20"  />
        </div>
        <div>
          <input type="text" placeholder="Ferrary 4fwd"   id="searchText" name="searchText" class="form-control-lg mt-1 bg-dark text-white border-white" required minlength="4" maxlength="20"  />
        </div>
    </div>
    
    <br>
    <div>
        <p style="font-size:20px">
         Cambiaria por otros Objetos? <br> <button type="button" class="btn btn-dark border-white">NO</button>  <button type="button" class="btn btn-success">SI</button>
        </p>
    </div>

    <br>
    <div class="d-flex justify-content-center display-1 text-success w-100 bg-dark p-3 " >
        <i @click="step1=false;showRequestConfirmation=true" class="bi bi-cloud-upload"></i>
    </div>
    

  </div>


  <div v-if="showRequestConfirmation"  style="width:350px;height:500px">
     <div class="position-absolute top-0  text-center start-0 bg-dark w-100 h-100" >
        <div>
            <!-- SPACE FILLER -->
            <p style="height:300px">
            </p>
            Articulo Guardado con Exito en tu Inventario
        </div>
      <br>
        <div class="d-flex justify-content-center">
           <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div class="d-flex justify-content-center">

                <a href="/">
                <i class="text-success bi bi-house" style="font-size:40px "></i> 
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

import InventoryObject from '../components/InventoryObject.vue'
import InventoryObjectDetailed from '../components/InventoryObjectDetailed.vue'
import InventoryList from '../components/InventoryList.vue' 



export default {


  components: {
    InventoryObject,InventoryObjectDetailed,InventoryList
  },
  
  data : function() {
      return {
        step1 : true ,
        showRequestConfirmation: false,

      }
  },
  props: ['session_data'],
  emits: [],

created() {
    },

methods: {
    },

watch : {
      }
}
</script>


