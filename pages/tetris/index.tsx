import {useEffect, useRef, useState} from 'react';
import styles from 'styled-components';
import Blocks from '../../components/game/game-blocks';
import BlockItems from '../../components/game/block-items';
import Matrix from '../../components/game/game-table-matrix';
import GameConfig from '../../components/game/game-config';
import UserRanking from '../../components/game/user-ranking';
import GameRangking from '../../components/game/send-ranking';
import ScorePage from '../../components/game/score';
import axios from 'axios';
const TetrisPage = ()=>{
    const [num, setNum] = useState<number>(20);
    const [matrix, setMatrix] = useState<number>(10);
    const [duration, setDuration] = useState<number>(400);
    const [reverseDuration, setReverseDuration] = useState<number>(1);
    const [score, setScore] = useState<number>(0);
    const [togle, setTogle] = useState<boolean>(true);
    const [rangkBtn, setRangkBtn] = useState<boolean>(false);
    const [btn, setBtn] = useState('게임시작')
    const [backColor, setBackColor] = useState(true);
    const buttonRef = useRef(null);
    const rangkingRef = useRef(null);
    const playground = useRef(null);
    const [name, setName] = useState<string>('');

    const movingItem = {
        type:'',
        top:0,
        left:3,
        direction:0,
    }
    let downInterval;
    let tempMovingItem;
//duration 변경하여 속도 조절하는 함수
    const speedButtonUpHandler = (e)=>{
      e.preventDefault();
          if(reverseDuration < 4){
              setDuration(duration => duration-100);
              setReverseDuration(reverseDuration => reverseDuration+1);
          }
          if(reverseDuration === 5){
              setDuration(duration => duration = 100);
              setReverseDuration(reverseDuration => reverseDuration = 5);
          }
      }
      const speedButtonDownHandler = (e)=>{
          e.preventDefault();
          if(reverseDuration > 0){
              setDuration(duration => duration+100);
              setReverseDuration(reverseDuration => reverseDuration-1);
          }
          if(reverseDuration === 1){
              setDuration(duration => duration = 400);
              setReverseDuration(reverseDuration => reverseDuration = 1);
          }
      }

//게임을 시작하고 키보드 이벤트를 실행시키는 함수
    const buttonHandler = (e)=>{
e.preventDefault();
      if(buttonRef.current){
        buttonRef.current.style.display='none'
      }
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
//데이터베이스에 점수 등록하는 함수
const rangkingButtonHandler = async (e)=>{
  e.preventDefault();

  const userInfo = {
    name:name,
    score:score,
    duration:reverseDuration
  }
  console.log(userInfo);
 const response = await axios.post('/api/rangking', userInfo);
 setRangkBtn(false);
}

//게임 보드판을 만들고, 게임을 실행하는 함수
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
//게임을 실행하여 블록을 렌더링하는 함수
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
                if(buttonRef.current || rangkingRef.current){
                  buttonRef.current.style.display='block';
                  rangkingRef.current.style.display='block';
                }
                setBtn('다시시작')
                return true;
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
          
//블록을 고정시키는 함수
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

//블록이 완성되었는 지 확인하는 함수
const checkMatch = ()=>{
  if(playground.current){
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

}
//블록이 완성되면 윗줄이 하나 생기는 함수
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

//새로운 블록 생성하는 함수
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

    return <GameContainer>
      <GameRangking
      setName={setName}
      rangkingButtonHandler={rangkingButtonHandler}
      rangkBtn={rangkBtn}
      />
        <div className='gameContainer'>
        <ScorePage 
            score={score}
            setRangkBtn={setRangkBtn}
            rangkingRef={rangkingRef}
            btn={btn}
            />
            <PlayGroundStyle ref={playground} btn={btn} backColor={backColor}>
                <GameStartBtn ref={buttonRef} onClick={buttonHandler}>{btn}</GameStartBtn>
                <Blocks 
                num={num}
                matrix={matrix}
                tableLoop={tableLoop}
                matrixLoop={matrixLoop} />  
                <UserRanking
                score={score}
                level={reverseDuration}
                btn={btn} />
                <GameConfig 
                speedButtonUpHandler={speedButtonUpHandler}
                speedButtonDownHandler={speedButtonDownHandler}
                reverseDuration={reverseDuration}
                backColor = {backColor}
                setBackColor = {setBackColor}
                />
            </PlayGroundStyle>
        </div>
    </GameContainer>
}

export default TetrisPage;

const PlayGroundStyle = styles.div`
border : 1px solid #000;
padding:.5rem;
position:relative;
background-color: ${props => props.backColor === true ? '#fff':'#1e1e1e'};
 .board{
      ul{
          display:flex;
      }
      li{
          width:2rem;
          height:2rem;
          outline : ${props => props.backColor === true ? '.2px solid #ccc':'.2px solid #fff'};
          background-color:${props => props.btn === '다시시작' ? '#333':''}
        }
  }
  @media screen and (max-width:500px){
    .board{
      li{
        width:1.5rem;
        height:1.5rem;
      }
    }
  }    
`;
const GameContainer = styles.section`
display:flex;
justify-content: center;
align-items: center;
background-color: rgba(255,255,255,0.5);
width:50%;
height:70vh;
margin:0 auto;
padding:2rem;
@media screen and (max-width:500px){
  height:75vh;
}
`;
const GameStartBtn = styles.button`
position:absolute;
top:40%;
left:50%;
transform:translate(-50%, -50%);
border:none;
padding:1rem 2rem;
border-radius:15px;
box-shadow:3px 3px 5px 3px #ccc;
cursor:pointer;
`;
