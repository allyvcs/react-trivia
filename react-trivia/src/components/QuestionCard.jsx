function QuestionCard({ question, answer, showAnswer }) {
    return (
      <div>
        <h2>{question}</h2>
        {showAnswer && <p>{answer}</p>}
      </div>
    );
  }
  
  export default QuestionCard;
  
  