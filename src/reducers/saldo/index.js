export const viewSaldoReducer = (viewSaldoReducer = 0, action) => {
    if (action.type === 'VIEW_SALDO') {
        return action.payload;
    }
    return viewSaldoReducer;
};