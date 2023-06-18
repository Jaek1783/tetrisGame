import Link from "next/link";
import IntroduceGamePage from "../components/intro/introduce";
import styles from 'styled-components';
const Hompage = ()=>{

return<div className="App">
    <HomePageStyles>
        <IntroduceGamePage/>
        <div className="buttonContainer">
            <button><Link href='/tetris'>Start</Link></button>
        </div>
    </HomePageStyles>
</div>
}
export default Hompage;

const HomePageStyles = styles.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:10%;
    div.buttonContainer{
        width:40%;
        display:flex;
        justify-content:center;
        align-items:center;
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
            // color:#fff;
        }
    }
`;
