
import './ActiveDebtSection.css';


export default function ActiveDebtsSection() {
    return (
        <div className="active-debts-section">
        <h3 className="section-title">Active Debts</h3>
        <div className="empty-debts-message">
            <em>oops You have No Active Debts Yet</em>
        </div>
        </div>
    );
    };
