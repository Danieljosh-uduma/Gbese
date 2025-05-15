import './RequestMoney.css'

export default function RequestMoney() {
  return (
    <div>
      <div className="recent-section">
       <h2 className="recent">Recent</h2>
       <div className="recent-profiles" style={{display: 'flex',  alignItems: 'center', gap: '24px', borderRadius: '20px', background: '#AE9FE940', padding: '24px', marginTop: '16px'}} >
      
        <div className="person">
         <img src="src\assets\images\images\Ellipse 863.png" alt="" style={{width: '78px', }}/>
         <p className="person-name">Gladys</p>
        </div>

         <div className="person">
         <img src="src\assets\images\images\Ellipse 864.png" alt="" style={{width: '78px', }}/>
         <p className="person-name">Chuka</p>
        </div>

         <div className="person">
         <img src="src\assets\images\images\Ellipse 865.png" alt="" style={{width: '78px', }}/>
         <p className="person-name">MaryJane</p>
        </div>

         <div className="person">
         <img src="src\assets\images\images\Ellipse 866.png" alt="" style={{width: '78px', }}/>
         <p className="person-name">Chukwuka</p>
        </div>

         <div className="person">
         <img src="src\assets\images\images\Ellipse 867.png" alt="" style={{width: '78px', }}/>
         <p className="person-name">Maria</p>
        </div>

         <div className="person">
         <img src="src\assets\images\images\Ellipse 868.png" alt="" style={{width: '78px', }}/>
         <p className="person-name">Promise</p>
        </div>

         <div className="person">
         <img src="src\assets\images\images\Ellipse 869.png" alt="" style={{width: '78px', }}/>
         <p className="person-name">Sarah</p>
        </div>

         <div className="person">
         <img src="src\assets\images\images\Ellipse 870.png" alt="" style={{width: '78px', }}/>
         <p className="person-name">John</p>
        </div>

         <div className="person">
         <img src="src\assets\images\images\Ellipse 871.png" alt="" style={{width: '78px', }}/>
         <p className="person-name">Martin</p>
        </div>

         <div className="person">
         <img src="src\assets\images\images\Ellipse 872.png" alt="" style={{width: '78px', }}/>
         <p className="person-name">Jude</p>
        </div>

         <div className="person">
         <img src="src\assets\images\images\Ellipse 872 (1).png" alt="" style={{width: '78px', }}/>
         <p className="person-name">Loveth</p>
        </div>

       </div>
      </div>

     <div className="request-money-form">
  <form>
    <div className="top-row">
      <div className="form-group">
        <label htmlFor="currency">Currency</label>
        <select className="currencies" id="currency">
          <option>NGN</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input className="amount" type="text" id="amount" placeholder="0.00" />
      </div>

      <div className="form-group">
        <label htmlFor="reason">Purpose/Reason</label>
        <input
          className="reason"
          type="text"
          id="reason"
          placeholder="Dinner, rent, school fees, e.t.c"
        />
      </div>
    </div>

    <div className="second-row">
      <div className="form-group">
        <label htmlFor="date">Due Date</label>
        <input className="request-date" type="date" id="date" placeholder="mm/dd/yy" />
      </div>

      <div className="form-group">
        <label htmlFor="note">Notes (Optional)</label>
        <input
          className="note"
          type="text"
          id="note"
          placeholder="Add any additional information"
        />
      </div>
    </div>

    <div className="priority-row">
      <div className="checkbox-options">
        <label>
          <input type="checkbox" name="priority" value="urgent" /> Urgent
        </label>
        <label>
          <input type="checkbox" name="priority" value="normal" /> Normal
        </label>
      </div>
    </div>
  </form>
</div>


      </div>
    
  )
}
