class parent{
    bike(){
        console.log("passion pro");
    }
}

class child extends parent{ // inheriting 
    bike(){
        super.bike() // calls the parent bike() function
        console.log("royal enfield"); // method overriding
    }
}
 var ch = new child()
ch.bike()