import { NavLink } from "react-router-dom";
import { LuSunDim } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Redux/store/store";
import { toggleTheme } from "../Redux/slice/themeSlice";


export interface itemProps {
    item: string;
    path: string;
}

export interface NavBarProps {
    name: string;
    items: Array<itemProps>
}


const NavBar = ({ name, items }: NavBarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-between w-full h-80 bg-white dark:bg-brand-dark fixed top-0 z-10 p-20 lg:py-32 lg:px-112">
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="hidden md:flex items-center justify-center gap-14">
                <nav>
                    <ul className="flex items-center justify-center gap-14 text-xl list-none">
                        {items.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    className="no-underline py-8 mx-8 hover:border-b-2"
                                >
                                    {item.item}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    onClick={() => dispatch(toggleTheme())}
                    className="flex items-center justify-between w-96 h-40 bg-brand-dark dark:bg-white rounded-full cursor-pointer gap-10 relative px-16 py-8">
                    <span className="text-3xl"><LuSunDim className="text-white w-full dark:hidden" /></span>
                    <div className={`absolute bg-white dark:bg-brand-dark w-24 h-24 rounded-full transition-all duration-200 ${isDarkMode ? 'left-16' : 'right-16'}`}></div>
                    <span className="text-2xl"><FaRegMoon className=" hidden text-brand-dark w-full dark:block " /></span>
                </div>
            </div>
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="block md:hidden text-3xl cursor-pointer p-8"
                >
                    <IoMenu className="text-[32px]" />
                </button>
            )}
            {isOpen && (
                <div className="fixed inset-0 bg-white dark:bg-brand-dark flex flex-col justify-center items-center z-10 md:hidden animate-fade-in w-full mx-auto">
                    <div className="flex flex-col items-center justify-center gap-20 grow">
                        <h2 className="text-lg font-bold mb-34">{name}</h2>
                        <nav className="w-full">
                            <ul className="flex flex-col items-center gap-20 text-lg list-none w-full">
                                {items.map((item, index) => (
                                    <li key={index} className="w-full text-center">
                                        <NavLink
                                            to={item.path}
                                            className="no-underline block p-8 w-full"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.item}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div
                            onClick={() => dispatch(toggleTheme())}
                            className="flex items-center justify-between w-96 h-40 bg-brand-dark dark:bg-white rounded-full cursor-pointer gap-10 relative px-16 py-8">
                            <span className="text-3xl"><LuSunDim className="text-white w-full dark:hidden" /></span>
                            <div className={`absolute bg-white dark:bg-brand-dark w-24 h-24 rounded-full transition-all duration-200 ${isDarkMode ? 'left-16' : 'right-16'}`}></div>
                            <span className="text-2xl"><FaRegMoon className=" hidden text-brand-dark w-full dark:block " /></span>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer p-8 my-20 justify-end"
                    >
                        <AiOutlineClose className="text-[32px]" />
                    </button>

                </div>
            )}
        </div>
    );
};

export default NavBar;