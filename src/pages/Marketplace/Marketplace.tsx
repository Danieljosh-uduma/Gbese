

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/layout/Header/Header';
import Card from '../../components/common/card/Card';
import { benefactorList } from '../../services/marketplace';
import './Marketplace.css'
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { benefactorListProp, } from '../../types/helpers';
import { getInitials } from '../../services/utils';


function Marketplace() {
  const [benefactors, setBenefactors] = useState<benefactorListProp[]>()
  const [isLoading, setIsLoading] = useState(false)
  const { user, logout } = useAuth()
  const token = user?.token

  useEffect( () => {
    setIsLoading(true)
    benefactorList(token).then(res => {
      if (res.success) {
        setBenefactors(res.data)
        setIsLoading(false)
      } else if (res.status === 401) {
        logout()
      }
    }).catch(err => {
      console.log(err.message)
    })
  }, [token, logout])
  
  return (
    <div className="marketplace-container">
      <Sidebar />

      <div className="main-content">
        <Header />

        <div className="marketplace-body">

          {/* {benefactors} */}
          <div className="card-grid">
            
            {!isLoading?
            benefactors?.map(item => <Card key={item._id} initials={getInitials(item.user.fullName)} name={item.user.fullName} rating={item.successRate} helped={item.helped} acceptance={item.responseTime} tags={['New user']}/>)
              : <>
                <Card
              initials=""
              name=""
              rating={0}
              helped={0}
              acceptance={0}
              tags={["", ""]}
            />
            <Card
              initials=""
              name=""
              rating={0}
              helped={0}
              acceptance={0}
              tags={["", ""]}
            />
            <Card
              initials=""
              name=""
              rating={0}
              helped={0}
              acceptance={0}
              tags={["", ""]}
            />
              </>
          }

 
            
          </div>
        </div>
      </div>


    </div>
  );
}

export default Marketplace;
