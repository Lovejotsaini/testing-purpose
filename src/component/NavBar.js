import React from 'react'
import { Link, Route,withRouter } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Account from './Account';

const NavBar = (props) => {
    const { userLoggedIn, handleAuth } = props
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                {userLoggedIn ? (
                    <React.Fragment>
                        <li><Link to="/account">Account</Link></li>
                        
                        <li><Link onClick={()=>{
                            localStorage.removeItem('token')
                            alert('successfully logged in')
                            handleAuth()
                            props.history.push('/')
                        }}>Logout</Link></li>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </React.Fragment>
                )}
            </ul>



            <Route path="/" component={Home} exact={true} />
            <Route path="/register" component={Register} />
            <Route path="/account" component={Account}  />
            
            <Route path="/login" render={(props) => {
                return <Login
                    {...props}
                    handleAuth={handleAuth} />
            }} />

        </div>
    )
}
export default withRouter(NavBar)