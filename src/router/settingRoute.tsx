import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/layout/Header/Header";



export default function SettingRoute() {
    return (
        <main className="debt-main">
            <Sidebar />

            <section>
                <Header />
                <Outlet />
            </section>
        </main>
    )
}