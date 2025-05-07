import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/layout/Header/Header';
import BalanceCard from '../../../components/layout/BalanceCard/BalanceCard';
import PromoCard from '../../../components/layout/Promo/PromoCard';
import ActiveDebtsSection from '../../../components/layout/ActiveDebt/ActiveDebtsSection';
import ActionButtons from '../../../components/layout/Action/ActionButtons';
import TransactionsTable from '../../../components/layout/Transaction/TransactionTable';
import '../../../components/layout/styles/MediaQuery.css'
import './Page.css';
import { useAuth } from '../../../hooks/useAuth';
// import { Navigate } from 'react-router';

const DashboardPage: React.FC = () => {
    const { user } = useAuth()
    console.log(user)
    // user.type !== 'benefactor'?
    return (
    <div className="dashboard-container">
    <Sidebar />
    
    <div className="main-content">
        <Header />
        
        <div className="dashboard-content">
        <div className="card-row">
            <BalanceCard />
            <PromoCard />
        </div>
        
            <ActiveDebtsSection />
            <ActionButtons />
            <TransactionsTable /> 
        </div>
    </div>
    </div>
)//: <Navigate to='/dashboard/v1' />
};

export default DashboardPage;