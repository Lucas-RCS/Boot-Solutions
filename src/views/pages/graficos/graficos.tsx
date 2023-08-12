import style from './graficos.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';

function Graficos() {
    return (
        <div>
            <Sidebar />
            <div className={style.home_section}>
                <div className={style.text}>Gráficos</div>
            </div>
        </div>
    )
}

export default Graficos;