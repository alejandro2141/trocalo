<script setup  >
</script>

<template>

  <div class=""    >

    
    <div v-if="horizontal"> 
        <div  @click="selectObject=!selectObject"  class="border border-2 rounded" :class="[selectObject ? 'border-white' : 'border-dark' , '' ]"  style="width:100px ; border-style: dotted"   >

                <div class="bg-white"  style="display: grid;align-items: center;width:100px; height:100px">
                   +
                </div>

                <div>
                    <div>
                   
                    </div>
                    <div v-if="showProductDetails" class="text-secondary">
                       
                    </div>
                    <br>
                    <div v-if="showProductPreference">
                       
                    </div>
                </div>
        </div>
    </div> 

    <div  v-else-if="horizontal_short"> 
        <div  @click="selectObject=!selectObject"  class="d-flex justify-content-start border border-2 rounded" :class="[selectObject ? 'border-white' : 'border-dark' , '' ]"  style=" border-style: dotted"   >

                <div class="bg-white" style="width:100px; height:100px" >
                    <img class=""  style="width:100px; height:100px" src="" /> 
                </div>

                <div class="m-1">

                    <div>
                   
                    </div>
                    <div v-if="showProductDetails" class="text-secondary">
                       
                    </div>

                </div>

        </div>
    </div> 

    <div v-else class="" >
        <div  @click="selectObject=!selectObject"   style="width:100px ;" >
                <div class="bg-dark w-100 border border-2 rounded text-center "   :class="[selectObject ? 'border-white' : 'border-secondary' , '' ]"   style="width:100px; height:100px;align-items: center;display: grid;	align-items: center;">
                    <i style="font-size:40px" class="bi bi-plus-lg "></i>
                </div>
               
                <div  class="d-flex align-items-center m-0">
                   <br>
                   <br>
                   <br>
                   <br>
                </div>
        </div>

    </div>



  </div>

</template>

<style scoped>

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

    props: ['showProductDetails','horizontal_short','horizontal' ,'object' ],
    emits: [],

	created() {
		console.log("created lala inventory Object")
	
			},



  methods: {
      },

  watch : {

            isActive(newval)
            {
                console.log("selected "+newval);
            },

        }
}
</script>
