let aboutAnimal ={
    eat : function(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        return this.location
    },
    summary: function(){
console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
    }
}
function animal(location , numberOfLegs){

let animals = Object.create(aboutAnimal)
animals.location = location;
animals.numberOfLegs = numberOfLegs
return animals
}

//class
class animal { 
    constraction(location,numberOfLegs){
this.location = location;
this.numberOfLegs = numberOfLegs;
    }

    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation){
        this.location = newLocation;
        return this.location
    }
    summary(){
console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
    }
}

//

let dogsMethod ={
    bark: function(){
     alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newName){
        this.name = newName;
        return this.name
    },
    changeColor: function(newColor){
        this.color = newColor;
        return newColor;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}
Object.setPrototypeOf(dogsMethod,aboutAnimal)
function dog(location, numberOfLegs,name , color){

    let obj = aboutAnimal(location,numberOfLegs);
    Object.setPrototypeOf(obj,dogsMethod)
    obj.name = name;
    obj.color = color;
    return obj;
    }


    // class 
    class dogsMethod {
        constraction(name,color){
            this.name = name;
            this.color = color
        }
        bark(){
            alert(`I am ${this.name} and I can bark 🐶`)
           }
           changeName(newName){
               this.name = newName;
               return this.name
           }
           changeColor(newColor){
               this.color = newColor;
               return newColor;
           }
           summary(){
               return `I am ${this.name} and I am of ${this.color} color. I can also bark`
           }
    }
    