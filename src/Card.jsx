import profilepic from './assets/small.jpeg';

function Card() {
    return (
        <div className="card">
            <img className="cardimage" src={profilepic} alt="Profile" />
            <h2 className="carde">ETI</h2>
            <p className="card-text">I steal food and eat it</p>
        </div>
    );
}

export default Card;