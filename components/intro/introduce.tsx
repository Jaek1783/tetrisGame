import styles from 'styled-components';

const IntroduceGamePage = ()=>{
    return <div>
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
            <li>
                <div>
                    <iframe id="ytplayer" width="640" height="360" src="https://www.youtube.com/embed/cH0dhkPINyk"></iframe>
                </div>
            </li>
        </IntroStyles>
    </div>
};

export default IntroduceGamePage;

const IntroStyles = styles.ul`
color:#fff;
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
`;