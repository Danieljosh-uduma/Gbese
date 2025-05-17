
import Header from '../../../components/layout/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Img from "../../../assets/images/icons/profile.svg"
import './DebtorEmpty.css'
import Navbar from '../../../components/Navbar/Navbar';
// import DebtRequest from './DebtRequest/DebtRequest';
// import PayDebt from './PayDebt/PayDebt';
// import SuccessModal from '../../DebtTraansfer/Modal/SuccessModal';
// import Successful from './Successful/Successful';




function DebtorEmpty () {
    return (
        <div className='debt-main'>
            <Sidebar />

            <section className="content">
                <Header />
                <Navbar list={[]} setGrid={() => {}} setList={() => {}} />

                    {/* <Successful /> */}

                    {/* <PayDebt /> */}


                {/* <DebtRequest /> */}
                <div className="empty">
                    <img src={Img} alt="" />
                    <p className="titlee">
                        No debt Opportunities found
                    </p>
                    <p className="text">
                        We couldn't find any helpers matching your criteria. Try adjusting <br /> your filters to check back later
                    </p>

                    <div className="buttons">
                        <button className="adjust-btn">
                            Adjust Filters
                        </button>
                        <button className="dashboard-btn" >
                            Return to dashboard
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DebtorEmpty;