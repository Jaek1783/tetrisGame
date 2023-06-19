import Link from "next/link";
import IntroduceGamePage from "../components/intro/introduce";
import styles from 'styled-components';
const Hompage = ()=>{

return<main className="App">
    <HomePageStyles>
        <IntroduceGamePage/>
    </HomePageStyles>
</main>
}
export default Hompage;

const HomePageStyles = styles.section`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
