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
h1{
    color:#fff;
}
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