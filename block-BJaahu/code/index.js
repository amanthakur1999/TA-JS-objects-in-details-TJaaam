methodQuestion = {

    isAnwserCorrect :function(index) {
        return index === this.correctAnswerIndex
    },
 getCorrectAnwser :function(){
        return this.options[this.correctAnswerIndex]
    },

}
function createQuestion(title, options,correctAnwserIndex) {
        let questions = Object.create(methodQuestion);
        questions.title = title;
        questions.options = options;
        questions.correctAnwserIndex = correctAnwserIndex;
        return questions
}
const firstQuestion = createQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)
const secondQuestion = createQuestion('Where is the capital of Jamaica',['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2)

// F.prototype

function CreateQuestion(title, options,correctAnwserIndex) {
    
    this.title = title;
    this.options = options;
    this.correctAnwserIndex = correctAnwserIndex;
    
}
CreateQuestion.prototype = {
    isAnwserCorrect :function(index) {
        return index === this.correctAnswerIndex
    },
 getCorrectAnwser :function(){
        return this.options[this.correctAnswerIndex]
    },


}
let firstQuestion = new CreateQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new CreateQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

// class

class  Questions {
  constructor(title, options,correctAnwserIndex) {
    
    this.title = title;
    this.options = options;
    this.correctAnwserIndex = correctAnwserIndex;
  }
  isAnwserCorrect(index) {
    return index === this.correctAnswerIndex
}
getCorrectAnwser(){
    return this.options[this.correctAnswerIndex]
}
  
}
let firstQuestion = new Questions(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Questions(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );
