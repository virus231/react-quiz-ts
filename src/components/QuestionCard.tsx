import React from 'react'

type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questionNumber: number;
    totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({question, answer, callback, userAnswer, questionNumber}) => {
    return (
        <div>
            <p className="number">

            </p>
        </div>
    )
}

export default QuestionCard
