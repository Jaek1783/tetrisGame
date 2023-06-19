import Link from 'next/link';
import styles from 'styled-components';

const IntroduceGamePage = ()=>{

    return <IntroContainer>
        <IntroStyles>
            <li>
                <dl>
                    <dt>게임 소개</dt>
                    <dd>옛날것이 좋은것이여~</dd>
                    <dd>MZ부터 꼰대까지 누구나 즐기는 테트리스 게임!</dd>
                    <dd>속도를 조정하여 초급부터 고수까지 다양하게!</dd>
                    <dd>누가 1등인가? 점수 등록하고 랭킹 확인하세요~</dd>
                </dl>
            </li>
        </IntroStyles>
        <ButtonContainer>
            <button><Link href='/tetris'>Start</Link></button>
        </ButtonContainer>
    </IntroContainer>
};

export default IntroduceGamePage;

const IntroContainer = styles.section`
width:100%;
height:100vh;
background: no-repeat center url('/images/tetris-movie.png');
background-size:cover;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (max-width:500px){
    background: no-repeat top url('/images/tetris-movie.png');
    background-size:contain;
    justify-content:start;
}
`;

const ButtonContainer = styles.div`
    button{
        font-size:3rem;
        border:1px solid #000;
        padding:1rem 2rem;
        border-radius:15px;
        cursor:pointer;
        margin-top:3rem;
    }
    button:hover{
        box-shadow:none;
        background-color:#e6e4e4;
    }
`;


const IntroStyles = styles.ul`
width:40%;
text-align:center;
animation: down 2s ease-in-out;
background-color:#fff;
padding:3rem 0;
margin-top:10rem;
@keyframes down {
    0%{
        opacity:0;
        transform:translate(0,-10%);
    }
    100%{
        opacity:1;
        
    }
}
    dl{
        dt{
            font-weight:bold;
            font-size:1.5rem;
            padding-bottom:1rem;
        }
        dd{
            padding-bottom:1rem;
            font-size:2rem;
        }
    }

    @media screen and (max-width:500px){
        width:80%;
        padding:1rem 0;
        dl{
            dt{
                font-size:1rem;
            }
            dd{
                font-size:1rem;
            }
        }  
    }
`;