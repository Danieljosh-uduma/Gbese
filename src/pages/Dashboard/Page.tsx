

import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
 import Header from '../../components/layout/Header';
import BalanceCard from '../../components/layout/BalanceCard';
import PromoCard from '../../components/layout/PromoCard';
import ActiveDebtsSection from '../../components/layout/ActiveDebtsSection';
import ActionButtons from '../../components/layout/ActionButtons';
import TransactionsTable from '../../components/layout/TransactionTable';
import '../../components/layout/styles/MediaQuery.css'
import './Page.css';

    const DashboardPage: React.FC = () => {
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
    );
    };

    export default DashboardPage;