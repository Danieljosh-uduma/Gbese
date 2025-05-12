    import React from 'react';
    import PromoBanner from '../../../assets/images/images/promo banner.png'
    import './PromoCard.css';

    const PromoCard: React.FC = () => {
    return (
        <div className="promo-card">
            <img src={PromoBanner} alt="promo banner" />
        </div>
    );
    };

    export default PromoCard;