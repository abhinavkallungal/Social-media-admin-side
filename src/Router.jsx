import React, { useEffect, useState } from 'react'
import {
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import jwtDecode from 'jwt-decode';
import LoginPage from '../src/Pages/LoginPage/LoginPage'
import ViewUser from './Pages/UserManagement/ViewUserPage/ViewUserPage';
import ViewUserPage from './Pages/UserManagement/ViewUserPage/ViewUserPage';
import Banner from './Pages/BannerManagement/Banner';
import AddBannerPage from './Pages/BannerManagement/AddBannerPage';




function Router() {
    const history = useHistory()
    const location = useLocation()



    const [Token, setToken] = useState("");
    const [admin, setAdmin] = useState({});



    useEffect(() => {
        setToken(localStorage.getItem('token'))
        setAdmin(localStorage.getItem('user'))
        



        if (Token) {
            const decodedToken = jwtDecode(Token)
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
            console.log(decodedToken);
        }
        setToken(localStorage.getItem('token'));
    }, [location])



    const logout = () => {
        console.log('logout');
        localStorage.removeItem("token");
        setToken(null);
        history.push('/login')
    }

    return (
        <Switch>


            <Route exact path="/">
                {
                    Token ? <ViewUserPage/> : <Redirect to="/login" />
                }
            </Route>
            <Route exact path="/login">
                {
                    Token ?<Redirect to="/" /> : <LoginPage/> 
                }
            </Route>
            <Route exact path="/Banner">
                {
                    Token ? <Banner/>  : <Banner/> 
                }
            </Route>

            <Route exact path="/addBanner">
                {
                     Token ? <AddBannerPage/> : <Redirect to="/login" />
                }
            </Route>
            
            

            

        </Switch>
    )
}

export default Router
