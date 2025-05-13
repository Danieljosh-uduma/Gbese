import './CardList.css';

type CardListProps = {
  initials: string;
  name: string;
  rating: number;
  helped: number;
  acceptance: number;
};

function CardList(props: CardListProps) {
  return (
    <div className="card-list">
      <div className="card-header-list">{props.initials}</div>

      <div className="card-main-list">
        <div className="card-info-list">
          <h2 className="card-name-list">{props.name}</h2>
          <div className="card-rating-list">
            <img src="/src/assets/images/icons/rating.svg" alt="Star" className="star-icon-list" />
            <span>{props.rating} Rating</span>
          </div>
        </div>

        <div className="card-stats-list">
          <div className="stat-item-list">
            <span className="stat-label-list">Helped</span>
            <span className="stat-value-list">{props.helped} people</span>
          </div>
          <div className="stat-item-list">
            <span className="stat-label-list">Acceptance</span>
            <span className="stat-value-list">{props.acceptance}%</span>
          </div>
          
        </div>

        <button className="request-button-list">Request help</button>
      </div>
    </div>
  );
}

export default CardList;