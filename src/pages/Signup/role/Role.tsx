import { useNavigate, useLocation } from 'react-router';
import { ArrowLeftIcon, Logo } from '../../../components/icons/Icon';
import { chooseRole } from '../../../services/Auth';
import './Signup.css'
import Button from '../../../components/common/button/Button';
import { useState } from 'react';


export default function Role() {
    const [benefactor, setBenefactor] = useState(false)
    const [beneficiary, setBeneficiary] = useState(false)
    const key = useLocation().state.key 
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    function chooseBenefactor() {
        setBenefactor(true)
        setBeneficiary(false)
    }

    function chooseBeneficiary() {
        setBeneficiary(true)
        setBenefactor(false)
    }
    
    function submitRole() {
        const role = benefactor? 'benefactor': beneficiary? 'beneficiary': ''
        setIsLoading(true)
        setError('')
        console.log(role)
        console.log(JSON.stringify({"key": key, "type": role}))

        if (role === '') {
            setIsLoading(false)
            setError("Please pick a role.")
        } else {
            console.log(key, role)
            chooseRole(key, role)
                .then(res => {
                    setIsLoading(false)

                    if (res.success) {
                        
                        console.log('great job')
                    } else {
                        console.log(res.message, 'bad job')
                    }
                    console.log(res)
                })
                .catch(err => {
                    setIsLoading(false)
                    console.log(err)
                })
        }
    }

    return(
        <div className="container">
            <div className="backlink" onClick={() => navigate('/signup/completeprofile')} 
            style={{cursor: 'pointer'}}><ArrowLeftIcon /> <span>Back</span>
            </div>

            <div className="logo-container">
                <Logo className='logo'/>
            </div>

            <h1 className="title">How would you like to get started?</h1>

            {error && <p className="error">{error}</p>}
            <div className="card-container">
                <div className={benefactor? "card selected": "card"} onClick={chooseBenefactor}>
                    <h2 className="card-title">Benefactor</h2>
                    <p className="card-text">
                        Someone who helps others pay off their debts. As a benefactor, you can browse debt opportunities, accept debt transfers, and earn incentives while making a positive impact on people's financial lives.
                    </p>
                </div>

                <div className={beneficiary? "card selected": "card"} onClick={chooseBeneficiary}>
                    <h2 className="card-title">Beneficiary</h2>
                    <p className="card-text">
                        Someone who needs help managing their debt obligations. As a beneficiary, you can list your debts for transfer, request assistance from benefactors, and get relief from financial pressure when others accept your debt.
                    </p>
                </div>
                
                
                <Button 
                    className='large-btn' 
                    onClick={submitRole}
                    isLoading={isLoading}
                    disabled={isLoading}>

                        Get started
                </Button>

            </div>                     

            <div className="footer-links">
                <a href="">Privacy</a>
                <a href="">Terms</a>
            </div>
        </div>
    )
};

