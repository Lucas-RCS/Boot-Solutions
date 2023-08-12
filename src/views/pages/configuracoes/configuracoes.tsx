import style from './configuracoes.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';
import { FloatButton } from 'antd';

function Configuracoes() {
    return (
        <div>
            <Sidebar />
            <div className={style.home_section}>
                <div className={style.text}>Configurações</div>
            </div>
            <FloatButton.BackTop />
        </div>
    )
}

export default Configuracoes;