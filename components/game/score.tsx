
import styles from 'styled-components';
const ScorePage = ({score, rangkingButtonHandler,rangkingRef})=>{

return  <ScoreTableStyle>
    <div className='score'>{score} 점</div>
    <RangkingBtn ref={rangkingRef} onClick={rangkingButtonHandler}>랭킹 등록하기</RangkingBtn>
</ScoreTableStyle>
};
export default ScorePage;

const RangkingBtn = styles.button`
position:absolute;
top:60%;
left:24%;
transform:translate(50% 50%);
border:none;
padding:1rem 2rem;
border-radius:15px;
background-color:#ccc;
box-shadow:3px 3px 5px 3px #ccc;
cursor:pointer;
display:none;
`;

const ScoreTableStyle = styles.div`
position:relative;
border : 1px solid #000;
padding:.5rem;
width:250px;
margin:0 3rem;
background-color:#fff;

`;