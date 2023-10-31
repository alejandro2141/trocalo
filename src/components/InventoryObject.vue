<script setup>
</script>

<template>

  <div class="">

    <div class="border border-1" style="width:100px">
        <div>
            Play station 3
        </div>
        <div class="bg-secondary" style="width:100xp; height:100px">
            IMAGE
        </div>
        <div v-if="showProductDetails">
            No tiene reallados, con solo un control, no tienen juegos y esta desbloqueada
        </div>
        <br>
        <div v-if="showProductPreference">
            xbox con juegos 
            Bicicleta aro 23
            Otros
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
