import styles from 'styled-components';

const DurationFilterComponent = ({sortData})=>{
    sortData.sort((a,b)=>b.score - a.score);
    return <RankDataStyle>
        <ul>
            {sortData?.map((rank,index)=>{
                return <li key={rank._id}>
                    <dl>
                        <dt>{index+1}</dt>
                        <dd>닉네임 : {rank.name}</dd>
                        <dd>점수 : {rank.score}</dd>
                        <dd>속도 : {rank.duration}</dd>
                    </dl>
                </li>
            })}
        </ul>
        </RankDataStyle>
};

export default DurationFilterComponent;

const RankDataStyle =styles.section`
    li{
        width:80%;
        margin:0 auto;
        background-color: rgba(255,255,255, 0.5);
        border-bottom:1px solid;
        text-align:left;
        padding:.5rem;
        font-size:1rem;
        dl{
            display:flex;
            dt,dd{
                flex-basis:33.3%;
            }
        }
    }
    li:nth-child(1),li:nth-child(2),li:nth-child(3){
        font-weight:bold;
        font-size:1.1rem;
        background-color: #6363f1;
        color:#fff;
    }
@media screen and (max-width:780px){
    li{
        width:90%;
        padding:.5rem;
        font-size:.7rem;
    }
    li:nth-child(1),li:nth-child(2),li:nth-child(3){
        font-size:.8rem;
    }
}
`;