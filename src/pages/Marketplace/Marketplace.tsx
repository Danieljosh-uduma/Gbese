

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/layout/Header/Header';
import Card from '../../components/common/card/Card';
import { benefactorList } from '../../services/marketplace';
import './Marketplace.css'
import { useEffect, useState } from 'react';



function Marketplace() {
  const [benefactors, setBenefactors] = useState()
  // const [refresh, setRefresh] = useState(0)

  useEffect( () => {
    benefactorList().then(res => {
      setBenefactors(res)
    })
  }, [])

  
  return (
    <div className="marketplace-container">
      <Sidebar />

      <div className="main-content">
        <Header />

        <div className="marketplace-body">

          {benefactors}
          <div className="card-grid">
            <Card
              initials="NC"
              name="Ndive Chidera"
              rating={4.8}
              helped={111}
              acceptance={97}
              tags={["Fast Responder", "Top Helper"]}
            />
            <Card
              initials="TA"
              name="Tolutope Aina"
              rating={3.7}
              helped={23}
              acceptance={65}
              tags={["Reliable"]}
            />
            <Card
              initials="NO"
              name="Nelson Odoh"
              rating={4.5}
              helped={65}
              acceptance={79}
              tags={["Gbese Legend", "Top Helper"]}
            />
            <Card
              initials="UJ"
              name="Uduma Josh"
              rating={4.5}
              helped={65}
              acceptance={79}
              tags={["Reliable", "Top Helper"]}
            />
            <Card
              initials="MO"
              name="Mary Okafor"
              rating={4.5}
              helped={65}
              acceptance={79}
              tags={["Top Helper"]}
            />
            <Card
              initials="NJ"
              name="Nelso Odoh"
              rating={4.9}
              helped={175}
              acceptance={89}
              tags={["Fast Responder", "Top Helper"]}
            />
            <Card
              initials="CI"
              name="Chuka Ifenu"
              rating={4.9}
              helped={145}
              acceptance={99}
              tags={["Top Helper"]}
            />
            <Card
              initials="NJ"
              name="Nelso Odoh"
              rating={4.9}
              helped={175}
              acceptance={89}
              tags={["Fast Responder", "Top Helper"]}
            />
            <Card
              initials="NO"
              name="Nelso Odoh"
              rating={4.9}
              helped={175}
              acceptance={89}
              tags={["Fast Responder", "Top Helper"]}
            />
            <Card
              initials="NO"
              name="Nelso Odoh"
              rating={4.9}
              helped={175}
              acceptance={89}
              tags={["Fast Responder", "Top Helper"]}
            />
            
          </div>
        </div>
      </div>


    </div>
  );
}

export default Marketplace;
