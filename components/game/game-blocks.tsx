
import GameTable from './game-table';

const Blocks = ({num, matrix,matrixLoop, tableLoop})=>{

tableLoop();
return <ul>
             {[...Array(num)].map((_, index) => (
            <GameTable key={index} matrixLoop={matrixLoop} />
          ))}
</ul>
}
export default Blocks;