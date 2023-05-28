import {useState} from 'react';
import GameTable from '../components/game-table';
import styles from 'styled-components';
const HomePage = ()=>{
    const [num, setNum] = useState(20);
    const [matrix, setMatrix] = useState(10);
    const tableLoop = ()=>{
        let tableArray = [];
        for(let i = 0; i < num; i++){
            tableArray.push(<GameTable key={i} matrix={matrix}/>);
        }
        return tableArray;
    }
    return <div className='App'>
        <h1>Tetris</h1>
        <div className="score">0</div>
        <PlayGroundStyle>
            <ul>
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
