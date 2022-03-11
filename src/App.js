import "./styles/App.scss";
import music from "./images/icon-music.svg";
import illustration from "./images/illustration-hero.svg";

function App() {
  return (
    <div className="card">
      <div className="card-img">
        <img src={illustration} alt="" />
      </div>
      <div className="card-container">
        <div className="card-info">
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div className="plan">
          <div className="left">
            <img src={music} alt="music" />
            <div>
              <p id="plan-title">Annual Plan</p>
              <p>$59.99/year</p>
            </div>
          </div>
          <button id="change">Change</button>
        </div>
        <button id="payment-btn">Proceed to Payment</button>
        <button id="cancel">Cancel order</button>
      </div>
    </div>
  );
}

export default App;
