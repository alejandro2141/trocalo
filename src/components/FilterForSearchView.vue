<script setup>
</script>

<template>
  <div class="m-0" style="font-size:30px ;width:350px">

    <div class="text-white">

      <div class="d-flex justify-content-around">
        <!-- 
        <text style="border-radius: 30px;" class="border p-0" :class="[ categories.includes(1) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(1)" > <i style="font-size:40px" class="bi bi-controller "></i> </text>
        -->
        <input type="text" placeholder="( Busca y cambia objetos )" v-model="textFilter" style="text-align:center; color:white font-size:23px ;border-radius:15px" id="searchText" name="searchText" class=" mt-1 bg-dark text-white border-0 p-0" required minlength="4" maxlength="30" size="14" />
       <!-- 
        <text style="border-radius: 30px;" class="border p-0" :class="[ categories.includes(2) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(2)" > <i style="font-size:40px" class="bi bi-bicycle "></i> </text>
        -->
           
      </div>
    <!--     
        
        <text> </text>
    -->
    <div class="d-flex justify-content-between"  style="font-size:25px" >
      <!-- 
      <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(3) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(3)" > <i style="font-size:40px" class="bi bi-lamp"></i> </text>
      -->
        <text  class="p-0" :class="[ categories.includes(1) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="addCategoryToSearch(1)" > <i style="" class="bi bi-controller "></i> </text>
        <text  class="p-2" :class="[ categories.includes(2) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="addCategoryToSearch(2)" > <i style="" class="bi-pc-display-horizontal"></i> </text>
        <text  class="p-2" :class="[ categories.includes(3) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="addCategoryToSearch(3)" > <i style="" class="bi bi-book"></i> </text>
        <text  class="p-0" :class="[ categories.includes(4) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="addCategoryToSearch(4)" > <i style="" class="bi bi-bicycle "></i> </text>
        
        <!-- 
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(6) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(6)" > <i style="font-size:40px" class="bi bi-car-front"></i> </text>
      -->
        
      <!-- 
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(8) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(8)" > <i style="font-size:40px" class="bi bi-sunglasses"></i> </text> 
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(9) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(9)" > <i style="font-size:40px" class="bi bi-suitcase2"></i> </text>
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(7) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(7)" > <i style="font-size:40px" class="bi bi-wrench"></i> </text> -->
      <!-- 
        <text><i class="bi bi-list p-2 text-white"></i></text>
      -->

        <text style="border-radius: 30px;"  ><i class="bi bi-arrow-return-left p-2 text-white"></i></text>
    </div>
        <!--
        <text><i class="bi bi-house"></i></text>
        <text>| </text>
        
        <text>| </text>
        
        <text>| </text>
    -->
     
        
         

    </div>
    
  </div>
</template>

<style scoped>

::placeholder {
  color: white;
  opacity: 1; /* Firefox */
}

::-ms-input-placeholder { /* Edge 12-18 */
  color: white;
}

</style>



<script>
export default {

  data : function() {
      return {
        textFilter : null ,
        categories : [] , 
      }
  },

  props: [],
  emits: ['filterByText','filterByCategory'],

created() {
    },

methods: {

    addCategoryToSearch(val)
    {

      if (this.categories.includes(val))
      {
        this.categories= this.categories.filter(element =>  element != val );
      }
      else 
      {
      this.categories.push(val)
      } 

      console.log("this.categories: "+this.categories)
      this.$emit('filterByCategory',this.categories)
    },
  
      

    },

watch : {

 
    
  textFilter(newVal, oldVal)
    {
      console.log("textFIlter change to "+newVal)
      if (newVal !=null && newVal.length > 2)
      {
        this.$emit('filterByText',newVal)
      }
      else 
      {
        this.$emit('filterByText',null)
      }

    }

      }
}
</script>


