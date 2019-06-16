import moment from 'moment'

export default  [{
    id: '1',
    description: 'book',
    note: '',
    amount: 19995,
    createdAt: 0
},  {
    id: '2',
    description: 'dress',
    note: '',
    amount: 2995,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'grocery',
    note: '',
    amount: 29995,
    createdAt: moment(0).add(4, 'days').valueOf()
}]