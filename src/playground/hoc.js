import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this info is : {props.info}</p>
    </div>
)

//admin warning msg

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info. Please don't share!</p>}
        <WrappedComponent {...props} />
        </div>
    )
}

// require authentication 

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? (<WrappedComponent {...props} />):(<p>Please log in to view the info</p>)}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated= {false} info="There are the details" />, document.getElementById('app'))