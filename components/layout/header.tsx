import Link from "next/link";
import styles from 'styled-components';


const NavComponent = ()=>{
 
    return <HeaderStyles>
    <h1><Link href='/'>Tetris</Link></h1>
    <nav>
        <ul>
            <li><Link href='/how'>게임 방법</Link></li>
            <li><Link href='/tetris'>게임 하기</Link></li>
            <li><Link href='/rangking'>랭킹</Link></li>
        </ul>
    </nav>
    </HeaderStyles>
};

export default NavComponent;

const HeaderStyles = styles.header`

background-color:rgba(255,255,255,0.9);
padding:1rem;
        nav{
            ul{
                display:flex;
                justify-content:center;
                li{
                    font-size:1.5rem;
                    font-weight:bold;
                    padding:.5rem;
                    margin:0 1rem;
                }
            }
        }
`;