
import {useRef, useState} from 'react';
import styles from 'styled-components';
import Blocks from '../components/game-blocks';

// export interface MovingItemType {
//     type:string,
//     top:number,
//     left:number,
//     direction:number
// }
const HomePage = ()=>{

    const [num, setNum] = useState<number>(20);
    const [matrix, setMatrix] = useState<number>(10);
    
    const MovingItem = {
        type:'tree',
        top:0,
        left:0,
        direction:0,
    }
    return <div className='App'>
        <div className='boardTable'>
            <PlayGroundStyle>
                    <Blocks num={num} matrix={matrix} MovingItem={MovingItem}/>
            </PlayGroundStyle>
        </div>
    </div>
}

export default HomePage;

const PlayGroundStyle = styles.div`
border : 1px solid #000;
padding:.5rem;

`;
