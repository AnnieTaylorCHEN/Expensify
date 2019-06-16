import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'this is new note'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'this is new note'}
    })
})

test('should set up expense action object with provided value', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000, 
        note: 'This is a rent in 1970.'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData, 
            id: expect.any(String)
        }
    })
})

test('Should set up add expense action object with default value', () => {
    const expenseData = {
        description: '',
        note:'',
        amount: 0, 
        createdAt: 0
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData, 
            id: expect.any(String)
        }
    })
})

