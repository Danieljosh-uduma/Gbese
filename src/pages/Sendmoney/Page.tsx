import Sidebar from "../../components/Sidebar/Sidebar";
import SendMoney from "./SendMoneyPage";
import Header from "../../components/layout/Header/Header";


export default function SendMoneyScreen() {

    return (
        <main className="debt-main">
            <Sidebar />

            <section>
                <Header />
                <SendMoney />
            </section>
        </main>
    )
}