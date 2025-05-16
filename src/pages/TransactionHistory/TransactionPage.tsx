import React, { useState, useEffect } from 'react';
import './TransactionPage.css';
import { CalendarIcon,  ArrowLeftIcon,SearchIcon, MobileIconAccepted, MobileIconUpcoming } from '../../components/icons/Icon';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TransactionDetails from './Modal/TransactionDetails';

type Transaction = {
  type: string;
  amount: string;
  date: string;
  recipient: string;
  status: string;
  purpose?: string;
  transferId?: string;
  debtSource?: string;
  incentive?: string;
  note?: string;
};

const transactionsData: Transaction[] = [
  {
    type: 'Transfer Debt',
    amount: '₦30000.00',
    date: '25/04/25 - 9:55Am',
    recipient: 'Margaret',
    status: 'Complete',
    purpose: 'Rent',
    transferId: 'TR-123456',
    debtSource: 'Opay Loan',
    incentive: '500 Gbese Coins',
    note: 'Helped Margaret with rent.',
  },
  {
    type: 'Payment',
    amount: '₦50000.00',
    date: '24/04/25 - 7:55Am',
    recipient: 'Ejiro Joy',
    status: 'Pending',
  },
  {
    type: 'Request Money',
    amount: '₦15000.00',
    date: '22/04/25 - 8:55Am',
    recipient: 'Jamal',
    status: 'Failed',
  },
  {
    type: 'Transfer Debt',
    amount: '₦30000.00',
    date: '25/04/25 - 9:55Am',
    recipient: 'Margaret',
    status: 'Complete',
    purpose: 'Rent',
    transferId: 'TR-123456',
    debtSource: 'Opay Loan',
    incentive: '500 Gbese Coins',
    note: 'Helped Margaret with rent.',
  },
  {
    type: 'Payment',
    amount: '₦50000.00',
    date: '24/04/25 - 7:55Am',
    recipient: 'Ejiro Joy',
    status: 'Pending',
  },
  {
    type: 'Request Money',
    amount: '₦15000.00',
    date: '22/04/25 - 8:55Am',
    recipient: 'Jamal',
    status: 'Failed',
  },
  {
    type: 'Transfer Debt',
    amount: '₦30000.00',
    date: '25/04/25 - 9:55Am',
    recipient: 'Margaret',
    status: 'Complete',
    purpose: 'Rent',
    transferId: 'TR-123456',
    debtSource: 'Opay Loan',
    incentive: '500 Gbese Coins',
    note: 'Helped Margaret with rent.',
  },
  {
    type: 'Payment',
    amount: '₦50000.00',
    date: '24/04/25 - 7:55Am',
    recipient: 'Ejiro Joy',
    status: 'Pending',
  },
  {
    type: 'Request Money',
    amount: '₦15000.00',
    date: '22/04/25 - 8:55Am',
    recipient: 'Jamal',
    status: 'Failed',
  },
];

function TransactionsPage() {
  const [status, setStatus] = useState('');
  const [amount, setAmount] = useState('');
  const [search, setSearch] = useState('');
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [startDate, endDate] = dateRange;

  const handleReset = () => {
    setStatus('');
    setAmount('');
    setSearch('');
    setDateRange([null, null]);
    window.location.reload();
  };

  const getStatusClass = (status: string): string => {
    switch (status) {
      case 'Complete':
        return 'status-complete';
      case 'Pending':
        return 'status-pending';
      case 'Failed':
        return 'status-failed';
      default:
        return '';
    }
  };

  const handleViewDetails = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
    setShowModal(false);
  };

  const filteredTransactions = transactionsData.filter((item) => {
    const itemDateStr = item.date.split(' - ')[0];
    const [day, month, year] = itemDateStr.split('/');
    const fullYear = `20${year}`;
    const itemDate = new Date(`${fullYear}-${month}-${day}`);

    const isWithinDateRange =
      startDate && endDate ? itemDate >= startDate && itemDate <= endDate : true;

    const matchesSearch =
      search === '' || item.recipient.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === '' || item.status === status;
    const matchesAmount = amount === '' || item.amount.includes(amount);

    return isWithinDateRange && matchesSearch && matchesStatus && matchesAmount;
  });

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  return (
    <div className="page-wrapper">
      <div className={`transactions-page ${showModal ? 'blurred' : ''}`}>
        {/* Tabs */}
        <div className="tabs">
          <button className="tab-button active">All Transactions</button>
          <button className="tab-button">Debt Transfer</button>
          <button className="tab-button">Request Money</button>
        </div>

        {/* Filters - visible only on desktop */}
        <div className="desktop-only">
        <div className="filters ">
          <div className="search-wrapper">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, tags, status..."
              className="search-input"
            />
          </div>

          <div className="filter-row">
            <div className="filter-inputs">
              <div className="date-wrapper">
                <CalendarIcon className="calendar-icon" />
                <DatePicker
                  selectsRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update: [Date | null, Date | null]) => setDateRange(update)}
                  isClearable
                  placeholderText="Start date - End date"
                  className="date-input"
                />
              </div>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="select-dropdown"
              >
                <option value="">Status</option>
                <option value="Complete">Complete</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>

              <select
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="select-dropdown"
              >
                <option value="">Amount range</option>
                <option value="30000">₦30,000</option>
                <option value="15000">₦15,000</option>
                <option value="50000">₦50,000</option>
              </select>
            </div>

            <div className="reset-wrapper">
              <button onClick={handleReset} className="reset-button">
                Reset
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Table for desktop */}
        <div className="desktop-only">
        <table className="transaction-table ">
          <thead>
            <tr>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>Date/Time</th>
              <th>Recipient</th>
              <th>Status</th>
              <th className="action-cell">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((item, idx) => (
              <tr key={idx}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td>{item.recipient}</td>
                <td className={getStatusClass(item.status)}>{item.status}</td>
                <td>
                  <button className="view-button" onClick={() => handleViewDetails(item)}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <div className="mobile-view">
          <div className="mobile-transactions-container">

  <div className="mobile-header">
    <ArrowLeftIcon className="back-icon" />
    <h2 className="mobile-title">Transfer History</h2>
  </div>
    

    {/* Mobile Filters - Horizontal */}
<div className="mobile-filters-row">
  <div className="mobile-search-wrapper">
    <SearchIcon className="search-icon" />
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search"
      className="mobile-search-input"
    />
  </div>

  <select
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    className="mobile-select-dropdown"
  >
    <option value="">Status</option>
    <option value="Complete">Complete</option>
    <option value="Pending">Pending</option>
    <option value="Failed">Failed</option>
  </select>

  <select
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    className="mobile-select-dropdown"
  >
    <option value="">Amount</option>
    <option value="30000">₦30,000</option>
    <option value="15000">₦15,000</option>
    <option value="50000">₦50,000</option>
  </select>
</div>

   
 
  <div className="mobile-transactions">
    {filteredTransactions.map((item, index) => (
      <div className="mobile-transaction-card" key={index}>
       <div className="mobile-left-section">
  {item.status === 'Complete' ? (
    <MobileIconAccepted />
  ) : (
    item.status === 'Pending' ? (
      <MobileIconUpcoming />
    ) : null
  )}
</div>

        <div className="mobile-middle-section">
          <div className="mobile-recipient-row">
            <span className="mobile-recipient-name">Debt from {item.recipient}</span>
            <span className="mobile-amount">{item.amount}</span>
          </div>
          <div className="mobile-date-row">
            <span className="mobile-date">{item.date}</span>
            <div className="mobile-status-view">
              <span className={`mobile-status ${item.status.toLowerCase()}`}>{item.status}</span>
              <button onClick={() => handleViewDetails(item)} className="mobile-view-btn">View</button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
</div>


      {showModal && selectedTransaction && (
        <TransactionDetails onClose={closeModal} transaction={selectedTransaction} />
      )}
    </div>
  );
}

export default TransactionsPage;
