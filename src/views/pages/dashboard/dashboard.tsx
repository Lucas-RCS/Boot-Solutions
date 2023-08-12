import style from './dashboard.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';
import { Div } from '../../assets/elements/common';

function Dashboard() {
    return (
        <div>
            <Sidebar />
            <div className={style.container}>
                <div className={style.home_section}>
                    <div className={style.text}>Dashboard</div>
                    <Div className={style.teste} $primary $colorBG='#f8f9fc1d' $width='50%' $height='200px' $radius='12px'
                        $border='1px solid #f8f9fc2e'>
                    </Div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;