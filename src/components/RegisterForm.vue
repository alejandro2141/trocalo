<script setup>
import { ref } from 'vue'
import axios from 'axios'
import {  REGION_ZONES, BKND_CONFIG } from '../../config.js'
</script>

<template  >
<div>
        <div v-if="showForm"  id="form" class="m-1 p-1 ">
            
            <form autocomplete="off">
                <div class="form-row">
        <p style="font-size: 1.5em" class="text-center" >Registro Usuario</p>

        
                <div class="form-group m-1">
                        <input type="text" autocomplete="off" class="form-control" id="names" placeholder="Nombres" v-model="names">
                </div>
            
                <div class="form-group d-flex justify-content-evenly">
                    <div class=" m-1 ">
                        <input type="text" autocomplete="off"  class="form-control" id="inputLastName" placeholder="Appellido Paterno" v-model="last_name1">
                    </div>
                    <div class=" m-1 ">
                        <input type="text"  autocomplete="off" class="form-control" id="inputSecondLastName" placeholder="Appellido Materno" v-model="last_name2">
                    </div>
                </div>

                <div class="form-group  m-1">
                       <input type="email"  autocomplete="off" class="form-control" id="inputEmail4" placeholder="Email@" v-model="email">
                </div>

                 <div class="form-group  mt-2">
                        <input type="email"  autocomplete="off" class="form-control"  placeholder="Rut" v-model="id_number">
                </div>
                
                <div class="d-flex justify-content-between">
                    
                    <div class="mt-2">
                        <label v-if="phone!= null && phone.length < 10 " >N° de Teléfono</label> 
                        <label v-else class="text-danger">Ingrese teléfon Válido <i>+569xxxxxxxx</i></label> 

                        <div class="d-flex align-items-start " >
                            <div class=" p-2">
                                +56    
                            </div>
                            <div>
                                <input type="text"  autocomplete="off" class="form-control" id="inputPhone" placeholder="Ej: XXXXXXXXX" v-model="phone">
                            </div>
                        </div>
                    </div>
                   
                </div>

               
                <!--
                <div class="form-group ">
                    <label for="inputDocId">N° Cedula RUT </label>
                    <input type="text"  autocomplete="off" class="form-control" id="inputDocId" placeholder="xx.xxx.xxx-y" v-model="doc_id">
                </div>
                -->
            <br>
            
        <!-- 
            <div class="d-flex justify-content-between">
                <label v-if="passwd == passwd2 " for="inputPassword4">Ingrese una contraseña</label> 
                <label v-else class="text-danger">Contraseñas no coinciden </label>  
                <i @click="showMePassword1()" style="font-size:30px" class="bi" :class="{ 'bi-eye-slash': !showPassword1 , 'bi-eye': showPassword1   }" > </i>
            </div>
        -->
                <div class="form-group  d-flex justify-content-evenly" >

                    <div>
                        <div class=" m-1 ">
                            <label for="inputEmail4">Ingrese contraseña </label>
                            <input :type="type_password1"  autocomplete="off" class="form-control" :class="{'border-danger' : (passwd != passwd2 && passwd2!=null)   }"  placeholder="***" id="inputPassword4"  v-model="passwd">
                                       </div>
                    </div>

                    <div class=" m-1 ">
                         <label >Repita contraseña</label> 
                         <input :type="type_password1"  autocomplete="off" class="form-control" :class="{'border-danger' : (passwd != passwd2 && passwd2!=null)   }" placeholder="***" id="inputPassword2"  v-model="passwd2">
                    </div>
                    <div class="mt-4 ml-2">
                        <i @click="showMePassword1()" style="font-size:30px" class="bi" :class="{ 'bi-eye-slash': !showPassword1 , 'bi-eye': showPassword1   }" > </i>
                    </div>
                    
                </div>
                <div  class="">
                        
                            <text :class="{'text-danger' : (passwd==null  || (passwd!=null && passwd.length<5))  }" >
                                <i v-if="! (passwd==null  || (passwd!=null && passwd.length<5)) " style="font-size:20px" class="bi bi-check-lg text-success"></i>
                                Contraseña más de 6 caracteres    
                            </text><br>
                            <text :class="{'text-danger' : (passwd==null || !(passwd == passwd2 && passwd2!=null && passwd != null ))  }">
                               <i v-if="(passwd == passwd2 && passwd2!=null && passwd != null )" style="font-size:20px" class="bi bi-check-lg text-success"></i>
                                Contraseña deben ser iguales
                            </text>
                        

                      
                </div>

                </div>
                

                <br>
                <p style="font-size:20px">Dirección</p>

                <div class="form-group">
                    <label for="inputSpecialty">Region</label>
                    <br>
                <!-- 
                    <input type="text"  autocomplete="off"  class="form-control" id="specialty" placeholder="Ej: Kinesiologia, psicologia, terapia.." v-model="specialty">
                -->
                    <select class="form-select form-select"  name="languages" id="lang" v-model="address_location_region" placeholder="Seleccione" >
                       
                        <option  value="0">-- Seleccione ---</option>        
                        <option v-for="region in REGION_ZONES.regions" :value="region.number" >{{region.name}}</option>        
                      
                    </select>

                </div>


                <div class="form-group">
                    <label for="inputSpecialty">Comuna</label>
                    <br>
                <!-- 
                    <input type="text"  autocomplete="off"  class="form-control" id="specialty" placeholder="Ej: Kinesiologia, psicologia, terapia.." v-model="specialty">
                -->
                    <select class="form-select form-select"  name="languages" id="lang" v-model="address_location_zone" placeholder="XXX" >
                        
                        <option  value="0">- Seleccione Comuna -</option>        
                        <option v-for="comuna in comunas_list_filtered" :value="comuna.identifier" >{{comuna.name}}</option>        
                      

                    </select>
                </div>
                <br>




                <div class="form-group">

                    <label for="inputSpecialty">Su Dirección </label>
                    <br>
                    <div class=" m-1 ">
                         <input type="text" autocomplete="off" placeholder="Calle"  class="form-control" id="address_street_name" v-model="address_street_name">
                    </div>
                   
                    <div class="form-group  d-flex justify-content-evenly" >
                        <div class=" m-1 ">
                            <input type="text"  autocomplete="off" class="form-control " id="address_street_number" placeholder="Numero" v-model="address_street_number">
                        </div>
                    
                        <div class=" m-1 ">
                            <input type="text"  autocomplete="off" class="form-control " id="address_street_apartment" placeholder="Dpto" v-model="address_street_apartment">
                        </div>
                    </div>
                    <br>

                


                   
                    Ingrese alguna referencia de su direccion. 
                    <textarea type="text"  autocomplete="off" class="form-control" id="inputAddress" placeholder="Incluya la mayor descripcion posible de su direccion" v-model="address_reference"> </textarea>


                <!--
                <label v-if="personal_address!= null && personal_address.length < 40 " >Su direccion donde recibirá los objetos</label> 
                <label v-else class="text-danger">Dirección No es Válida</label> 

                <textarea type="text"  autocomplete="off" class="form-control" id="inputAddress" placeholder="Incluya la mayor descripcion posible de su direccion" v-model="personal_address"> </textarea>
                -->
                
                </div>



                <div class="text-center pt-5 mb-5 pb-5" >

                    <a  @click='sendFormRegister();showForm = false' class="btn btn-primary"  >Registrarme! </a>
                    <!-- 
                    <button @click='sendFormRegister' class="btn btn-primary">Registrarme!</button>
                    -->
                </div>

            </form>

        </div>
        <div v-if="!showForm" >
            <p class="text-center" >
                <i class="bi bi-emoji-heart-eyes text-success" style="font-size: 2.5em;" ></i>  
                <text class="" style="font-size: 1.1em;" > 
                   
                    &nbsp;&nbsp;&nbsp; Gracias por su registro <br> Ya puedes ingresar al portal de intercambio de objetos. </text>
            </p>
            
            <p class="text-center">
                <a  @click="$router.push({ name: 'ViewSearch' })" class="btn btn-success"  >Ir a Login </a>
            </p>

          
                   
        </div>


</div>
</template>


<style scoped>

</style>

<script>
//const showForm = ref(false)


export default {
  data : function() {
    return {
       showForm : true ,
       names : "" ,
       last_name1 : "" ,
       last_name2 : "" ,
       email  : "" ,
       phone  : "" ,
       id_number  : "" ,
       passwd  : null ,
       passwd2  : null ,


       address_street_name          : "" ,
       address_street_number        : null ,
       address_street_apartment     : null  ,
       address_location_zone        : 0 ,
       address_location_region      : 0 ,
       address_reference            : "" ,
       
       showKnowMore1 : false ,
       showPassword1 : false ,
       showPassword2 : false ,
       type_password1 : "password" ,

       comunas_list_filtered : null 


    }
  },

 props: [],
 //emits: ['closeRegisterForm'] , 

  methods: {

    showMePassword1()
    {
    this.showPassword1= !this.showPassword1  

        if ( this.showPassword1) 
        { 
            this.type_password1 = "text"
        } 
        else 
        {
            this.type_password1 = "password"
        }

    },

    sendFormRegister2 () {
      console.log(" send form register method ");
      //return 0 ;
    }, 
    
    async sendFormRegister()
        {
           console.log("send Register Form");
           var r = true;
          
           if (confirm("Confirmar para enviar formulario") == true) {

            //alert("Gracias por su Registro, Pronto nos pondremos en contacto con usted")

                const json = { 
                    names : this.names,
                    last_name1 : this.last_name1,
                    last_name2 : this.last_name2,
                    email	: this.email,
                    phone : this.phone ,
                    id_number	: this.id_number,
                    passwd	:	this.passwd,
                    address_street_name:	this.address_street_name,
                    address_street_number : this.address_street_number,
                    address_street_apartment : this.address_street_apartment,
                    address_location_region : this.address_location_region,
                    address_location_zone : this.address_location_zone,
                    address_reference : this.address_reference

                    };

                //app.config.globalProperties.dbhost = 'http://192.168.0.114:8080' ;       
                console.log ("sendFormRegister  REQUEST :"+ JSON.stringify(json)  );
                let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_register_user",json );
                console.log ("sendFormRegister  RESPONSE:"+JSON.stringify(response_json.data)) ;
                //app = response_json.data[0];
                //alert("Gracias por su Registro");
                //console.log ("Rows : "+JSON.stringify(response_json.data.rows[0].name )  );
                //if (response_json.data.rows[0] )
               // if (response_json.data.rows[0].name != null )
               // {
                    //display modal 
                    //this.display = true ;
                //location.href = "/index.html";
                //window.location.replace("/index.html");
                //this.$emit('closeRegisterForm', response_json.data );
                //}

                }
                //location.href = "/index.html";

        },

    compare () {
        if (this.passwd2 === this.passwd)
        {
            console.log("contraseña es igual")
        }
        else 
        {
            console.log("contraseña no coincide")
        }

     
      //return 0 ;
    }, 




  },

  watch : {

        names(newVal,oldVal)
        {
            console.log("new value-"+newVal+"-")
            console.log("last char-"+newVal[newVal.length-1]+"-")
            

            if ( newVal[newVal.length-1] === " ")
            {
                console.log("Ingreso Espacio "+newVal[newVal.length-1]+"-")
                const nameSplitted = newVal.split(" ");
                
            }

            //  if (newVal[newVal.length-1] ==" " && newVal[newVal.length-2] !=" " )
            /*
            if (newVal != oldVal  )
            {
            console.log("Name change to "+newVal)
            const nameSplitted = newVal.split(" ");
            let finalName=""
            console.log("Name change to "+nameSplitted)
            //let nameFinal=""
            for (let i = 0; i < nameSplitted.length; i++) {
            
                //nameSplitted[i]=nameSplitted[i].charAt(0).toUpperCase() +nameSplitted[i].slice(1).toLowerCase() 
                finalName= finalName +" "+nameSplitted[i].charAt(0).toUpperCase() +nameSplitted[i].slice(1).toLowerCase() 
            }
            console.log("Final Name "+finalName)
            //console.log("finalName :"+finalName)

           //this.names = newVal.charAt(0).toUpperCase() + newVal.slice(1).toLowerCase();;
            this.names = finalName 
            }
            */            
        },

        address_location_region(newVal, oldVal)
        {
            console.log("REGION CHANGE TO : "+newVal )

            let aux = REGION_ZONES.regions.filter((obj, index) => { return obj.number ===  newVal  } )  



            this.comunas_list_filtered = aux[0].communes

            console.log("REgion comunas:"+JSON.stringify(this.comunas_list_filtered) )

        },

         // NO SE ACTUALIZAAAA
        passwd2(oldval,newval)
        { 
            console.log("passwd2 cambia");
            this.compare()
        },
        passwd(oldval,newval)
        { 
            console.log("passwd1 cambia"); 
            this.compare()
        },
        
        }
}
</script>