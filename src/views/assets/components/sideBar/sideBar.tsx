import React, { useEffect } from 'react';
import './sideBar.scss';
import { BookmarksSimple, ChartBar, ChatCircleDots, Folders, GearSix, List, MagnifyingGlass, ShoppingCart, SignOut, SquaresFour, Users } from '@phosphor-icons/react';


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
                <i className="bx icons icon"> <img src="./img/logo_min_green.png" alt="Logo_Boot" /></i>
                <div className="logo_name">BootSolutions</div>
                <i className="bx icons bx-menu" id="btn"><List size={24} weight="duotone" /></i>
            </div>
            <ul className="nav_list">
                <li>
                    <i className="bx bx-search icons"><MagnifyingGlass size={24} weight="duotone" /></i>
                    <input type="text" placeholder="Procurar..." />
                    <span className="tooltip">Procurar</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><SquaresFour size={24} weight="duotone" /></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><Users size={24} weight="duotone" /></i>
                        <span className="links_name">Usuário</span>
                    </a>
                    <span className="tooltip">Usuário</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><ChatCircleDots size={24} weight="duotone" /></i>
                        <span className="links_name">Notificações</span>
                    </a>
                    <span className="tooltip">Notificações</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><ChartBar size={24} weight="duotone" /></i>
                        <span className="links_name">Gráficos</span>
                    </a>
                    <span className="tooltip">Gráficos</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><Folders size={24} weight="duotone" /></i>
                        <span className="links_name">Arquivos</span>
                    </a>
                    <span className="tooltip">Arquivos</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><ShoppingCart size={24} weight="duotone" /></i>
                        <span className="links_name">Carrinho</span>
                    </a>
                    <span className="tooltip">Carrinho</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><BookmarksSimple size={24} weight="duotone" /></i>
                        <span className="links_name">Favoritos</span>
                    </a>
                    <span className="tooltip">Favoritos</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx icons"><GearSix size={24} weight="duotone" /></i>
                        <span className="links_name">Configurações</span>
                    </a>
                    <span className="tooltip">Configurações</span>
                </li>
                <li className="profile">
                    <div className="profile_details">
                        <img src="./img/logo_min_green.png" alt="profileImg" />
                        <div className="name_job">
                            <div className="name">Boot Solutions</div>
                            <div className="job">Developer</div>
                        </div>
                    </div>
                    <i className="icons_logout" id="log_out"><SignOut size={24} weight="duotone" /></i>
                </li>
            </ul>
        </div>
    );
};


// usando o conteuno junto com a sidebar
const Teste: React.FC = () => {
    return (
        <div>
            <Sidebar />
            <section className="home_section">
                <div className="text">Dashboard</div>
            </section>
        </div>
    );
};

export default Sidebar;
