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
        BlockItems[type][direction].forEach(block => {
            const x = block[0];
            const y = block[1];
            const target = blocksRef.current.childNodes[y].childNodes[0].childNodes[x];
            target.classList.add(type)
        });
    }
    return renderBlocks();
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