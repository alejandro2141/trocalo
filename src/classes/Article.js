
//{id:1 , name:"abcgame 1", description : "Consola en buen estado con 2 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , 
//alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_222"  , otherObj: true , category_1: 1 ,  category_2: 2  }, 
                            

export default class Article {
    id = null ;
    name = null;
    description = null ;
    alternative1=null;
    alternative2=null;
    alternative3=null;
    otherAlternatives = true;
    owner = null ; 
    category1 = null ;
    category2 = null ;
    category3 = null ;
    
    constructor(name, description, alternative1, alternative2, alternative3, otherAlternatives , owner, category1, category2, category3) 
    {
      this.name = name ;
      this.description = description ;

      this.alternative1= alternative1 ;
      this.alternative2= alternative2;
      this.alternative3= alternative3;
      this.otherAlternatives = otherAlternatives;
      this.owner = owner ; 
      this.category1 = category1  ;
      this.category2 = category2 ;
      this.category3 = category3 ;
    }
   
    getId()
    {return this.id ; }

    getName()
    {return this.name ; }
   
    getDescription()
    {return this.description ; }
    
    getDescription()
    {return this.description ; }
   
    getAlternative1()
    {return this.alternative1;  }
    
    getAlternative2()
    { return this.alternative2; }

    getAlternative3()
    { return this.alternative3; }
    
    getOtherAlternatives()
    { return this.otherAlternatives; }
    
    getOwner()
    { return this.owner;  } 
    
    getCategory1()
    { return this.category1;  }
    
    getCategory2()
    { return this.category2;    }
    
    getCategory3()
    { return this.category3;  }

      
}

