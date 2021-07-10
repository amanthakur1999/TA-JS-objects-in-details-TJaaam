
  let   title= 'Where is the capital of Jordan';
   let  options= ['Tashkent', 'Amaan', 'Kuwait City' ,'Nairobi'];
  let   correctAnswerIndex = 1;

  function isAnwserCorrect(index){
  return index === correctAnswerIndex;
  }
  function getCorrectAnwser() {
      return options[correctAnswerIndex]
  }

  let secondData ={
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,

    isAnwserCorrect(index) {
        return index === secondData.correctAnswerIndex
    },
    getCorrectAnwser(){
        return secondData.options[correctAnswerIndex]
    },

  };


  function createQuestion(title,options,correctAnswerIndex) {
      let question ={};
     question.title= title,
    question.options= options,
    question.correctAnswerIndex= correctAnswerIndex,

    question.isAnwserCorrect =function(index) {
        return index === question.correctAnswerIndex
    },
    question.getCorrectAnwser = function(){
        return question.options[question.correctAnswerIndex]
    };
    return question;
      
  }
  const firstQuestion = createQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)
  const secondQuestion = createQuestion('Where is the capital of Jamaica',['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2)

  //Convert the function to use `this` keyword

  function createQuestion(title,options,correctAnswerIndex) {
    let question ={};
   question.title= title,
  question.options= options,
  question.correctAnswerIndex= correctAnswerIndex,

  question.isAnwserCorrect =function(index) {
      return index === this.correctAnswerIndex
  },
  question.getCorrectAnwser = function(){
      return this.options[this.correctAnswerIndex]
  };
  return question;
    
}
const firstQuestion = createQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)
const secondQuestion = createQuestion('Where is the capital of Jamaica',['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2)
