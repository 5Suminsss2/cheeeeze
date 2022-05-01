import Header from './Header';
import Menu from './Menu';
import styles from "./Layout.module.css";


function Layout({children, activeMenu}) {
   
    return(
        <div>
            <Header />
            <div className={styles.menu}>
                <Menu activeMenu={activeMenu}/>
                <div className={styles.contents}>{children}</div>
            </div>
        </div>
    )
}

export default Layout;