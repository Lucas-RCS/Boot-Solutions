import style from './home.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';
import { Div } from '../../assets/elements/common';
import { CameraPlus, House } from '@phosphor-icons/react';
import { Avatar, FloatButton } from 'antd';


function Home() {
    return (
        <div>
            <Sidebar />
            <div className={style.Container}>
                <div className={style.ContentContainer}>

                    <div className={style.Title}>
                        <House className={style.IconTitle} size={32} weight='duotone' />
                        <h1>Home</h1>
                    </div>
                    <div className={style.Main}>
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='200px' $radius='12px'
                            $border='1px solid rgba(var(--colorbg), .5)'>
                            <Avatar className={style.Avatar}
                                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                icon={<CameraPlus size={64} weight='duotone' />}
                            />
                        </Div>
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='370px' $radius='12px'
                            $border='1px solid rgba(var(--colorbg), .5)' $padding='20px 20px'>
                        </Div>
                    </div>
                </div>
            </div>
            <FloatButton />
            <FloatButton.BackTop />
        </div >
    );
};

export default Home;