import Header from "../../components/layout/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import EditInfo from "./EditInfo"


export default function SettingPage() {

    return (
        <main className="debt-main">
            <Sidebar />

            <section>
                <Header />
                <EditInfo />
            </section>
        </main>
    )
}