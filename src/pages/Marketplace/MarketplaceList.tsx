import { Sidebar } from 'lucide-react';
import CardList from '../../components/common/Card/CardList';
import Navbar from '../../components/Navbar/Navbar';
import './MarketplaceList.css'

function MarketplaceList () {
    return (
        <div className='marketplace-container'>
            <Sidebar/>

            

            <div className="main-content">
                <Navbar
                coinCount={250}/>

                <div className="marketplace-body">
                    <div className="card-list">
                        <CardList
                        initials='NJ'
                        name='Nnamani Jennifer'
                        rating={4.9}
                        helped={276}
                        acceptance={86}
                        coinLevel='Gold'/>
                        <CardList
                        initials='EP'
                        name='Ekhosuehi Promise'
                        rating={4.2}
                        helped={175}
                        acceptance={67}
                        coinLevel='Silver'/>
                        <CardList
                        initials='AM'
                        name='Amadi Mary'
                        rating={4.3}
                        helped={227}
                        acceptance={81}
                        coinLevel='Gold'/>
                        <CardList
                        initials='CI'
                        name='Chuka Ifenu'
                        rating={4.9}
                        helped={256}
                        acceptance={83}
                        coinLevel='Gold'/>
                        <CardList
                        initials='AM'
                        name='Amadi Mary'
                        rating={4.9}
                        helped={276}
                        acceptance={86}
                        coinLevel='Bronze'/>
                        <CardList
                        initials='NJ'
                        name='Uduma Josh'
                        rating={4.9}
                        helped={276}
                        acceptance={86}
                        coinLevel='Silver'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketplaceList;