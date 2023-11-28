import { GetItemById } from "./Item";
import { UpdateEconomy } from "./Economy";
import Transaction from "./Transaction";
import { AddNotification } from "./NewNotification";

export const Buy = (worldState,setWorldState,playerState,setPlayerState) => {
   for (let i = 0 ; i < worldState.currentCustomers.length; i++)
   {
    
        const preferenceModifier = 1.5;
        const buyingChance = 500;  
        const amountCoefficient = 10;

        const randomIndex = Math.floor(Math.random() * worldState.sellingItems.length);
        const randomNumber = Math.floor(Math.random() * buyingChance);
        let chance = 100;
        if (worldState.currentCustomers[i][2] == GetItemById(worldState.sellingItems[randomIndex][0]).name)
        {
            chance = chance * preferenceModifier;
        }
        
        //main 
        if (randomNumber <= chance)
        {
            console.log("acheté");
            let liste = Array.from({ length: 10 }, () => Math.floor(Math.random() * amountCoefficient) + 1);
            liste.sort((a, b) => a - b);
            let amount = liste[worldState.currentCustomers[i][1] - 1];
            console.log(amount + " " + worldState.sellingItems[randomIndex][2]);
            if (amount > worldState.sellingItems[randomIndex][2]) 
            {
                console.log("veut acheter trop ! ");
                amount = worldState.sellingItems[randomIndex][2];
                SellingItemOutShop(playerState, setPlayerState,worldState,setWorldState,randomIndex,amount);
            }
            else { SellingItemOutShop(playerState, setPlayerState,worldState,setWorldState,randomIndex,amount); }
        }
        else { console.log("pas acheté"); }        
   }
}

export const SellingItemOutShop = (playerState, setPlayerState,worldState,setWorldState, itemPosition, amount) => {
    const newList = [...worldState.sellingItems];
    newList[itemPosition][2] -= amount;
    
    Transaction(setPlayerState,amount * worldState.itemValues[worldState.sellingItems[itemPosition][0]]);
    AddNotification(setWorldState, 
                    "you sold : "
                    + amount + " " 
                    + GetItemById(worldState.sellingItems[itemPosition][0]).name 
                    + "  for : "+amount * worldState.itemValues[worldState.sellingItems[itemPosition][0]]);
    
    setWorldState((prevState) => ({
        ...prevState,
        sellingItems: newList,
    }));
};

export const openTheShop = (setWorldState) => {
  setWorldState((prevState) => ({
    ...prevState,
    openShop: true,
  }));
};

export const closeTheShop = (setWorldState) => {
  setWorldState((prevState) => ({
    ...prevState,
    openShop: false,
  }));
};


