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