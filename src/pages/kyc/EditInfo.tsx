import './EditInfo.css'

function EditInfo () {
    return (

        <div className="profile-container">
            <div className="main-content">
            <header className="profile-header">
             <h2>My Profile</h2>
         </header>

            <div className="profile-body">
          <div className="left-section">
            <h3>Personal Information</h3>
            <form>
                <label>First Name </label>
              <input type="text"/>

              <label> Last Name</label>
              <input type="text"/>

              <label>Email</label>
              <input type="email"/>

              <label>Number</label>
              <input type="text"/>

              <label>BVN</label>
              <input type="text"/>
            </form>
          </div>

          <div className="right-section">
            <div className="account-settings">
              <h3>Account Settings</h3>
              <button className="btn">
                <img src="/src/assets/images/icons/change-pin.svg" alt="Lock Icon" /> <p className="r-text">Change PIN/Password</p> 
              </button>
              <div className="toggle-option">
                <img src="/src/assets/images/icons/biometrics.svg" alt="" />
                <span className='bio'>Biometrics Login</span>
                <label className="switch">
                  <input type="checkbox"  />
                  <span className="slider round"></span>
                </label>
              </div>
              <button className="btn">
                <img src="/src/assets/images/icons/setup.svg" alt="Shield Icon" />  <p className="r-text">Set-Up Two Factor Authentication</p>
              </button>
            </div>

            <div className="linked-accounts">
              <h3>Linked Accounts</h3>
              <button className="btn">
                <img src="/src/assets/images/icons/manage.svg" alt="Bank Icon" /> <p className="r-text">Manage Bank Accounts</p>
              </button>
              <button className="btn">
                <img src="/src/assets/images/icons/manage-cards.svg" alt="Card Icon" /> <p className="r-text">Manage Cards</p> 
              </button>
            </div>
          </div>
          
        </div>

        <div className="update-section">
          <button className="update-btn">Update</button>
        </div>
      </div>
        </div>
    )
}

export default EditInfo;