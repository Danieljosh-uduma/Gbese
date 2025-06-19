import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Img from "../../assets/images/icons/profile.svg"
import { useNavigate } from "react-router";
import { useType } from "../../hooks/useType";

export default function NotFound() {
    const navigate = useNavigate()
    const { BASE_URL } = useType()

    return (
        <main className="debt-main">
            <Sidebar />

            <section>
                <Header />
                <div className="empty">
                    <img src={Img} alt="" />
                    <p className="titlee">
                        NOT FOUND!!
                    </p>
                    <p className="text">
                        We couldn't find the resource that you are looking for. <br /> try to check back later
                    </p>

                    <div className="buttons">
                        
                        <button className="dashboard-btn" onClick={() => navigate(`${BASE_URL}/`)}>
                            Return to dashboard
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )

}