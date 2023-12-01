<script setup>
</script>

<template>
  <div class="m-0" style="font-size:30px ;width:350px">

    <div class="text-secondary ">
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(1) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(1)" > <i style="font-size:40px" class="bi bi-controller "></i> </text>
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(2) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(2)" > <i style="font-size:40px" class="bi bi-bicycle "></i> </text>
        
         <input type="text" placeholder="Busca Algo " v-model="textFilter" style="text-align:center; font-size:20px" id="searchText" name="searchText" class=" form-control-sm mt-1 bg-dark text-white border-white" required minlength="4" maxlength="20" size="7" />
       
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(3) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(3)" > <i style="font-size:40px" class="bi bi-lamp"></i> </text>
          
    <!--     
        
        <text> </text>
    -->
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(4) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(4)" > <i style="font-size:40px" class="bi-pc-display-horizontal"></i> </text>
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(5) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(5)" > <i style="font-size:40px" class="bi bi-book"></i> </text>
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(6) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(6)" > <i style="font-size:40px" class="bi bi-car-front"></i> </text>
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(7) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(7)" > <i style="font-size:40px" class="bi bi-wrench"></i> </text>
        <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(8) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(8)" > <i style="font-size:40px" class="bi bi-sunglasses"></i> </text>
      <!--  <text style="border-radius: 30px;" class="border p-2" :class="[ categories.includes(9) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(9)" > <i style="font-size:40px" class="bi bi-suitcase2"></i> </text>
      -->
      <!-- 
        <text><i class="bi bi-list p-2 text-white"></i></text>
      -->

        <text><i class="bi bi-arrow-return-left text-white"></i></text>
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


