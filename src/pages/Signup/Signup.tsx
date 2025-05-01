
import './Signup.css'

function GetStarted() {
    return(
        <div className="container">
            <button className="back">←<span className="text">  Back</span></button>

            <div className="logo-container">
                <img src="/src/assets/images/icons/logo-main.svg" alt="logo" className='logo' />
            </div>

            <h1 className="title">How would you like to get started?</h1>

            <div className="card-container">
                <div className="card">
                    <h2 className="card-title">Benefactor</h2>
                    <p className="card-text">
                        Someone who helps others pay off their debts. As a benefactor, you can browse debt opportunities, accept debt transfers, and earn incentives while making a positive impact on people's financial lives.
                    </p>
                </div>

                <div className="card">
                    <h2 className="card-title">Beneficiary</h2>
                    <p className="card-text">
                        Someone who needs help managing their debt obligations. As a beneficiary, you can list your debts for transfer, request assistance from benefactors, and get relief from financial pressure when others accept your debt.
                    </p>
                </div>

                <button className="continue-button">Get started</button>

            </div>

            
         

            <div className="footer-links">
                <a href="">Privacy</a>
                <a href="">Terms</a>
            </div>
        </div>
    )
};

export default GetStarted;