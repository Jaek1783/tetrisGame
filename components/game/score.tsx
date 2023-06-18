
import Link from 'next/link';
import styles from 'styled-components';

const ScorePage = ({score, setRangkBtn, rangkingRef, btn})=>{
//랭킹 등록 모달 display버튼 함수
const rangkingModalHandler = (e)=>{
  if(btn === '다시시작'){
    e.preventDefault();
    setRangkBtn(true)
  }else{
    e.preventDefault();
  }
}
const pauseHandler = ()=>{
  alert('게임을 일시정지 하였습니다. 진행하겠습니까?');
};
return  <ScoreTableStyle>
    <div className='score'>{score}</div>
    <div className='btnContainer'>
      <button onClick={pauseHandler}>게임 일시정지</button>
      <button ref={rangkingRef} onClick={rangkingModalHandler }>랭킹 등록하기</button>
      <Link href='/rangking'><button>랭킹 보러가기</button></Link>
    </div>
</ScoreTableStyle>
};
export default ScorePage;

const ScoreTableStyle = styles.div`
  .btnContainer{
    display:flex;
    justify-content:space-around;
    margin:10px 0;
    button{padding:2px;}
  }
  
`;