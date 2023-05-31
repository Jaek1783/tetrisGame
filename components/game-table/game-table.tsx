import Matrix from "./game-table-matrix";
import styles from 'styled-components';
const GameTable = ({matrix})=>{
    const matrixLoop = ()=>{
        let matrixArray = [];
        for(let i = 0; i < matrix; i++){
            matrixArray.push(<Matrix key={i}/>);
        }
        return matrixArray;
    }

    return <BoardLineStyles>
        <ul>
        {matrixLoop()}
        </ul>
    </BoardLineStyles>
}
export default GameTable;

const BoardLineStyles = styles.li`
    ul{
        display:flex;
    }
`;