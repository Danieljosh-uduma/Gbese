import React from 'react';

import ActionButton from '../../common/button/ActionButton';
import SendSquare from '../../../assets/images/icons/send-sqaure.png';
import SendIcon from '../../../assets/images/icons/add-icon.png';
import AddSquare from '../../../assets/images/icons/add-icon.png';
import Chart from '../../../assets/images/icons/chart.svg';
import './ActionButtons.css'
import { useNavigate } from 'react-router';
import { useType } from '../../../hooks/useType';

const ActionButtons: React.FC = () => {
    const { BASE_URL } = useType()
    const navigate = useNavigate()

    return (
        <div className="action-buttons">
        <ActionButton
            icon={<img src={SendSquare} alt="Send Icon" width={20} height={20} />}
            label="Transfer Debt"
            color="var(--primary-200)"
            onClick={() => navigate(`${BASE_URL}/debt-transfer`)} 
            />
        <ActionButton
        icon={<img src={SendIcon} alt="Send Icon" width={20} height={20} />}
            label="Fund Account"
            color="var(--primary-200)" 
            onClick={() => navigate(`${BASE_URL}/fund-account`)}
            />
        <ActionButton
            icon={<img src={AddSquare} alt="Send Icon" width={20} height={20} />}
            label="Send Money"
            color="var(--primary-200)" 
            onClick={() => navigate(`${BASE_URL}/send-money`)}
        />
        <ActionButton
            icon={<img src={Chart} alt="Send Icon" width={20} height={20} />}
            label="History"
            color="var(--primary-200)" 
            onClick={() => navigate(`${BASE_URL}/history`)}
        />
        </div>
    );
    };

export default ActionButtons;