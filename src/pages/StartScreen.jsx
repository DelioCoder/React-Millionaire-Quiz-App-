import React, { useRef } from 'react';
import styled from 'styled-components';

const StartStyled = styled.div`
    height: 100vh;
    display: flex;
    .start {
        height: 100px;
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        .startInput {
            width: 100%;
            height: 30px;
            border: none;
            border-radius: 5px;
            text-align: center;
            font-size: 18px;
            color: var(--deep-dark);
        }
        .startInput:focus {
            outline: none;
        }
        .startButton {
            width: 100%;
            height: 30px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
            font-weight: 500;
            color: var(--deep-dark);
        }
    }
`;

export default function StartScreen({ setUsername }) {
    
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    }

    return (
        <StartStyled>
            <div className="start">
                <input 
                    ref={inputRef} 
                    type="text" 
                    placeholder="Enter your name" 
                    className="startInput"
                />
                <button className="startButton" onClick={handleClick} >
                    Start
                </button>
            </div>
        </StartStyled>
    )
}
