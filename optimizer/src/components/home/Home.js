import React from 'react';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faHotel } from '@fortawesome/free-solid-svg-icons'

const  Home= () => {
    return ( 
        <main>
            <section className="topContent">
                <div>
                    <h1>Analyze your BnB Listings<br/>with pinpoint geographic analytics</h1>
                </div>
                <div className="startButton">
                    Start Today
                </div>
            </section>
            <section className="bottomContent">
                <div className="roi">
                    Optimize ROI%<br/>
                    <FontAwesomeIcon icon={faDollarSign} className="icon" />
                </div>
                <div className="occuancy">
                    Increase Occupancy<br/>
                    <FontAwesomeIcon icon={faHotel} className="icon" />
                </div>
            </section>
        </main>

     );
}
 
export default Home;