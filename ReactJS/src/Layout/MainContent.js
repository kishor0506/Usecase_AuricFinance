import React from 'react'
import {Route,Switch ,Redirect} from 'react-router-dom'
import routes from '../Routes/routes';
// import Route from '../Routes/RouteWrapper'
// import SideBar from './SideBar'
export default function MainContent() {
    return (
      <div className="container">
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
          <Redirect from="/" to="/dashboard" />
        </div>
    )
}
