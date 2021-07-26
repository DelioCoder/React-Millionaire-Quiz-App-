import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TriviaStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .question {
        width: 80%;
        background-color: rgba(0,0,0,0.7);
        border: 2px solid white;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
        font-size: 20px;
    }
    .answers {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .answer {
            width: 40%;
            padding: 10px;
            text-align: center;
            background-color: rgba(0,0,0,0.7);
            border: 1px solid white;
            border-radius: 15px;
            font-size: 20px;
            font-weight: 300;
            cursor: pointer;
            margin: 0 10px 20px 10px;
            transition: background 1s;
        }
        .answer:hover, 
        .answer.active{
            background: rgba(33, 17, 255, 0.7);
        }
        .answer.correct {
            animation: correct 3s ease forwards;
        }
        @keyframes correct {
            0%, 
            22%, 
            42% {
                background: rgba(33, 17, 255, 0.7);
            }
            20%, 
            40%,
            60% {
                background: linear-gradient(#0e0124, #22074d);
            }
            62%,
            100% {
                background:rgba(31,255,15,0.7);
            }
        }
        .answer.wrong {
            animation: wrong 3s ease forwards;
        }
        @keyframes wrong {
            0%, 
            22%, 
            42% {
                background: rgba(33, 17, 255, 0.7);
            }
            20%, 
            40%,
            60% {
                background: linear-gradient(#0e0124, #22074d);
            }
            62%,
            100% {
                background:rgba(255, 15, 15, 0.7);
            }
        }
    }
`;

export default function Trivia({ data, setTimeOut, questionNumber, setQuestionNumber }) {
    
    const [question, setQuestion] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState('Name');

    useEffect(() => {

        setQuestion(data[questionNumber - 1]);

    }, [data, questionNumber]);
    
    const handleClick = (e) => {

        setSelectedAnswer(e);
        setClassName('answer active');

    }

    return (
        <TriviaStyled>    
            <div className="question">
                {question.question}
             </div>
             <div className="answers">
                {
                    question.answers && question.answers.map(e => (
                        <div className={selectedAnswer === e ? className: 'answer'} onClick={() => handleClick(e)} >{e.text}</div>
                    ))
                }
            </div>
        </TriviaStyled>
    )
}
