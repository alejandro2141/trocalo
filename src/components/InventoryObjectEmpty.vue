<script setup>
</script>

<template>


<div class="d-flex justify-content-center w-100" >
         <i class="display-1 bi bi-plus-lg"></i>
</div>

    

<!-- 
    <div class="" style="width:100px; height:100px;  display: flex; justify-content: center;  align-items: center; border-style: dashed;">
        
        

            <i class="display-1 bi bi-plus-lg"></i>
        
    </div> 
-->


</template>

<style scoped>

</style>


<script>
//const showForm = ref(false)


export default {
  
    data : function() {
        return {
        lala : true ,
        }
    },

    props: ['showProductDetails','showProductPreference' ],
    emits: [],

	created() {
		console.log("created lala inventory Object")
	
			},



  methods: {
      },

  watch : {
        }
}
</script>
