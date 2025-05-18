import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import TransactionsPage from "./TransactionPage";


export default function TransactionHistory() {

    return (
        <main className="debt-main">
            <Sidebar />

            <section>
                <Header />
                <TransactionsPage />
            </section>
        </main>
    )
}