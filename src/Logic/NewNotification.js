export const AddNotification = (worldState, setWorldState, newNotification) => {
    const updatedNotifications = [...worldState.notification, newNotification];    
    setWorldState({ ...worldState, notification: updatedNotifications });
}