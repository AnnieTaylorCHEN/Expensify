import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux"
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <div>
        <header>
            <h1>Expensify</h1>
        </header>
        <NavLink to="/" activeClassName="is-active" exact >Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <button onClick={startLogout} >Logout</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)