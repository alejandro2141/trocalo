<script setup  >

import { PATH_PRODUCT_IMG , CATEGORIES } from '../../config.js'


</script>

<template>

<!-- 
<div  class="position-absolute top-50 start-50 translate-middle bg-dark">
-->


<div style="width:350px">

    <div  v-if="showObjectDetail" class=" mt-0 pt-0 w-100" style=" font-size:16px;width: 100%">

    <div class="" style="width: 100%">
  
        <br>
        <div style="font-size:20px">
       <i class="text-warning" :class="getCategoryIcon(object.category1)"></i>   {{object.title}} 
        </div>
       
      
        <div class="bg-dark text-center" style="max-height: 350px; max-width: 350px;">
            <img @click="zoomImage()"  style="max-height: 350px;max-width:350px;border-radius: 7px;" :src="main_image+'_thumb'"  /> 
        </div>
        <br>

        
        <div class="d-flex justify-content-start ">
                <div v-if="image1!=null"  class="bg-dark m-1 text-center" :class="{'border-2 border-top': (image1 == main_image) }" style="width:60px; height:60px">
                    <img @click="viewImage(image1)" onerror="this.style.display='none'" class="mt-1"  style="max-width:60px;max-height:70px;border-radius: 3px;" :src="image1+'_thumb'"  /> 
                </div>

                <div v-if="image2!=null"  class="bg-dark m-1 text-center" :class="{'border-2 border-top': (image2 == main_image) }" style="width:60px; height:60px">
                    <img @click="viewImage(image2)" onerror="this.style.display='none'" class="mt-1"  style="max-width:60px;max-height:70px;border-radius: 3px; " :src="image2+'_thumb'"  /> 
                </div>
                <div v-if="image3!=null"  class="bg-dark m-1 text-center" :class="{'border-2 border-top': (image3 == main_image) }" style="width:60px; height:60px">
                    <img @click="viewImage(image3)" onerror="this.style.display='none'" class="mt-1"  style="max-width:60px;max-height:70px;border-radius: 3px; " :src="image3+'_thumb'" /> 
                </div>
                <div v-if="image4!=null" class="bg-dark m-1 text-center" :class="{'border-2 border-top': (image4 == main_image) }" style="width:60px; height:60px">
                    <img @click="viewImage(image4)"  onerror="this.style.display='none'" class="mt-1"  style="max-width:60px;max-height:70px;border-radius: 3px; " :src="image4+'_thumb'" /> 
                </div>
                <br>
              
                <div v-if="image5!=null"  class="bg-dark m-1 text-center" :class="{'border-2 border-top': (image5 == main_image) }"  style="width:60px; height:60px">
                    <img @click="viewImage(image5)" onerror="this.style.display='none' " class="mt-1"  style="max-width:60px;max-height:70px;border-radius: 3px;" :src="image5+'_thumb'" /> 
                </div>
            
        </div>
        
        <br>
        <div v-if="object.description!='null'">
            {{object.description}}
        </div>
        
     
  

        <div v-if="object.blocked_due_proposal_accepted">
            <i style="font-size:40px" class="bi bi-unlock text-secondary"></i> 
            Objeto asociado a intercambio aceptado. 
        </div>
       
        <div  v-if="object.alternative1 != 'null' || object.alternative2 != 'null' || object.alternative3 != 'null'  ">
            <br>
            <text class="text-white" style="font-size:16px"> @{{object.owner_name}} cambiaria por:</text>
            <div class="m-2">
                <i v-if="object.alternative1 != 'null'" style="font-size:16px" class="bi bi-shuffle text-white"> &nbsp;&nbsp; {{object.alternative1}} </i> <br v-if="object.alternative1 != 'null'">
                <i v-if="object.alternative2 != 'null'" style="font-size:16px" class="bi bi-shuffle text-white"> &nbsp;&nbsp; {{object.alternative2}} </i> <br v-if="object.alternative2 != 'null'">
                <i v-if="object.alternative3 != 'null'" style="font-size:16px" class="bi bi-shuffle text-white"> &nbsp;&nbsp; {{object.alternative3}} </i> <br v-if="object.alternative3 != 'null'">
             </div>
        </div>

  </div> 

  </div>

  <div v-if="showZoomImage" class="bg-dark w-100  h-100 d-flex justify-content-center" style="position:fixed;  top:0px ; left:0 ; z-index:99 ; "  >
  
    <div class="bg-dark text-center m-0 p-0" style="max-width:350px ;  ">

        <div style="opacity: 1.9;position:fixed; z-index:101; right:0; top:0" class="bg-secondary"> 
            <i  @click="showZoomImage=false ;showObjectDetail=true  " class="display-1 p-2 m-0 bi bi-x-lg"></i>  
        </div>
        <img class="bg-dark mt-3" style="position:static;  top:0px ; border-radius: 5px; "  :src="main_image"  /> 
  
    </div>

  
  </div>

        
    
    
</div>
</template>

<style scoped>




/*
.zoom {      
-webkit-transition: all 0.35s ease-in-out;    
-moz-transition: all 0.35s ease-in-out;    
transition: all 0.35s ease-in-out;     
cursor: -webkit-zoom-in;      
cursor: -moz-zoom-in;      
cursor: zoom-in;  
} 

.zoom:hover,  
.zoom:active,   
.zoom:focus {
-ms-transform: scale(2.5);    
-moz-transform: scale(2.5);  
-webkit-transform: scale(2.5);  
-o-transform: scale(2.5);  
transform: scale(2.5);    
position:relative;      
z-index:100;  
}
*/
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
            showModal:false  ,
            main_image: PATH_PRODUCT_IMG+'/'+this.object.img_ref1 ,
            image1: PATH_PRODUCT_IMG+'/'+this.object.img_ref1 ,           
            image2: PATH_PRODUCT_IMG+'/'+this.object.img_ref2 ,
            image3: PATH_PRODUCT_IMG+'/'+this.object.img_ref3 ,
            image4: PATH_PRODUCT_IMG+'/'+this.object.img_ref4 ,
            image5: PATH_PRODUCT_IMG+'/'+this.object.img_ref5 ,
            imgDisp:1,

            showObjectDetail : true ,
            showZoomImage : false , 


        }
    },

    props: ['session_data','object_details','object', 'showMakeOffer' ],
    emits: ['closeModalObjectDetails','showMyInventory'],

  created() {
		console.log("created lala inventory Object detailed")
			},

  methods: {


        getCategoryIcon(cat)
        {
            let iconData = CATEGORIES.find((element) => element.id === cat);
            console.log("icon data found:"+JSON.stringify(iconData) )
            return iconData.icon
        },

        hiddeImg(val)
        {
            console.log("ERROR Hide image "+val)

        },

        zoomImage()
        {
            this.showObjectDetail=false 
            this.showZoomImage = true 
            
        },

        viewImage(image)
        {
            this.main_image = image
            console.log("image to view: "+image)    
        }

      },

  watch : {
        }
}
</script>
