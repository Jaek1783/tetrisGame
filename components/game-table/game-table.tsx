import styles from 'styled-components';
const GameTable = ({matrixLoop})=>{

    return <li className='board'>
        <ul>
            {matrixLoop()}
        </ul>
    </li>
}
export default GameTable;