import React, { useEffect } from 'react';
import './sideBar.scss';
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
        <div className="sidebar">
            <div className="logo_details">
                <i className="bx icons"><List size={32} weight="duotone" /></i>
                <div className="logo_name">BootSolutions</div>
                <i className="bx bx-menu" id="btn"></i>
            </div>
            <ul className="nav_list">
                <li>
                    <i className="bx bx-search icons"><MagnifyingGlass size={32} weight="duotone" /></i>
                    <input type="text" placeholder="Procurar..." />
                    <span className="tooltip">Procurar</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><SquaresFour size={32} weight="duotone" /></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><Users size={32} weight="duotone" /></i>
                        <span className="links_name">Usuário</span>
                    </a>
                    <span className="tooltip">Usuário</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><ChatCircleDots size={32} weight="duotone" /></i>
                        <span className="links_name">Notificações</span>
                    </a>
                    <span className="tooltip">Notificações</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><ChartBar size={32} weight="duotone" /></i>
                        <span className="links_name">Gráficos</span>
                    </a>
                    <span className="tooltip">Gráficos</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><Folders size={32} weight="duotone" /></i>
                        <span className="links_name">Arquivos</span>
                    </a>
                    <span className="tooltip">Arquivos</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><ShoppingCart size={32} weight="duotone" /></i>
                        <span className="links_name">Carrinho</span>
                    </a>
                    <span className="tooltip">Carrinho</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><BookmarksSimple size={32} weight="duotone" /></i>
                        <span className="links_name">Favoritos</span>
                    </a>
                    <span className="tooltip">Favoritos</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><GearSix size={32} weight="duotone" /></i>
                        <span className="links_name">Configurações</span>
                    </a>
                    <span className="tooltip">Configurações</span>
                </li>
                <li className="profile">
                    <div className="profile_details">
                        <img src="./img/logo_gree.png" alt="profileImg" />
                        <div className="name_job">
                            <div className="name">Prem Shahi</div>
                            <div className="job">Web designer</div>
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
            <section className="home_section">
                <div className="text">Dashboard</div>
            </section>
        </div>
    );
};

export default SideBar;
