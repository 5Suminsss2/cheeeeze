import styles from "./HomeFilter.module.css";

function HomeFilter({filter, text, onCllickFilter}) {
    return(
        <button
            className={filter===text ? styles.black : styles.gray}
            onClick={onCllickFilter}>
            {text}
        </button>
    )
}

export default HomeFilter;