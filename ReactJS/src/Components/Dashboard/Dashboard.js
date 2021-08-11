import React from 'react'
import DashHeader from '../../Layouts/DashHeader';
import Landing from '../LandingPage/Landing';
import './Dashboard.css';
import gold from "F:/Auric Finance/auric/src/assets/img/dash.jpg";
export default function Dashboard() {
    return (
        <div>
            <DashHeader/>
            <div className="imgBox">
            {<img src={gold} alt=" " /> }
            </div>

           {/* <Landing/> */}
        </div>
    )
}
