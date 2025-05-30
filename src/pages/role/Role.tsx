import { useNavigate, useLocation } from 'react-router';
import { ArrowLeftIcon, Logo } from '../../components/icons/Icon';
import { chooseRole } from '../../services/Auth';
import './Signup.css'
import Button from '../../components/common/button/Button';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { filterDetail } from '../../services/utils';


export default function Role() {
    const [benefactor, setBenefactor] = useState(false)
    const [beneficiary, setBeneficiary] = useState(false)
    const key = useLocation().state.key 
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const { login } = useAuth()

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

        if (role === '') {
            setIsLoading(false)
            setError("Please pick a role.")
        } else {
            chooseRole(key, role)
                .then(res => {
                    setIsLoading(false)
                    if (res.success) {
                        login(filterDetail(res))
                        navigate('/dashboard/v1')
                    } else {
                        setError('Invalid Role, try again.')
                    }
                })
                .catch(err => {
                    setIsLoading(false)
                    setError(err.message)
                })
        }
    }

    return(
        <div id="container">
            <div className="backlink" onClick={() => navigate('/')} 
            style={{cursor: 'pointer'}}><ArrowLeftIcon /> <span>Back</span>
            </div>

            <div className="logo-container">
                <Logo className='logo'/>
            </div>

            <h1 className="title">How would you like to get started?</h1>

            {error && <p className="error">{error}</p>}
            <div className="card-container">
                <div className={benefactor? "card-role selected": "card-role"} onClick={chooseBenefactor}>
                    <h2 className="card-title">Benefactor</h2>
                    <p className="card-text">
                        Someone who helps others pay off their debts. As a benefactor, you can browse debt opportunities, accept debt transfers, and earn incentives while making a positive impact on people's financial lives.
                    </p>
                </div>

                <div className={beneficiary? "card-role selected": "card-role"} onClick={chooseBeneficiary}>
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

