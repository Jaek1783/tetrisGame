import styles from 'styled-components';
import axios from 'axios';
import { useEffect,useState,useRef } from 'react';
import DurationFilterComponent from '../../components/rank/duration-filter';
const RangkingPage = ()=>{
    const [dbData, setDbData] = useState<any>([]);
    const [rankData, setRankData] = useState<any>([]);
    const [toggle, setToggle] = useState<boolean>(true);
    const [sort, setSortData] = useState<string>('');
useEffect(()=>{
    axios.get('http://localhost:4000')
    .then(response => setDbData(response.data));
},[]);

const name = useRef(null);

const SortBtnHandler = (e)=>{
    e.preventDefault();
    setToggle(false);
    const nameChecked = name.current.value;
    console.log(nameChecked);
    const filterData = dbData.filter((el) => el.name.toLowerCase().includes(nameChecked.toLowerCase()));
    setRankData(filterData);
   name.current.value = '';
}
const AllData = (e)=>{
    e.preventDefault();
    setToggle(true);

}
return<div>
    <FormStyle onSubmit={SortBtnHandler}>
        <div>
            <input type="text" name="Sort" id="nameSort" ref={name}/>
        </div>
        <button type='submit'>검색</button>
        <button onClick={AllData}>전체보기</button>
    </FormStyle>
    <DurationFilterComponent sortData = {toggle ? dbData: rankData}/>
</div>
};
export default RangkingPage;

const FormStyle = styles.form`
display:flex;
justify-content:center;
padding:1rem;
    input{
        margin-right:.5rem;
        padding:8px;
        font-size:2rem;
    }
    button{
        border:1px solid #000;
        margin-right:1rem;
        padding:10px;
        border-radius:15px;
    }
`;