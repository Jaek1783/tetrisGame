import {useEffect, useRef, useState} from 'react';
import styles from 'styled-components';
import Blocks from '../../components/game-blocks';
import BlockItems from '../../components/game-table/block-items';
import Matrix from '../../components/game-table/game-table-matrix';

import { MongoClient } from 'mongodb';
const TetrisPage = ()=>{

    const [num, setNum] = useState<number>(20);
    const [matrix, setMatrix] = useState<number>(10);
    const [duration, setDuration] = useState<number>(500);

    const [score, setScore] = useState<number>(0);
    const [togle, setTogle] = useState(true);
    const [btn, setBtn] = useState('게임시작')
    const buttonRef = useRef(null);
    const playground = useRef(null);
    const HomeBtn = useRef(null);

    const movingItem = {
        type:'',
        top:0,
        left:3,
        direction:0,
    }
    let downInterval;
    let tempMovingItem;

    // const randomIndex = Math.floor(Math.random() * 7);
    // console.log(randomIndex);
    // setNextBlock(randomIndex);
useEffect(()=>{
  HomeBtn.current.style.display='none';
},[]);
    const buttonHandler = ()=>{
        buttonRef.current.style.display='none'
        // buttonRef.current.innerText = '게임시작'
        setTogle(!togle);
        if(togle){
            init();
        }
        if(!togle){
            window.location.reload();
        }
          const handleKeyDown = (e) => {
            switch (e.keyCode) {
              case 39:
                moveBlock("left", 1);
                break;
              case 37:
                moveBlock("left", -1);
                break;
              case 40:
                moveBlock("top", 1);
                break;
              case 38:
                changeDirection();
                break;
              case 32:
                  dropBlock();
              default:
                break;
            }
          };
        
          // 이벤트 리스너 등록
          window.addEventListener("keydown", handleKeyDown);
    }
    const init = ()=>{
        // console.log('게임이 시작 되었습니다')
        tempMovingItem = {...movingItem}
        generateNewBlock();
    }
    let tableArray = [];
    const tableLoop = ()=>{
        for(let i = 0; i < num; i++){
            tableArray.push(i);
        }
        return tableArray;
    }
    const matrixLoop = ()=>{
        let matrixArray = [];
        for(let i = 0; i < matrix; i++){
            matrixArray.push(<Matrix key={i}/>);
        }
        return matrixArray;
    }

    const renderBlocks = (moveType = " ") => {
            const { type, direction, top, left } = tempMovingItem;
            const movingBlocks = document.querySelectorAll(".moving");
            movingBlocks.forEach((moving) => {
              moving.classList.remove(type, "moving");
            });
            BlockItems[type][direction].some((block) => {
              const x = block[0] + left;
              const y = block[1] + top;
              const target =
              playground.current?.childNodes[1]?.childNodes[y]?.childNodes[0]
                  ?.childNodes[x];
              const isAvailable = checkEmpty(target);
              if (isAvailable) {
                target.classList.add(type, "moving");
              } else {
                tempMovingItem = { ...movingItem };
                if(moveType === 'gameOver'){
                    clearInterval(downInterval)
                    // console.log('게임이 종료되었습니다')
                    buttonRef.current.style.display='block'
                    setBtn('다시시작')
                    HomeBtn.current.style.display='block';
                }
                setTimeout(() => {
                  renderBlocks('gameOver');
                  if (moveType === "top") {
                    seizeBlock();
                  }
                }, 0);
                return true;
              }
            });
            movingItem.left = left;
            movingItem.top = top;
            movingItem.direction = direction;
          };
          

          const seizeBlock = () => {
            // console.log("바닥에 닿았습니다");
            const movingBlocks = document.querySelectorAll(".moving");
            movingBlocks.forEach((moving) => {
              moving.classList.remove("moving");
              moving.classList.add("seized");
            });

            checkMatch();
            generateNewBlock();
          };
          const checkMatch = ()=>{
            const childNodes = playground.current.childNodes[1].childNodes;

            childNodes.forEach(child => {

                let matched = true;
                child.children[0].childNodes.forEach(li=>{

                    if(!li.classList.contains('seized')){
                        matched = false;
                    }
                })
                if(matched){
                  setScore(score=> score+100);
                    // console.log('한줄 완성')
                    child.remove();
                    generateBoardRow();
                    
                }
            })
          }
          const generateBoardRow = () => {
            const li = document.createElement('li');
            li.className = "board"
            const ul = document.createElement('ul');
            for(let i=0; i<matrix; i++){
                const matrix = document.createElement('li');
                ul.appendChild(matrix);
            }
            li.prepend(ul);
            playground.current.childNodes[1].prepend(li);
          };         
          const generateNewBlock = () => {
            clearInterval(downInterval)
            downInterval = setInterval(()=>{
                moveBlock('top',1);
            },duration);
            const BlockArray = Object.entries(BlockItems);
            const randomIndex = Math.floor(Math.random() * BlockArray.length);
            movingItem.type = BlockArray[randomIndex][0];
            movingItem.top = 0;
            movingItem.left = 3;
            movingItem.direction = 0;
            tempMovingItem = { ...movingItem };
            renderBlocks();

          };

const checkEmpty = (target)=>{
    if(!target || target.classList.contains("seized")){
        return false;
    }
    return true;
}
const moveBlock = (moveType, amount)=>{
    tempMovingItem[moveType] += amount;
    renderBlocks(moveType);
} 
const changeDirection = () => {
    const direction = tempMovingItem.direction;
    tempMovingItem.direction = direction === 3 ? 0 : direction + 1;
    renderBlocks(); // 방향 변경 후에도 블록 다시 렌더링
  }
const dropBlock = ()=>{
    clearInterval(downInterval);
    downInterval = setInterval(()=>{
        moveBlock("top",1)
    },10);
}

    return <div className='play'>
        <div className='boardTable'>
            <PlayGroundStyle ref={playground} btn={btn}>
                <GameStartBtn ref={buttonRef} onClick={buttonHandler}>{btn}</GameStartBtn>
                <Blocks 
                num={num}
                matrix={matrix}
                tableLoop={tableLoop}
                matrixLoop={matrixLoop}
                />  
            </PlayGroundStyle>
            <ScoreTableStyle>
            <div className='score'>{score} 점</div>
            </ScoreTableStyle>
        </div>
    </div>
}

export default TetrisPage;

const PlayGroundStyle = styles.div`
border : 1px solid #000;
padding:.5rem;
position:relative;
background-color:#fff;
 .board{
    ul{
        display:flex;
    }
    li{
        width:25px;
        height:25px;
        outline : .1px solid #ccc;
        background-color:${props=>
          props.btn === '다시시작' ? '#333':''
    }
 }
`;

const GameStartBtn = styles.button`
position:absolute;
top:40%;
left:29%;
transform:translate(50% 50%);
border:none;
padding:1rem 2rem;
border-radius:15px;
box-shadow:3px 3px 5px 3px #ccc;
cursor:pointer;
`;

const ScoreTableStyle = styles.div`
position:relative;
border : 1px solid #000;
padding:.5rem;
width:250px;
margin:0 3rem;
background-color:#fff;
`;