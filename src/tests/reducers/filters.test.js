import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('should set up default filter values', () => {
    const state = filterReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortby to amount', () => {
    const state=filterReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', ()=> {
    const currentState={
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type:'SORT_BY_DATE'}
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set textfilter', () => {
    const action = {
        type:'SET_TEXT_FILTER',
        text: 'test'
    }
    const state = filterReducer(undefined, action)
    expect(state.text).toBe('test')
})

test('should set start Date filter', () => {
    const startDate = moment()
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    const state = filterReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

test('should set end Date filter', () => {
    const endDate = moment()
    const action = {
        type:'SET_END_DATE',
        endDate
    }
    const state = filterReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})