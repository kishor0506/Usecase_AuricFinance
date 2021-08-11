import React from 'react'
import Sidebar from './Sidebar';
import MainContent from './MainContent';
export default function DefaultLayout() {
    return (
        <div>
            {/* <Sidebar/> */}
            <div className="container">
                <MainContent/>
            </div>
        </div>
    )
}
