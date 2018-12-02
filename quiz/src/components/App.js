import React from 'react';
import Questions from './questions';
import questionaries from '../sample-questions.json';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            questions:questionaries,
            answeredQuestions: [],
            showResult: false
        }

        this.getResult = this.getResult.bind(this);
    }

    selectOption(questionNumber, event){
      let selectedOptionsHash =   this.state.answeredQuestions.slice();
      let userAnswer = event.target.value;
      let questionResult = {
          questionNumber,
          userAnswer,
          isValid: this.validateAnswer(questionNumber, userAnswer)
      }

      selectedOptionsHash = this.addOrUpdate(selectedOptionsHash, questionNumber, questionResult);
      this.setState({answeredQuestions : selectedOptionsHash});
    }

    addOrUpdate(arr, questionNumber, result){
        var isUpdated = false;
        for(var i=0; i< arr.length; i++){
            if(arr[i].questionNumber == questionNumber){
                arr[i] = result;
                isUpdated = true;
                break;
            }
        }

        if(!isUpdated){
            arr.push(result);
        }

        return arr;
    }

    validateAnswer(questionNumber,answer){
        var result = false;
        for (var i=0;i<questionaries.length;i++){
            var val = questionaries[i];
            if (val.questionNumber == questionNumber){
                result = answer == val.CorrectAnswer;
                break;
            }
        }
        console.log("User Answer:",answer," Is Correct Answer:",result);
        return result;
    }
    getResult(){
        let answers = this.state.answeredQuestions;
        let result = {
            attemptedQuestions: answers.length,
            correctAnswers: 0,
            wrongAnswer: 0
        }

        for(var i=0; i< answers.length; i++ ){
            if(answers[i].isValid){
                result.correctAnswers++
            }else{
                result.wrongAnswer++
            }
        }
        console.log(result);
        return result;
    }

    render(){
        return(
            <div className="main_container">
                 <header>
                    <h2 className="header">Quiz</h2>
                </header>
                <ol>
                    {
                        Object.keys(this.state.questions).map(key => 
                        <Questions key={key} details={this.state.questions[key]} 
                        selectOption={this.selectOption.bind(this)} />
                        )
                    }
                </ol>
                <button className="endquiz button" onClick={()=>{
                    this.getResult.bind(this);
                    this.setState({showResult:true});
                    }
                }>Submit</button>

                { this.state.showResult &&
                    <ResultDisplay result={this.getResult()} />
                }
            </div>
        )
    }
}


function ResultDisplay(props){
    let result = props.result;
    return (
       [
            <h3>Attempted Questions: {result.attemptedQuestions}</h3>,
            <h3>Correct Answers: {result.correctAnswers}</h3>,
            <h3>Wrong Answer: {result.wrongAnswer}</h3>
        ]
    )
}
export default App;
 
 