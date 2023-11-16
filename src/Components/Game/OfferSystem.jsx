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
        <OfferDisplay onAccept={handleAcceptOffer} />
    );
}

const OfferDisplay = ({ onAccept }) => {
    const { worldState } = useWorldContext();

    return (
        <ul>
            {worldState.currentOffers.map((offer, index) => (
                <li key={index}>
                    {`${offer[0]} `} {`${offer[2]} `} for {`${offer[1]} `}
                    <button className="Button-Accept-Offer Font-Medieval" onClick={() => onAccept(index)}>Accept</button>
                </li>
            ))}
        </ul>
    );
};

export default OfferComponent;

