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
       <form action="">
        <label htmlFor="currency">Currency</label>
        <select className='currencies' name="" id="">
         <option className='currency-options'>NGN</option>
         <option className='currency-options'>USD</option>
         <option className='currency-options'>EUR</option>
        </select>

       <label htmlFor="amount">Amount</label>
       <input className="amount" type="text" placeholder='0.00' />

        <label htmlFor="reason">Purpose/Reason</label>
       <input className="reason" type="text" placeholder='Dinner, rent, school fees, e.t.c' />

<div className="second-row">
 <label htmlFor="date">Due Date</label>
       <input className="due-date" type="text" placeholder='mm/dd/yy' />

        <label htmlFor="note">Notes(Optional)</label>
       <input className="reason" type="text" placeholder='Add any additional information' />
</div>
       
       </form>
      </div>
    </div>
  )
}
