import styles from 'styled-components';
import axios from 'axios';
import { useEffect,useState } from 'react';

const RangkingPage = ()=>{
    const [rank, setRank] = useState<any>([]);
useEffect(()=>{
    axios.get('http://localhost:4000')
    .then(response => console.log(response.data))
    .then(response => setRank(response));
},[])
return<div>
</div>
};
export default RangkingPage;