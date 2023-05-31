import {useEffect, useRef} from 'react';
import GameTable from '../components/game-table/game-table';
import BlockItems from './game-table/block-items';
import styles from 'styled-components';
const Blocks = ({num, matrix, MovingItem})=>{
    let tempMovingItem = {...MovingItem};
    const blocksRef = useRef(null);
useEffect(()=>{
    const renderBlocks = ()=>{
        const {type, direction, top, left} = tempMovingItem;
        const movingBlocks = document.querySelectorAll('.moving');
        movingBlocks.forEach(moving=>{
            moving.classList.remove(type, 'moving');
        })
        BlockItems[type][direction].forEach(block => {
            const x = block[0]+left;
            const y = block[1]+top;
            const target = 
            blocksRef.current.childNodes[y]? 
            blocksRef.current.childNodes[y].childNodes[0].childNodes[x] :
            null;
            target ? target.classList.add(type, "moving") : 
            tempMovingItem = {...MovingItem}
            setTimeout(()=>{
                renderBlocks()
            },0);
        });
    };

    const moveBlock = (moveType, amount) =>{
        console.log(tempMovingItem);
        if (!tempMovingItem) {
            tempMovingItem = {
            left:0,
            top: 0,
            }
        }
        if(tempMovingItem){
            tempMovingItem[moveType] += amount;
        }
        renderBlocks();
    }
// event.handling 키보드 작동
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
      //   case 38:
      //     changeDirection();
      //     break;
      //   case 32:
      //     dropBlock();
      //     break;
      default:
        break;
    }
  };

  // 이벤트 리스너 추가
  document.addEventListener("keydown", handleKeyDown);

  // 정리 함수
  return () => {
    // 이벤트 리스너 제거
    document.removeEventListener("keydown", handleKeyDown);
  };
},[]);

    const tableLoop = ()=>{
        let tableArray = [];
        for(let i = 0; i < num; i++){
            tableArray.push(<GameTable key={i} matrix={matrix}/>);
        }
        return tableArray;
    }
return <BoardTableStyles ref={blocksRef}>
    {tableLoop()}
</BoardTableStyles>
}
export default Blocks;

const BoardTableStyles = styles.ul`
`;