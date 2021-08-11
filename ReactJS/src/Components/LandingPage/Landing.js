import React from 'react'
import LandingContent from '../../Layouts/LandingContent'
import LandingFooter from '../../Layouts/LandingFooter'
import LandingHeader from '../../Layouts/LandingHeader'

export default function Landing() {
    return (
        <>
            <LandingHeader/>
            <div style={{ marginTop: '30px' }}>

                <LandingContent />
            </div>
            <LandingFooter />
        </>
    )
}
