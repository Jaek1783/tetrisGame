
import GameTable from '../components/game-table/game-table';

import styles from 'styled-components';
const Blocks = ({num, matrix,matrixLoop, tableLoop})=>{

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