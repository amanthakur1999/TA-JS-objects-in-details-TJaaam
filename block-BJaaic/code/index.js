let aboutAnimal ={
    eat : function(){
        alert(`I live in ${location} and I can eat`);
    },
    changeLocation: function(newLocation){
        
    }
}
function animal(location , numberOfLegs){

let animals = Object.create()
animals.location = location;
animals.numberOfLegs = numberOfLegs
return animals
}