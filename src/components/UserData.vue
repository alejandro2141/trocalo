<script setup>

import { ref } from 'vue'
import axios from 'axios'
import { REGION_ZONES, BKND_CONFIG } from '../../config.js'

</script>

<template>
    <div class="p-3 mb-2 text-white bg-dark " >


    <div v-if="showData">
   
            <div class="d-flex justify-content-between mt-3">
            <!--
                <i class="bi bi-person-bounding-box display-1 "></i>
            -->
                   <p class="h4 text-center  mt-3  "> {{ session_data.name }} </p> 
                   <text></text>        
            <!--     <i class="display-1 bi bi-x-lg ml-0 text-primary"   aria-label="Close" v-on:click="closeTabUserConfig()" ></i> 
            -->
            </div>
           
            <p class="text-start " > 
            </p>

                 <div class="d-flex justify-content-between m-1">
                    <text>Nº Documento</text> 
                    <text>{{ session_data.rut }} </text> 
                </div>
                
<br>
                <div class="text-start">Tu Dirección</div>

                <div class="d-flex justify-content-between m-1">
                    <text>calle :</text>
                     <text v-if="!showEdit">{{address_street}}</text>
                    
                    <input v-else type="text"  autocomplete="off" class="form-control border-2 w-50" :class="[{ 'border-success ' : (valid_address_street==3)},{ 'border-danger' : (valid_address_street==1)}]" id="inputPhone" placeholder="Ej: XXXXXXXXX" v-model="address_street">

                </div>

                <div class="d-flex justify-content-between m-1">
                    <text>Numero : </text> 
                    <text v-if="!showEdit">{{address_street_number}}</text>

                    <input v-else type="text"  autocomplete="off" class="form-control border-2 w-50" :class="[{ 'border-success ' : (valid_address_street_number==3)},{ 'border-danger' : (valid_address_street_number==1)}]" id="inputAddressNumber" placeholder="Ej: XXXXXXXXX" v-model="address_street_number">
                
                </div>

                <div class="d-flex justify-content-between m-1">
                    <text>N° Departamento: </text> 
                    <text v-if="!showEdit">{{address_apartment}}</text>

                    <input v-else type="text"  autocomplete="off" class="form-control border-2 w-50" :class="[{ 'border-success ' : (valid_address_street_number==3)},{ 'border-danger' : (valid_address_street_number==1)}]" id="inputAddressNumber" placeholder="Ej: XXXXXXXXX" v-model="address_apartment">
                
                </div>


                <!-- COMUNA -->
                <div v-if="commune!=null" class="d-flex justify-content-between m-1">
                    <text>Comuna : </text>
                    
                    <text v-if="!showEdit" @click="showSelectCommune=!showSelectCommune" >{{ commune.name }}</text> 
                    <div v-else class="w-50">
                    
                        <select class="form-select form-select border-2"  name="languages" id="zone" :class="[{ 'border-success' : (valid_address_location_commune==3)},{ 'border-danger' : (valid_address_location_commune==1)}]"  v-model="address_location_commune" placeholder="XXX" >
                            <option  value="0">- Seleccione Comuna -</option>        
                            <option v-for="comuna in comunas_list_filtered" :value="comuna.identifier" >{{comuna.name}}</option>        
                        </select>

                    </div>

                </div>
                <!-- END COMUNA -->


                <!-- REGION -->
                <div v-if="region!=null" class="d-flex justify-content-between m-1">
                    <text>Región :</text>
                    <text v-if="!showEdit" @click="showSelectRegion=!showSelectRegion">{{  region.name }} </text> 

                    <div v-else class="w-50">
                        <select class="form-select form-select border-2"  name="languages" id="region" :class="[{ 'border-success' : (valid_address_location_region==3)},{ 'border-danger' : (valid_address_location_region==1)}]" v-model="address_location_region" placeholder="Seleccione" >
                             <option  value="0">-- Seleccione ---</option>        
                            <option v-for="regiona in REGION_ZONES.regions" :value="regiona.romanNumber" >{{regiona.name}}</option>        
                        </select>
                    </div>
                </div>
                <!-- END REGION -->


                <div class="d-flex justify-content-between  m-1">
                    <text>Teléfono Contacto </text> 
                    <text v-if="!showEdit">{{phone}}</text>

                    <input v-else type="text"  autocomplete="off" class="form-control border-2 w-50" :class="[{ 'border-success ' : (valid_phone==3)},{ 'border-danger' : (valid_phone==1)}]" id="inputPhone" placeholder="Ej: XXXXXXXXX" v-model="phone">


                    
                </div>

                <div v-if="session_data.phone2!=null" class="d-flex justify-content-between  m-1">
                    <text>Teléfono Contacto Secundario </text> 
                    <text> {{ session_data.phone2}} </text> 
                </div>

                
                <div v-if="showEdit" >

                    <button   @click="showEdit=false" type="button" class="btn btn-secondary"> Cancelar  </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button   @click="showEdit=false;saveUserData()" type="button" class="btn btn-secondary"> Guardar  </button>
                    
                </div>
                        
                        

                <div v-else class="d-flex justify-content-end">
                    <button  @click="showEdit=true" type="button" class="btn btn-secondary"> Modificar mis datos <i class="bi bi-pencil"></i>  </button>

                </div>
                    
                   

                


        </div>

       <div v-else>


        <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />



       </div>


        


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
            showData : true ,

            region : null,
            commune: null,

            valid_phone : false ,
            phone : this.session_data.phone1 ,

            valid_address_street: false ,
            address_street : this.session_data.address_street ,

            valid_address_street_number : false ,
            address_street_number : this.session_data.address_number ,
            
            valid_address_location_region : false ,
            showSelectRegion : false ,

            valid_address_location_commune : false ,
            address_location_commune : false ,

            showSelectCommune : false ,
            comunas_list_filtered : null ,

            address_location_region : null ,

            showEdit: false ,

            address_apartment :  this.session_data.address_apartment,

            address_reference : null ,



		 }
	
    },

	props : ['session_data'],
  	emits : ['restartSession'] ,

    created () {
        //communes comes in code: Region-Commune ex XIII-13 is Metropolitana and Independencia 
        this.getRegion(this.session_data.address_zone1)
        this.getCommune(this.session_data.address_zone1)
        //this.address_location_region = this.region.name

        this.address_location_region = this.region.romanNumber
        this.address_location_commune = this.commune.identifier


        },
 
    methods: {

        async saveUserData()
        {
           //validate before send
            if (true)
            {
                if (confirm("Al actualizar sus datos, deberá hacer login nuevamente. ¿ Desea continuar ? ") == true) 
                {

                    //alert("Gracias por su Registro, Pronto nos pondremos en contacto con usted")
                    if (this.address_apartment_number == null)
                    {this.address_apartment_number = 0}

                    let json_request = { 
                            session_data             : this.session_data ,
                            address_street           : this.address_street , 
                            address_street_number    : this.address_street_number ,
                            address_location_commune : this.address_location_commune ,
                            address_location_region  : this.address_location_region  ,
                            address_apartment        : this.address_apartment ,
                            phone                    : this.phone ,
                            address_reference        : this.address_reference ,
                              }

                    console.log ("private_update_user_data  REQUEST :"+ JSON.stringify(json_request)  );
                    let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_update_user_data",json_request );
                    console.log ("private_update_user_data  RESPONSE:"+JSON.stringify(response_json.data)) ;  

                    this.$emit('restartSession');

                 }

            }

        },


        async getRegion(address_zone)
        {
           let code =  address_zone.split("-")[0]
           let aux =  REGION_ZONES.regions.find ( o => o.romanNumber == code  )
           this.comunas_list_filtered = aux.communes
           this.region = aux
        },

         async getCommune(address_zone)
        {
           let code =  address_zone.split("-")[1]
           let aux =  this.region.communes.find ( o => o.identifier == address_zone  )
           this.commune = aux
        },


      	},

        watch : {
        
        async address_location_region(newVal,oldVal)
        {
          console.log("New Region  found  "+newVal)
          
          this.getRegion(newVal)
          this.showSelectCommune =  true 

          //this.comunas_list_filtered = this.region.communes
        }
        

    }
  

}
</script>

