<script setup>
</script>

<template>
    <div v-if="spinner_on" class="spinner text-center mt-0 pt-5 bg-dark w-100 d-flex justify-content-center" style="transition:visibility 0.5s linear; opacity: 0.9 ;width:350px; ;position:fixed"  >
        <div  style="width:350px">
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

  props: ['timeActive' , 'onOff' ],
  emits: [],

created() {
    console.log("Spinner Loading:"+this.timeActive + "  onOff:"+this.onOff)
   // this.spinner1sec()
       },

methods: {

    spinner1sec() {
      this.spinner_on = true ;
      console.log("Spinner Temporal");
      setTimeout( ()=> this.spinner_on = false , 1000 )
        }
   
    },

watch : {

    onOff( newValue, oldValue ) {
       
        if (newValue == true)
        {
            console.log("Spinner On");
            this.spinner_on = true ;
        }
        else 
        {
            console.log("Spinner Off");
            setTimeout( ()=> this.spinner_on = false , 500 )
            //this.spinner_on = false ;
        }

    },

    /*
    onOff( newValue, oldValue ) {
        console.log("Spinner activated :"+this.timeActive + "  onOff:"+this.onOff )
    
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
            setTimeout( ()=> this.spinner_on = false , 4000 )
        }

    },

*/



/*
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
        
    console.log("Spinner value:"+newValue);

        if (newValue != null)
        {
            console.log("Spinner On");
            this.spinner_on = true ;
           
            setTimeout( ()=> this.spinner_on = false , newValue )
            console.log("Spinner Off");
            //this.spinner_on = false ;
        }
*/

 },

}

</script>

