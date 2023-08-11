import style from './dashboard.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';

function Dashboard() {
    return (
        <div>
            <Sidebar />
            <h1 className={style.text}>Dashboard</h1>
        </div>
    )
}

export default Dashboard;