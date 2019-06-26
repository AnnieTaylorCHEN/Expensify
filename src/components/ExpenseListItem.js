import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import numeral from 'numeral'


export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h2>{description}</h2>
        </Link>
        <p>
        {numeral(amount / 100 ).format('$0, 0.00')}
        -
        {moment(createdAt).format('MMMM Do, YYYY')}
        </p>  
    </div>
)

export default connect()(ExpenseListItem)