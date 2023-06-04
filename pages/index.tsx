import Link from "next/link";
import styles from 'styled-components';
const Hompage = ()=>{
return<div className="App">
    <HomePageStyles>
    <h1>Hello world</h1>
        <div><p>youtube</p></div>
        <div><button><Link href='/tetris'>시작하기</Link></button></div>
    </HomePageStyles>
</div>
}
export default Hompage;

const HomePageStyles = styles.div`
h1{
    width:0;
    height:0;
    visibility:hidden;
    display:none;
}
display:flex;
justify-content:center;
    div{
        width:50%;
        display:flex;
        justify-content:center;
        // align-items:center;
    }

// width:100%;
`;
