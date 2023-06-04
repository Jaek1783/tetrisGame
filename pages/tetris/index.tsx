import {useEffect, useRef, useState} from 'react';
import styles from 'styled-components';
import Blocks from '../../components/game-blocks';
import BlockItems from '../../components/game-table/block-items';
import Matrix from '../../components/game-table/game-table-matrix';
const TetrisPage = ()=>{

    const [num, setNum] = useState<number>(20);
    const [matrix, setMatrix] = useState<number>(10);
    const [duration, setDuration] = useState<number>(500);
    const [score, setScore] = useState<number>(0);
    const [togle, setTogle] = useState(true);
    const [btn, setBtn] = useState('게임시작')
    const buttonRef = useRef(null);
    const playground = useRef(null);

    const movingItem = {
        type:'',
        top:0,
        left:0,
        direction:0,
    }
    let downInterval;
    let tempMovingItem;

    const buttonHandler = ()=>{
        buttonRef.current.style.display='none'
        // buttonRef.current.innerText = '게임시작'
        setTogle(!togle);
        if(togle){
            init();
            setBtn('다시시작')
        }
        if(!togle){
            window.location.reload();
        }
    }
    const init = ()=>{
        // console.log('게임이 시작 되었습니다')
        tempMovingItem = {...movingItem}
        // renderBlocks();
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

    const generateBoardRow = () => {
        const li = document.createElement('li');
        li.className = "board"
        const ul = document.createElement('ul');
        for(let i=0; i<matrix; i++){
            const matrix = document.createElement('li');
            ul.appendChild(matrix);
        }
        li.prepend(ul);
        console.log(li);
        playground.current.childNodes[1].prepend(li);
      };
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
              playground.current.childNodes[1]?.childNodes[y]?.childNodes[0]
                  ?.childNodes[x] || null;
              const isAvailable = checkEmpty(target);
              if (isAvailable) {
                target.classList.add(type, "moving");
              } else {
                tempMovingItem = { ...movingItem };
                if(moveType === 'gameOver'){
                    clearInterval(downInterval)
                    // console.log('게임이 종료되었습니다')
                    buttonRef.current.style.display='block'
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
                    // console.log('한줄 완성')
                    child.remove();
                    generateBoardRow();
                    setScore(prevScore => prevScore+100);
                }
            })
          }
          const generateNewBlock = () => {
            clearInterval(downInterval)
            downInterval = setInterval(()=>{
                moveBlock('top',1);
            },duration);
            const BlockArray = Object.entries(BlockItems);
            const randomIndex = Math.floor(Math.random() * BlockArray.length);

            movingItem.type = BlockArray[randomIndex][0];
            movingItem.top = 0;
            movingItem.left = 0;
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
  useEffect(() => {
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
  
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
    return <div className='play'>
        <div className='boardTable'>
          <div className='score'>{score}</div>
            <PlayGroundStyle ref={playground}>
                <ButtonStyles ref={buttonRef} onClick={buttonHandler}>{btn}</ButtonStyles>
                <Blocks 
                num={num}
                matrix={matrix}
                tableLoop={tableLoop}
                matrixLoop={matrixLoop}
                />  
            </PlayGroundStyle>
            {/* <button onClick={btnPause}>일시정지</button> */}
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
    }
 }
`;

const ButtonStyles = styles.button`
position:absolute;
top:50%;
left:40%;
transform:translate(50% 50%);
width:3.5rem;
height:2rem;
`;