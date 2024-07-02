<script setup>

</script>

<template>
 
 <div class="text-center">

    <h4><i class="bi bi-sign-stop display-3"></i>
        <br>
        Sesión Inválida<br> 
        Se hizo login desde otro dispositivo
    </h4>

   

</div>

</template>

<style>

</style>


<script>

export default {

  data : function() {
      return {
       novar : false, 

      }
  },
  props: ['session_data'],
  emits: ['goToLogin'],

created() {

    //this.session_data = null 
    //this.$emit('goToLogin'); 

    },

methods: {
   
    },

watch : {
      }
}
</script>


