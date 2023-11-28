<script setup>
import { ref } from 'vue'


</script>

<template>
    <div class="p-3 mb-2 text-white bg-dark " >
   
    <div class="d-flex justify-content-between mt-3">
         <cameraCapturer></cameraCapturer><br>
    <!--
        <i class="bi bi-person-bounding-box display-1 "></i>
    -->
       
           <p class="h4 text-center  mt-3  "> {{ session_data.name }} </p> 
           <text></text>        
    <!--     <i class="display-1 bi bi-x-lg ml-0 text-primary"   aria-label="Close" v-on:click="closeTabUserConfig()" ></i> 
    -->
    </div>
   
    <p class="text-center " > 
    </p>

         <div class="d-flex justify-content-between m-1">
            <text>Nº Documento</text> 
            <text>{{ session_data.rut }} </text> 
        </div>
        
        <div class="d-flex justify-content-between m-1">
            <text>Dirección Personal </text> 
            <text> {{ session_data.address_street}} {{ session_data.address_number}}</text> 
        </div>

        <div class="d-flex justify-content-between  m-1">
            <text>Teléfono Contacto Principal </text> 
            <text> {{ session_data.phone1}} </text> 
        </div>

        <div class="d-flex justify-content-between  m-1">
            <text>Teléfono Contacto Secundario </text> 
            <text> {{ session_data.phone2}} </text> 
        </div>

        <div class="d-flex justify-content-between m-1">
            <text>Estado Activo  </text> 
            <text> {{ session_data.active }} </text> 
        </div>

        <!--
        <div class="m-1 d-flex justify-content-between  m-1">
            <a class="text-white" target="_blank" rel="noopener noreferrer" :href="'/nested/publicSiteProfessional.html?prof_id='+professional_data.id">Ver Su Sitio Profesional</a>
            <i class="bi bi-arrow-right-square" ></i>
        </div>          
        

        
        <div class="d-flex justify-content-between  m-1"> 

             <text class="">
                <text class="text-center">Compartir su sitio en redes sociales </text>
                <p>
               &nbsp; <i class=" fs-1 bi bi-whatsapp "> </i> &nbsp; &nbsp;
               &nbsp; <i class=" fs-1 bi bi-facebook"></i> &nbsp;
                </p>
            </text>

        </div>
        -->

        <p>
            
        </p>
        <p>
            
        </p>

          <hr>
       



    </div>
</template>

<style scoped>
</style>


<script>

export default {
data: function () {

		return {
			data: null ,
            global_professional_specialties : [] ,
            professional_data : [] ,

		 }
	
    },

	props : ['session_data'],
  	emits : [] ,

    created () {
        },
 
    methods: {

      	},
  

}
</script>

