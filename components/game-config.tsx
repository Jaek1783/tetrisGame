import styles  from 'styled-components';
import { useEffect, useRef } from 'react';
const GameConfig = ({speedButtonDownHandler, speedButtonUpHandler,setName, reverseDuration})=>{
    const name=useRef(null)
return <SpeedButton>
            <span>속도 : {reverseDuration} (최대속도 4)</span>
                <button onClick={speedButtonUpHandler}>UP</button>
                <button onClick={speedButtonDownHandler}>Down</button>
            </SpeedButton>
};

export default GameConfig;

const SpeedButton = styles.div`
display:flex;
flex-direction:column;
`;
