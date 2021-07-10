const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };

  function isAnwserCorrect(index){
return (index ===correctAnswerIndex)
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