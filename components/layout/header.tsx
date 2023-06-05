import Link from "next/link";
import styles from 'styled-components';
const NavComponent = ()=>{
    return <HeaderStyles>
    <h1><Link href='/'>Tetris</Link></h1>
    <nav>
        <ul>
            <li>소개</li>
            <li><Link href='/tetris'>게임하기</Link></li>
            <li>랭킹</li>
        </ul>
    </nav>
    </HeaderStyles>
};

export default NavComponent;

const HeaderStyles = styles.header`
padding:1rem;
    // background-color:#37cef0;
        nav{
            ul{
                display:flex;
                justify-content:center;
                li{
                    font-size:1.5rem;
                    font-weight:bold;
                    color:#fff;
                    padding:.5rem;
                    margin:0 1rem;
                }
            }
        }
`;