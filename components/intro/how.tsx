import styles from 'styled-components';
const HowToGame = ()=>{
    return <GameManual>
        <h2>게임 방법</h2>
        <ol>
            <li>Start 버튼이나 상단메뉴에 게임하기를 클릭합니다.</li>
            <li>게임을 진행하기 위해 닉네임과 속도를 설정하고 저장버튼을 클릭합니다</li>
            <li>화살표 키 ← ↓ → 로 작동하며, ↑ 로 회전합니다</li>
            <li>space 키를 눌러 빠르게 블럭을 고정시킬 수 있습니다</li>
        </ol>
    </GameManual>
};

export default HowToGame;

const GameManual = styles.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
width:60%;
    ol{ width:90%;
        margin:0 auto;
        text-align:left;
        list-style-type:decimal;
        li{
            padding-top:1rem;
    }
`;