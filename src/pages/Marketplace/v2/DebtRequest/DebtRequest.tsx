import './DebtRequest.css'
import Img from "../../../../assets/images/images/95bbcdc4b4e68e088b8c386820e798467065a71b.png"
import ActionButtons from '../../../../components/xtra/ActionButtons';
import StarImg from "../../../../assets/images/icons/star.png" 


const DebtRequest = () => {
 return(
  <div className="modal-overlay">
    <div className="container modal-content" style={{padding: '20px',}}>
  <div className="header" style={{marginBottom: '16px',}}>
   <div className="debt-request-header">
    <h1>Debt Request</h1>
    </div>
    </div>
    
    <hr style={{color: '#CFCFCF'}}/>


    <div className="profile-debt" style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', marginTop: '24px', marginBottom: '16px' }}>
     <div className="profile" style={{display: 'flex', alignContent: 'center', gap: '12px'}}>
      <div className="profile-pic" style={{width: '98.75px', height: '98.75px'}} >
       <img style={{border:'7.75px solid #E9E9E9', borderRadius: '50%'}} src={Img} alt="" />
      </div>
      <div className="profile-name">
       <div className="username">
        <h2 style={{marginBottom: '24px', fontWeight: '700', fontSize: '20px', lineHeight: '120%'}}>Adebayo Yemi</h2>
        <p style={{color: '#696969', fontWeight: '400', fontSize: '18px', lineHeight: '120%'}} >@adebayo</p>
        </div>
       <div className="user-rating"  style={{display: 'flex', alignContent: 'center', gap: '8px', marginTop: '8px'}}>
        <img src={StarImg} alt="" style={{width: '18px'}} />
        <p style={{color: '#696969', fontWeight: '400', fontSize: '18px', lineHeight: '120%'}} >4.5</p>
       </div>
      </div>
     </div>
     <div className="debt">
      <h2 style={{ fontFamily: 'Poppins', fontSize: '25px', fontWeight: '500', lineHeight: '120%'}}>N45,000</h2>
      </div>

    </div>

    <div className="debt-details" style={{background: '#AE9FE91A', padding: '24px',}}>
     <div className="details-breakdown" style={{display: 'flex', justifyContent: 'space-between', gap: '80px'}}>
      <div className="details" style={{maxWidth: '345px', }}>
       <h3 style={{marginBottom: '10px', fontWeight: '700', fontSize: '20px',}}>Details</h3>
       <p>Original Debt: <span>Personal Loan from Opay </span></p>
       <p>Interest Rate: <span>10%</span></p>
       <p>Due Date: <span className='due-date'>May 15 2025</span></p>
       <p>Comment(s):</p>
       <p><span>"I'm requesting to transfer this debt as I've had some unexpected expenses. I would greatly appreciate your help!"</span> </p>
      </div>
      <div className="breakdown">
       <h3 style={{marginBottom: '10px', fontWeight: '700', fontSize: '20px',}}>Breakdown</h3>
       <p>Original Amount: <span>N40500</span></p>
       <p>Interest: <span>N4500 (10%)</span></p>
       <p>Total Debt = <span>N45000</span></p>
      </div>
     </div>


     <div className="uploads">
      <h3 style={{marginTop: '16px', fontSize: '20px', fontWeight: '700px'}}>Uploads</h3>
     <div className="screenshots" style={{background: 'white', padding: '12px', borderRadius: '8px', display: 'flex', margin: '10px 0'}}>
      <div className="screenshot-left"></div>
      <div className="screenshot-name"><p>Screenshot_2326863_proof of debt 1</p></div>
      <div className="screenshot-options"></div>
     </div>
      
      <div className="screenshots" style={{background: 'white', padding: '12px', borderRadius: '8px', display: 'flex'}}>
      <div className="screenshot-left"></div>
      <div className="screenshot-name"><p>Reciept of loan_240608</p></div>
      <div className="screenshot-options"></div>
     </div>

    
      <p className="legal-btn" style={{border: '1px solid #002B2B', display: 'inline-block', marginTop: '24px', padding: '12px 20px', borderRadius: '8px', fontSize: '16px', fontWeight: '600'}}>Legal Agreement</p>
     </div>
    </div>

    <div className="incentives" style={{marginTop: '24px', background: '#AE9FE91A', padding: '24px', borderRadius: '8px'}}>
     <h3>Incentives</h3>
     <div className="returns-risks" style={{display: 'flex', justifyContent: 'space-between', marginTop: '16px'}}>
      <div className="returns">
       <p style={{color: '#696969'}}>5% Returns</p>
      </div>
      <div className="risks" style={{background: '#E9FFF0', borderRadius:'12px', padding: '6px 12px'}}>
       <p>Moderate risks</p>
      </div>
     </div>
    </div>

    <div className="decline-accept-btn">
     <ActionButtons />
    </div>
  
  </div>
  </div>
 );
}

export default DebtRequest