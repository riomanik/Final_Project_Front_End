import { viewSaldoAction } from "../../../../actions/saldo/index"

describe('actions', () => {
    it('should create an action for View saldo ', () => {
        const payload = 'viewSaldo'
        const expectedAction = {
            type: 'VIEW_SALDO',
            payload: payload
        }
        expect(viewSaldoAction(payload)).toEqual(expectedAction)
    })
});