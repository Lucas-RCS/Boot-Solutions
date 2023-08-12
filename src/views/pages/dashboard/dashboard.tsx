import style from './dashboard.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';

function Dashboard() {
    return (
        <div>
            <Sidebar />
            <div className={style.home_section}>
                <div className={style.text}>Dashboard</div>
            </div>
        </div>
    )
}

export default Dashboard;