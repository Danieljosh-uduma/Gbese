// TransactionTable.tsx
import { useState } from 'react';
import './TransactionTable.css';

export default function TransactionsTable() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="transactions-section">
            <div className="transactions-header">
                <h3 className="section-title">Recent Transactions</h3>
                <button className="view-more" onClick={openModal}>
                    View More
                </button>
            </div>
            <div className="transactions-table-container">
                <table className="transactions-table">
                    <thead>
                        <tr>
                            <th>Biller</th>
                            <th>Transaction type</th>
                            <th>Amount</th>
                            <th>Recipient</th>
                            <th>Status</th>
                            <th>Fund type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="empty-transactions" colSpan={6}>
                               <em> No Recent Transactions Yet </em>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Transaction History Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Transaction History</h2>
                            <button className="close-button" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <table className="transactions-table">
                                <thead>
                                    <tr>
                                        <th>Biller</th>
                                        <th>Transaction type</th>
                                        <th>Amount</th>
                                        <th>Recipient</th>
                                        <th>Status</th>
                                        <th>Fund type</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="empty-transactions" colSpan={7}>
                                            <em>No Transactions Available</em>
                                        </td>
                                    </tr>
                                    {/* You can map your transaction data here when available */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
