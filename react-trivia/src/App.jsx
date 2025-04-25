import { useState } from 'react';
import questions from './data/questions';
import QuestionCard from './components/QuestionCard';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
    setShowAnswer(false);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prev) => (prev - 1 + questions.length) % questions.length);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>Trivia Time!</h1>
      <h2>Score: {score}</h2>
      
      <QuestionCard
        question={questions[currentQuestionIndex].question}
        answer={questions[currentQuestionIndex].answer}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
      />

      {showAnswer ? (
        <div>
          <button onClick={() => {
            setScore(score + 1);
            handleNext();
          }}>
            I got it right
          </button>
          <button onClick={handleNext}>I got it wrong</button>
        </div>
      ) : (
        <button onClick={() => setShowAnswer(true)}>Show Answer</button>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
