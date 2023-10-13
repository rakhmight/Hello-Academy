import { FC, PropsWithChildren } from 'react'
import styles from './MainWrapper.module.css'

const MainWrapper : FC<PropsWithChildren<unknown>> = ({ children }) => {
    return(
        <div className={styles.wrapper}>
            { children }
        </div>
    )
}

export default MainWrapper