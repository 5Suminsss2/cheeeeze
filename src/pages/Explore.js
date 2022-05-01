import ContentsLayout from '../components/shared/ContentsLayout';
import HorizontalCard from '../components/shared/HorizontalCard';
import Layout from '../components/shared/Layout';
import youtubeData from "../data/youtubeData.json";

function Explore() {
    return(
        <div>
            <Layout activeMenu="explore">
                <ContentsLayout>
                    {youtubeData['data'].map(function (data, index) {
                        return(
                            <HorizontalCard data={data} key={`explore-card-${index}`}/>
                        )
                    })}
                </ContentsLayout>
            </Layout>
        </div>
    )
}

export default Explore;