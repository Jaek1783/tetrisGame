
import {useEffect, useRef, useState} from 'react';
import styles from 'styled-components';
import Blocks from '../components/game-blocks';
import BlockItems from '../components/game-table/block-items';

// export interface MovingItemType {
//     type:string,
//     top:number,
//     left:number,
//     direction:number
// }
const HomePage = ()=>{

    const [num, setNum] = useState<number>(20);
    const [matrix, setMatrix] = useState<number>(10);
    const [randomType, setRandomType] = useState<string>('');
    const [randomNum, setRandomNum] = useState<number>(0);
    const MovingItem = {
        type:'tree',
        top:-1,
        left:3,
        direction:0,
    }

    return <div className='App'>
        <div className='boardTable'>
            <PlayGroundStyle>
                <Blocks 
                num={num} 
                matrix={matrix} 
                MovingItem={MovingItem}
                />  
            </PlayGroundStyle>
        </div>
    </div>
}

export default HomePage;

const PlayGroundStyle = styles.div`
border : 1px solid #000;
padding:.5rem;

`;
