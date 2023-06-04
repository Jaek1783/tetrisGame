import Link from "next/link";
import styles from 'styled-components';
const NavComponent = ()=>{
    return <HeaderStyles>
    <h1><Link href='/'>Tetris</Link></h1>
    <nav>
        <ul>
            <li>사용방법</li>
            <li><Link href='/tetris'>게임하기</Link></li>
        </ul>
    </nav>
    </HeaderStyles>
};

export default NavComponent;

const HeaderStyles = styles.header`
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