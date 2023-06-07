import styles  from 'styled-components';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
const GameConfig = ({speedButtonDownHandler, speedButtonUpHandler,setName, reverseDuration})=>{
    const nameRef=useRef(null)
    const settingRef = useRef(null)
    const submitHandler = (e)=>{
        e.preventDefault();
        const userName = nameRef.current.value;
        setName(userName);
        nameRef.current.value = '';
        settingRef.current.style.display = 'none';
    }
return <SpeedButton ref={settingRef}>
            <div className='setting'>
                <span className='title'>Setting</span>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='닉네임을 적어주세요' ref={nameRef} required/>
                    <SumbitBtn type='submit'>저장</SumbitBtn>
                </form>
                <div>
                    <span>속도 : {reverseDuration} (최대속도 4)</span>
                    <div className='buttonContainer'>
                        <button onClick={speedButtonUpHandler}>UP</button>
                        <button onClick={speedButtonDownHandler}>Down</button>
                    </div>
                </div> 
                <button className='back'><Link href='/'>홈으로 나가기</Link></button>
            </div>
            
        </SpeedButton>
};

export default GameConfig;

const SpeedButton = styles.div`
width:100%;
background-color: rgba(0,0,0,0.5);
position:fixed;
height:120vh;
z-index:99;
    span.title{
        padding-bottom:1rem;
        font-size:1.5rem;
        font-weight:bold;
    }
div.setting{
    display:flex;
    flex-direction:column;
    background-color:#ebebeb;
    width:200px;
    padding:1rem 1rem 5rem;
    position:absolute;
    border:1px solid #000;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    .back{
        background-color:transparent;
        border:none;
        text-decoration:underline;
        position:absolute;
        bottom:2%;
    }
}
    form{
        padding-bottom:1rem;
        input{
            width:calc(100%-1rem);
            padding:.5rem;
        }
    }
    div{
        display:flex;
        align-items:center;

        .buttonContainer{
            display:flex;
            flex-direction:column;
            padding:.5rem;
            button{
                width:50px;
            }
        }
    }
    
`;

const SumbitBtn = styles.button`
position:absolute;
bottom:20%;
left:50%;
transform:translate(-50%, 50%);
border:none;
padding:1rem 2rem;
border-radius:15px;
border:1px solid #000;
background-color:#ccc;
cursor:pointer;
`;