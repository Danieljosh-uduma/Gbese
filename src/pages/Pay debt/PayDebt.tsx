import ActionButtons from "../../components/ActionButtons"
import SchedulePayment from "../../components/SchedulePayment"
import SelectPaymentMethod from "../../components/SelectPaymentMethod"

const PayDebt = () => {
 return (
   <div className="container" style={{padding: '20px',}}>
  <div className="header" style={{marginBottom: '16px',}}>
   <div className="debt-request-header">
    <h1>Pay Debt</h1>
    </div>
    </div>
    
    <hr style={{color: '#CFCFCF'}}/>


     <div className="debt">
      <h2 style={{ fontFamily: 'Poppins', fontSize: '2rem', fontWeight: '700', lineHeight: '120%', marginTop: '30px'}}>N45,000</h2>
      </div>
    

    
    <div className="pay-container" style={{background: '#AE9FE91A', padding: '24px', marginTop: '16px'}}>

   <div className="details-breakdown" style={{display: 'flex', justifyContent: 'space-between', gap: '80px' }}>
      <div className="details" style={{maxWidth: '345px', }}>
       <h3 style={{marginBottom: '10px', fontWeight: '700', fontSize: '20px',}}>Details</h3>
       <p>Type: <span>Personal Loan</span></p>
       <p>Due Date: <span className='due-date'>May 30 2025</span></p>
      
      </div>
      <div className="breakdown">
       <h3 style={{marginBottom: '10px', fontWeight: '700', fontSize: '20px',}}>Breakdown</h3>
       <p>Original Amount: <span>N40500</span></p>
       <p>Interest: <span>N4500 (10%)</span></p>
       <p>Total Debt = <span>N45000</span></p>
      </div>
     </div>

    
      <SelectPaymentMethod />
     

     <SchedulePayment />

    </div>


     <ActionButtons acceptText="Pay Debt"/>

    </div>
 )
}

export default PayDebt