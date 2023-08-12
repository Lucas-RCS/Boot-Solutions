import React, { useState } from 'react';
import style from './dashboard.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';
import { Div } from '../../assets/elements/common';
import { House, SquaresFour } from '@phosphor-icons/react';
import { FloatButton, Card } from 'antd';
import { Link } from 'react-router-dom';



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
    ];

    const contentList: Record<string, React.ReactNode> = {
        tab1: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas consequuntur quam quasi magnam deleniti.
            Consequatur sunt odio quae, temporibus nemo cum reiciendis </p>,
        tab2: <p>Lorem ipsum dolor sittur adipisicing elit. Consequuntur 
            quisquam dolorum aliquam, endus in dicta cupiditate reiciendis
             labore ratione voluptate  voluptatem asperiores! Quibusdam?</p>,
    };

    const tabListNoTitle = [
        {
            key: 'article',
            label: 'article',
        },
        {
            key: 'app',
            label: 'app',
        },
        {
            key: 'project',
            label: 'project',
        },
    ];

    const contentListNoTitle: Record<string, React.ReactNode> = {
        article: <p>article content</p>,
        app: <p>app content</p>,
        project: <p>project content</p>,
    }

    const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
    const [activeTabKey2, setActiveTabKey2] = useState<string>('app');

    const onTab1Change = (key: string) => {
        setActiveTabKey1(key);
    };
    const onTab2Change = (key: string) => {
        setActiveTabKey2(key);
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
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='200px' $radius='12px'
                            $border='1px solid rgba(var(--colorbg), .5)'>
                                
                        </Div>
                        <Div className={style.content} $primary $colorBG='#f8f9fc1d' $width='100%' $height='370px' $radius='12px'
                            $border='1px solid rgba(var(--colorbg), .5)' $padding='40px 40px !important'>
                            <>
                                <Card
                                    style={{ width: '100%', color: '#f8f9fc' }}
                                    title="Card title"
                                    extra={<a href="#" style={{color : "rgba(var(--colorbg),1)"}}>More</a>}
                                    tabList={tabList}
                                    activeTabKey={activeTabKey1}
                                    onTabChange={onTab1Change}
                                >
                                    {contentList[activeTabKey1]}
                                </Card>
                            </>
                        </Div>
                    </div>
                </div>
            </div>
            <FloatButton.BackTop />
        </div>
    )
}

export default Dashboard;