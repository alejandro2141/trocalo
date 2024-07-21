<script setup  >
import { CATEGORIES } from '../../config.js'
</script>

<template>
  <div class="m-0" style="font-size:30px ;width:350px">

    <div class="text-white">

      <div class="d-flex justify-content-around mt-4 mb-4">
       
        <input  v-on:keyup.enter="onEnter"  type="text" placeholder="Objeto que quieres" v-model="textFilter" style="text-align:center; color:white ; font-size:26px ; border-radius: 10px 0px 0px 10px;" id="searchText" name="searchText" class=" m-0 bg-dark text-white border-2  border-white w-75 " required minlength="4" maxlength="30" size="15" />
         

      <button type="button" style="border-radius: 0px 10px 10px 0px;" class="btn btn-secondary border border-white w-25  m-0 p-0">
         <i  style="margin-left: 0px;font-size:36px ;" @click="search(textFilter)" class="text-left text-white bi bi-search-heart p-0 mt-0 "></i>
      </button>
      
           
      </div>
      
  

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


