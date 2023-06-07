import styles from 'styled-components';
const UserRanking = ({score, level, btn, name})=>{
return <RankingContainer btn={btn}>
        <dl>
            <dt>이름 : {name}</dt>
            <dd>점수 : {score}</dd>
            <dd>속도 : {level}</dd>
        </dl>
</RankingContainer>
};

export default UserRanking;

const RankingContainer = styles.div`
position:absolute;
bottom:11%;
left:12%;
width:200px;
height:100px;
background-color:#ccc;
    dl{
        height:70%;
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        align-items:space-between;
        padding:1rem;
    }
    display:${props=>props.btn === '다시시작' ? 'block' : 'none'};
`;