import React from 'react';
import Sunday from './Sunday';
import Thursday from './Thursday';
import Retreat from './Retreat';

const Sermon = () => {
    return (
        <div>
            <div className="sermon-page" id="sermon">
                <div className="header">SERMONS</div>
                <div className="caption">
                    The word of God is <strong>Stronger</strong> and <strong>powerful</strong> 
                    than any two edged sword.
                </div>
                <div className="services row container-fluid">
                    <div className="sundays col-md-3 card">
                        <Sunday />
                    </div>
                    <div className="thursdays col-md-3 card">
                        <Thursday />
                    </div>
                    <div className="retreats col-md-3 card">
                        <Retreat />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sermon;