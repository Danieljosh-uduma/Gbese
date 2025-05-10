

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/layout/Header/Header';
import Card from '../../components/common/card/Card';
import { benefactorList } from '../../services/marketplace';
import './Marketplace.css'
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { benefactorListProp, } from '../../types/helpers';
import { useNavigate } from 'react-router';
import { getInitials } from '../../services/utils';



function Marketplace() {
  const [benefactors, setBenefactors] = useState<benefactorListProp[]>()
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuth()
  const token = user?.token
  const navigate = useNavigate()

  useEffect( () => {
    setIsLoading(true)
    benefactorList(token).then(res => {
      if (res.success) {
        setBenefactors(res.data)
        setIsLoading(false)
      } else if (res.status === 401) {
        navigate('/auth/login')
      }
    }).catch(err => {
      console.log(err.message)
    })
  }, [token, navigate])
  
  return (
    <div className="marketplace-container">
      <Sidebar />

      <div className="main-content">
        <Header />

        <div className="marketplace-body">

          {/* {benefactors} */}
          <div className="card-grid">
            
            {!isLoading?
            benefactors?.map(item => <Card key={item._id} initials={getInitials(item.user.fullName)} name={item.user.fullName} rating={item.successRate} helped={item.helped} acceptance={11} tags={['New user']}/>)
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
