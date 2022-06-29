import { useContext } from 'react';
import { Questions } from '../QuestionBank';
import { QuizContext } from '../context/QuizContext';

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restart = () => {
    setScore(0);
    setGameState('menu');
  };
  return (
    <div className='endscreen'>
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restart}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
