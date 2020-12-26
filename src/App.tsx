import React from 'react';
import QuestionCard from './components/QuestionCard'

function App() {
    const startTrivial = async () => {

    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

  return (
    <div className="App">
        <h1>React Quiz</h1>
        <button
            className="start"
            onClick={startTrivial}
        >
            Start
        </button>
        <p className="score">Score: </p>
        <p>Loading Questions...</p>
        <QuestionCard/>
        <button
            className="next"
            onClick={nextQuestion}
        >
            Next
        </button>
    </div>
  );
}

export default App;
