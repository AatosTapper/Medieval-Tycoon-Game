import React from "react";
import { usePlayerContext } from "../../State/PlayerContextProvider";
import { useWorldContext } from "../../State/WorldContextProvider";
import { AcceptOffer } from "../../Logic/NewOffers";
import "../../CSS/OfferPage.css";
import "../../CSS/Index.css";

const OfferComponent = () => {
    const { playerState, setPlayerState } = usePlayerContext();
    const { worldState, setWorldState } = useWorldContext();

    const handleAcceptOffer = (index) => {
        AcceptOffer(worldState, setWorldState, playerState, setPlayerState, index);
    };

    return (
        <OfferDisplay playerMoney={playerState.money} onAccept={handleAcceptOffer} />
    );
}

const OfferDisplay = ({ playerMoney, onAccept }) => {
    const { worldState } = useWorldContext();

    return (
        <div className="Offer-Display-Full">
            <h1>Offers</h1>
            <ul>
                {worldState.currentOffers.map((offer, index) => (
                    <li key={index}>
                        {`${offer[0]} `} {`${offer[2]} `} for {`${offer[1]} `}
                        {playerMoney < offer[1] 
                        ? <button className="Button-Accept-Offer-No-Money Font-Medieval">Accept</button>
                        : <button className="Button-Accept-Offer Font-Medieval" onClick={() => onAccept(index)}>Accept</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
      
};

export default OfferComponent;

