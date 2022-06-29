import { useState, useContext } from 'react';
import { Questions } from '../QuestionBank';
import { QuizContext } from '../context/QuizContext';

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const { setGameState, score, setScore } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
    setOptionChosen('');
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState('end');
  };

  return (
    <div className='quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button
          className={optionChosen === 'A' && 'active'}
          onClick={() => setOptionChosen('A')}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          className={optionChosen === 'B' && 'active'}
          onClick={() => setOptionChosen('B')}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          className={optionChosen === 'C' && 'active'}
          onClick={() => setOptionChosen('C')}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          className={optionChosen === 'D' && 'active'}
          onClick={() => setOptionChosen('D')}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>

      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
