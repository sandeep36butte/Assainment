import React from "react";


class Questions extends React.Component{

    constructor(){
        super();
        this.validateAnswer = this.validateAnswer.bind(this);
        this.selectedOptionsHash = {};
    }

    validateAnswer(choosed,correct){
        if (choosed == correct){
            console.log("Correct Answer");
        }else{
            console.log("Wron Answer");
        }
    }

    
    
    render(){
        const questionsDetails = this.props.details;
        const key = this.props.key;
        console.log("key",key);
        return (
            <li className="questions_details">
                <div className={"question"+questionsDetails.questionNumber}>
                    <span>{questionsDetails.question}</span>
                    <div className={"options_question_"+questionsDetails.questionNumber}>
                        <ul>
                            {
                                Object.keys(questionsDetails.options).map(key=>{
                                return (
                                <li key={key}>
                                    <span>
                                    <input type="radio" name={"Q-"+questionsDetails.questionNumber} value={key}
                                        className="form-radio"
                                     onClick={(e) => this.props.selectOption(questionsDetails.questionNumber, e)}/> 
                                     {questionsDetails.options[key]}
                                    </span>
                                </li>)
                                })
                            } 
                        </ul>
                    </div>
                </div>
            </li>
        )
    }
}

export default Questions;