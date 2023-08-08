import React, { useEffect } from 'react';
import style from './sideBar.module.scss';
import { BookmarksSimple, ChartBar, ChatCircleDots, Folders, GearSix, List, MagnifyingGlass, ShoppingCart, SquaresFour, Users } from '@phosphor-icons/react';


const Sidebar: React.FC = () => {
    useEffect(() => {
        const sidebar = document.querySelector(".sidebar");
        const closeBtn = document.querySelector("#btn");
        const searchBtn = document.querySelector(".bx-search");

        const menuBtnChange = () => {
            if (sidebar?.classList.contains("open") && closeBtn) {
                closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            } else if (closeBtn) {
                closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
            }
        };

        const handleSidebarToggle = () => {
            if (sidebar) {
                sidebar.classList.toggle("open");
                menuBtnChange();
            }
        };

        if (closeBtn) {
            closeBtn.addEventListener("click", handleSidebarToggle);
        }

        if (searchBtn) {
            searchBtn.addEventListener("click", handleSidebarToggle);
        }

        return () => {
            if (closeBtn) {
                closeBtn.removeEventListener("click", handleSidebarToggle);
            }

            if (searchBtn) {
                searchBtn.removeEventListener("click", handleSidebarToggle);
            }
        };
    }, []);

    return (
        <div className={style.sidebar}>
            <div className={style.logo_details}>
                <i className="bx"><List size={32} weight="duotone" /></i>
                <div className={style.logo_name}>BootSolutions</div>
                <i className="bx bx-menu" id="btn"></i>
            </div>
            <ul className={style.nav_list}>
                <li>
                    <i className="bx bx-search"><MagnifyingGlass size={32} weight="duotone" /></i>
                    <input type="text" placeholder="Procurar..." />
                    <span className={style.tooltip}>Procurar</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx"><SquaresFour size={32} weight="duotone" /></i>
                        <span className={style.links_name}>Dashboard</span>
                    </a>
                    <span className={style.tooltip}>Dashboard</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx"><Users size={32} weight="duotone" /></i>
                        <span className={style.links_name}>Usuário</span>
                    </a>
                    <span className={style.tooltip}>Usuário</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx"><ChatCircleDots size={32} weight="duotone" /></i>
                        <span className={style.links_name}>Notificações</span>
                    </a>
                    <span className={style.tooltip}>Notificações</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx"><ChartBar size={32} weight="duotone" /></i>
                        <span className={style.links_name}>Gráficos</span>
                    </a>
                    <span className={style.tooltip}>Gráficos</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx"><Folders size={32} weight="duotone" /></i>
                        <span className={style.links_name}>Arquivos</span>
                    </a>
                    <span className={style.tooltip}>Arquivos</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx"><ShoppingCart size={32} weight="duotone" /></i>
                        <span className={style.links_name}>Carrinho</span>
                    </a>
                    <span className={style.tooltip}>Carrinho</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx"><BookmarksSimple size={32} weight="duotone" /></i>
                        <span className={style.links_name}>Favoritos</span>
                    </a>
                    <span className={style.tooltip}>Favoritos</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx"><GearSix size={32} weight="duotone" /></i>
                        <span className={style.links_name}>Configurações</span>
                    </a>
                    <span className={style.tooltip}>Configurações</span>
                </li>
                <li className={style.profile}>
                    <div className={style.profile_details}>
                        <img src="./img/logo_gree.png" alt="profileImg" />
                        <div className={style.name_job}>
                            <div className={style.name}>Prem Shahi</div>
                            <div className={style.job}>Web designer</div>
                        </div>
                    </div>
                    <i className="" id="log_out"></i>
                </li>
            </ul>
        </div>
    );
};

const SideBar: React.FC = () => {
    return (
        <div>
            <Sidebar />
            <section className={style.home_section}>
                <div className={style.text}>Dashboard</div>
            </section>
        </div>
    );
};

export default SideBar;
