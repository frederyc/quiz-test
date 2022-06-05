import React from 'react';
import { Answer, AnswerProps } from './components/Answer';
import { Question, QuestionProps } from './components/Question';
import LoremIpsum from 'react-lorem-ipsum';
import { Assessment } from './components/Assessment';
import { questions } from './fake_database/Database'

function App() {

  return (
    <div className="App">
      <Assessment id={1} text={'Geography'} questions={questions}/>
    </div>
  );
}

export default App;
