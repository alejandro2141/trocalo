<script setup  >
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
                        <input type="text" autocomplete="off" class="form-control border-2" :class="[{ 'border-success ' : (valid_names==3)  },{ 'border-danger' : (valid_names==1)}]" id="names" placeholder="Nombres" v-model="names">
                </div>
            
                <div class="form-group d-flex justify-content-evenly">
                    <div class=" m-1 ">
                        <input type="text" autocomplete="off"  class="form-control border-2" :class="[{ 'border-success ' : (valid_last_name1==3)},{ 'border-danger' : (valid_last_name1==1)}]" id="inputLastName" placeholder="Appellido Paterno" v-model="last_name1">
                    </div>
                    <div class=" m-1 ">
                        <input type="text"  autocomplete="off" class="form-control border-2" :class="[{ 'border-success ' : (valid_last_name2==3)} ,{ 'border-danger' : (valid_last_name2==1)}]" id="inputSecondLastName" placeholder="Appellido Materno" v-model="last_name2">
                    </div>
                </div>

                <div class="form-group  m-1">
                       <input type="email"  autocomplete="off" class="form-control border-2" :class="[{'border-success ' : (valid_email==3)} ,{ 'border-danger' : (valid_email==1)}]" id="inputEmail4" placeholder="Email@" v-model="email">
                </div>

                 <div class="form-group  mt-2">
                        <input   autocomplete="off" class="form-control border-2" :class="[{ 'border-success ':(valid_id_number==3)} ,{ 'border-danger' : (valid_id_number==1)}] "  placeholder="Rut" v-model="id_number">
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
                                <input type="text"  autocomplete="off" class="form-control border-2" :class="[{ 'border-success ' : (valid_phone==3)},{ 'border-danger' : (valid_phone==1)}]" id="inputPhone" placeholder="Ej: +56975323322" v-model="phone">
                            </div>
                        </div>
                    </div>
                   
                </div>
              
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
                            <input :type="type_password1"  autocomplete="off" class="form-control border-2" :class="[{ 'border-success' : (valid_passwd==1)},{'border-danger' : (passwd != passwd2 && passwd2!=null)},{ 'border-danger' : (valid_passwd==1)}]"  placeholder="***" id="inputPassword4"  v-model="passwd">
                        </div>
                    </div>

                    <div class=" m-1 ">
                         <label >Repita contraseña</label> 
                         <input :type="type_password1"  autocomplete="off" class="form-control border-2" :class="[{ 'border-success' : (valid_passwd==1)},{'border-danger' : (passwd != passwd2 && passwd2!=null)   },{ 'border-danger' : (valid_passwd==1)}]" placeholder="***" id="inputPassword2"  v-model="passwd2">
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
                    <select class="form-select form-select border-2"  name="languages" id="region" :class="[{ 'border-success' : (valid_address_location_region==3)},{ 'border-danger' : (valid_address_location_region==1)}]" v-model="address_location_region" placeholder="Seleccione" >
                       
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
                    <select class="form-select form-select border-2"  name="languages" id="zone" :class="[{ 'border-success' : (valid_address_location_zone==3)},{ 'border-danger' : (valid_address_location_zone==1)}]"  v-model="address_location_zone" placeholder="XXX" >
                        <option  value="0">- Seleccione Comuna -</option>        
                        <option v-for="comuna in comunas_list_filtered" :value="comuna.identifier" >{{comuna.name}}</option>        
                    </select>
                </div>
                <br>




                <div class="form-group">

                    <label for="inputSpecialty">Su Dirección </label>
                    <br>
                    <div class=" m-1 ">
                         <input type="text" autocomplete="off" placeholder="Calle"  class="form-control border-2" :class="[{'border-success ' : (valid_address_street_name==3)},{'border-danger' : (valid_address_street_name==1)}]" id="address_street_name" v-model="address_street_name">
                    </div>
                   
                    <div class="form-group  d-flex justify-content-evenly" >
                        <div class=" m-1 ">
                            <input type="text"  autocomplete="off" class="form-control border-2" :class="[{'border-success ' : (valid_address_street_number==3)},{'border-danger' : (valid_address_street_number==1)}]"  id="address_street_number" placeholder="Numero" v-model="address_street_number">
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


                <div v-if="showInputErrors" class="text-danger">

                    <text v-if="valid_names==1"><br> Debe ingresar Nombres </text>
                    <text v-if="valid_last_name1==1"><br> Debe ingresar Primer Apellido </text>
                    <text v-if="valid_last_name2==1"><br> Debe ingresar Segundo Apellido </text>
                    <text v-if="valid_email==1"><br> Debe ingresar un correo válido </text>
                    <text v-if="valid_phone==1"><br> Debe ingresar un telefono válido </text>
                    <text v-if="valid_id_number==1"><br> Debe ingresar su Identificador valido (RUT) </text>
                    <text v-if="valid_address_street_name==1"><br> Debe ingresar Nombres de Calle válido</text>
                    <text v-if="valid_passwd==1"><br> Debe ingresar password </text>
                    <text v-if="valid_address_location_region==1"><br> Debe ingresar Region </text>
                    <text v-if="valid_address_location_zone==1"><br> Debe ingresar Comuna </text>
                    <text v-if="valid_address_street_number==1"><br> Debe ingresar Numero de su calle </text>


                    <!-- 
                    valid_names {{ this.valid_names }}  <br>
                    valid_last_name1 {{ this.valid_last_name1}} <br>
                    valid_last_name2 {{ this.valid_last_name2}} <br>
                    valid_email {{ this.valid_email }} <br>
                    valid_phone {{ this.valid_phone }}<br>
                    valid_id_number {{ this.valid_id_number }} <br>
                    valid_address_street_name {{ this.valid_address_street_name }} <br>
                    valid_address_street_number {{ this.valid_address_street_number }} <br>
                    valid_passwd {{ this.valid_passwd }} <br>
                    valid_address_location_region {{ this.valid_address_location_region }} <br>
                    valid_address_location_zone {{ this.valid_address_location_zone }}<br>
                    valid_address_street_number {{ this.valid_address_street_number }}<br>
                    -->

                </div>


                <div class="text-center pt-5 mb-5 pb-5" >

                    <a  @click='sendFormRegister()' class="btn btn-primary"  >Registrarme! </a>
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
                   
                    &nbsp;&nbsp;&nbsp; Gracias por su registro <br> Ya puedes comenzar a intercambiar objetos </text>
            </p>
            
            <p class="text-center">
                <a  @click="$router.push({ name: 'ViewSearch' })" class="btn btn-success"  >Ir a Login </a>
            </p>       
        </div>


</div>
</template>


<style scoped>

</style>

<script  >
//const showForm = ref(false)


export default {
  data : function() {
    return {
       showForm : true ,
       
       names : "" ,
       valid_names: 0, 

       last_name1 : "" ,
       valid_last_name1: 0, 
              
       last_name2 : "" ,
       valid_last_name2: 0,

       email  : "" ,
       valid_email: 0,

       phone  : "" ,
       valid_phone: 0,

       id_number  : "" ,
       valid_id_number: 0,

       passwd  : null ,
       passwd2  : null ,
       valid_passwd : 0,

       address_street_name          : "" ,
       valid_address_street_name: 0,

       address_street_number        : null ,
       valid_address_street_number : 0,

       address_street_apartment     : null  ,

       address_location_zone        : 0 ,
       valid_address_location_zone : 0,

       address_location_region      : 0 ,
       valid_address_location_region : 0,


       address_reference            : "" ,
       
       showKnowMore1 : false ,
       showPassword1 : false ,
       showPassword2 : false ,
       type_password1 : "password" ,

       comunas_list_filtered : null , 

       showInputErrors : false ,


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
         
           //check if all valid are 3
           if ( this.valid_address_location_region==3 &&  this.valid_address_street_number==3 &&  this.valid_names==3 && this.valid_last_name1==3 && this.valid_last_name2==3 && this.valid_email==3 && this.valid_phone==3 &&  this.valid_id_number==3 && this.valid_address_street_name==3 )
           {
          
                    if (confirm("Desea enviar estos datos para su registro? ") == true) {

                        //alert("Gracias por su Registro, Pronto nos pondremos en contacto con usted")
                        if (this.address_street_apartment == null)
                        {this.address_street_apartment = 0}

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
                this.showForm = false
            }
            else 
            {
                this.showInputErrors=true 

                if (this.valid_names!=3)
                {  this.valid_names=1 }

                if (this.valid_last_name1!=3)
                {   this.valid_last_name1=1 }
                
                if (this.valid_last_name2!=3)
                {   this.valid_last_name2=1 }
                
                if (this.valid_email!=3)
                {   this.valid_email=1 }
                
                if (this.valid_phone!=3)
                {   this.valid_phone=1 }
                
                if (this.valid_id_number!=3)
                {   this.valid_id_number=1 }
                
                if (this.valid_address_street_name!=3)
                {   this.valid_address_street_name=1 }
                
                if (this.valid_address_street_number!=3)
                {   this.valid_address_street_number=1 }

                if (this.valid_passwd!=3)
                {   this.valid_passwd=1 }

                if (this.valid_address_location_region!=3)
                {   this.valid_address_location_region=1 }

                if (this.valid_address_location_zone!=3)
                {   this.valid_address_location_zone=1 }

                if (this.valid_address_street_number!=3)
                {   this.valid_address_street_number=1 }


                this.showForm = true 
            }

        },

    compare () {
        if (this.passwd2 === this.passwd)
        {
            console.log("contraseña es igual")
            this.valid_passwd=3
        }
        else 
        {
            console.log("contraseña no coincide")
    
        }

     
      //return 0 ;
    }, 

    capitalizeNames (newVal) {
    
        if (newVal!=null && newVal.length>0)
        {
            name= newVal.charAt(0).toUpperCase() + newVal.slice(1).toLowerCase() ;
    
            for (let i = 0; i < newVal.length; i++) {
                    
                    if ( newVal[i-1] === " ")
                    {
                    console.log("Text Before SPace:-"+newVal.slice(0,i)+"-");
                    console.log("Text Afetr Space:-"+newVal.slice(i)+"-");
                    name= newVal.slice(0,i) + newVal.charAt(i).toUpperCase() + newVal.slice(i+1).toLowerCase() 

                   // name=  newVal.slice(0,i) +  newVal.charAt(i+1).toUpperCase()+ newVal.slice(i+2).toLowerCase()
                    }
                }
            return name 
        }
        else 
        {
            return null 
        }

    }, 


  },

  watch : {

        names(newVal,oldVal)
        {
            this.names = this.capitalizeNames(newVal) 
            //validate Names
            if (this.names.length > 3 )
            {
                this.valid_names = 3 
            }
            else 
            {
                this.valid_names = 1
            }

        },

        last_name1(newVal,oldVal)
        {
            this.last_name1=this.capitalizeNames(newVal)    
              //validate Names
            if (this.last_name1.length > 5 )
            {
                this.valid_last_name1 = 3 
            }
            else 
            {
                this.valid_last_name1 = 1
            }
        },

        last_name2(newVal,oldVal)
        {
            this.last_name2=this.capitalizeNames(newVal)
               //validate Names
               if (this.last_name2.length > 5 )
                {
                    this.valid_last_name2 = 3 
                }
                else 
                {
                    this.valid_last_name2 = 1
                }
        },

      
       id_number(newVal,oldVal)
        {
        
            var tmp 	= newVal.split('-')
            var digv	= tmp[1]
            var rut 	= tmp[0]
            //obtain verification value from rut
            var digv_obtained = null ; 

            var M=0,S=1 
            //goes trough Rut digits and calculate
            for(;rut;rut=Math.floor(rut/10))
            {  
                 S=(S+rut%10*(9-M++%6))%11 
            }

            console.log("S :"+S ) 
            digv_obtained = S-1
            if (S==0)
            {digv_obtained = "k" }
            if (S==11)
            {digv_obtained = 0 }
 
            console.log("digv:"+digv+"  digv_obtained:"+digv_obtained+" " ) 

                if (digv == digv_obtained)
                {
                    console.log("EUREKA ") 
                    this.valid_id_number=3
                    console.log("Valid_id_number:"+this.valid_id_numer) 
                }
                else 
                {
                    console.log("NO SON IGUALES ")
                    this.valid_id_number=1
                }

        },

        email(newVal,oldVal)
        {
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (this.email.match(validRegex)) 
            {
                this.valid_email = 3
            }
 
        },

        phone(newVal,oldVal)
        {
            if ( newVal.length ==9 ) 
            {
                this.valid_phone = 3
            }
            else 
            {
                this.valid_phone = 1
            }
        },

        address_street_name(newVal,oldVal)
        {
            this.address_street_name=this.capitalizeNames(newVal)
              //validate Names
              if ( this.address_street_name!=null && this.address_street_name.length > 3 )
                {
                    this.valid_address_street_name = 3 
                }
                else 
                {
                    this.valid_address_street_name = 1
                }
        },

        address_location_region(newVal, oldVal)
        {
            if(newVal!=0)
            { 
                console.log("REGION CHANGE TO : "+newVal )
                let aux = REGION_ZONES.regions.filter((obj, index) => { return obj.number ===  newVal  } )  
                this.comunas_list_filtered = aux[0].communes
                console.log("REgion comunas:"+JSON.stringify(this.comunas_list_filtered) )

                if ( aux!=null )
                {
                    this.valid_address_location_region=3
                }
                else 
                {
                    this.valid_address_location_region=1
                }
            }
            else 
            {

            }

        
        },

        address_location_zone(newVal, oldVal)
        {
            console.log("address location zone CHANGE TO : "+newVal )
            if (newVal != 0)
            { this.valid_address_location_zone = 3}
            
        },

        address_street_number(newVal, oldVal)
        {
            console.log("address location zone CHANGE TO : "+newVal )
            if (newVal !=null && newVal.length>0  )
            { this.valid_address_street_number = 3}
            
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