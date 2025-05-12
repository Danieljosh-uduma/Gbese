

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/layout/Header/Header';
import Card from '../../components/common/card/Card';
import { benefactorList } from '../../services/marketplace';
import './Marketplace.css'
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { benefactorListProp, } from '../../types/helpers';
import { getInitials } from '../../services/utils';
import CardList from '../../components/common/card/CardList';
import Navbar from '../../components/Navbar/Navbar';


function Marketplace() {
  const [benefactors, setBenefactors] = useState<benefactorListProp[]>()
  const [type, setType] = useState<'list' | 'grid'>('grid')
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

  function setGrid() {
    setType('grid')
  }

  function setList() {
    setType('list')
  }

  function getCoinlvl(coin: number): string {
    let level = 'wooden';
    if (coin < 300) {
      level = 'Bronze'
    } else if ( coin < 600) {
      level = 'Silver'
    } else if (coin < 1000) {
      level = 'Gold'
    } else if (coin < 1400) {
      level = 'Platinum'
    } else if (coin < 2500) {
      level = 'Diamond'
    } else if (coin > 3500) {
      level = 'Legendary'
    }
    return level
  }
  
  return (
    <div className="marketplace-container">
      <Sidebar />

      <div className="main-content">
        <Header />
        <Navbar list={benefactors} setList={setList} setGrid={setGrid} />
        <div className="marketplace-body">
          

          {/* {benefactors} */}
          {type === 'grid'? 
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
            
          </div>: 
          !isLoading?
          benefactors?.map(item => <CardList key={item._id} initials={getInitials(item.user.fullName)} name={item.user.fullName} rating={item.successRate} helped={item.helped} acceptance={item.responseTime} coinLevel={getCoinlvl(600)} />):
          <div className="card-list-parent">
                        <CardList
                        initials=''
                        name=''
                        rating={0}
                        helped={0}
                        acceptance={0}
                        coinLevel=''/>
                        <CardList
                        initials=''
                        name=''
                        rating={0}
                        helped={0}
                        acceptance={0}
                        coinLevel=''/>
            </div>
          }
          

          </div>

    </div>
      


    </div>
  );
}

export default Marketplace;
