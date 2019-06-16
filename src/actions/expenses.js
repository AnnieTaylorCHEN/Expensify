import uuid4 from 'uuid/v4'

//ADD_EXPENSE
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid4(),
        description,
        note,
        amount, 
        createdAt
    }
})


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