import './Sidebar.css'

const Sidebar = () => {
 return (
  <div className="sideabar-container" style={{width: '289px', boxShadow: '0px 4px 12px #10182814', border: '1px solid white', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: '30px', }}>
 <div className="sidebar-nav" style={{margin: '24px 16px', display: 'flex', gap: '56px', flexDirection: 'column'}}>
   <div className="sidebar-logo" style={{margin: '0 auto',width: '211px',}}>
        <img src="src/assets/images/icons/logo (1).png" alt="Logo" style={{}}/>
  </div>

  <div className="sidebar-navlinks" >
   <div className="link">
    <img src="src\assets\images\icons\receipt-text.png" alt="" />
    <p className="link-text">Dashboard</p>
   </div>

   <div className="link">
    <img src="src\assets\images\icons\receipt-text.png" alt="" />
    <p className="link-text">Debt Transfer</p>
   </div>
   <div className="link">
    <img src="src\assets\images\icons\receipt-text.png" alt="" />
    <p className="link-text">Request</p>
   </div>
   <div className="link">
    <img src="src\assets\images\icons\receipt-text.png" alt="" />
    <p className="link-text">Transaction History</p>
   </div>

   <div className="link">
    <img src="src\assets\images\icons\receipt-text.png" alt="" />
    <p className="link-text">Market Place</p>
   </div>
   <div className="link">
    <img src="src\assets\images\icons\receipt-text.png" alt="" />
    <p className="link-text">Profile</p>
   </div>
  </div>
  
  
  </div> 

  <div className="sidebar-utility">
   <div className="switch-accounts"  style={{margin: '0 auto',width: '203px',}}>
    <p>Switch Accounts</p>
    {/* toogle switch here */}
   </div>

    <div className="link">
    <img src="src\assets\images\icons\receipt-text.png" alt="" />
    <p className="link-text">Help & Support</p>
   </div>
    <div className="link">
    <img src="src\assets\images\icons\receipt-text.png" alt="" />
    <p className="link-text">Settings</p>
   </div>
  </div>
 
  </div>
 )
}

export default Sidebar