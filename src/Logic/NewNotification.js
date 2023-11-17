export const AddNotification = (setWorldState, newNotification) => {
    setWorldState(oldState => {
        const updatedNotifications = [...oldState.notification, newNotification];   
        return {
        ...oldState, 
        notification: updatedNotifications 
    }});
}