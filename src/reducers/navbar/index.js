export const navbarClassReducer = (navbarClass = {}, action) => {
    if (action.type === 'NAVBAR_CLASS') {
        return action.payload;
    }
    return navbarClass;
};