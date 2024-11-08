<script setup>
import { PATH_BANNER_IMG, CATEGORIES } from '../../config.js'
</script>

<template>
 
 <div class="">
    <div class="p-3 " >

        <div> 
           <text class="text-warning" style="font-size:30px">¿ Que es Reusar.cl ?</text><br>
            <b>Hola, me llamo Tata Trueque y con la Abuela Cambalache te contaremos una historia... </b>
        </div>

        <div class="w-100">
            <div class="d-flex align-items-start">
                <div>
                    <img :src="PATH_BANNER_IMG+'/AboutUs/TataTrueque.png'" style="width: 100px;"> 
                </div>
                <div>
                    <div class="border border-1 p-2 m-2" style="border-radius: 30px 30px 30px 0px;">
                         Alguna vez internet fue un lugar maravilloso... 
                    </div>
                    <div class="border border-1 p-2 m-2" style="border-radius: 30px 30px 30px 0px;">
                        Podias intercambiar con otros ideas y objetos, simplemente dando tu numero de telefono a desconocidos.   
                    </div>
                </div>
            </div>
        <!--
            <div class="d-flex align-items-start">
                <div>
                    <div class="border border-1 p-2" style="border-radius: 30px 30px 30px 0px;">
                       Aunque existian riesgos, al inicio parecia existir un acuerdo para actuar de forma honesta en los intercambios de con otros en Internet. 
                    </div>
                    
                </div>
            </div>
        -->

            <div class="d-flex align-items-end m-1">
                
                <div>
                   <div class="border border-1 p-2" style="border-radius: 30px 30px 0px 30px;">
                      Sin que luego te llamaran para intentar engañarte desde la carcel o pedirnos dinero y las claves de Internet del Banco.
                    </div>
                    <div class="border border-1 m-1 p-2" style="border-radius: 30px 30px 0px 30px;">
                      Que lindos tiempos!!
                    </div>
                    
                </div>
                <div>
                    <img :src="PATH_BANNER_IMG+'/AboutUs/AbuelaCambalache.png'" style="width: 100px;"> 
                </div>
            </div>

            <div class="d-flex align-items-start">
                <div>
                    
                </div>
            </div>

            <div class="d-flex align-items-start m-2">
                <div>
                    <div class="border border-1 p-2" style="border-radius: 30px 30px 30px 30px;">
                      Para  eso decidimos crear este espacio seguro de Intercambio, Trueque o Permuta  de objetos, para que todos puedan intercambiar cosas sin preocuparse ni  exponerse a bandidos y volvamos a hacer comunidad.  
                    </div>
                    
                </div>
            </div>
               
    </div>



         <hr>
              
           <i class="bi bi-check-square text-success"></i> Intercambia de forma segura gracias a nuestro equipo de Despacho y Retiro. 
               
           <br>
           <i class="bi bi-check-square text-success"></i> Si tu propuesta es aceptada, solo pagas el valor del Retiro y Despacho<br>
           
        <br>

        <div class="w-100 d-flex align-items-center">
            <img :src="PATH_BANNER_IMG+'/AboutUs/AboutReusar_1.png'" style="width: 360px;"> 
        </div>
        <br>

        Dale una segunda vida para tus objetos en la mayor comunidad de Permuta de Santiago de Chile.
        <br>
        <text class="text-warning"> 
            ¡¡ Pagando solo el Despacho !!
        </text>
    
    </div>
<br> 

<div  class="d-flex justify-content-start" >
    <div>
        <img :src="PATH_BANNER_IMG+'/AboutUs/AboutReusar_Inventory_1.png'" style="width: 100px;"> 
    </div>

    <div class="d-flex align-items-start"> 
        &nbsp;&nbsp;&nbsp;
        <div>
            <i class="bi bi-bag-check text-warning" style="font-size:20px"></i>
        </div>

        &nbsp;&nbsp;&nbsp;
        <div>
            Sube tus objetos a tu inventario (Foto + descripción). 
            <br>
            <text class="text-secondary">
            Estos quedarán publicos para que otro susuarios los encuentren. 
            </text> 
        </div>
    </div>




</div>
<br>


<div  class="d-flex justify-content-start" >
    <div>
        <img :src="PATH_BANNER_IMG+'/AboutUs/AboutReusar_Received_1.png'" style="width: 100px;"> 
    </div>

    <div class="d-flex align-items-start"> 
         &nbsp;&nbsp;&nbsp;
        <div>
            <i class="bi bi-bag-check text-warning" style="font-size:20px"></i>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
            Comienza a recibir propuestas de intercambio de otros usuarios<br>
            <text class="text-secondary">
            Otros usuarios pueden estar interesados en un objeto de tu Inventario. 
            </text>
        </div>
   
    </div>

</div>
<br>




<div  class="d-flex justify-content-start" >
    <div>
        <img :src="PATH_BANNER_IMG+'/AboutUs/AboutReusar_Welcome_1.png'" style="width: 100px;"> 
    </div>

    <div class="d-flex align-items-start"> 
         &nbsp;&nbsp;&nbsp;
        <div>
            <i class="bi bi-bag-check text-warning" style="font-size:20px"></i>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
           Tu tambien puedes hacer propuestas de intercambio a otros usuarios por objetos que te interesen!!! <br><br>
            <text class="text-secondary">
                Libros, juguetes, articulos de colección, y muchas otras cosas
            </text>
            <br> 
            <text class="text-warning">
                ¡Solo pagas el despacho y retiro! . 
            </text>
        </div>
    </div>




</div>
<br>

<div  class="d-flex justify-content-start" >
    <div>
        <img :src="PATH_BANNER_IMG+'/AboutUs/AboutReusar_EnCamino_1.png'" style="width: 100px;"> 
    </div>

    <div class="d-flex align-items-start"> 
         &nbsp;&nbsp;&nbsp;
        <div>
            <i class="bi bi-bag-check text-warning" style="font-size:20px"></i>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
            Recolección y despacho directo a tu casa. 
                <br>
            <text class="text-warning"> 
                Sin riesgos!!
            </text>

            <br>
            <text class="text-secondary">
                Tu información personal jamas será conocida por el otro usuario. Totalmente seguro. 
            </text>
        </div>
   
    </div>

</div>
<br>

<div  class="d-flex justify-content-start" >
    <div>
        <img :src="PATH_BANNER_IMG+'/AboutUs/AboutReusar_ObjectDetails_1.png'" style="width: 100px;"> 
    </div>

    <div class="d-flex align-items-center"> 
         &nbsp;&nbsp;&nbsp;
        <div>
            <i class="bi bi-bag-check text-warning" style="font-size:20px"></i>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
            Objetos que te estorban en casa pueden ser un tesoro para otros!!.
            <br> Intercambialos por algo que si necesitas. 
        </div>
   
    </div>

</div>
<br>


<br>




<div  class="d-flex justify-content-start w-100"  >
    <div class="">
        <img :src="PATH_BANNER_IMG+'/AboutUs/AbuelaCambalache.png'" style="max-width: 40px;"> 
        <img :src="PATH_BANNER_IMG+'/AboutUs/TataTrueque.png'" style="max-width: 50px;"> 
    </div>


    <div class=""> 
         
        <div style="font-size:15px">
            <b> Tata Trueque</b> y <b>Abuela Cambalache </b> te recomiendan registrate para comenzar a Intercambiar!!
        </div>

    </div>

</div>
<br>
        <div class="d-flex justify-content-center">
            <button @click="$router.push({ name: 'ViewRegister' })" type="button" class="btn btn-success">Registrarme</button>
        </div>





<br>
<br>
<br>
<br>

<br>
<br>
<br>
<br>
<br>










 </div>

</template>

<style>

</style>


<script>

export default {

  data : function() {
      return {
        showImage : true, 

      }
  },
  props: [],
  emits: [],

created() {
    },

methods: {
    },

watch : {
      }
}
</script>


