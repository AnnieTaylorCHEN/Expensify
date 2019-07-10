import uuid4 from 'uuid/v4'
import database from '../firebase/firebase'

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {})=> {
    return (dispath) => {
        const {
            description = '',
            note = '',
            amount = 0, 
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense).then((ref) => {
            dispath(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

//REMOVE_EXPENSE
export const removeExpense = (
    {
       id
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
})