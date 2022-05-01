import styles from "./Menu.module.css";
import {AiFillHome} from "react-icons/ai";
import {MdOutlineExplore} from "react-icons/md";
import {MdOutlineSubscriptions} from "react-icons/md";
import { Link } from 'react-router-dom';

function Menu({activeMenu}) {
    return(
        <div className={styles.menu}>
            <Link to="/" className={activeMenu==='home'? styles.focused : styles.link}>
                <AiFillHome className={styles.icons}/>
            </Link>
            <Link to="/explore">
                <MdOutlineExplore className={styles.icons}/>
            </Link>
            <Link to="/subscription">
                <MdOutlineSubscriptions className={styles.icons}/>
            </Link>
            
            
        </div>
    )
}

export default Menu;