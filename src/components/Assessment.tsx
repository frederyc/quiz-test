import { count } from 'console'
import React, { useContext, useState, createContext } from 'react'
import { FinishScreen } from './FinishScreen'
import { Question, QuestionContext, QuestionProps, QuestionContent } from './Question'

export type AssessmentProps = {
    id: number,
    text: string,
    questions: QuestionProps[]
}

export type AssessmentContent = {
  questionsValid: Array<boolean>,
  setQuestionsValid: React.Dispatch<React.SetStateAction<boolean[]>>
}

export const AssessmentContext = createContext<AssessmentContent | undefined>(undefined);

export const Assessment = (props: AssessmentProps) => {

  const [questionValid, setQuestionValid] = useState<boolean[]>(new Array(props.questions.length).fill(false));
  const [resultScreen, setResultScreen] = useState(false);

  const onSubmitEvent = (e: any) => {
    e.preventDefault();
    setResultScreen(true);
  }

  return (
    <AssessmentContext.Provider value={{questionsValid: questionValid, setQuestionsValid: setQuestionValid}}>
      <form key={props.id} className='assessment-container' onSubmit={onSubmitEvent} style={{display: resultScreen ? 'none' : ''}}>
          <h1>{props.text} Assessment</h1>
          <ul>
              {props.questions.map((question: QuestionProps, index: number) => (
                  <Question id={index} correctAnswerIndex={question.correctAnswerIndex} text={question.text} answers={question.answers}/>    
              ))}
          </ul>
          <input type={'submit'} value={'Submit answers'}/>
      </form>
      <FinishScreen correctAnswers={questionValid.filter((val: boolean) => {return val;}).length} totalQuestions={props.questions.length} display={resultScreen} />
    </ AssessmentContext.Provider>
  )
}
