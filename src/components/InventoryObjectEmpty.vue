<script setup>
</script>

<template>

  <div class="m-2">

    <div class="" style="width:100px">
        <div>
         
        </div>
        
        <div class="bg-dark" style="">
            <i class="display-1 bi bi-plus-lg"></i>
        </div>


        <div v-if="showProductDetails">
           aaa
        </div>
        <br>
        <div v-if="showProductPreference">
           ffffff
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
