<script setup>

import FilterForSearchView from '../components/FilterForSearchView.vue'
import SearchResult from '../components/SearchResult.vue'

//import SearchCategoriesLast from '../components/SearchCategoriesLast.vue'
//import SearchCategoriesGames from '../components/SearchCategoriesGames.vue'
//import SearchCategoriesBooks from '../components/SearchCategoriesBooks.vue'
//import SearchCategoriesClothes from '../components/SearchCategoriesClothes.vue'

import InventoryObjectDetailedPublicOffer from '../components/InventoryObjectDetailedPublicOffer.vue'

import NewExchangeProposal_SelectObjectInventory from '../components/NewExchangeProposal_SelectObjectInventory.vue'
import NewExchangeProposal_summary from '../components/NewExchangeProposal_summary.vue'

import NewExchangeProposal_checkBeforeSend from '../components/NewExchangeProposal_checkBeforeSend.vue'
import NewExchangeProposal_sentConfirmation from '../components/NewExchangeProposal_sentConfirmation.vue'

import ShowCategories from '../components/ShowCategories.vue'


import SpinnerLoading from '../components/SpinnerLoading.vue'


import { BKND_CONFIG , PATH_BANNER_IMG, CATEGORIES } from '../../config.js'
import axios from 'axios'

</script>

<template>

<div>
  <SpinnerLoading  :onOff=spinnerOn />
<!-- START DISPLAY MENU CATEGORIES --> 

  <div class="d-none d-lg-inline-block" style="margin-top: -40px;" >
    <hr>
    <div v-for="category in CATEGORIES" class="d-none d-lg-inline-block" >
                      <text @click="filterByCategory(category.id)" style="font-size:12px" > 
                          <p class="bi text-center"> 
                              <a href="#" class="link-title-object"> {{category.name}}<i class="bi" :class="category.icon" ></i></a> 
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                             
                          </p>
                      </text>    
    </div>
    <hr>
  </div>
 <!-- END DISPLAY MENU CATEGORIES --> 
  


 <!-- START SHOW OBJECTS CATEGORIES -->
<!--
  <div class="d-flex justify-content-between" v-if="!(showObjectDetails || exchangeProposal_showInventory || exchangeProposal_showSummary  || exchangeProposal_checkBeforeSend || exchangeProposal_sentConfirmation) ">
<div v-show=eliminame >
-->



 <div class="" v-show="!(showObjectDetails || exchangeProposal_showInventory || exchangeProposal_showSummary  || exchangeProposal_checkBeforeSend || exchangeProposal_sentConfirmation) ">

 
  <!-- START  LEFT  SECTION Display only in Large devices -->
      <!-- START BOOKS -->
  <!--
  <div  class="d-none d-lg-inline-block p-3"   style="width:600px" > 
    
            <div v-if="category2display == 0 || category2display == 2 " class="border border-0  category" style="padding-left:20px" >
             
              <div v-if="category2display != 2" class="border border-0  " style="border-radius: 10px;" > 
                <div>
                <text style="font-size: 25px;" class="text-white" > 
                  Libros
                </text>   
                <br>
                <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[2]" :limit="21" :session_data=" session_data"/>
                <p @click="selectedCategory(2)" class="text-end p-2 "> Ver Mas ... </p>

                </div>
              </div>
              <div v-else>    
                <br>
                <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[2]" :limit="60" :session_data=" session_data"/>
              </div>
          </div>
  
  </div>
-->
  <!-- END BOOKS -->
  <!-- END  LEFT  SECTION Display only in Large devices -->



<!-- CENTER SECTION ALL DEVICES -->

  <div v-show="ShowCategories">       

    <!-- START NEW OBJECTS CATEGORY-->
          <div  class="category">
                
              <a href="#" @click="$emit('showCategory',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])" style="font-size: 25px;" class="link-title-object"> 
                  &nbsp;&nbsp; Recién llegados
              </a>

              <div>    
               
                <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]" :limit="27" :session_data=" session_data"/>

                <p class="text-end mt-2">
                  <a href="#" @click="$emit('showCategory',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])" class="btn btn-warning p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
                </p>

              </div>

          </div>
    <!-- END NEW OBJECTS CATEGORY-->


    <!--  CATERGORY LIBROS -->
 <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
       Libros
  </span>
  <br>

<div class="d-flex flex-wrap" >
   
  <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="2" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="filterByCategory(2)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
   
</div>
<!--  END CATERGORY  -->

<!--  CATERGORY ACCESORIOS -->
  <hr>
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Accesorios
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="9" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',9)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END CATERGORY  -->

<!--  CATEGORY TOOLS-->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Video Juegos
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="1" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',1)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END TOOLS  -->


<!--  CATEGORY TOOLS-->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Herramientas
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="6" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',6)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END TOOLS  -->




    <!-- START BOOKS CATEGORY-->
        <!--
          <div  class="category">
                
              <a href="#" @click="$emit('showCategory',2)" style="font-size: 25px;" class="link-title-object"> 
                  <i class="bi bi-caret-right-fill"></i> Libros
              </a>

              <div>    
                <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="2" :limit="9" :session_data=" session_data"/>

                <p class="text-end">
                    <a href="#" @click="$emit('showCategory',2)" class=" p-2 link-title-object text-white"> Ver Mas ... </a>
                </p>

              </div>

          </div>
        -->
    <!-- END BOOKS CATEGORY-->

    <!-- START JUGUETES CATEGORY -->
        <!--
          <div  class="category">
                
              <a href="#" @click="$emit('showCategory',7)" style="font-size: 25px;" class="link-title-object"> 
                  <i class="bi bi-caret-right-fill"></i> Juguetes
              </a>

              <div>    
                <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="7" :limit="9" :session_data=" session_data"/>

                <p class="text-end">
                  <a href="#" @click="$emit('showCategory',7)" class="p-2 link-title-object text-white"> Ver Mas ... </a>
                </p>

              </div>

          </div>
        -->
    <!-- END JUEGUETES CATEGORY -->

   <!-- START JUEGOS CATEGORY -->
       <!--
          <div  class="category">
                
              <a href="#" @click="$emit('showCategory',1)" style="font-size: 25px;" class="link-title-object"> 
                  <i class="bi bi-caret-right-fill"></i> Juegos
              </a>

              <div>    
                <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="1" :limit="9" :session_data=" session_data"/>

                <p class="text-end">
                  <a href="#" @click="$emit('showCategory',1)" class="p-2 link-title-object text-white"> Ver Mas ... </a>
                </p>

              </div>

          </div>
        -->
    <!-- END JUEGOS CATEGORY -->

    <!-- START JUEGOS CATEGORY -->
        <!--
          <div  class="category">
                
              <a href="#" @click="$emit('showCategory',4)" style="font-size: 25px;" class="link-title-object"> 
                  <i class="bi bi-caret-right-fill"></i> Vestuario
              </a>

              <div>    
                <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="4" :limit="9" :session_data=" session_data"/>

              <p class="text-end">
                <a href="#" @click="$emit('showCategory',4)" class="p-2 link-title-object text-white"> Ver Mas ... </a>
              </p>

              </div>

          </div>
        -->
    <!-- END JUEGOS CATEGORY -->

    <!-- FOOTER  LIST CATEGORIES (Only in  sm devices)-->
        <!--
          <hr> 
         
          <div v-for="category in CATEGORIES" class="d-block d-lg-none  p-3 " >
                    <text @click="selectedCategory(category.id)" style="font-size:21px" > 
                        <p class="bi text-center"> 
                             {{category.name}} <i class="bi" :class="category.icon" ></i>  
                           
                        </p>
                    </text>    
          </div>
        -->
    <!-- -->


<!--  FOOTER CATERGORIES -->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Coleccionables 
  </span>
  <br>

<div class="d-flex  flex-wrap" >

  <div class="p-1 m-2 " @click="filterByCategory(1)"  style="background-color:#333 ; max-height: 180px; max-width: 180px;" > 
    <a href="#">
     <text class="link-title-object" style="">Video Juegos</text><br>
     <img  class="m-0" style="max-height: 170px; max-width: 170px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_VideoJuegos.png'" />
    </a>
  </div>

  <div class="p-1 m-2 " @click="filterByCategory(7)"  style="background-color:#333 ; max-height: 180px; max-width: 180px;" > 
    <a href="#">
      <text class="link-title-object">Juguetes</text><br>
      <img  class="m-0" style="max-height: 170px; max-width: 170px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Juguetes.png'" />
    </a>
  </div>
   
</div>






<!--  FOOTER CATERGORIES -->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="">
       Hogar
  </span>
  <br>

<div class="d-flex  flex-wrap" >

  <div class="p-1 m-2 " @click="filterByCategory(13)"  style="background-color:#333 ; max-height: 180px; max-width: 180px;" > 
    <a href="#">
      <text class="link-title-object">Electrodomesticos</text><br>
      <img  class="m-0" style="max-height: 170px; max-width: 170px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Electrodomesticos.png'" />
    </a>
  </div>

  <div class="p-1 m-2 " @click="filterByCategory(3)"  style="background-color:#333 ; max-height: 180px; max-width: 180px;" > 
    <a href="#">
      <text class="link-title-object">Hogar</text><br>
      <img  class="m-0" style="max-height: 170px; max-width: 170px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Hogar.png'" />
    </a>
  </div>

  <div class="p-1 m-2 " @click="filterByCategory(17)"  style="background-color:#333 ; max-height: 180px; max-width: 180px;" > 
    <a href="#">
      <text class="link-title-object">Jardin</text><br>
      <img  class="m-0" style="max-height: 170px; max-width: 170px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Jardin.png'" />
    </a>
  </div>
  
  <div class="p-1 m-2 " @click="filterByCategory(15)"  style="background-color:#333 ; max-height: 180px; max-width: 180px;" > 
    <a href="#">
     <text class="link-title-object">Electronica</text><br>
     <img  class="m-0" style="max-height: 170px; max-width: 170px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_ElectroHogar.png'" />
    </a>
  </div>
   
</div>




<!--  CATERGORY HOMBRE -->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Hombre
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="18" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',18)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END CATERGORY  -->


<!--  CATERGORY MUJER -->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Mujer
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="19" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',19)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END CATERGORY  -->


<!--  CATEGORY TELEFONIA-->
<!--
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        gender-ambiguous
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="20" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',20)" class="btn btn-warning  p-2">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>

-->
<!--  END CATERGORY  -->





<!--  COMPUTACION -->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Computacion
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="12" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',12)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END CATERGORY  -->

<!--  CATEGORY TELEFONIA-->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Telefonia
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="14" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',14)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END CATERGORY  -->

<!--  CATEGORY MOBILIDAD-->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Mobilidad
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="16" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',16)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END MOBILIDAD  -->




<!--  CATEGORY MOBILIDAD-->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Vehiculos
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="8" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',8)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END MOBILIDAD  -->



<!--  CATEGORY DEPORTES-->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Deportes
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="5" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',5)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END DEPORTES  -->

<!--  CATEGORY FOTOGRAFIA-->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Fotografia
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="10" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',10)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END FOTOGRAFIA -->

<!--  CATEGORY FOTOGRAFIA-->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Telefonia
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="14" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',14)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END FOTOGRAFIA -->

<!--  CATEGORY FOTOGRAFIA-->
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Arte
  </span>
  <br>

 <div>    
      <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="11" :limit="9" :session_data=" session_data"/>
      <p class="text-end mt-2">
          <a href="#" @click="$emit('showCategory',11)" class="btn btn-warning  p-4">Ver Mas<i class="bi bi-arrow-right-short"></i></a>
      </p>
  </div>
<!--  END FOTOGRAFIA -->




<!--

 { name: "Todos los Objetos ", id: 0 , icon:"" } ,

  { name: "Arte"              , id: 11 , icon:"bi bi-card-image" } ,

 

-->


<!--  FOOTER CATERGORIES -->
<!--
  <hr >
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Categorias 
  </span>
  <br>


<div class="d-flex  flex-wrap" >

  <div class="p-1 m-2 justify-content-center" @click="filterByCategory(2)"  style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
   <a href="#">
      <text class="link-title-object">Libros</text>
      <img  class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Books.png'" />
    </a>
  </div>
   
  <div class="p-1 m-2 " @click="filterByCategory(1)"  style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
    <a href="#">
     <text class="link-title-object">Juegos</text>
     <img  class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Games.png'" />
    </a>
  </div>

  <div class="p-1 m-2 " @click="filterByCategory(7)"  style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
    <a href="#">
      <text class="link-title-object">Juguetes</text>
      <img  class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Juguetes.png'" />
    </a>
  </div>
   <div class="p-1 m-2 " @click="filterByCategory(13)"  style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
    <a href="#">
      <text class="link-title-object">Electrodomesticos</text>
      <img  class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Electrodomesticos.png'" />
    </a>
  </div>

  <div class="p-1 m-2 " @click="filterByCategory(12)"  style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
    <a href="#">
      <text class="link-title-object"> Computacion </text>
      <img  class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Computacion.png'" />
    </a>
  </div>
  
  <div class="p-1 m-2 "  @click="filterByCategory(5)" style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
    <a href="#">
      <text class="link-title-object">Deportes </text>
     <img  class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Deportes.png'" />
   </a>
  </div>

  <div class="p-1 m-2 " @click="filterByCategory(9)"  style="background-color:#000 ; max-height: 350px; max-width: 350px;" > 
    <a href="#">
      <text class="link-title-object"> Accesorios</text>
     <img  class="m-0" style="max-height: 320px; max-width: 320px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Accesorios.png'" />
    </a>
  </div>

  <div class="p-1 m-2 " @click="filterByCategory(4)"  style="background-color:#000 ; max-height: 350px; max-width: 350px;" > 
    
    <a href="#">
      <text class="link-title-object"> Vestuario</text>
     <img  class="m-0" style="max-height: 320px; max-width: 320px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Vestuario.png'" />
    </a>
  </div>


</div>

-->


<!-- -->


  </div> 


   <!-- START  RIGHT SECTION Display only in Large devices -->
    <!--
     <div class="d-none d-lg-inline-block p-3" style="width:400px "> 
    
            <div v-if="category2display == 0 || category2display == 7 ">

              
                        
              <div v-if="category2display != 7" class="category" style="padding-left:20px" >  
                <text style="font-size: 25px;"> 
                  Juguetes
                </text>  
                
                <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[7]" :limit="21" :session_data=" session_data"/>
                <p @click="selectedCategory(2)" class="text-end p-2 "> Ver Mas ... </p>
              </div>
              <div v-else>    
                <br>
                <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[7]" :limit="60" :session_data=" session_data"/>
              </div>
          </div>
  
    </div>
  -->
    <!-- END RIGHT SECTION Display only in Large devices -->
  
  </div>




  <div v-if="showObjectDetails" >
    <InventoryObjectDetailedPublicOffer  v-on:nextStep="exchangeObject"  v-on:closeModal="showObjectDetails=false" :object=objectToShowDetails  :session_data="session_data" />
  </div>
 <!-- Step 1 -->
  <div v-if="exchangeProposal_showInventory" >
    <NewExchangeProposal_SelectObjectInventory  v-on:nextStep="showProposalSummary"  v-on:closeModal="exchangeProposal_showInventory=false;showObjectDetails=true" :object=objectToShowDetails  :session_data="session_data" />
  </div>

<!-- Step 2 -->
  <div v-if="exchangeProposal_showSummary" >
    <NewExchangeProposal_summary  v-on:nextStep="showProposalCheckBeforeSend"  v-on:closeModal="exchangeProposal_showSummary=false;showObjectDetails=true" :objectYouWant=objectToShowDetails  :objectsYouOfferList=objectsSelectedFromMyInventory   v-on:showMyInventory="exchangeProposal_showSummary=false ; exchangeProposal_showInventory=true" :session_data="session_data" />
  </div>

  <!-- Step 3 Check Before send -->
  <div v-if="exchangeProposal_checkBeforeSend" >
    <NewExchangeProposal_checkBeforeSend  v-on:nextStep="showConfirmationProposalSent" v-on:closeModal="exchangeProposal_checkBeforeSend=false" :proposal_summary=proposal_summary   :session_data="session_data" />
  </div>


  <!-- Step 4 Sent Confirmation -->
  <div v-if="exchangeProposal_sentConfirmation" >
    <NewExchangeProposal_sentConfirmation  v-on:nextStep=""  v-on:closeModal="exchangeProposal_sentConfirmation=false" :proposal_summary=proposal_summary   :session_data="session_data" />
  </div>


  
  
  <br>
  <br>
  <br>
  

<div style="position: absolute" >
  <div class="w-100 text-white d-flex justify-content-center p-2" style="background-color:#000 ;position: fixed;bottom: 0px; left:0px ">
    <text @click="$router.push({ name: 'ViewAboutReusar' })">¿Que es Reusar.cl?</text>
  </div>
</div>

</div>
</template>

<style>

.category 
{
border-radius: 10px;
background-color:#222 ; 
}

a
{
  text-decoration:none
}

.link-title-object
{
  color: #CCC ;
  text-decoration: none;
}

.link-title-object:hover
{
  color: #FFF ;
}


.link-object
{
  color: #EEE ;
  text-decoration: none;
}

.link-object:hover
{
color: #FFF ;
}



</style>


<script>

export default {

  
  data : function() {
      return {
        spinnerOn:false ,
        searchParams : {} ,
        objects : [] ,
        objects_filtered : [] ,
        showObjectDetails : false ,
        objectToShowDetails : null , 

        exchangeProposal_showInventory    : false ,
        exchangeProposal_showSummary      : false ,
        exchangeProposal_checkBeforeSend  : false ,
        exchangeProposal_sentConfirmation : false ,
      
        objectsSelectedFromMyInventory : [] ,

        proposal_summary : null ,

        search_event : false ,
        showCategories : true ,

        titleSearchResult : "" ,

        category2display : 0 ,

      }

  },

  props: ['session_data','textToSearch'],
  emits: ['sessionCreated','showCategory'],

created() {
   this.search_event = false
   this.getUrlParams()
   this.getSessionObject()
     },

beforeCreate(){
 // this.spinnerOn = true ;

},

mounted() {
//this.spinnerOn = false  ;
      },

methods: {

  // Check if URL bring a objectID from Social to Show
     async getSessionObject()
    {
      
      if ( this.session_data != null && this.session_data.objectid != null )
      {
        console.log("objid from session params:"+this.session_data.objectid)
        this.getObjectById(this.session_data.objectid)
        this.session_data.objectid = null 

      }
    },

  // Check if URL bring a objectID from Social to Show

    async getUrlParams()
    {
      const url = new URL(window.location.href);
      console.log("param URL url :"+url)
      var objid = url.searchParams.get("id");
      if (objid != null )
      {
        console.log("param URL objid:"+objid)
        this.getObjectById(objid)
      }
    },

    async getObjectById(objid)
    {
    let json_request ={
      objects_ids : objid
      }

    let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_objects",json_request);
    console.log("/private_get_objects Response:"+JSON.stringify(response_json.data))
    let object  = response_json.data ; 
    console.log("param object found : "+JSON.stringify(object[0]))
     this.showPublicObjectDetails(object[0])
    },

/*
    async filterByCategory(cat)
    {
      this.selectedCategory(cat) 
    },
    */


    async selectedCategory(val)
    {
      console.log("Selected category value : "+val)

      if (val == this.category2display)
        {
          this.category2display = 0 
        }
      else 
        {
         this.category2display = val  
        }
      
    },
    /*
    async SearchObjects(searchParams)
    {
    let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects",searchParams);
    console.log("/public_search_objects Response:"+JSON.stringify(response_json.data))
    this.objects = response_json.data ; 
    this.objects.sort((a, b) => b.id - a.id );
    this.objects_filtered=this.objects ; 
    },
    */
//comes from object details public offer

    getCategoryName(cat)
    {

        console.log("categorias  :"+cat)
        console.log("categorias largo  :"+cat.length)
        console.log(typeof cat)
       
        if (cat< 100)
        {
        let iconData = CATEGORIES.find((element) => element.id === cat);
        console.log("icon data found:"+JSON.stringify(iconData) )
        return iconData.name
        }
        else 
        {
          return "Ultimas Novedades"
        }

    },
   
    exchangeObject(obj)
    { 
      this.showObjectDetails=false 
      this.exchangeProposal_showInventory=true
      console.log("exchange Object in VIewSearch")
    },


    showPublicObjectDetails(obj)
    {
      this.objectToShowDetails=obj
      this.showObjectDetails = true  
      //this.showCategories = false 
    },

    /*
    async filterByText(text)
    {
      this.spinnerOn=true
      console.log ("Flter by text viewSearch"+text)

      this.searchParams.search_text=text;
      
      let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_by_text",this.searchParams);
      console.log("/public_search_objects_by_text Response:"+JSON.stringify(response_json.data))
      if (response_json.data  != null )
      {
      this.objects = response_json.data ; 
      this.objects.sort((a, b) => b.id - a.id );
      this.objects_filtered=this.objects ;
      }
      else 
      {
        this.objects_filtered=null ;   
      }

      this.search_event = true 
      this.showCategories = false 

      this.spinnerOn=false
      
    },
    */

    /*
    async selectedCategory(cat)
    {
      this.filterByCategory(cat)
    },
    */

    async filterByCategory(category)
    {
      console.log("Welcome Filter by category :"+category)
      this.$emit('showCategory',category)

     // this.$router.push({ name: 'ViewSearch' })

//      $router.push({ name: 'somewhere', state: { myData } })
/*
      
      if (category != null && category !="")
      {
      this.spinnerOn=true
      
      console.log ("Flter by category viewSearch {"+category+"}")
      this.searchParams.search_categories = category ; 
      this.searchParams.limited = 39 ;   

      let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_by_category",this.searchParams);

      console.log("/public_search_objects_by_category Response:"+JSON.stringify(response_json.data))
      this.objects = response_json.data ; 
      this.objects.sort((a, b) => b.id - a.id );
      this.objects_filtered=this.objects ; 
      this.search_event = true
      this.showCategories = false 

      this.titleSearchResult =  this.getCategoryName(category)

      this.spinnerOn=false
      }
      */

      
    },

    showProposalSummary(myobjects)
    { this.spinnerOn=true
      console.log('ShowProposalSUmmary '+myobjects)
      this.objectsSelectedFromMyInventory = myobjects

      this.exchangeProposal_showInventory = false 
      this.exchangeProposal_showSummary = true 
      this.spinnerOn=false
    },

    showProposalCheckBeforeSend(proposal)
    {
      this.proposal_summary = proposal 
      this.exchangeProposal_showSummary = false 
      this.exchangeProposal_checkBeforeSend = true 

      console.log('Show Check Before Send '+JSON.stringify(this.proposal_summary))
    },

    showConfirmationProposalSent(proposal)
    {
      this.exchangeProposal_checkBeforeSend = false ,
      this.exchangeProposal_sentConfirmation = true 
    }


    },

watch : {


    showObjectDetails(newvalue, oldvalue)
    {
      console.log("showObjectDetails newValue: "+newvalue)

    }


/*
  textToSearch(newval,oldval)
    {
      console.log("textToSearch in ViewSearch newval:"+newval+"   oldval:"+oldval)
      this.filterByText(newval)
    }
*/


      }
}
</script>


