
export const tokenReducer = (tokenReducer = {}, action) => {
    if (action.type === 'TOKEN_ACTION') {
        return action.payload;
    }
    return tokenReducer;
};
