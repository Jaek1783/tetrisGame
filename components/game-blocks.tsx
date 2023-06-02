
import GameTable from '../components/game-table/game-table';

import styles from 'styled-components';
const Blocks = ({num, matrix,matrixLoop})=>{
    let tableArray = [];
    const tableLoop = ()=>{
        for(let i = 0; i < num; i++){
            tableArray.push(i);
        }
        return tableArray;
    }
tableLoop();
return <BoardTableStyles>
             {[...Array(num)].map((_, index) => (
            <GameTable key={index} matrixLoop={matrixLoop} />
          ))}
</BoardTableStyles>
}
export default Blocks;

const BoardTableStyles = styles.ul`

`;