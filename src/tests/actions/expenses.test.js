import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { 
    startAddExpense, 
    addExpense, 
    editExpense, 
    startEditExpense,
    removeExpense, 
    startRemoveExpense,
    setExpenses, 
    startSetExpenses } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])
const uid = 'thisismyuidfortesting'
const defaultAuthState = { auth: { uid }}

beforeEach((done) => {
    const expenseData = {}
    expenses.forEach(({ id, description, note, amount, createdAt}) => {
        expenseData[id] = { description, note, amount, createdAt}
    })
    database.ref(`users/${uid}/expenses`).set(expenseData).then(() => done())
})

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({id})).then(()=> {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
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

test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    const updates ={ amount: 21045 }
    store.dispatch(startEditExpense(id, updates)).then(()=> {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id, 
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount)
        done()
    })
})

test('should set up expense action object with provided value', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenses[2], 
            id: expect.any(String)
        }
    })
})

test('should add expense to database and store', (done)=> {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: 'Mouse',
        amount: 2000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=> {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('Should set up add expense action object with default value', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseDefault = {
        description: '',
        note:'',
        amount: 0, 
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(()=> {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault)
        done()
    })
})

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expeneses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})