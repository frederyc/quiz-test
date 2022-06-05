import React, { useContext, useEffect } from 'react'
import { AnswerProps } from './Answer'
import { Answer } from './Answer'
import { useState, createContext } from 'react'
import { AssessmentContext } from './Assessment'
import { questions } from '../fake_database/Database'

export type QuestionProps = {
  id?: number,
  text: string,
  correctAnswerIndex: number,
  answers: AnswerProps[]
}

export type QuestionContent = {
  question: string,
  answer: number,
  setAnswer: React.Dispatch<React.SetStateAction<number>>
}

export const QuestionContext = createContext<QuestionContent | undefined>(undefined);

export const Question = (props: QuestionProps) => {

  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const parentAssessment = useContext(AssessmentContext)

  useEffect(() => {
    parentAssessment?.setQuestionsValid(parentAssessment!.questionsValid.map((question: boolean, index: number) => {
      return index == props.id ? (props.correctAnswerIndex == selectedAnswer) : question;
    }));
  }, [selectedAnswer])

  // watch this: https://www.youtube.com/watch?v=LlvBzyy-558

  return (
    <QuestionContext.Provider value={{question: props.text, answer: selectedAnswer, setAnswer: setSelectedAnswer}}>
      <li key={props.id} className='question-container'>
        <div className='text-container'>
          <h2>Question {props.id! + 1}</h2>
          <p>{props.text}</p>
        </div>
        <div className='answer-list-container'>
          <ul>
              {props.answers.map((answer: AnswerProps, index: number) => (
                  <Answer id={index} text={answer.text} />
              ))}
          </ul>
        </div>
      </li>
    </QuestionContext.Provider>
  )
}
