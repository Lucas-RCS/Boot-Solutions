import style from './home.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';


function Home() {
    return (
        <div>
            <Sidebar />
            <section className={style.home_section}>
                <div className={style.text}>Home</div>
            </section>
        </div>
    );
};

export default Home;