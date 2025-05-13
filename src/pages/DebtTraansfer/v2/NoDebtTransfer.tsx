import React from 'react';
import './NoDebtTransfer.css';
import { InformationIcon } from '../../../components/icons/Icon';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/layout/Header/Header';
import '../../../App.css'
import { useType } from '../../../hooks/useType';
// import { Sidebar } from 'lucide-react';

const NoDebtTransfer: React.FC = () => {
  const navigate = useNavigate();
  const { BASE_URL } = useType()

  function handleClick() {
    navigate(`${BASE_URL}/marketplace`)
  }

  return (
    <main className='debt-main'>
      <Sidebar />
      <section>
        <Header />
          <div className="debt-transfer-container">
            <div className="header-row">
              
              <h2 className="page-title">Transfer your debt</h2>
            </div>

            <div className="empty-state">
              <div className="empty-icon-wrapper">
                <InformationIcon className="empty-icon" />
              </div>
              <h3 className="empty-title">No Debt Transfer Request.</h3>
              <p className="empty-description">
                There is no debt transfer requests yet. Start by finding your first debt to playoff in Market Place.
              </p>
              <button className="create-button" onClick={handleClick}>Visit Market Place</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NoDebtTransfer;
