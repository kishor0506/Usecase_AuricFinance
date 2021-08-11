import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Landing from './Components/LandingPage/Landing'
import Login from './Components/Login/Login'
 import Emi from './Components/Emical/Emi'
import Sign from './Components/Login/sign'
import Dashboard from './Components/Dashboard/Dashboard'
import kycdoc from './Components/kyc/kycdoc'
import Loanform from './Components/Loanform/Loanform'

export default function route() {
    return (
        <Switch>


            
                {/* <Route path='/login' exact="true" component={Login}/>
               
                 <Route path='/Sign' exact="" name="Sign" component={Sign} />
                 <Route path='/Dashboard' exact="" name="Dashboard" component={Dashboard} />
                 <Route path='/Emi' exact="" name="Emi" component={Emi} />
                 <Route path='/kyc' exact="" name="kyc" component={kycdoc} />
                 <Route path='/Form' exact="" name="Form" component={Loanform} />
                 <Route path='/'  name="Home" component={Landing} /> */}
        </Switch>
    )
}
