import cheeeezeLogo from "../../data/cheeeeze_logo.png"
import styles from "./Header.module.css"
import {BiMenu} from "react-icons/bi";
import {BiSearch} from "react-icons/bi";
import {BsMicFill} from "react-icons/bs";
import {BiVideoRecording} from "react-icons/bi";
import { BsGrid3X3Gap } from 'react-icons/bs';
import {AiOutlineBell} from "react-icons/ai";

function Header() {
    return(
        <div className={styles.main}>
            <div className={styles.part1}>
                
                <BiMenu className={styles.icons}/>
                <img src={cheeeezeLogo} className={styles.logo} alt="cheeeeze_logo"/>
            </div>
            <div className={styles.part2}>
                <input className={styles.input}/>
                <BiSearch className={styles['search-icon']}/>
                <BsMicFill className={styles['mic-icon']}/>
            </div>
            <div className={styles.part3}>
                <BiVideoRecording className={styles.icons}/>
                <BsGrid3X3Gap className={styles.icons}/>
                <AiOutlineBell className={styles.icons}/>
            </div>
        </div>
    )
}

export default Header;