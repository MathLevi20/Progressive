import { Dropdown, Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import { signOut } from '../application/services/auth';
import { ROUTES } from '../application/constants';
import logo from "./logo_t.png"
//import { getUser } from '../application/services/auth';

export const Navbar = withRouter(() => {
    //const user = getUser().displayName;
    return (
        <nav
            className={`border-current  border-8 border-purple-600 border-b-30 flex justify-between bg-purple-600 text-white px-3 py-1    absolute z-10 top-0 left-0 right-0`}
        >
            <Link to={ROUTES.BOARDS}>
                <div
                    className={`  w-8 h-10 flex bg-purple-600 justify-center items-center rounded text-white`}
                >
                    <img src={logo} alt="Logo" />

                </div>

            </Link>
            <div className="container pl-2 h-10 mx-auto flex flex-wrap items-center  justify-end">
                <div className="w-full relative flex justify-end lg:w-auto ">
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"

                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div
                    className={
                        "items-center flex"
                    }

                >
                    <ul className="flex  lg:flex-row list-none lg:ml-auto">
                        <Link to={ROUTES.BOARDS}>
                            <li className="nav-item">
                                <a
                                    className="px-1 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#te"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-1">Personal</span>
                                </a>
                            </li>
                        </Link>
                        <Link to={ROUTES.BOARDS_GROUP}>
                            <li className="nav-item">
                                <a
                                    className="px-1 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#te"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-1">Shared </span>
                                </a>
                            </li>
                        </Link>
                        <Link to={ROUTES.MYPROFILE}>
                            <li className="nav-item">
                                <a
                                    className="px-1 py-2 truncate flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#te"
                                >
                                    <i className="fab fa-pinterest truncate text-lg leading-lg text-white opacity-75"></i><span className="ml-1">My Account</span>
                                </a>
                            </li>
                        </Link>
                        <Link to={ROUTES.WELCOME}>
                            <li className="nav-item">
                                <a
                                    className="px-1 py-2 truncate flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#te"
                                >
                                    <i className="fab fa-facebook-square truncate text-lg leading-lg text-white opacity-75 absolute "></i><span className="ml-1">About Us</span>
                                </a>
                            </li>
                        </Link>

                        <Dropdown
                            overlay={
                                <Menu>

                                    {/*<Menu.Item key="0">
                            {user}
                        </Menu.Item>*/}
                                    <Menu.Item key="1" onClick={() => signOut()}>
                                        Sign Out
                                    </Menu.Item>
                                </Menu>
                            }
                            trigger={['click']}
                        >
                            <li>
                                <div
                                    className={` invisible sm:visible  w-8 h-8 pr-3 flex bg-purple-600 justify-center items-center rounded text-white`}
                                >
                                    <SettingOutlined />
                                </div>
                            </li>
                        </Dropdown>
                    </ul>
                </div>
            </div>


        </nav>
    );
});
