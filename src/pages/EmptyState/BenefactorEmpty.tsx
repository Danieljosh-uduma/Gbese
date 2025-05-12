
import './DebtorEmpty.css'

import { Sidebar } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';



function BenefactorEmpty () {
    return (
        <div className='empty-page'>
            <Sidebar/>

            <div className="content">
                <Navbar
                coinCount={32}/>

                <div className="empty">
                    <img src="/Gbese/src/assets/images/icons/link.svg" alt="" />
                    <p className="titlee">
                        No debt Opportunities found
                    </p>
                    <p className="text">
                        There are currently no debt opportunities matching your criteria. <br /> Try adjusting your filters or check back later
                    </p>

                    <div className="buttons">
                        <button className="adjust-btn">
                            Adjust Filters
                        </button>
                        <button className="dashboard-btn" >
                            Browse all debts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefactorEmpty;