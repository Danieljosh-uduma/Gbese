import { useState, useEffect } from 'react';
import './TransactionPage.css';
import { CalendarIcon, SearchIcon, MobileIconAccepted, MobileIconUpcoming } from '../../components/icons/Icon';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TransactionDetails from './Modal/TransactionDetails';
import { MdError } from 'react-icons/md';
import { getTransactionHistory } from '../../services/debtTransfer';
import { useAuth } from '../../hooks/useAuth';

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



function TransactionsPage() {
  const [status, setStatus] = useState('');
  const [amount, setAmount] = useState('');
  const [search, setSearch] = useState('');
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [transactionsData, setTransactionData] = useState([] as any)

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
      case 'complete':
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
    const itemDateStr = item.createdAt.split(' - ')[0];
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
  const { user, logout } = useAuth()

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : '';
    getTransactionHistory(user?.token).then(res => {
      if (res.success) {
        setTransactionData(res.data)
      } else if (res.status === 401) {
        logout()
      }
    })
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
              title='status'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="select-dropdown"
              >
                <option value="">Status</option>
                <option value="complete">Complete</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>

              <select title='amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="select-dropdown"
              >
                <option value="">Amount range</option>
                <option value="3000">₦3000</option>
                <option value="1500">₦1500</option>
                <option value="5000">₦5000</option>
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
       <div className="desktop-only transaction-list">
  {/* Header row */}
  <div className="transaction-row transaction-header">
    <div className="transaction-cells">Transaction Type</div>
    <div className="transaction-cells">Amount</div>
    <div className="transaction-cells">Date/Time</div>
    <div className="transaction-cells">Recipient</div>
    <div className="transaction-cells">Status</div>
    <div className="transaction-cells action-cell">Action</div>
  </div>

  {/* Transaction rows */}
  {filteredTransactions.map((item, idx) => (
    <div className="transaction-row" key={idx}>
      <div className="transaction-cell">{item.type}</div>
      <div className="transaction-cell">{item.amount}</div>
      <div className="transaction-cell">{item.createdAt}</div>
      <div className="transaction-cell">{item.recipient}</div>
      <div className={`transaction-cell ${getStatusClass(item.status)}`}>{item.status}</div>
      <div className="transaction-cell action-cell">
        <button className="view-button" onClick={() => handleViewDetails(item)}>
          View Details
        </button>
      </div>
    </div>
  ))}
</div>

        <div className="mobile-view">
          <div className="mobile-transactions-container">

  {/* <div className="mobile-header">
    <ArrowLeftIcon className="back-icon" />
    <h2 className="mobile-title">Transfer History</h2>
  </div> */}
    

    {/* Mobile Filters - Horizontal */}
{/* <div className="mobile-filters-row">
  <div className="mobile-search-wrapper">
    <SearchIcon className="mobile-search-icon" />
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search"
      className="mobile-search-input"
    />
  </div>

  <select title='status'
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    className="mobile-select-dropdown"
  >
    <option value="">Status</option>
    <option value="Complete">Complete</option>
    <option value="Pending">Pending</option>
    <option value="Failed">Failed</option>
  </select>

  <select title='amount'
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    className="mobile-select-dropdown"
  >
    <option value="">Amount</option>
    <option value="30000">₦30,000</option>
    <option value="15000">₦15,000</option>
    <option value="50000">₦50,000</option>
  </select>
</div> */}

   
 
  <div className="mobile-transactions">
    {filteredTransactions.map((item, index) => (
   <div className="mobile-transaction-card" key={index}>
  <div className="mobile-icon-section">
    {item.status === "Complete" ? (
      <MobileIconAccepted />
    ) : item.status === "Pending" ? (
      <MobileIconUpcoming />
    ) : item.status === "Failed" ? (
      <MdError color="red" size={40} />
    ) : null}
  </div>

  <div className="mobile-info-section">
    <div className="mobile-description">
      <div className="mobile-title">Debt from {item.recipient}</div>
      <div className="mobile-date">{item.date}</div>
    </div>

    <div className="mobile-right-section">
      <div className="mobile-amount">{item.amount}</div>
      <div className="mobile-bottom-row">
        <div className={`mobile-status ${item.status.toLowerCase()}`}>{item.status}</div>
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
