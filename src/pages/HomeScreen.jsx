import React, { useState, useEffect, useMemo } from 'react';

import styled from 'styled-components';
import img from '../assets/images/bg.jpg';

//Components
import Trivia from '../components/Trivia';

//DATA
//import moneyPyramid from '../assets/data/moneyPyramid';
import data from '../assets/data/questions';
import Timer from '../components/Timer';

const HomeStyled = styled.div`
    height: 100vh;
    display: flex;
    color: white;
    .main {
        width: 75%;
        background: linear-gradient(to bottom, rgba(0,0,0,0), var(--deep-dark) ), url(${img}) center;
        display: flex;
        flex-direction: column;
        .finished {
            position: relative;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            color: white;
        }
    }
    .top {
        height: 50%;
        position: relative;
    }
    .timer {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 5px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-weight: 700;
        position: absolute;
        bottom: 10px;
        left: 80px;
    }
    .bottom {
        height: 50%;
    }
    .pyramid {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .moneyList {
        list-style: none;
        width: 100%;
        padding: 20px;
    }
    .moneyListItem {
        display: flex;
        align-items: center;
        padding: 5px;
        border-radius: 5px;
    }
    .moneyListItem.active {
        background: teal;
    }
    .moneyListItemNumber {
        font-size: 18px;
        font-weight: 100;
        width: 30%;
    }
    .moneyListItemAmount {
        font-size: 20px;
        font-weight: 300;
    }
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        .main {
            width: 100%;
            height: 100%;
            .finished {
                margin-top: 150px;
                margin-bottom: 150px;
            }
            .top {
                height: 30%;
            }
            .timer {
                display: flex;
                position: relative;
                bottom: 0;
                top: 10%;
                left: 40%;
            }
        }
        .pyramid {
            width: 100%;
        }
    }
`;

export default function HomeScreen() {

    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState('$ 0');

    const moneyPyramid = useMemo(
        () =>
          [
            { id: 1, amount: "$ 100" },
            { id: 2, amount: "$ 200" },
            { id: 3, amount: "$ 300" },
            { id: 4, amount: "$ 500" },
            { id: 5, amount: "$ 1.000" },
            { id: 6, amount: "$ 2.000" },
            { id: 7, amount: "$ 4.000" },
            { id: 8, amount: "$ 8.000" },
            { id: 9, amount: "$ 16.000" },
            { id: 10, amount: "$ 32.000" },
            { id: 11, amount: "$ 64.000" },
            { id: 12, amount: "$ 125.000" },
            { id: 13, amount: "$ 250.000" },
            { id: 14, amount: "$ 500.000" },
            { id: 15, amount: "$ 1.000.000" },
          ].reverse(),
        []
      );

    useEffect(() => {
        questionNumber > 1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber - 1).amount)
    }, [moneyPyramid, questionNumber]);

    return (
        <HomeStyled>
            <div className="main">
                {
                    stop ? (
                        <div className="finished">
                            <h1 className="endText">You earned: {earned}</h1>
                        </div>
                    ) : (
                        <>
                            <div className="top">
                                <div className="timer">
                                    <Timer setStop={setStop} questionNumber={questionNumber} />
                                </div>
                            </div>
                            <div className="bottom">
                                <Trivia 
                                    data={data} 
                                    setStop={setStop}
                                    questionNumber={questionNumber}
                                    setQuestionNumber={setQuestionNumber} 
                                />
                            </div>
                        </>
                    )
                }
            </div>
            <div className="pyramid">
                <ul className="moneyList">
                    {
                        moneyPyramid.map((m, index) => (
                            <li key={index} className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'} >
                                <span className="moneyListItemNumber">{m.id}</span>
                                <span className="moneyListItemAmount">{m.amount}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </HomeStyled>
    )
}
