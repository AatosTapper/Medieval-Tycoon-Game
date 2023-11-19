import React from "react";

import { useWorldContext } from "../../State/WorldContextProvider";

const backgroundStyle = {
  backgroundImage: "url('src/images/notificationWindow.png')",
  backgroundSize: "cover",
  
  backgroundRepeat: "no-repeat",
  imageRendering: "pixelated",
  
  
};

const dimensions = {
  width: "300px",
  height: "600px",
  
    
};

const text = {

    marginLeft : "35px",
    
   
}

export const NotificationComponent = () => {
  const { worldState, setWorldState } = useWorldContext();

  const Delete = (index) => {
    const updatedNotifications = [...worldState.notification];
    updatedNotifications.splice(index, 1);

    setWorldState({ ...worldState, notification: updatedNotifications });
  };

  return (
    <div style={{ ...dimensions, ...backgroundStyle }}>
      <div style={text}>
        
        <ul>
          {worldState.notification.map((notif, index) => (
            <li key={index}>
              {notif} 
              <button className="Button-Accept-Offer Font-Medieval" onClick={() => Delete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};