import React from "react";
import { useUtilContext } from "../../State/UtilContextProvider";
import OfferComponent from "./OfferSystem";
import Inventory from "./Inventory";
import Shop from "./Shop";
import { UpgradeComponent } from "./Upgrade";
import "../../CSS/ViewSwitcher.css";
import { SoundSwitchView } from "../../Audio/playSound";

const RenderSwitch = (component) => {
    if (component === undefined) {
        return <p>Render Switch Input Was Undefined</p>
    }
    switch (component) {
        case "offers":
            return (
                <>
                <OfferComponent />
                </>
            );
        case "shop":
            return (
                <>
                <Shop />
                </>
            );
        case "inventory":
            return (
                <>
                <Inventory />
                </>
            );
        case "upgrades":
            return (
                <>
                <UpgradeComponent />
                </>
            );
        case "economy":
            return (
                <>
                <p>Economy TODO</p>
                </>
            );
        case "help":
            return (
                <>
                <p>Help TODO</p>
                </>
            );
        default:
            return <p>Render Switch Doesn't Have a Component With Key {component}</p>
    }
}

export const ViewSwitcher = () => {
    const { utilState, setUtilState } = useUtilContext();

    return (
        <div className="View-Switcher-Full">
            {RenderSwitch(utilState.currentUiFocus)}
        </div>
    );
}

export const ViewSelector = () => {
    const { utilState, setUtilState } = useUtilContext();

    const SetViewTo = (view) => {
        SoundSwitchView();
        setUtilState(oldState => ({
            ...oldState,
            currentUiFocus: view
        }));
    }

    return (
        <div className="View-Selector-Full">
            <h1>View Selector</h1>
            <div className="View-Selector-Buttons">
                <button onClick={() => SetViewTo("offers")} className="View-Selector-Button">Offers</button>
                <button onClick={() => SetViewTo("shop")} className="View-Selector-Button">Shop</button>
                <button onClick={() => SetViewTo("inventory")} className="View-Selector-Button">Inventory</button>
                <button onClick={() => SetViewTo("upgrades")} className="View-Selector-Button">Upgrades</button>
                <button onClick={() => SetViewTo("economy")} className="View-Selector-Button">Economy</button>
                <button onClick={() => SetViewTo("help")} className="View-Selector-Button">Help</button>
            </div>
        </div>
    )
}