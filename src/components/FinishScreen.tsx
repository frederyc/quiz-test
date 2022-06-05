import React, { useContext, useEffect, useState } from 'react'
import cat2 from './../resources/images/cat_2.jpg';
import cat6 from './../resources/images/cat_6.jpg';
import cat9 from './../resources/images/cat_9.jpg';
import cat10 from './../resources/images/cat_10.jpg';
import { wait } from '@testing-library/user-event/dist/utils';
import { AssessmentContext } from './Assessment';

export type FinishScreenProps = {
    correctAnswers: number,
    totalQuestions: number,
    display: boolean
}

export const FinishScreen = (props: FinishScreenProps) => {

    useEffect(() => {}, [props.display]);

    const messageByScore = (): string => {
        if (props.correctAnswers <= 0.2 * props.totalQuestions)
            return 'Better start learning...';
        else if (props.correctAnswers <= 0.6 * props.totalQuestions)
            return 'You know the basics like everyone else';
        else if (props.correctAnswers <= 0.9 * props.totalQuestions)
            return 'You are really good, but there is still room for improvement';
        else
            return 'CONGRATULATIONS';
    }

    const imageByScore = (): string => {
        if (props.correctAnswers <= 0.2 * props.totalQuestions)
            return cat2;
        else if (props.correctAnswers <= 0.6 * props.totalQuestions)
            return cat6;
        else if (props.correctAnswers <= 0.9 * props.totalQuestions)
            return cat9;
        else
            return cat10;
    }
    
    return (
        <div className='assessment-finish' style={{display: (props.display ? '' : 'none')}}>
            <h1>{messageByScore()}</h1>
            <h3>You answered {props.correctAnswers} out of {props.totalQuestions} question</h3>
            <img src={imageByScore()} alt='Could not load image'/>
            <button onClick={() => {window.location.reload()}}>Retry</button>
        </div>
    )
}
