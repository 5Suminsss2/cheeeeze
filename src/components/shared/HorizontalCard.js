import styles from "./HorizontalCard.module.css";
import moment from "moment";
import 'moment/locale/ko';
import { utils } from '../utils/utils';


function HorizontalCard({data}) {
    
    return(
        <a href={`https://www.youtube.com/watch?v=${data.id}`} className={styles.contents}>
            <img src={data.thumbnail} className={styles.thumbnail}/>
            <div className={styles.info}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.userInfo}>
                    <div className={styles.channelTitle}>{data.channelTitle}</div>
                    <div className={styles.viewCount}>{utils(data.viewCount)}</div>
                    <div>{moment(data.date).fromNow()}</div>
                </div>
                <div className={styles.videoDetail}>{data.description}</div>
            </div>
        </a>
    )
}

export default HorizontalCard;