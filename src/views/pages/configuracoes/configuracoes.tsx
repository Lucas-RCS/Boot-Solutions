import style from './configuracoes.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';
import { Div } from '../../assets/elements/common';
import { CameraPlus, GearSix, House } from '@phosphor-icons/react';
import { Avatar, FloatButton } from 'antd';
import { Link } from 'react-router-dom';


function Configuracoes() {
    return (
        <div>
            <Sidebar />
            <div className={style.Container}>
                <div className={style.ContentContainer}>

                    <div className={style.Title}>
                    <Link to="/Home">
                            <House className={style.IconTitle} size={32} weight='duotone' />
                        </Link>
                        <h1>Home /</h1>
                        <GearSix className={style.IconPage} size={32} weight='duotone'/>
                        <h1>Configurações</h1>
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
            <FloatButton.BackTop />
        </div>
    )
}

export default Configuracoes;