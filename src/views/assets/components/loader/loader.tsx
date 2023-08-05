import react from 'react';
import style from './loader.module.scss';


function Loader() {
    return (
        <div className={style.wrapper}>
            <div className={style.circle}></div>
            <div className={style.circle}></div>
            <div className={style.circle}></div>
            <div className={style.shadow}></div>
            <div className={style.shadow}></div>
            <div className={style.shadow}></div>
        </div>
    )
}

export default Loader;