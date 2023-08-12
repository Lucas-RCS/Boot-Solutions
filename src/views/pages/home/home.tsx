import style from './home.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';
import { Div } from '../../assets/elements/common';
import { House } from '@phosphor-icons/react';
import { FloatButton } from 'antd';


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

                        </Div>
                        <div className={style.Section1}>
                            <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='48%' $height='300px' $radius='12px'
                                $border='1px solid rgba(var(--colorbg), .5)' $padding='20px 20px'>
                            </Div>
                            <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='48%' $height='300px' $radius='12px'
                                $border='1px solid rgba(var(--colorbg), .5)' $padding='20px 20px'>
                            </Div>
                        </div>
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='300px' $radius='12px'
                            $border='1px solid rgba(var(--colorbg), .5)' $padding='20px 20px'>
                        </Div>
                        <div className={style.Section1}>
                            <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='48%' $height='370px' $radius='12px'
                                $border='1px solid rgba(var(--colorbg), .5)' $padding='20px 20px'>
                            </Div>
                            <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='48%' $height='370px' $radius='12px'
                                $border='1px solid rgba(var(--colorbg), .5)' $padding='20px 20px'>
                            </Div>
                        </div>
                        
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='370px' $radius='12px'
                            $border='1px solid rgba(var(--colorbg), .5)' $padding='20px 20px'>
                        </Div>
                    </div>
                </div>
            </div>
            <FloatButton.BackTop />
        </div >
    );
};

export default Home;