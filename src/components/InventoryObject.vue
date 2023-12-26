<script setup>
</script>

<template>

  <div class=""    >

    
    <div v-if="horizontal"> 
        <div  @click="selectObject=!selectObject"  class="border border-2 rounded" :class="[selectObject ? 'border-white' : 'border-dark' , '' ]"  style="width:100px ; border-style: dotted"   >

                <div class="bg-white"  style="width:100px; height:100px">
                    <img class=""  style="width:100px; height:100px" src="" /> 
                </div>

                <div>
                    <div>
                    {{object.title}}
                    </div>
                    <div v-if="showProductDetails" class="text-secondary">
                        {{object.description}}
                    </div>
                    <br>
                    <div v-if="showProductPreference">
                        {{object.alternative1}}
                        {{object.alternative2}}
                        {{object.alternative3}}
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
                    {{object.title}}
                    </div>
                    <div v-if="showProductDetails" class="text-secondary">
                        {{object.description}}
                    </div>

                </div>

        </div>
    </div> 

    <div v-else class="" >
        <div  @click="selectObject=!selectObject"  class="border border-2 rounded" :class="[selectObject ? 'border-white' : 'border-dark' , '' ]"  style="width:100px ; border-style: dotted" >
                <div class="bg-white"  style="width:100px; height:100px">
                    <img class=""  style="width:100px; height:100px" src="" /> 
                </div>
               
                <div  class="d-flex align-items-center m-0">
                    {{object.title}}<br>
                    {{object.description}}
                </div>
        </div>

    </div>



  </div>

</template>

<style scoped>

</style>


<script>
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
