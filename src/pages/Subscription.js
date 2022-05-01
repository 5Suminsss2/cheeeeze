import ContentsLayout from '../components/shared/ContentsLayout';
import Layout from '../components/shared/Layout';
import SubscriptionCard from '../components/Subscription/SubscriptionCard';
import sortedYoutubeData from "../data/sortedYoutubeData.json";

function Subscription() {
    return(
        <div>
            <Layout activeMenu="subscription">
                <ContentsLayout>
                    {sortedYoutubeData['data'].map(function (data, index) {
                            return(
                                <SubscriptionCard data={data} key={`subscription-card-${index}`}/>
                            )
                    })}

                </ContentsLayout>
                  
            
            </Layout>
        </div>
    )
}

export default Subscription;