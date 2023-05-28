import Matrix from "./game-table-matrix";
const GameTable = ({matrix})=>{
    const matrixLoop = ()=>{
        let matrixArray = [];
        for(let i = 0; i < matrix; i++){
            matrixArray.push(<Matrix key={i}/>);
        }
        return matrixArray;
    }
    return <li>
        <ul>
            {matrixLoop()}
        </ul>
    </li>
}
export default GameTable;