import Layout from '../components/shared/Layout';
import styles from './Home.module.css';
import youtubeData from "../data/youtubeData.json";
import HomeCard from '../components/home/HomeCard';
import { useState } from 'react';
import HomeFilter from '../components/home/HomeFilter';

const taraget =  ['전체', 'Music', 'Comedy', 'Entertainment'];

function Home() {
    const [filter, setFilter] = useState("전체");

    function mapFunc(data, index) {
            return(
                <HomeFilter 
                    filter={filter}
                    text = { data }
                    onCllickFilter = {
                        function () {
                            setFilter(data);
                        }
                    }
                    key={index}
                />
            )
    }
    
    function filterFunc(data) {
        if(filter==="전체" || filter === data.category) return true;
        return false;
    }

    return(
        <Layout activeMenu="home">
            <div className={styles.header}>
                {taraget.map(mapFunc)}
            </div>
            <div className={styles.contents}>
                <div className={styles.grid}>
                   {youtubeData['data'].filter(filterFunc).map(HomeCard)}
                </div>
            </div>
        </Layout>
    )
}

export default Home;
