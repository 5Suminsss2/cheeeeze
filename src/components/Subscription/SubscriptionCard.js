import HorizontalCard from '../shared/HorizontalCard';
import styles from "./SubscriptionCard.module.css";

function SubscriptionCard({data}) {
    console.log(data)
    return(
        <div className={styles.contents}>
            <div className={styles.channelInfo}>
                <img src={data.channelThumbnail} className={styles.thumbnail}/>
                <div>{data.channelTitle}</div>
            </div>
            <div>
                <HorizontalCard data={data}/>
            </div>
        </div>
    )
}

export default SubscriptionCard;