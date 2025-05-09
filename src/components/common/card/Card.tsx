
import './Card.css'




type CardProps = {
    initials: string;
    name: string;
    rating: number;
    helped: number;
    acceptance: number;
    tags: string[];
  }

function Card (props: CardProps) {

    return(
        <div className='card'>
            <div className="initials">{props.initials}</div>
            <div className="name">{props.name}</div>
            <div className="rating">
                <img src="/src/assets/images/icons/rating.svg" alt="" />
                <span>{props.rating} Rating</span>
            </div>

            <div className="stats">
                <div className='stat-box'>
                    <p className="stat-label">Helped</p>
                    <p className="stat-number">{props.helped}</p>
                </div>
                <div className='stat-box'>
                <p className="stat-label">Acceptance</p>
                <p className="stat-number">{props.acceptance}%</p>
                </div>
            </div>
            
            <div className="tags">
                {props.tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
                ))}
            </div>
            <button className="button">Request Help</button>
        </div>
    )
};

export default Card;