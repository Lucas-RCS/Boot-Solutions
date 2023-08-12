import style from './arquivos.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';

function Arquivos() {
    return (
        <div>
            <Sidebar />
            <div className={style.home_section}>
                <div className={style.text}>Arquivos</div>
            </div>
        </div>
    )
}

export default Arquivos;