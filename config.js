// UPDATED 18-04-2024 11:17
/*
let BKND_CONFIG ;
let BKND_REGIONS = [] ;
*/
let BKND_CONFIG = {
    //BKND_HOST : "HTTP://ec2-3-143-168-51.us-east-2.compute.amazonaws.com:8080",
    //local ENv
  //BKND_HOST : "https://reusar.cl:8084",
  BKND_HOST : "http://localhost:8080",
   // BKND_HOST : "http://ec2-3-149-255-22.us-east-2.compute.amazonaws.com:8080",
    
    //DEVEL
    //BKND_HOST : "https://www.horapo.com:8443",
    //PROD
    //BKND_HOST : "https://www.horapo.com:8443",
    BKND_TIME : 1000,
    BNKD_USER : 'abc'
  };

// let PATH_PRODUCT_IMG = "public/productImages/" ;
 let PATH_PRODUCT_IMG = "/public/productImages/" ;


 let CATEGORIES = [
  { name: "- Otras  -"        , id: 0 , icon:"" } ,
  { name: "Accesorios"        , id: 9 , icon:"bi bi-sunglasses" } ,
  { name: "Arte"              , id: 11 , icon:"bi bi-card-image" } ,
  { name: "Computacion"       , id: 12 , icon:"bi bi-laptop" } ,
  { name: "Deportes"          , id: 5 , icon:"bi bi-bicycle" } ,
  { name: "Electrodomesticos" , id: 13 , icon:"bi bi-plug" } ,
  { name: "ElectroHogar"      , id: 15 , icon:"bi bi-lamp" } ,
  { name: "Fotografia"        , id: 10 , icon:"bi bi-camera" } ,
  { name: "Herramientas"      , id: 6 , icon:"bi bi-wrench" } ,
  { name: "Hogar"             , id: 3 , icon:"bi bi-house" } ,
  { name: "Jardin"            , id: 17 , icon:"bi bi-tree" } , 
  { name: "Juegos"            , id: 1 , icon:"bi bi-controller" } ,
  { name: "Jugetes"           , id: 7 , icon:"bi bi-rocket" } , 
  { name: "Libros"            , id: 2 , icon:"bi bi-book" } ,
  { name: "Mobilidad"         , id: 16 , icon:"bi bi-scooter" } , 
  { name: "Telefonia"         , id: 14 , icon:"bi bi-phone-vibrate" },
  { name: "Vehiculos"         , id: 8 , icon:"bi bi-car-front" } , 
  { name: "Vestuario"         , id: 4 , icon:"bi bi-universal-access" } ,




 

 





 
] ;


let REGION_ZONES = {
  "name": "Chile",
  "regions": [
    {
      "name": "Arica y Parinacota",
      "romanNumber": "XV",
      "number": "15",
      "abbreviation": "AP",
      "communes": [
        { "name": "Arica", "identifier": "XV-1" },
        { "name": "Camarones", "identifier": "XV-2" },
        { "name": "General Lagos", "identifier": "XV-3" },
        { "name": "Putre", "identifier": "XV-4" }
      ]
    },
    {
      "name": "Tarapacá",
      "romanNumber": "I",
      "number": "1",
      "abbreviation": "TA",
      "communes": [
        { "name": "Alto Hospicio", "identifier": "I-1" },
        { "name": "Camiña", "identifier": "I-2" },
        { "name": "Colchane", "identifier": "I-3" },
        { "name": "Huara", "identifier": "I-4" },
        { "name": "Iquique", "identifier": "I-5" },
        { "name": "Pica", "identifier": "I-6" },
        { "name": "Pozo Almonte", "identifier": "I-7" }
      ]
    },
    {
      "name": "Antofagasta",
      "romanNumber": "II",
      "number": "2",
      "abbreviation": "AN",
      "communes": [
        { "name": "Antofagasta", "identifier": "II-1" },
        { "name": "Calama", "identifier": "II-2" },
        { "name": "María Elena", "identifier": "II-3" },
        { "name": "Mejillones", "identifier": "II-4" },
        { "name": "Ollagüe", "identifier": "II-5" },
        { "name": "San Pedro de Atacama", "identifier": "II-6" },
        { "name": "Sierra Gorda", "identifier": "II-7" },
        { "name": "Taltal", "identifier": "II-8" },
        { "name": "Tocopilla", "identifier": "II-9" }
      ]
    },
    {
      "name": "Atacama",
      "romanNumber": "III",
      "number": "3",
      "abbreviation": "AT",
      "communes": [
        { "name": "Alto del Carmen", "identifier": "III-1" },
        { "name": "Caldera", "identifier": "III-2" },
        { "name": "Chañaral", "identifier": "III-3" },
        { "name": "Copiapó", "identifier": "III-4" },
        { "name": "Diego de Almagro", "identifier": "III-5" },
        { "name": "Freirina", "identifier": "III-6" },
        { "name": "Huasco", "identifier": "III-7" },
        { "name": "Tierra Amarilla", "identifier": "III-8" },
        { "name": "Vallenar", "identifier": "III-9" }
      ]
    },
    {
      "name": "Coquimbo",
      "romanNumber": "IV",
      "number": "4",
      "abbreviation": "CO",
      "communes": [
        { "name": "Andacollo", "identifier": "IV-1" },
        { "name": "Canela", "identifier": "IV-2" },
        { "name": "Combarbalá", "identifier": "IV-3" },
        { "name": "Coquimbo", "identifier": "IV-4" },
        { "name": "Illapel", "identifier": "IV-5" },
        { "name": "La Higuera", "identifier": "IV-6" },
        { "name": "La Serena", "identifier": "IV-7" },
        { "name": "Los Vilos", "identifier": "IV-8" },
        { "name": "Monte Patria", "identifier": "IV-9" },
        { "name": "Ovalle", "identifier": "IV-10" },
        { "name": "Paiguano", "identifier": "IV-11" },
        { "name": "Punitaqui", "identifier": "IV-12" },
        { "name": "Río Hurtado", "identifier": "IV-13" },
        { "name": "Salamanca", "identifier": "IV-14" },
        { "name": "Vicuña", "identifier": "IV-15" }
      ]
    },
    {
      "name": "Valparaíso",
      "romanNumber": "V",
      "number": "5",
      "abbreviation": "VA",
      "communes": [
        { "name": "Algarrobo", "identifier": "V-1" },
        { "name": "Cabildo", "identifier": "V-2" },
        { "name": "Calera", "identifier": "V-3" },
        { "name": "Calle Larga", "identifier": "V-4" },
        { "name": "Cartagena", "identifier": "V-5" },
        { "name": "Casablanca", "identifier": "V-6" },
        { "name": "Catemu", "identifier": "V-7" },
        { "name": "Concón", "identifier": "V-8" },
        { "name": "El Quisco", "identifier": "V-9" },
        { "name": "El Tabo", "identifier": "V-10" },
        { "name": "Hijuelas", "identifier": "V-11" },
        { "name": "Isla de Pascua", "identifier": "V-12" },
        { "name": "Juan Fernández", "identifier": "V-13" },
        { "name": "La Cruz", "identifier": "V-14" },
        { "name": "La Ligua", "identifier": "V-15" },
        { "name": "Limache", "identifier": "V-16" },
        { "name": "Llaillay", "identifier": "V-17" },
        { "name": "Los Andes", "identifier": "V-18" },
        { "name": "Nogales", "identifier": "V-19" },
        { "name": "Olmué", "identifier": "V-20" },
        { "name": "Panquehue", "identifier": "V-21" },
        { "name": "Papudo", "identifier": "V-22" },
        { "name": "Petorca", "identifier": "V-23" },
        { "name": "Puchuncaví", "identifier": "V-24" },
        { "name": "Putaendo", "identifier": "V-25" },
        { "name": "Quillota", "identifier": "V-26" },
        { "name": "Quilpué", "identifier": "V-27" },
        { "name": "Quintero", "identifier": "V-28" },
        { "name": "Rinconada", "identifier": "V-29" },
        { "name": "San Antonio", "identifier": "V-30" },
        { "name": "San Esteban", "identifier": "V-31" },
        { "name": "San Felipe", "identifier": "V-32" },
        { "name": "Santa María", "identifier": "V-33" },
        { "name": "Santo Domingo", "identifier": "V-34" },
        { "name": "Valparaíso", "identifier": "V-35" },
        { "name": "Villa Alemana", "identifier": "V-36" },
        { "name": "Viña del Mar", "identifier": "V-37" },
        { "name": "Zapallar", "identifier": "V-38" }
      ]
    },
    {
      "name": "Metropolitana de Santiago",
      "romanNumber": "XIII",
      "number": "13",
      "abbreviation": "RM",
      "communes": [
        { "name": "Alhué", "identifier": "XIII-1" },
        { "name": "Buin", "identifier": "XIII-2" },
        { "name": "Calera de Tango", "identifier": "XIII-3" },
        { "name": "Cerrillos", "identifier": "XIII-4" },
        { "name": "Cerro Navia", "identifier": "XIII-5" },
        { "name": "Colina", "identifier": "XIII-6" },
        { "name": "Conchalí", "identifier": "XIII-7" },
        { "name": "Curacaví", "identifier": "XIII-8" },
        { "name": "El Bosque", "identifier": "XIII-9" },
        { "name": "El Monte", "identifier": "XIII-10" },
        { "name": "Estación Central", "identifier": "XIII-11" },
        { "name": "Huechuraba", "identifier": "XIII-12" },
        { "name": "Independencia", "identifier": "XIII-13" },
        { "name": "Isla de Maipo", "identifier": "XIII-14" },
        { "name": "La Cisterna", "identifier": "XIII-15" },
        { "name": "La Florida", "identifier": "XIII-16" },
        { "name": "La Granja", "identifier": "XIII-17" },
        { "name": "La Pintana", "identifier": "XIII-18" },
        { "name": "La Reina", "identifier": "XIII-19" },
        { "name": "Lampa", "identifier": "XIII-20" },
        { "name": "Las Condes", "identifier": "XIII-21" },
        { "name": "Lo Barnechea", "identifier": "XIII-22" },
        { "name": "Lo Espejo", "identifier": "XIII-23" },
        { "name": "Lo Prado", "identifier": "XIII-24" },
        { "name": "Macul", "identifier": "XIII-25" },
        { "name": "Maipú", "identifier": "XIII-26" },
        { "name": "María Pinto", "identifier": "XIII-27" },
        { "name": "Melipilla", "identifier": "XIII-28" },
        { "name": "Ñuñoa", "identifier": "XIII-29" },
        { "name": "Padre Hurtado", "identifier": "XIII-30" },
        { "name": "Paine", "identifier": "XIII-31" },
        { "name": "Pedro Aguirre Cerda", "identifier": "XIII-32" },
        { "name": "Peñaflor", "identifier": "XIII-33" },
        { "name": "Peñalolén", "identifier": "XIII-34" },
        { "name": "Pirque", "identifier": "XIII-35" },
        { "name": "Providencia", "identifier": "XIII-36" },
        { "name": "Pudahuel", "identifier": "XIII-37" },
        { "name": "Puente Alto", "identifier": "XIII-38" },
        { "name": "Quilicura", "identifier": "XIII-39" },
        { "name": "Quinta Normal", "identifier": "XIII-40" },
        { "name": "Recoleta", "identifier": "XIII-41" },
        { "name": "Renca", "identifier": "XIII-42" },
        { "name": "San Bernardo", "identifier": "XIII-43" },
        { "name": "San Joaquín", "identifier": "XIII-44" },
        { "name": "San José de Maipo", "identifier": "XIII-45" },
        { "name": "San Miguel", "identifier": "XIII-46" },
        { "name": "San Pedro", "identifier": "XIII-47" },
        { "name": "San Ramón", "identifier": "XIII-48" },
        { "name": "Santiago", "identifier": "XIII-49" },
        { "name": "Talagante", "identifier": "XIII-50" },
        { "name": "Tiltil", "identifier": "XIII-51" },
        { "name": "Vitacura", "identifier": "XIII-52" }
      ]
    },
    {
      "name": "Libertador Gral. Bernardo O’Higgins",
      "romanNumber": "VI",
      "number": "6",
      "abbreviation": "LI",
      "communes": [
        { "name": "Chimbarongo", "identifier": "VI-1" },
        { "name": "Chépica", "identifier": "VI-2" },
        { "name": "Codegua", "identifier": "VI-3" },
        { "name": "Coinco", "identifier": "VI-4" },
        { "name": "Coltauco", "identifier": "VI-5" },
        { "name": "Doñihue", "identifier": "VI-6" },
        { "name": "Graneros", "identifier": "VI-7" },
        { "name": "La Estrella", "identifier": "VI-8" },
        { "name": "Las Cabras", "identifier": "VI-9" },
        { "name": "Litueche", "identifier": "VI-10" },
        { "name": "Lolol", "identifier": "VI-11" },
        { "name": "Machalí", "identifier": "VI-12" },
        { "name": "Malloa", "identifier": "VI-13" },
        { "name": "Marchihue", "identifier": "VI-14" },
        { "name": "Nancagua", "identifier": "VI-15" },
        { "name": "Navidad", "identifier": "VI-16" },
        { "name": "Olivar", "identifier": "VI-17" },
        { "name": "Palmilla", "identifier": "VI-18" },
        { "name": "Paredones", "identifier": "VI-19" },
        { "name": "Peralillo", "identifier": "VI-20" },
        { "name": "Peumo", "identifier": "VI-21" },
        { "name": "Pichidegua", "identifier": "VI-22" },
        { "name": "Pichilemu", "identifier": "VI-23" },
        { "name": "Placilla", "identifier": "VI-24" },
        { "name": "Pumanque", "identifier": "VI-25" },
        { "name": "Quinta de Tilcoco", "identifier": "VI-26" },
        { "name": "Rancagua", "identifier": "VI-27" },
        { "name": "Rengo", "identifier": "VI-28" },
        { "name": "Requínoa", "identifier": "VI-29" },
        { "name": "San Fernando", "identifier": "VI-30" },
        { "name": "San Francisco de Mostazal", "identifier": "VI-31" },
        { "name": "San Vicente de Tagua Tagua", "identifier": "VI-32" },
        { "name": "Santa Cruz", "identifier": "VI-33" }
      ]
    },
    {
      "name": "Maule",
      "romanNumber": "VII",
      "number": "7",
      "abbreviation": "ML",
      "communes": [
        { "name": "Cauquenes", "identifier": "VII-1" },
        { "name": "Chanco", "identifier": "VII-2" },
        { "name": "Colbún", "identifier": "VII-3" },
        { "name": "Constitución", "identifier": "VII-4" },
        { "name": "Curepto", "identifier": "VII-5" },
        { "name": "Curicó", "identifier": "VII-6" },
        { "name": "Empedrado", "identifier": "VII-7" },
        { "name": "Hualañé", "identifier": "VII-8" },
        { "name": "Licantén", "identifier": "VII-9" },
        { "name": "Linares", "identifier": "VII-10" },
        { "name": "Longaví", "identifier": "VII-11" },
        { "name": "Maule", "identifier": "VII-12" },
        { "name": "Molina", "identifier": "VII-13" },
        { "name": "Parral", "identifier": "VII-14" },
        { "name": "Pelarco", "identifier": "VII-15" },
        { "name": "Pelluhue", "identifier": "VII-16" },
        { "name": "Pencahue", "identifier": "VII-17" },
        { "name": "Rauco", "identifier": "VII-18" },
        { "name": "Retiro", "identifier": "VII-19" },
        { "name": "Romeral", "identifier": "VII-20" },
        { "name": "Río Claro", "identifier": "VII-21" },
        { "name": "Sagrada Familia", "identifier": "VII-22" },
        { "name": "San Clemente", "identifier": "VII-23" },
        { "name": "San Javier de Loncomilla", "identifier": "VII-24" },
        { "name": "San Rafael", "identifier": "VII-25" },
        { "name": "Talca", "identifier": "VII-26" },
        { "name": "Teno", "identifier": "VII-27" },
        { "name": "Vichuquén", "identifier": "VII-28" },
        { "name": "Villa Alegre", "identifier": "VII-29" },
        { "name": "Yerbas Buenas", "identifier": "VII-30" }
      ]
    },
    {
      "name": "Ñuble",
      "romanNumber": "XVI",
      "number": "16",
      "abbreviation": "NB",
      "communes": [
        { "name": "Bulnes", "identifier": "XVI-1" },
        { "name": "Chillán Viejo", "identifier": "XVI-2" },
        { "name": "Chillán", "identifier": "XVI-3" },
        { "name": "Cobquecura", "identifier": "XVI-4" },
        { "name": "Coelemu", "identifier": "XVI-5" },
        { "name": "Coihueco", "identifier": "XVI-6" },
        { "name": "El Carmen", "identifier": "XVI-7" },
        { "name": "Ninhue", "identifier": "XVI-8" },
        { "name": "Ñiquén", "identifier": "XVI-9" },
        { "name": "Pemuco", "identifier": "XVI-10" },
        { "name": "Pinto", "identifier": "XVI-11" },
        { "name": "Portezuelo", "identifier": "XVI-12" },
        { "name": "Quillón", "identifier": "XVI-13" },
        { "name": "Quirihue", "identifier": "XVI-14" },
        { "name": "Ránquil", "identifier": "XVI-15" },
        { "name": "San Carlos", "identifier": "XVI-16" },
        { "name": "San Fabián", "identifier": "XVI-17" },
        { "name": "San Ignacio", "identifier": "XVI-18" },
        { "name": "San Nicolás", "identifier": "XVI-19" },
        { "name": "Treguaco", "identifier": "XVI-20" },
        { "name": "Yungay", "identifier": "XVI-21" }
      ]
    },
    {
      "name": "Biobío",
      "romanNumber": "VIII",
      "number": "8",
      "abbreviation": "BI",
      "communes": [
        { "name": "Alto Biobío", "identifier": "VIII-1" },
        { "name": "Antuco", "identifier": "VIII-2" },
        { "name": "Arauco", "identifier": "VIII-3" },
        { "name": "Cabrero", "identifier": "VIII-4" },
        { "name": "Cañete", "identifier": "VIII-5" },
        { "name": "Chiguayante", "identifier": "VIII-6" },
        { "name": "Concepción", "identifier": "VIII-7" },
        { "name": "Contulmo", "identifier": "VIII-8" },
        { "name": "Coronel", "identifier": "VIII-9" },
        { "name": "Curanilahue", "identifier": "VIII-10" },
        { "name": "Florida", "identifier": "VIII-11" },
        { "name": "Hualpén", "identifier": "VIII-12" },
        { "name": "Hualqui", "identifier": "VIII-13" },
        { "name": "Laja", "identifier": "VIII-14" },
        { "name": "Lebu", "identifier": "VIII-15" },
        { "name": "Los Álamos", "identifier": "VIII-16" },
        { "name": "Los Ángeles", "identifier": "VIII-17" },
        { "name": "Lota", "identifier": "VIII-18" },
        { "name": "Mulchén", "identifier": "VIII-19" },
        { "name": "Nacimiento", "identifier": "VIII-20" },
        { "name": "Negrete", "identifier": "VIII-21" },
        { "name": "Penco", "identifier": "VIII-22" },
        { "name": "Quilaco", "identifier": "VIII-23" },
        { "name": "Quilleco", "identifier": "VIII-24" },
        { "name": "San Pedro de la Paz", "identifier": "VIII-25" },
        { "name": "San Rosendo", "identifier": "VIII-26" },
        { "name": "Santa Bárbara", "identifier": "VIII-27" },
        { "name": "Santa Juana", "identifier": "VIII-28" },
        { "name": "Talcahuano", "identifier": "VIII-29" },
        { "name": "Tirúa", "identifier": "VIII-30" },
        { "name": "Tomé", "identifier": "VIII-31" },
        { "name": "Tucapel", "identifier": "VIII-32" },
        { "name": "Yumbel", "identifier": "VIII-33" }
      ]
    },
    {
      "name": "Araucanía",
      "romanNumber": "IX",
      "number": "9",
      "abbreviation": "AR",
      "communes": [
        { "name": "Angol", "identifier": "IX-1" },
        { "name": "Carahue", "identifier": "IX-2" },
        { "name": "Cholchol", "identifier": "IX-3" },
        { "name": "Collipulli", "identifier": "IX-4" },
        { "name": "Cunco", "identifier": "IX-5" },
        { "name": "Curacautín", "identifier": "IX-6" },
        { "name": "Curarrehue", "identifier": "IX-7" },
        { "name": "Ercilla", "identifier": "IX-8" },
        { "name": "Freire", "identifier": "IX-9" },
        { "name": "Galvarino", "identifier": "IX-10" },
        { "name": "Gorbea", "identifier": "IX-11" },
        { "name": "Lautaro", "identifier": "IX-12" },
        { "name": "Loncoche", "identifier": "IX-13" },
        { "name": "Lonquimay", "identifier": "IX-14" },
        { "name": "Los Sauces", "identifier": "IX-15" },
        { "name": "Lumaco", "identifier": "IX-16" },
        { "name": "Melipeuco", "identifier": "IX-17" },
        { "name": "Nueva Imperial", "identifier": "IX-18" },
        { "name": "Padre las Casas", "identifier": "IX-19" },
        { "name": "Perquenco", "identifier": "IX-20" },
        { "name": "Pitrufquén", "identifier": "IX-21" },
        { "name": "Pucón", "identifier": "IX-22" },
        { "name": "Purén", "identifier": "IX-23" },
        { "name": "Renaico", "identifier": "IX-24" },
        { "name": "Saavedra", "identifier": "IX-25" },
        { "name": "Temuco", "identifier": "IX-26" },
        { "name": "Teodoro Schmidt", "identifier": "IX-27" },
        { "name": "Toltén", "identifier": "IX-28" },
        { "name": "Traiguén", "identifier": "IX-29" },
        { "name": "Victoria", "identifier": "IX-30" },
        { "name": "Vilcún", "identifier": "IX-31" },
        { "name": "Villarrica", "identifier": "IX-32" }
      ]
    },
    {
      "name": "Los Ríos",
      "romanNumber": "XIV",
      "number": "14",
      "abbreviation": "LR",
      "communes": [
        { "name": "Corral", "identifier": "XIV-1" },
        { "name": "Futrono", "identifier": "XIV-2" },
        { "name": "La Unión", "identifier": "XIV-3" },
        { "name": "Lago Ranco", "identifier": "XIV-4" },
        { "name": "Lanco", "identifier": "XIV-5" },
        { "name": "Los Lagos", "identifier": "XIV-6" },
        { "name": "Mariquina", "identifier": "XIV-7" },
        { "name": "Máfil", "identifier": "XIV-8" },
        { "name": "Paillaco", "identifier": "XIV-9" },
        { "name": "Panguipulli", "identifier": "XIV-10" },
        { "name": "Río Bueno", "identifier": "XIV-11" },
        { "name": "Valdivia", "identifier": "XIV-12" }
      ]
    },
    {
      "name": "Los Lagos",
      "romanNumber": "X",
      "number": "10",
      "abbreviation": "LL",
      "communes": [
        { "name": "Ancud", "identifier": "X-1" },
        { "name": "Calbuco", "identifier": "X-2" },
        { "name": "Castro", "identifier": "X-3" },
        { "name": "Chaitén", "identifier": "X-4" },
        { "name": "Chonchi", "identifier": "X-5" },
        { "name": "Cochamó", "identifier": "X-6" },
        { "name": "Curaco de Vélez", "identifier": "X-7" },
        { "name": "Dalcahue", "identifier": "X-8" },
        { "name": "Fresia", "identifier": "X-9" },
        { "name": "Frutillar", "identifier": "X-10" },
        { "name": "Futaleufú", "identifier": "X-11" },
        { "name": "Hualaihué", "identifier": "X-12" },
        { "name": "Llanquihue", "identifier": "X-13" },
        { "name": "Los Muermos", "identifier": "X-14" },
        { "name": "Maullín", "identifier": "X-15" },
        { "name": "Osorno", "identifier": "X-16" },
        { "name": "Palena", "identifier": "X-17" },
        { "name": "Puerto Montt", "identifier": "X-18" },
        { "name": "Puerto Octay", "identifier": "X-19" },
        { "name": "Puerto Varas", "identifier": "X-20" },
        { "name": "Puqueldón", "identifier": "X-21" },
        { "name": "Purranque", "identifier": "X-22" },
        { "name": "Puyehue", "identifier": "X-23" },
        { "name": "Queilén", "identifier": "X-24" },
        { "name": "Quellón", "identifier": "X-25" },
        { "name": "Quemchi", "identifier": "X-26" },
        { "name": "Quinchao", "identifier": "X-27" },
        { "name": "Río Negro", "identifier": "X-28" },
        { "name": "San Juan de la Costa", "identifier": "X-29" },
        { "name": "San Pablo", "identifier": "X-30" }
      ]
    },
    {
      "name": "Aisén del Gral. Carlos Ibáñez del Campo",
      "romanNumber": "XI",
      "number": "11",
      "abbreviation": "AI",
      "communes": [
        { "name": "Aisén", "identifier": "XI-1" },
        { "name": "Chile Chico", "identifier": "XI-2" },
        { "name": "Cisnes", "identifier": "XI-3" },
        { "name": "Cochrane", "identifier": "XI-4" },
        { "name": "Coyhaique", "identifier": "XI-5" },
        { "name": "Guaitecas", "identifier": "XI-6" },
        { "name": "Lago Verde", "identifier": "XI-7" },
        { "name": "O’Higgins", "identifier": "XI-8" },
        { "name": "Río Ibáñez", "identifier": "XI-9" },
        { "name": "Tortel", "identifier": "XI-10" }
      ]
    },
    {
      "name": "Magallanes y de la Antártica Chilena",
      "romanNumber": "XII",
      "number": "12",
      "abbreviation": "MA",
      "communes": [
        { "name": "Antártica", "identifier": "XII-1" },
        { "name": "Cabo de Hornos (Ex Navarino)", "identifier": "XII-2" },
        { "name": "Laguna Blanca", "identifier": "XII-3" },
        { "name": "Natales", "identifier": "XII-4" },
        { "name": "Porvenir", "identifier": "XII-5" },
        { "name": "Primavera", "identifier": "XII-6" },
        { "name": "Punta Arenas", "identifier": "XII-7" },
        { "name": "Río Verde", "identifier": "XII-8" },
        { "name": "San Gregorio", "identifier": "XII-9" },
        { "name": "Timaukel", "identifier": "XII-10" },
        { "name": "Torres del Paine", "identifier": "XII-11" }
      ]
    }
  ]
}

 




export {REGION_ZONES ,CATEGORIES, BKND_CONFIG, PATH_PRODUCT_IMG } ;

