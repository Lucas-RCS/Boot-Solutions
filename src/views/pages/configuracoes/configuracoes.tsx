import style from './configuracoes.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';

function Configuracoes() {
    return (
        <div>
            <Sidebar />
            <h1 className={style.text}>Configurações</h1>
        </div>
    )
}

export default Configuracoes;