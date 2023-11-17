<script setup>
</script>

<template>

  <div class=""   >


    <div v-if="showConfirmMode" class="d-flex justify-content-start" >
                <div class="bg-white"  style="width:100px; height:100px">
                IMAGE
                </div>
                <div  class="d-flex align-items-center m-2">
                    Play station 3
                </div>
    </div>
    <div v-else> 

        <div  @click="selectObject=!selectObject"  class="border border-2 rounded" :class="[selectObject ? 'border-white' : 'border-dark' , '' ]"  style="width:100px ; border-style: dotted"   >

                <div class="bg-white"  style="width:100px; height:100px">
                IMAGE
                </div>
                <div>
                   {{object.name}}
                </div>
                
                <div v-if="showProductDetails" class="text-secondary">
                    {{object.description}}
                </div>
             
                <br>
                <div v-if="showProductPreference">
                    {{object.alt1}}<br>
                    {{object.alt2}}<br>
                    {{object.alt3}}<br>
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

    props: ['showProductDetails','showProductPreference','isActive','showDeleteOption', 'showConfirmMode' ,'object' ],
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
