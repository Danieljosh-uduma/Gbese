
import './DebtorEmpty.css'

import { Sidebar } from 'lucide-react';



function DebtorEmpty () {
    return (
        <div className='empty-page'>
            <Sidebar/>

            <div className="content">

                <div className="empty">
                    <img src="/Gbese/src/assets/images/icons/profile.svg" alt="" />
                    <p className="titlee">
                        No helpers found
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
            </div>
        </div>
    )
}

export default DebtorEmpty;