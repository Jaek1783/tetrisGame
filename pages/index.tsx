import {useState, useRef, useEffect} from 'react';
import GameTable from '../components/game-table';
import Blocks from '../components/game-block';
import styles from 'styled-components';
const HomePage = ()=>{
    const [num, setNum] = useState(20);
    const [matrix, setMatrix] = useState(10);
    const tableRef = useRef(null);
    const tableLoop = ()=>{
        let tableArray = [];
        for(let i = 0; i < num; i++){
            tableArray.push(<GameTable key={i} matrix={matrix}/>);
        }
        return tableArray;
    }
    const movingItem = {
        type : "square",
        direction: 0,
        top:0,
        left:0
    }
    let typeMovingItem = {...movingItem};
useEffect(()=>{
    const renderBlocks = ()=>{
        const {type, direction, top, left} = typeMovingItem;

        Blocks[type][direction].forEach(block => {
            const x = block[0]+left;
            const y = block[1]+top;

            const target = tableRef.current.children[y].children[0].children[x];

            target.classList.add(type);
        });
    }
    return renderBlocks();
},[]);
    return <div className='App'>
        <h1>Tetris</h1>
        <div className="score">0</div>
        <PlayGroundStyle >
            <ul ref={tableRef}>
                {tableLoop()}
            </ul>
        </PlayGroundStyle>
    </div>
}

export default HomePage;

const PlayGroundStyle = styles.div`
ul {
    border: 1px solid #333;
    width:250px;
}

ul > li {
    width:100%;
    height:25px;
}

ul > li > ul {
    display: flex;
}

ul >li > ul > li {
    width:25px;
    height:25px;
    outline: 1px solid #ccc;
}
`;
