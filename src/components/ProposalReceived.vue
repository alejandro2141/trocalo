<script setup  >
import { PATH_PRODUCT_IMG } from '../../config.js'

</script>

<template>
 
 <div class="border border-1 rounded ">
    <div v-if="hasBlockedObjects!=null" class="text-info">
        <div @click="showFreezingMessage=!showFreezingMessage" class="d-flex justify-content-between">  
            <text> Propuesta Congelada.<br> Alguien se te ha adelantado!!</text>
            
            <i class="bi bi-snow "  style="font-size:36px"></i>   
        </div>

        <text v-if="showFreezingMessage">
          
            "{{hasBlockedObjects.title}}" de <b>@{{hasBlockedObjects.owner_name}}</b> <br>
            es parte de otro intercambio recientemente aceptado.<br>  
            En caso que los usuarios no concreten, esta ropuesta podria re activarse.<br>
            No pierdas las esperanzas!!!
        </text>
    </div>

   <div  :class="{'opacity-25': hasBlockedObjects!=null }"   >
    
   
    
    
<!-- HEADER -->
    <div  class="d-flex justify-content-between">
    
        <div v-if="isNewProposal()" class="text-primary text-start"  style="margin-top: -0.7em; margin-left: -0.5em; font-size:20px"> 
            <i  class="bi text-primary bi-star-fill"> </i>
        </div>
        <div v-else>
        </div>
    
        <div class=" m-1 "> 
            De @{{offer.source_owner_name}} 
        </div>

        <div class="text-warning">
        {{ evaluateRemainingDays(offer.timestamp) }} dias  <i style="font-size:20px" class="bi bi-clock-history"></i>
        </div>

    </div>
<!-- BODY -->  
   
    <div >
            
            <div class="d-flex justify-content-around">
                
                <!--COLUMN 1-->
                <div class="d-flex  flex-column"> 
                    <text class="text-secondary" >Tu Objeto</text>
                    <div class="d-flex align-items-center h-100" >
                    <img v-if="my_objects!=null && my_objects.length>0 " class=""  style="width:80px" :src="PATH_PRODUCT_IMG+'/'+my_objects[0].img_ref1+'_thumb'" /> 
                    </div>
                </div>

                <!--COLUMN 2-->
                <div class="d-flex align-items-center"> 
                    <i style="font-size:36px" class="bi bi-arrow-left-right"></i>  
                </div>

                <!--COLUMN 3-->
                <div class="d-flex align-items-start flex-column"> 
                    <text class="text-secondary">Por sus objetos</text>
                    
                    <div v-for="p_object in partner_objects">
                       
                       <img v-if="p_object!=null" class="m-1"  style="width:80px" :src="PATH_PRODUCT_IMG+'/'+p_object.img_ref1+'_thumb'" /> 
               
                    </div>

                </div>

            </div>

            <br>
        </div>
    </div>



 </div>

</template>

<style>

</style>


<script  >

import InventoryObject from '../components/InventoryObject.vue'
import InventoryObjectDetailed from '../components/InventoryObjectDetailed.vue'
import InventoryList from '../components/InventoryList.vue' 



export default {


  components: {
    InventoryObject,InventoryObjectDetailed,InventoryList
  },
  
  data : function() {
      return {
        hasBlockedObjects: null  ,
        showFreezingMessage : false ,
      }
  },
  props: ['session_data','accepted' ,'offer','my_objects', 'partner_objects' ],
  emits: [],

created() {

    console.log(" CREATED Proposal Received "+this.my_objects)
    this.hasBlockedObjects = this.getObjBlocked() 

    },

methods: {

    getObjBlocked()
    {
      //let all_objects =  this.objectsProposal.filter((element) =>  ids.includes(element.id) ) 
      let all_objects = this.my_objects.concat(this.partner_objects)
      const found = all_objects.find((element) => element.blocked_due_proposal_accepted);
      if ( found === undefined) 
        {
            return null 
        }
       else 
       {
            return found
       };

    },

    isNewProposal()
    {
        let creationDate = new Date(this.offer.timestamp)
        let cdate = new Date()

        if ( (cdate.getTime() - creationDate.getTime()) < (1000 * 60 * 60 * 24))
        {
            return true 
        }
        else 
        {
            return false 
        }
    },

    evaluateRemainingDays(timestamp)
    {
        let creationDate = new Date(timestamp)
        let cdate = new Date()

        let days_passed = ( cdate.getTime() - creationDate.getTime() ) / (1000 * 60 * 60 * 24)  ;
        let days_remaining =   this.offer.proposal_days - days_passed
        return Math.floor(days_remaining)
    },

  evaluateOfferStatus(val)
    {
       
        switch (val) {
                case '1':
                    return ('Recibida')
                    break;
                case '100':
                    return ('Aceptada')
                    break;
                case '200':
                    return ('Rechazada')
                    break;
                case 4:
                    return ('Expirada')
                    break;
                case 5:
                    return ('Recibida')
                    break;
                default:
                    return ('Failed Status')
                    break;
                }
    }

    
    },

watch : {
      }
}
</script>


