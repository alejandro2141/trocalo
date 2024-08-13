<script setup  >
import { PATH_PRODUCT_IMG, CATEGORIES } from '../../config.js'

</script>

<template>

  <div class=""    >
   

    <div  v-if="display_horizontal_short &&  object!=null"> 
        <div v-if="object!=null" @click="selectObject=!selectObject"  class="w-100 border border-2 rounded d-flex justify-content-start" :class="[(selectObject && !object.blocked_due_proposal_accepted) ? 'border-dark bg-success' : 'border-dark' , '' ]"  style="width:110px ; border-style: dotted" >
                
                <div class=" image-container rounded text-center"  style="width:100px; height:100px">
                    <div class="image-container img  w-110 text-center">
                        <img class="m-1" style="max-height: 100px; max-width: 100px; border-radius: 6px;" :src="PATH_PRODUCT_IMG+'/'+object.img_ref1+'_thumb'" />
                    </div>
                   
                </div>
               &nbsp;&nbsp;
                <div  class="d-flex align-items-center m-1">
                    {{object.title}}<br>
                 <!-- {{object.description}} -->
                </div>
        </div>
    </div> 

    <!-- INVENTORY OBJECT  -->
    <div v-else class="" >
        <div v-if="object!=null" @click="selectObject=!selectObject"  class="border border-2 rounded" :class="[(selectObject && !object.blocked_due_proposal_accepted) ? 'border-dark bg-success' : 'border-dark' , '' ]"  style="width:120px ; border-style: dotted" >
                <div class=" image-container rounded text-center"  style="width:120px; height:120px">
                    <div class="image-container img  w-100 text-center">
                        <img class="m-1" style="max-height: 115px; max-width: 115px; border-radius: 6px;" :src="PATH_PRODUCT_IMG+'/'+object.img_ref1+'_thumb'" />
                    </div>
                    <div v-if="object.blocked_due_proposal_accepted" class="overlay-text"  >
                        <i  style="font-size:40px" class="bi bi-unlock text-white"></i>
                    </div>
                </div>
               
            <div class="d-flex align-items-center">
                <div  class="d-flex align-items-start m-1">
                <i class="text-warning" :class="getCategoryIcon(object.category1)"></i> &nbsp;   {{object.title}}<br>
                 <!-- {{object.description}} -->
                </div>
            </div>


        </div>
    </div>



  </div>

</template>

<style scoped>

.image-container {
  position: relative;
  display: inline-block;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
}

.overlay-text {
  width:95px; 
  height:95px ;
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  background-color: #000000;  
  opacity:0.5;
  color: #fff; 
  padding: 0px 0px; 
  font-size: 20px; 
  text-align: center;
}




</style>


<script  >
//const showForm = ref(false)


export default {
  
    data : function() {
        return {
        lala : true ,
        selectObject : false ,
        }
    },

    props: ['showProductDetails','display_horizontal_short','horizontal' ,'object' ],
    emits: [],

	created() {
		console.log("created lala inventory Object")
	
			},



  methods: {

    getCategoryIcon(cat)
    {

        let iconData = CATEGORIES.find((element) => element.id === cat);
        console.log("icon data found:"+JSON.stringify(iconData) )
        return iconData.icon
    },

    isLocked()
    {
        if (object.blocked_due_proposal_accept)
        {
            return 
        }
        else 
        {

        }
    },




      },

  watch : {

            isActive(newval)
            {
                console.log("selected "+newval);
            },

        }
}
</script>
