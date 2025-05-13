import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/layout/Header/Header";
import '../App.css'


export default function DTRoute() {
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