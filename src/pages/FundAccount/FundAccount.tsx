import  { useState } from 'react';
import './FundAccount.css';
import Nav from './Nav';
import { Sidebar } from 'lucide-react';

function FundAccount() {
  const [selected, setSelected] = useState<string | null>(null);

  const fundingOptions: {
    id: string;
    title: string;
    description: React.ReactNode;
    fee: string;
    time: string;
  }[] = [
    {
      id: 'bank',
      title: 'Bank Transfer',
      description: (
        <>Transfer to a virtual bank account. <br /> Usually instant.</>
      ),
      fee: 'Free',
      time: 'Instant',
    },
    {
      id: 'card',
      title: 'Debit/Credit Card',
      description: 'Pay with your card',
      fee: '1.5%',
      time: '~ 3 minutes',
    },
    {
      id: 'ussd',
      title: 'USSD',
      description: (
        <>Pay via your bank's USSD code<br/>Usually instant.</>
      ),
      fee: 'N10',
      time: 'Instant',
    },
  ];

  function handleSelect(id: string) {
    setSelected(id);
  }

  return (

    <div className="container">
        <Sidebar/>
        <Nav
        coinCount={532}/>

        <div className="funding-container">

        
            <h2 className="funding-header">Select Funding Method</h2>
            <p className="funding-subtext">Choose how you want to add funds.</p>
            <div className="funding">
                <div className="funding-options">
                {fundingOptions.map((option) => (
                <div
                    key={option.id}
                    className={`funding-card ${selected === option.id ? 'selected' : ''}`}
                    onClick={() => handleSelect(option.id)}
                    >
                    <div className="card-icon">NC</div>
                    <div className="card-info">
                    <h3>{option.title}</h3>
                    <p className='card-title'>{option.description}</p>
                    <div className="card-meta">
                        <span className='card-fee'><p className="fee">Fee</p> <p className="feee">{option.fee}</p></span>
                        <span className='card-time'><p className="time">Estimated time</p> <p className="timee">{option.time}</p> </span>
                    </div>
                    </div>
                </div>
                 ))}

                 
            </div>

            <div className="button-group">
            <button className="btn-back">Back</button>
            <button className="btn-continue" disabled={!selected}>Continue</button>
            </div>
            
            </div>
        </div>


    </div>
    
    
  );
}

export default FundAccount;
