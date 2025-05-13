
import Img from "../../../assets/images/icons/profile.svg"
import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/layout/Header/Header';
import Card from '../../../components/common/card/Card';
import { benefactorList } from '../../../services/marketplace';
import './Marketplace.css'
import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { benefactorListProp, } from '../../../types/helpers';
import { getInitials } from '../../../services/utils';
import CardList from '../../../components/common/card/CardList';
import Navbar from '../../../components/Navbar/Navbar';
import './BenefactorEmpty.css'


function Marketplace() {
  const [benefactors, setBenefactors] = useState<benefactorListProp[]>()
  const [type, setType] = useState<'list' | 'grid'>('grid')
  const [refresh, setRefresh] = useState(0)
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
  }, [token, logout, refresh])

  function setGrid() {
    setType('grid')
  }

  function setList() {
    setType('list')
  }
  function handleRefresh() {
    setRefresh(prev => prev + 1)
  }
  
  return (
    <div className="marketplace-container">
      <Sidebar />

      <div className="main-content">
        <Header />
        <Navbar list={benefactors} setList={setList} setGrid={setGrid} />
        <div className="marketplace-body">
          

          {/* {benefactors} */}
          {isLoading? 
              <div className="empty">
                    <img src={Img} alt="" />
                    <p className="titlee">
                        No debt Opportunities found
                    </p>
                    <p className="text">
                        There are currently no debt opportunities matching your criteria. <br /> Try adjusting your filters or check back later
                    </p>

                    <div className="buttons">
                        <button className="adjust-btn" onClick={handleRefresh}>
                            Adjust Filters
                        </button>
                        <button className="dashboard-btn" >
                            Browse all debts
                        </button>
                    </div>
                </div>:
          
            
                type === 'grid'?
                  <div className="card-grid">
                {benefactors?.map(item => <Card key={item._id} initials={getInitials(item.user.fullName)} name={item.user.fullName} rating={item.successRate} helped={item.helped} acceptance={item.responseTime} tags={['New user']}/>)}
                  </div>:
                  
                   benefactors?.map(item => <CardList key={item._id} initials={getInitials(item.user.fullName)} name={item.user.fullName} rating={item.successRate} helped={item.helped} acceptance={item.responseTime} />)
              }

          </div>

    </div>
      


    </div>
  );
}

export default Marketplace;
