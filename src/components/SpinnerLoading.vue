<script setup>
</script>

<template>
    <div v-if="spinner_on" class="spinner text-center mt-0 pt-5" style="transition:visibility 0.5s linear; opacity: 0.6 "  >
        <div  style="">
            <img src="/public/spinner1.gif" style="width:200px;height:200px;">
        </div>
    </div>  
</template>

<style scoped>

.spinner {
  
  position: absolute;
  z-index: 9999;
  /*margin : 0 auto; */
  left: 0px;
  top: 0px;
  width : 100% ;
  height : 80% ;
  background-color: rgba(26, 26, 26, 0.4);
}

</style>

<script>
export default {

  data : function() {
      return {
        spinner_on : false ,
      }
  },

  props: ['timeActive' ],
  emits: [],

created() {
    console.log("Spinner timeActive:"+this.timeActive)
       },

methods: {
   
    },

watch : {

    timeActive( newValue, oldValue ) {

        console.log("Spinner value:"+newValue);

        if (newValue == true)
        {
            console.log("Spinner On");
            this.spinner_on = true ;
        }
        else if (newValue == false)
        {
            console.log("Spinner Off");
            setTimeout( ()=> this.spinner_on = false , 0 )
            //this.spinner_on = false ;
        }
        else{
            console.log("Spinner Temporal");
            setTimeout( ()=> this.spinner_on = false , newValue )
        }
    },


      }
}
</script>

