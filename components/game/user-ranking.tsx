import styles from 'styled-components';
const UserRanking = ({score, level, btn})=>{
return <RankingContainer btn={btn}>
        <dl>
            <dd>점수 : {score}</dd>
            <dd>속도 : {level}</dd>
        </dl>
</RankingContainer>
};

export default UserRanking;

const RankingContainer = styles.div`
position:absolute;
bottom:21%;
left:12%;
width:76%;
height:195px;
box-shadow:0 5px 5px 5px rgba(255,255,255,0.5);
background-color:#ccc;
    dl{
        height:70%;
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items:space-between;
        padding:1rem;
        font-size:2rem;
    }
    display:${props=>props.btn === '다시시작' ? 'block' : 'none'};
`;