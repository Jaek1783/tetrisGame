import Link from "next/link";

import styles from 'styled-components';

const Hompage = ()=>{

return<div className="App">
    <HomePageStyles>
    <h1>Hello world</h1>
        <div>
            <p>youtube</p>
        </div>
        <div>
            <button><Link href='/tetris'>Start</Link></button>
        </div>
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
        height:80vh;
        display:flex;
        justify-content:center;
        align-items:center;
        button{
            font-size:3rem;
            border:1px solid #000;
            padding:1rem 2rem;
            border-radius:15px;
            cursor:pointer;
        }
        button:hover{
            box-shadow:none;
            background-color:#e6e4e4;
            // color:#fff;
        }
    }

// width:100%;
`;
