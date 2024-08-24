<script setup  >
import { CATEGORIES } from '../../config.js'
</script>

<template>
  <div class="m-0" style="font-size:30px ">

    <div class="text-white">

      <div class="d-flex justify-content-around m-2 mb-4">
        <!-- 
        <text style="border-radius: 30px;" class="border p-0" :class="[ categories.includes(1) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(1)" > <i style="font-size:40px" class="bi bi-controller "></i> </text>
        -->
        <input @click="$router.push({ name: 'ViewSearch' })" v-on:keyup.enter="onEnter"  type="text" placeholder="Objeto que quieres" v-model="textFilter" style="text-align:center; color:white ; font-size:26px ; border-radius: 10px 0px 0px 10px;" id="searchText" name="searchText" class=" m-0 bg-dark text-white border-2  border-white form-control " required minlength="4" maxlength="30" />
         
         <!-- 
              <input @click="$router.push({ name: 'ViewSearch' })" v-on:keyup.enter="onEnter"  type="text" placeholder="Objeto que quieres" v-model="textFilter" style="text-align:center; color:white ; font-size:26px ; border-radius: 10px 0px 0px 10px;" id="searchText" name="searchText" class=" m-0 bg-dark text-white border-2  border-white form-control " required minlength="4" maxlength="30" />
         -->
        <!--
        <i  style="margin-left: -85px;font-size:36px ;" @click="search(textFilter)" class="text-left text-secondary bi bi-search-heart p-0 mt-1 w-25"></i>
        -->
<!-- 
      <button type="button" style="border-radius: 0px 10px 10px 0px;" class="btn btn-secondary border border-white w-25  m-0 p-0">
        
         <i  style="margin-left: 0px;font-size:36px ;" @click="search(textFilter)" class="text-left text-white bi bi-search-heart p-0 mt-0 "></i>

      </button>
-->

      <button @click="cleanSearch()" type="button" style="border-radius: 0px 10px 10px 0px;" class="btn btn-secondary border border-white w-25  m-0 p-0">
         <i  style="margin-left: 0px;font-size:36px ;"  class="text-left text-white bi bi-x p-0 mt-0 "></i>
      </button>


        <!-- 
        <text style="border-radius: 30px;" class="border p-0" :class="[ categories.includes(2) ? 'border-secondary': 'border-dark' ]"  @click="addCategoryToSearch(2)" > <i style="font-size:40px" class="bi bi-bicycle "></i> </text>
        -->
           
      </div>
      
    <!--     
        <text> </text>
    -->

<!--
  <div class=" text-white">

    <div  style="font-size:25px" >
      <div class="d-flex justify-content-between"> 
     
        <text  class="p-0" :class="[ categories.includes(1) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=1" > <i style="" class="bi bi-controller "></i> </text>
        <text  class="p-2" :class="[ categories.includes(2) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=2" > <i style="" class="bi bi-book"></i> </text>
        <text  class="p-2" :class="[ categories.includes(3) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=3" > <i style="" class="bi bi-house"></i> </text>
        <text  class="p-0" :class="[ categories.includes(4) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=4" > <i style="" class="bi bi-universal-access"></i> </text>
        <text  class="p-0" :class="[ categories.includes(5) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=5" > <i style="" class="bi bi-bicycle"></i> </text>
        
        <text v-if="!showAllOptions" @click="showAllOptions=!showAllOptions" style="border-radius: 30px;"  ><i style="font-size:30px" class="text-secondary bi bi-play-fill p-2 "></i></text>
        <text v-else @click="showAllOptions=!showAllOptions; " style="border-radius: 30px;"  ><i style="font-size:40px" class="text-white bg-secondary bi bi-x-lg p-2 "></i></text>
        
            </div>
    </div>


    
    <div  v-if="showAllOptions" >
      <div  class="d-flex justify-content-between"  style="font-size:25px" >
        <text  class="p-0" :class="[ categories.includes(6) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=6" > <i style="" class="bi bi-wrench"></i> </text>
        <text  class="p-2" :class="[ categories.includes(7) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=7" > <i style="" class="bi bi-rocket"></i> </text>
        <text  class="p-0" :class="[ categories.includes(8) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=8" > <i style="" class="bi bi-car-front"></i> </text>
        <text  class="p-2" :class="[ categories.includes(9) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=9" > <i style="" class="bi bi-sunglasses"></i> </text>
        <text  class="p-2" :class="[ categories.includes(10) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=10" > <i style="" class="bi bi-camera"></i> </text>
      </div>

      <div  class="d-flex justify-content-between"  style="font-size:25px" >
          <text  class="p-0" :class="[ categories.includes(11) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=11" > <i style="" class="bi bi-card-image"></i> </text>
          <text  class="p-0" :class="[ categories.includes(12) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=12" > <i style="" class="bi bi-laptop"></i> </text>
          <text  class="p-0" :class="[ categories.includes(13) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=13" > <i style="" class="bi bi-plug"></i> </text>
          <text  class="p-0" :class="[ categories.includes(14) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=14" > <i style="" class="bi bi-phone-vibrate"></i> </text>
          <text  class="p-0" :class="[ categories.includes(15) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=15" > <i style="" class="bi bi-lamp"></i> </text>
      </div>

      <div  class="d-flex justify-content-between"  style="font-size:25px" >
          <text  class="p-0" :class="[ categories.includes(16) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=16" > <i style="" class="bi bi-scooter"></i> </text>
          <text  class="p-0" :class="[ categories.includes(17) ? 'text-success border-bottom border-success': 'border-dark' ]"  @click="category=17" > <i style="" class="bi bi-tree"></i> </text>
         
          <select v-model="category" class=" w-50 form-select" aria-label="Default select example">
            <option v-for="category in CATEGORIES" :value=category.id >
               {{category.name}} 
            </option>
          </select>
      
      </div>

  <div>
    
  </div>

    </div>
   
  </div>

-->

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
  /*color: white;*/
  opacity: 1; /* Firefox */
  color: #ffffff ;
}

::-ms-input-placeholder { /* Edge 12-18 */
 /* color: white; */
 color: #ffffff ;
}

</style>



<script  >
export default {

  data : function() {
      return {
        textFilter : null ,
        categories : [] , 
        showAllOptions : false ,
        category: 0,
      }
  },

  props: [],
  emits: ['filterByText','filterByCategory'],

created() {
    },

methods: {

    cleanSearch()
    {
      if (this.textFilter == '')
      {
        this.$router.push({ name: 'Welcome' })
      }
      else 
      {
      this.textFilter=''
      }

    },

    onEnter()
    {
      this.$emit('filterByText',this.textFilter)
    },

    search(text)
    {  
      this.$emit('filterByText',text)
    },

    addCategoryToSearch(val)
    {
      if (this.categories.includes(val,0))
      {
        //this.categories= this.categories.filter(element =>  element != val );
        this.categories = []
        //console.log("category already found")
      }
      else 
      {
       this.categories = []
      this.categories.push(val)
      } 
      // console.log("this.categories[]: "+this.categories)
      this.$emit('filterByCategory',this.categories[0])
    },
  
      

    },

watch : {

  showAllOptions(newVal,oldVal)
  {
    this.categories = []
    this.textFilter = "" 
    this.category = 0
    this.$emit('filterByCategory',this.categories)
  },

  category(newVal,oldVal)
  {
   // console.log("New Category Val : "+newVal)
    this.categories = []
    if (newVal != 0)
    {
    this.addCategoryToSearch(newVal);
    }
    //this.$emit('filterByCategory',this.categories)

  },
 
    /*
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
    */

      }
}
</script>


