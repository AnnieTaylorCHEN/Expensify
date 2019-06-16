import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
    404 page not found. Did you type something wrong? <Link to="/">Go back Home.</Link>
    </div>
)

export default NotFoundPage