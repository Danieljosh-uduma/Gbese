

import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/common/Card/Card';

import './Marketplace.css'



function Marketplace() {
  return (
    <div className="marketplace-container">
      <Sidebar />

      <div className="main-content">
        <Navbar
        coinCount={300} />

        <div className="marketplace-body">


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
