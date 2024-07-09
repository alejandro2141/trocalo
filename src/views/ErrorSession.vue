<script setup>

</script>

<template>
 
 <div class="text-center w-100 bg-dark text-white" style="position: absolute; top: 0;  left: 0;">

    <div class="m-4 p-4">
            <h4><i class="bi bi-sign-stop display-3"></i>
                <br>
                <br>
                Sesión Inválida<br> 
                Otro dispositivo hizo login con esta misma cuenta.
            </h4>
           <br>
            <text class="" style="" @click="$emit('sessionCreated',null ); " > 
                <button type="button" class="btn btn-success">Regresar</button>
            </text>

            <br>
            <br>
            <br>
            <br>
            <br>

    </div>
   

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


