import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollUp from "../components/ScrollUp";

function Layout() {
    return (
        <>
        <Header />
        <main>
            <Outlet />

        </main>
        <ScrollUp />
        <Footer />
            
        </>
    )
}

export default Layout
