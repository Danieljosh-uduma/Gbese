import './CardList.css';

type CardListProps = {
  initials: string;
  name: string;
  rating: number;
  helped: number;
  acceptance: number;
  coinLevel: string;
};

function CardList(props: CardListProps) {
  return (
    <div className="card">
      <div className="card-header">{props.initials}</div>

      <div className="card-main">
        <div className="card-info">
          <h2 className="card-name">{props.name}</h2>
          <div className="card-rating">
            <img src="/src/assets/images/icons/rating.svg" alt="Star" className="star-icon" />
            <span>{props.rating} Rating</span>
          </div>
        </div>

        <div className="card-stats">
          <div className="stat-item">
            <span className="stat-label">Helped</span>
            <span className="stat-value">{props.helped} people</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Acceptance</span>
            <span className="stat-value">{props.acceptance}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Coin Level</span>
            <span className="stat-value">{props.coinLevel}</span>
          </div>
        </div>

        <button className="request-button">Request help</button>
      </div>
    </div>
  );
}

export default CardList;