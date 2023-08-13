import React, { useState } from 'react';
import style from './dashboard.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';
import { Div } from '../../assets/elements/common';
import { House, SquaresFour } from '@phosphor-icons/react';
import { FloatButton, Card } from 'antd';
import { Link } from 'react-router-dom';
import Search from 'antd/es/input/Search';



function Dashboard() {

    const tabList = [
        {
            key: 'tab1',
            tab: 'Aba 1',
        },
        {
            key: 'tab2',
            tab: 'Aba 2',
        },
        {
            key: 'tab3',
            tab: 'Aba 3',
        },
        {
            key: 'tab4',
            tab: 'Aba 4',
        },
    ];

    const contentList: Record<string, React.ReactNode> = {
        tab1: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas consequuntur quam quasi magnam deleniti.
            Consequatur sunt odio quae, temporibus nemo cum reiciendis </p>,
        tab2: <p>Lorem ipsum dolor sittur adipisicing elit. Consequuntur
            quisquam dolorum aliquam, endus in dicta cupiditate reiciendis
            labore ratione voluptate  voluptatem asperiores! Quibusdam?</p>,
        tab3: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam, quae suscipit atque neque sequi porro animi sed
            accusamus esse molestias eum, dicta delectus consequatur
            velit magnam, vitae quis. Quis, magnam?</p>,
        tab4: <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente nihil necessitatibus suscipit ex id nesciunt
            . Quas non, et soluta doloribus corrupti quidem facilis ad
            perspiciatis numqua</p>,
    };

    const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');

    const onTab1Change = (key: string) => {
        setActiveTabKey1(key);
    };
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
                        <SquaresFour className={style.IconPage} size={32} weight='duotone' />
                        <h1>Dashboard</h1>
                    </div>
                    <div className={style.Main}>
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='80px' $radius='12px'
                            $border='1px solid rgba(var(--colorbg), .5)'>
                            <div className={style.Seach}>
                                <Search
                                    style={{ width: '40%', }}
                                    placeholder="Busque por um cliente"
                                    size="large" />
                            </div>

                        </Div>
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='370px' $radius='12px'
                            $border='1px solid rgba(var(--colorbg), .5)' $padding='40px 40px !important'>
                            <Card
                                style={{ width: '100%', color: '#f8f9fc' }}
                                title="Titulo do Card"
                                extra={<a href="#" style={{ color: "rgba(var(--colorbg),1)" }}>More</a>}
                                tabList={tabList}
                                activeTabKey={activeTabKey1}
                                onTabChange={onTab1Change}
                            >
                                {contentList[activeTabKey1]}
                            </Card>
                        </Div>
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='350px' $radius='12px'
                            $border='1px solid rgba(var(--colorbg), .5)' $padding='20px 20px'>
                            <div className={style.threeDot}>...</div>
                        </Div>
                    </div>
                </div>
            </div>
            <FloatButton.BackTop />
        </div>
    )
}

export default Dashboard;