import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../Redux/store/store";
import Footer from "../components/Footer";

const RootLayout = () => {
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    return (
        <div className="mt-80">
            <NavBar name="Your Name" items={[
                { item: "Blogs", path: "/" },
                { item: "Projects", path: "/" },
                { item: "About", path: "/" },
                { item: "Newsletter", path: "/newsletter" }
            ]} />
            <Outlet />
            <Footer year="2023" items={["Twitter", "LinkedIn", "Email", "RSS feed", "Add to Feedly"]} />
        </div>
    )
}

export default RootLayout