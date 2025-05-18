import { useState, useEffect } from 'react';
import {Contact }from '../../types/sendmoney';
import { PaymentMethod } from '../../types/sendmoney';
import '../../pages/Sendmoney/SendMoneyPage.css';
import '../../pages/Sendmoney/Mediaquery.css';
import { getBankList, sendMoneyInternal } from '../../services/debtTransfer';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router';


const allContacts = [
    { id: '1', name: 'Gladys', image: '/src/assets/images/images/recent users avatar/Send Money/Ellipse 1.png', phoneNumber: '07012345678' },
    { id: '2', name: 'Chuka', image: '/src/assets/images/images/recent users avatar/Send Money/Ellipse 2.png', phoneNumber: '07023456789' },
    { id: '3', name: 'Marylane', image: '/src/assets/images/images/recent users avatar/Send Money/Ellipse 3.png', phoneNumber: '07034567890' },
    { id: '4', name: 'Chukwuka', image: '/src/assets/images/images/recent users avatar/Send Money/Ellipse 4.png', phoneNumber: '07045678901' },
    { id: '5', name: 'Maria', image: '/src/assets/images/images/recent users avatar/Send Money/Ellipse 5.png', phoneNumber: '07056789012' },
    { id: '6', name: 'Promise', image: '/src/assets/images/images/recent users avatar/Send Money/Ellipse 6.png', phoneNumber: '07067890123' },
    { id: '7', name: 'Sarah', image: '/src/assets/images/images/recent users avatar/Send Money/Ellipse 7.png', phoneNumber: '07078901234' },
    { id: '8', name: 'John', image: '/src/assets/images/images/recent users avatar/Send Money/Ellipse 8.png', phoneNumber: '07089012345' },
    { id: '9', name: 'Martin', image: '/src/assets/images/images/recent users avatar/Send Money/Ellipse 9.png', phoneNumber: '07090123456' },
    { id: '10', name: 'Jude', image: '/src/assets/images/images/recent users avatar/Send Money/Ellipse 10.png', phoneNumber: '07001234567' },
    { id: '11', name: 'Loveth', image: '/src/assets/images/images/recent users avatar/Send Money/Ellipse 11.png', phoneNumber: '07112345678' },
];

export default function SendMoney() {
    // Form state
    const [viewMode, setViewMode] = useState<'internal' | 'external'>('internal');
    const [searchQuery, setSearchQuery] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [selectedBank, setSelectedBank] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('₦');
    const [note, setNote] = useState('');
    const { user, logout } = useAuth()

    // Transaction flow state
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    // Payment methods state
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
        { type: 'card', lastFour: '4567', selected: true },
        { type: 'bank', lastFour: '8901', selected: false }
    ]);

    const [showNewCardForm, setShowNewCardForm] = useState(false);
    const [showNewBankForm, setShowNewBankForm] = useState(false);

    // Contacts state
    const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
    

    // Filter contacts based on search query
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState({} as any)
    useEffect(() => {
            if (!searchQuery) {
            setFilteredContacts(allContacts);
        } else {
            const filtered = allContacts.filter(contact => 
                contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                contact.phoneNumber.includes(searchQuery)
            );
            setFilteredContacts(filtered);
        }
    }, [searchQuery, allContacts]);

    // Toggle view mode function
    const toggleViewMode = (mode: 'internal' | 'external') => {
        setViewMode(mode);
    };

    // Payment method selection
    const selectPaymentMethod = (type: 'card' | 'bank', lastFour: string) => {
    const updatedMethods = paymentMethods.map(method => ({
            ...method,
            selected: method.type === type && method.lastFour === lastFour
        }));
        setPaymentMethods(updatedMethods);
    };

    // Form submission handling
    const handleContinue = () => {
      setShowConfirmation(true);
    };

const handleConfirm = () => {
            console.log(data)

    sendMoneyInternal(user?.token, accountNumber, amount).then(res => {
        if (res.success) {
            setShowConfirmation(false);
            setShowSuccess(true);
            setData(res.data)
        } else if (res.status === 401) {
            logout()
        }
    })
    // 
};

const handleFinish = () => {
    setShowSuccess(false);
    resetForm();
};

const handleSendAnother = () => {
    setShowSuccess(false);
    resetForm();
};

const handleGoBack = () => {
    setShowConfirmation(false);
};

// Reset form function
const resetForm = () => {
    setAccountNumber('');
    setSelectedBank('');
    setAmount('');
    setNote('');
    setSearchQuery('');
};

// Calculate totals
const amountValue = parseFloat(amount) || 0;
const fee = paymentMethods.find(m => m.selected)?.type === 'bank' ? amountValue * 0.015 : 0;
const total = amountValue + fee;
const date = new Date(Date.now())
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

const navigate = useNavigate()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const [bank, setBank] = useState({} as any)

function handleClick(e: React.MouseEvent<HTMLSelectElement>) {
    e.stopPropagation();
    getBankList(user?.token).then(res => {
      if (res.success) {
        setBank(res.data)
      } else if (res.status === 401) {
        navigate('/auth/login')
      }
    })
  }

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
      setSelectedBank(e.target.value)
      getBankList(user?.token).then(res => {
        if (res.success) {
          setBank(res.data);
        } else if (res.status === 401) {
          navigate('/auth/login');
        }
      }).then(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setBank((prevBank: any[]) => 
          prevBank.filter((item: { name: string; }) => 
            item.name.toLowerCase().includes(selectedBank.toLowerCase())
        )
      );
      });
  
      
    }

return (
<div className="send-money-container">
{showConfirmation ? (
    <div className="confirmation-modal">
    <h2 className="modal-title">Review Transaction</h2>
    <p className="modal-subtitle">Please review your payment details</p>
    
    <div className="transaction-details">
        <div className="transaction-row">
        <span className="transaction-label">Account Number:</span>
        <span className="transaction-value">{accountNumber}</span>
        </div>
        <div className="transaction-row">
        <span className="transaction-label">Date:</span>
        <span className="transaction-value">{formattedDate}</span>
        </div>
        <div className="transaction-row">
        <span className="transaction-label">Amount:</span>
        <span className="transaction-value">{currency}{amountValue.toLocaleString()}</span>
        </div>
        <div className="transaction-row">
        <span className="transaction-label">Fee:</span>
        <span className="transaction-value">{currency}{fee.toLocaleString()}</span>
        </div>
        <div className="transaction-row total-row">
        <span>Total</span>
        <span>{currency}{total.toLocaleString()}</span>
        </div>
    </div>
    
    <button 
        onClick={handleConfirm}
        className="primary-button"
    >
        Confirm
    </button>
    
    <button 
        onClick={handleGoBack}
        className="secondary-button"
    >
        <span>←</span> Go Back
    </button>
    </div>
) : showSuccess ? (
    <div className="success-modal">
    <div className="success-icon">
        <span>✓</span>
    </div>
    
    <h2 className="success-title">Payment Successful!</h2>
    <p className="success-subtitle">Your payment transaction has completed</p>
    
    <div className="transaction-details">
        <div className="transaction-row">
        <span className="transaction-label">To:</span>
        <span className="transaction-value">{data.to}</span>
        </div>
        <div className="transaction-row">
        <span className="transaction-label">Date:</span>
        <span className="transaction-value">{data.date}</span>
        </div>
        <div className="transaction-row">
        <span className="transaction-label">Amount:</span>
        <span className="transaction-value">{currency}{data.amount}</span>
        </div>
        <div className="transaction-row">
        <span className="transaction-label">Reference:</span>
        <span className="transaction-value">{data.reference}</span>
        </div>
        <div className="transaction-row">
        <span className="transaction-label">Fee:</span>
        <span className="transaction-value">{data.fee}</span>
        </div>
        <div className="transaction-row total-row">
        <span>Total</span>
        <span>{data.total}</span>
        </div>
    </div>
    
    <button 
        onClick={handleSendAnother}
        className="primary-button send-another-button"
    >
        <span>↗</span> Send Another Money
    </button>
    
    <button 
        onClick={handleFinish}
        className="secondary-button"
    >
        Finish
    </button>
    </div>
) : (
    <div className="form-container">

{/* Toggle Buttons */}
<div className="toggle-container">
<label className="toggle-label">
    <input
    type="checkbox"
    className="toggle-input"
    checked={viewMode === 'internal'}
    onChange={() => toggleViewMode('internal')}
    />
    <span className={`toggle-button ${viewMode === 'internal' ? 'active' : 'inactive'}`}>
    <span className={`toggle-checkbox ${viewMode === 'internal' ? 'active' : 'inactive'}`}><img src="/src/assets/images/icons/Vector.png" alt='image'/></span>
    Internal
    </span>
</label>

<label className="toggle-label">
    <input
    type="checkbox"
    className="toggle-input"
    checked={viewMode === 'external'}
    onChange={() => toggleViewMode('external')}
    />
    <span className={`toggle-button ${viewMode === 'external' ? 'active' : 'inactive'}`}>
    <span className={`toggle-checkbox ${viewMode === 'external' ? 'active' : 'inactive'}`}><img src="/src/assets/images/icons/Vector.png" alt='image'/></span>
    External
    </span>
</label>
</div>
    
    {/* Search Input */}
<div className="search-container">
    <div className="search-input-wrapper">
        <div className="search-icon">
        <img src="/src/assets/images/images/recent users avatar/Send Money/search-normal.png" alt="" />
        </div>
        <input
        type="text"
        className="search-input"
        placeholder="Search by phone number"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
</div>

    
    {/* Recent Contacts */}
    <div className="contacts-container">
    <h2 className="contacts-title">Recent</h2>
    <div className="contacts-grid">
        <div className="contacts-list recent-slider">
        {filteredContacts.map((contact) => (
            <div key={contact.id} className="contact-item">
            <div className="contact-image">
                <img src={contact.image} alt={contact.name} />
            </div>
            <span className="contact-name">{contact.name}</span>
            </div>
        ))}
        </div>
    </div>
    </div>
    
    {/* Account Number Input */}
    <div className="input-container">
        <input
        type="text"
        className="form-input"
        placeholder="Account number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        />
    </div>
    
    {/* Bank Selection - Only for External */}
    {viewMode === 'external' && (
        <div className="input-container">
        <div className="select-wrapper">
                <select 
                title='banks'
                className="form-select option"
                value={selectedBank}
                onChange={handleChange}
                onClick={handleClick}
                >
                <option value="">Select Bank</option>
                {bank.map((item: {name: string}, idx: number) => (
                    <option value="bank-a" key={idx}>{item.name}</option>
                ))}
                
                </select>
                <div className="select-arrow"></div>
            </div>
        </div>
    )}
    
    {/* Currency, Amount and Note in a row */}
    <div className="form-row">
        <div className="form-group currency-group">
        <div className="input-label">
            <label>Currency</label>
        </div>
        <div className="select-wrapper">
            <select 
            title='currency'
            className="form-select"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            >
            <option value="₦">₦</option>
            
            </select>
            <div className="select-arrow"></div>
        </div>
        </div>
        
        <div className="form-group amount-group">
        <div className="input-label">
            <label>Amount</label>
        </div>
        <input
            type="text"
            className="form-input"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        </div>
        
    <div className="form-group note-group">
        <div className="input-label">
            <label>Note (Optional)</label>
        </div>
            <input
                type="text"
                className="form-input"
                placeholder="What's it for"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
        </div>
    </div>
    
            {/* Payment Method Tabs */}

        <div className="payment-section">
        <h2 className="payment-title">Payment Method</h2>
                    <div className="payment-options">
    <div 
        className={`payment-option ${paymentMethods.some(m => m.type === 'card' && m.selected) ? 'active' : ''}`}
        onClick={() => selectPaymentMethod('card', '4567')}>
        <div className="payment-option-icon">
            <span><img src="/src/assets/images/images/recent users avatar/Send Money/bank.png" alt="" /></span>
            </div>
            <div className="payment-option-info">
            <p>Debit Card ****4567</p>
            <p>No Fees</p>
        </div>
    </div>

        {/* Bank Payment Option */}
        <div 
            className={`payment-option ${paymentMethods.some(m => m.type === 'bank' && m.selected) ? 'active' : ''}`}
            onClick={() => selectPaymentMethod('bank', '8901')}>
                
                <div className="payment-option-icon">
                    <span><img src="/src/assets/images/images/recent users avatar/Send Money/card.png" alt="" /></span>
                </div>
                <div className="payment-option-info">
                    <p>Bank Account **** 8901</p>
                    <p>1.5% fees applies</p>
                </div>
        </div>
</div>

{/* Bank Panel that appears when bank is selected */}
{paymentMethods.some(m => m.type === 'bank' && m.selected) && showNewBankForm && (
    <div className="bank-panel active">
        <label>Bank Name</label>
        <input type="text" placeholder="Enter bank name" />
        <label>Account Number</label>
        <input type="text" placeholder="Enter account number" />
        <button 
        className="use-payment-button"
        onClick={() => {
            selectPaymentMethod('bank', '8901');
            setShowNewBankForm(false);
        }}
        >
        Use This Bank
        </button>
    </div>
    )}

    {/* Card Panel that appears when card is selected */}
    {paymentMethods.some(m => m.type === 'card' && m.selected) && showNewCardForm && (
    <div className="card-panel active">
        <label>Card Number</label>
        <input type="text" placeholder="Enter card number" />
        <label>Expiry Date</label>
        <input type="text" placeholder="MM/YY" />
        <label>CVV</label>
        <input type="text" placeholder="Enter CVV" />
        <button 
        className="use-payment-button"
        onClick={() => {
            selectPaymentMethod('card', '4567');
            setShowNewCardForm(false);
        }}
        >
        Use This Card
        </button>
    </div>
)}
    </div>
        {/* Continue Button */}
            <button 
                onClick={handleContinue}
                className="primary-button continue-button"
                disabled={!accountNumber || !amount || (viewMode === 'external' && !selectedBank)}
            >
                Continue
            </button>
            </div>
        )}
    </div>
);
}
