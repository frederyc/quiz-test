import React, { useState, useContext } from 'react'
import { QuestionContext } from './Question'

export type AnswerProps = {
    id?: number,
    text: string,
}

export const Answer = (props: AnswerProps) => {

    const parentQuestion = useContext(QuestionContext);

    return (
        <li key={props.id} className={`answer`} onClick={() => parentQuestion?.setAnswer(props.id != undefined ? props.id : 0)}
        style={{borderColor: parentQuestion?.answer != props.id ? '#4269f5' : '#9237ed'}} >
            {props.text}
        </li>
    )
}
