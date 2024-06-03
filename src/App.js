import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'What is photosynthesis?',
    variants: ['A process of converting light energy into chemical energy', 'A method of printing photos', 'A technique for taking pictures'],
    correct: 0,
  },
  {
    title: 'What is DNA?',
    variants: ['A type of food', 'The genetic material that carries information about an organism', 'A programming language'],
    correct: 1,
  },
  {
    title: 'What is an ecosystem?',
    variants: [
    'A single organism living in a habitat',
    'A process by which plants produce oxygen',
    'A community of interacting organisms and their physical environment',
  ],
    correct: 2,
  },
  {
    title: 'What is evolution?',
    variants: [
    'The study of rocks and minerals',
    'The process by which different kinds of living organisms develop and diversify from earlier forms',
    'A type of weather phenomenon',
  ],
    correct: 1,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed {correct} answers out of {questions.length}</h2>
      <a href='/'>  
        <button>Try again</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);

  console.log(percentage);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        <li>
          {
            question.variants.map((text, index) => (
              <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
            ))
          }
        </li>
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index == question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant}/>
      ) : (
        <Result correct={correct}/>
      )}
    </div>
  );
}

export default App;