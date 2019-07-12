import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux"
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <div>
        <header>
            <h1>Expensify</h1>
            <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <button onClick={startLogout} >Logout</button>
        </header>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)