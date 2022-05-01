import styles from "./HomeCard.module.css";
import moment from 'moment';
import 'moment/locale/ko';
import { utils } from '../utils/utils';

function HomeCard(data, index) {
    return(
        <a href={`https://www.youtube.com/watch?v=${data.id}`} className={styles.video} key={index}>
            <img className={styles.thumnail} src={data.thumbnail} />
            <div className={styles.userInfo}>
                <img className={styles.userThumnail} src={data.channelThumbnail} />
                <div className={styles.userDetail}>
                    <div className={styles.title}>{data.title}</div>
                    <div className={styles.channelTitle}>
                        {data.channelTitle}
                    </div>
                    <div className={styles.videoDetail}>
                        <div className={styles.count}>
                            {utils(data.viewCount)}
                        </div>                            
                        <div className={styles.date}>
                            {moment(data.date).fromNow()}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default HomeCard;