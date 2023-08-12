import style from './usuarios.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';

function Usuarios() {
    return (
        <div>
            <Sidebar />
            <div className={style.home_section}>
                <div className={style.text}>Usuarios</div>
            </div>
        </div>
    )
}

export default Usuarios;