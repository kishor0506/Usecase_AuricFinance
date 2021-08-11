import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './RouteWrapper'
import Login from '../Components/Login/Login'
import DefaultLayout from '../Layout/DefaultLayout'
import Landing from '../Components/LandingPage/Landing';
import Signup from '../Components/Login/sign';
export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path='/home' exact="true" component={Landing}/>
                
                <Route path='/login' exact="true" component={Login}/>
                <Route path='/Signup' exact="true" component={Signup}/>
                {/* <Route path='/login' exact="true" component={Login}/>
                <Route path='/login' exact="true" component={Login}/>
                 */}
                <Route path='/' name="Home" component={DefaultLayout} isPrivate/>
            </Switch>
            {/* <Switch>
                <Route path="/login" exact="true" render={(props) => <Signin {...props} />}/>
                <Route path="/register" render={(props) => <Signup {...props} />}/>
                <Route path="/home" render={(props) => <DefaultLayout {...props} />} isPrivate/>
                <Route component={Signin}/>
            </Switch> */}
        </div>
    )
}
