import styles from 'styled-components';

const DurationFilterComponent = ({sortData})=>{
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

const RankDataStyle =styles.div`
    span{
        
    }
    li{
        width:50%;
        margin:0 auto;
        background-color: rgba(255,255,255, 0.5);
        border-bottom:1px solid;
        text-align:left;
        padding:.5rem;
        dl{
            display:flex;
            dt,dd{
                flex-basis:33.3%;
            }
        }
    }
`;