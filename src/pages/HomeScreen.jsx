import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../assets/images/bg.jpg';

//Components
import Trivia from '../components/Trivia';

//DATA
import moneyPyramid from '../assets/data/moneyPyramid';
import data from '../assets/data/questions';

const HomeStyled = styled.div`
    height: 100vh;
    display: flex;
    color: white;
    .main {
        width: 75%;
        background: linear-gradient(to bottom, rgba(0,0,0,0), var(--deep-dark) ), url(${img}) center;
        display: flex;
        flex-direction: column;
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
`;

export default function HomeScreen() {

    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);

    return (
        <HomeStyled>
            <div className="main">
                <div className="top">
                    <div className="timer">30</div>
                </div>
                <div className="bottom">
                    <Trivia 
                        data={data} 
                        setTimeOut={setTimeOut}
                        questionNumber={questionNumber}
                        setQuestionNumber={setQuestionNumber} 
                    />
                </div>
            </div>
            <div className="pyramid">
                <ul className="moneyList">
                    {
                        moneyPyramid.map((m) => (
                            <li className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'} >
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
