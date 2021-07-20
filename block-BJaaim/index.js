let checkbtn = document.querySelector(".btn");
let nextBtn = document.querySelector(".nextBtn");
let PrevBtn = document.querySelector(".prevBtn");
let correctCount =0;

class Quiz{
    constructor (root, list =[],activeIndex =0, score =0){
this.list = list;
this.activeIndex = activeIndex;
this.score =score;
this.root =root;
    }
    nextQuestion(){
        return (this.activeIndex += 1)
    }
    prevQuestion(){
        return (this.activeIndex -= 1)
    }
    
}
