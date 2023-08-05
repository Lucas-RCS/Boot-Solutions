import react from 'react';
import style from './home.module.scss';

class Home extends react.Component {
    render() {
        return (
            <div className={style.Home}>
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;