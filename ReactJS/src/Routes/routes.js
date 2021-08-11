import React from 'react'
import Dashboard from '../Components/Dashboard/Dashboard'
import Emi from '../Components/Emical/Emi'
import Loanform from'../Components/Loanform/Loanform'
import Kycdoc from'../Components/kyc/kycdoc'
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/emi', name: 'Emi', component: Emi },
  { path: '/form', name: 'form', component: Loanform },
  { path: '/kyc', name: 'kyc', component: Kycdoc },
 
]
export default routes;
  