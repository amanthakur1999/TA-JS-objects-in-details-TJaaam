# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object

- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

```js
function createData(name, id, noOfProjects) {
  let data = {};
  data.name = name;
  data.id = id;
  data.noOfProjects = noOfProjects;
  data.getProjects = function (){
    return data.noOfProjects;
  },

  data.changeName = function (newName) {
    let prevName = user.name
    user.name = newName
    return prevName;
  };

  data.incrementProject =function (){
    data.noOfProjects += 1;
    return noOfproject
  }
  data.decrementProject =function (){
    data.noOfProjects -= 1;
    return noOfProject
  }
  return data
}

let aman =createData("Aman",294,77);
let johh = createData ("john",345,76);

```

```js
let createMethod = {

  getProjects: function (){
    return this.noOfProjects;
  },

   changeName: function (newName) {
    let prevName = this.name
    this.name = newName
    return prevName;
  },

  incrementProject: function (){
    this.noOfProjects += 1;
    return noOfproject
  }
  decrementProject: function (){
    this.noOfProjects -= 1;
    return noOfProject
  }
}

function createData(name, id, noOfProjects) {
  let data = Object.create(createMethod)
  data.name = name;
  data.id = id;
  data.noOfProjects = noOfProjects;
  return data;

 
// }

// let aman =createData("Aman",294,77);
// let johh = createData ("john",345,76);

```

```js
// //PseudoClassical Pattern

let CreatedData.prototype = {

  getProjects: function (){
    return this.noOfProjects;
  },

   changeName: function (newName) {
    let prevName = this.name
    this.name = newName
    return prevName;
  },

  incrementProject: function (){
    this.noOfProjects += 1;
    return noOfproject
  }
  decrementProject: function (){
    this.noOfProjects -= 1;
    return noOfProject
  }
}

function CreateData(name, id, noOfProjects) {
  
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
  
 
}

let aman = new CreateData("Aman",294,77);
let johh = new CreateData ("john",345,76);

```
```js
//class Pattern



class CreateData {
  constructor(name, id, noOfProjects){
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
  }
  getProjects(){
    return this.noOfProjects;
  }

   changeName (newName) {
    let prevName = this.name
    this.name = newName
    return prevName;
  }

  incrementProject(){
    this.noOfProjects += 1;
    return noOfproject
  }
  decrementProject(){
    this.noOfProjects -= 1;
    return noOfProject
  }
 
}

let aman = new CreateData("Aman",294,77);
let johh = new CreateData ("john",345,76);
```