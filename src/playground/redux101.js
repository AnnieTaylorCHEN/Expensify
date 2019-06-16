import {createStore} from 'redux'

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const set = ({count = 100} = {}) => ({
    type: 'SET',
    count
})

const reset = () => ({
    type: 'RESET'
})


//Reducer 


const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET' :
            return {
                count: 0
            }
        case 'SET' :
            return {
                count: action.count
            }
        default:
             return state
    }
}

const store = createStore(countReducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount())

store.dispatch(incrementCount())

store.dispatch(reset())

store.dispatch(decrementCount({decrementBy: 5}))

store.dispatch(set({count: 58}))

console.log(store.getState())

// Destrutoring Object Practise 

const book = {
    title: 'Atlas Shrugged',
    author: 'Ayn Rand', 
    publisher: {
        name: 'Random House',
        year: 1957
    }
}

const { title, author } = book
const { name : publishingHouse = "Penguin", year } = book.publisher

console.log(`I am reading ${title} by ${author}. It was published by ${publishingHouse} in ${year}.`)

//Destructoring Array Practice 

const product = ['Vegan Chocolate Chip Cookie', '10kr', '23kr', '30kr']

const [productName, sSizePrice='8kr', mSizePrice] = product

console.log(`I want to buy ${productName}. The M-size price is ${mSizePrice} per item.`)
console.log(`I want to buy ${productName}. The S-size price is ${sSizePrice} per item.`)