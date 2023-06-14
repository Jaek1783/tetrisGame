import styles  from 'styled-components';
import { useRef } from 'react';
import Link from 'next/link';
const GameRangking = ({setName, rangkingButtonHandler, rangkBtn})=>{
    const nameRef=useRef(null)
    const settingRef = useRef(null)
    const submitHandler = (e)=>{
        e.preventDefault();
        const nameValue = nameRef.current.value;
        console.log(nameValue);
        setName(nameValue);
    }
return <RangkingModal ref={settingRef} rangkBtn={rangkBtn}>
            <div className='setting'>
                <span className='title'>랭킹</span>
                    
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='등록할 닉네임을 적어주세요' ref={nameRef}/>
                    <button type='submit'>저장</button>
                </form>
                <SumbitBtn onClick={rangkingButtonHandler}>등록하기</SumbitBtn>
                <button className='back'><Link href='/'>다음에 등록하기</Link></button>
            </div>
            
        </RangkingModal>
};

export default GameRangking;

const RangkingModal = styles.div`
display:${props => props.rangkBtn ? 'block': 'none'};
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
        display:flex;
        input{
            width:calc(100%-1rem);
            padding:5px;
            margin-right:5px;
        }
        button{
            padding:4px;
        }
    }
    div{
        display:flex;
        align-items:center;
    }
    
`;

const SumbitBtn = styles.button`
position:absolute;
bottom:25%;
left:50%;
transform:translate(-50%, 50%);
border:none;
padding:1rem 2rem;
margin-bottom:.5rem;
border-radius:15px;
border:1px solid #000;
background-color:#ccc;
cursor:pointer;
`;