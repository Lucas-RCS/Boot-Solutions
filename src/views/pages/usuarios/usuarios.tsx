import style from './usuarios.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';

function Usuarios() {
    return (
        <div>
            <Sidebar />
            <h1 className={style.text}>User</h1>
        </div>
    )
}

export default Usuarios;