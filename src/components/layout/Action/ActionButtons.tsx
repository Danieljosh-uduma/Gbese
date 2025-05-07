import React from 'react';

import ActionButton from '../../common/button/ActionButton';
import SendSquare from '../../../assets/images/icons/Q and A about loan.svg';
import SendIcon from '../../../assets/images/icons/send-2.svg';
import AddSquare from '../../../assets/images/icons/add-square.svg';
import Chart from '../../../assets/images/icons/chart.svg';

const ActionButtons: React.FC = () => {
    return (
        <div className="action-buttons">
        <ActionButton
            icon={<img src={SendSquare} alt="Send Icon" width={20} height={20} />}
            label="Transfer Debt"
            color="var(--primary-200)" 
            />
        <ActionButton
        icon={<img src={SendIcon} alt="Send Icon" width={20} height={20} />}
            label="Request Money"
            color="var(--primary-200)" 
            />
        <ActionButton
            icon={<img src={AddSquare} alt="Send Icon" width={20} height={20} />}
            label="Send Money"
            color="var(--primary-200)" 
        />
        <ActionButton
            icon={<img src={Chart} alt="Send Icon" width={20} height={20} />}
            label="History"
            color="var(--primary-200)" 
        />
        </div>
    );
    };

export default ActionButtons;