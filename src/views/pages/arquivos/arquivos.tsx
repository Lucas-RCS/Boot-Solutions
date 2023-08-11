import style from './arquivos.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';

function Graficos() {
    return (
        <div>
            <Sidebar />
            <h1 className={style.text}>Arquivos</h1>
        </div>
    )
}

export default Graficos;