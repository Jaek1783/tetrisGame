
import Link from 'next/link';
import styles from 'styled-components';

const ScorePage = ({score, setRangkBtn, rangkingRef})=>{
//랭킹 등록 모달 display버튼 함수
const rangkingModalHandler = ()=>{
  setRangkBtn(true)
}
const pauseHandler = ()=>{
  alert('게임을 일시정지 하였습니다. 플레이를 진행하겠습니까?');
};
return  <ScoreTableStyle>
    <div className='score'>{score} 점</div>
    <PauseBtn onClick={pauseHandler}>게임 일시정지</PauseBtn>
    <RangkingBtn ref={rangkingRef} onClick={rangkingModalHandler }>랭킹 등록하기</RangkingBtn>
    <Link href='/rangking'><GoRangking>랭킹 보러가기</GoRangking></Link>
</ScoreTableStyle>
};
export default ScorePage;

const RangkingBtn = styles.button`
position:absolute;
top:40%;
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
const GoRangking = styles.button`
position:absolute;
bottom:30%;
left:24%;
transform:translate(50% 50%);
border:none;
padding:1rem 2rem;
border-radius:15px;
background-color:#ccc;
box-shadow:3px 3px 5px 3px #ccc;
cursor:pointer;
`;

const PauseBtn = styles.button`
position:absolute;
top:20%;
left:24%;
transform:translate(50% 50%);
border:none;
padding:1rem 2rem;
border-radius:15px;
background-color:#ccc;
box-shadow:3px 3px 5px 3px #ccc;
cursor:pointer;
`;

const ScoreTableStyle = styles.div`
position:relative;
border : 1px solid #000;
padding:.5rem;
width:250px;
margin:0 3rem;
background-color:#fff;

`;