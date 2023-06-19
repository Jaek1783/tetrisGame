import styles from 'styled-components';
const HowToGame = ()=>{
    return <GameManual>
        <div>
            <ol>
                <li>Start 버튼이나 상단메뉴에 게임하기를 클릭합니다.</li>
                <li>게임을 진행하기 위해 속도를 설정하고 저장버튼을 클릭합니다</li>
                <li>화살표 키 ← ↓ → 로 작동하며, ↑ 로 회전합니다</li>
                <li>space 키를 눌러 빠르게 블럭을 고정시킬 수 있습니다</li>
                <li>게임이 종료되면 랭킹을 등록할 수 있는 버튼이 활성화 됩니다.</li>
                <li>닉네임 설정 후 랭킹을 등록할 수 있습니다.</li>
            </ol>
        </div>
    </GameManual>
};

export default HowToGame;

const GameManual = styles.section`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
padding-top:10rem;
    div{
        background-color:rgba(255,255,255,0.5);
        width:80%;
        margin:0 auto;
        padding:3rem;
        ol{ 
            margin:0 auto;
            text-align:left;
            list-style-type:decimal;
            li{
                padding-top:1rem;
                border-bottom:1px solid #000;
                line-height:20px;
            }
                
        }
    }  
`;