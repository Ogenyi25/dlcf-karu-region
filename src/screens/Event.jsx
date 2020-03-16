import React from 'react';

const Event = () => {
    return (
        <div className="events-page" id="event">
            <div className="events container-fluid row">
                <div className="title">UPCOMING EVENTS</div>
                    <div class="card1 col-md-3">
                        <h3>Corper's SendForth</h3>
                        <p>A sendforth service for our outgoing corp member(s).<br />
                            A moment of togetherness, feasting and exhortation.
                            <h6 className="time"><i className="fa fa-clock-o fa-lg" aria-hidden="true"></i> 6PM. <span><i className="fa fa-calendar" aria-hidden="true"></i> 12th March</span></h6>     
                        </p>
                    </div>

                    <div class="card2 col-md-3">             
                            <h3>National Easter Retreat</h3>
                            <p>This is a period of partaking in the resulting blessings from christ manifestion at calvary. <br /></p>
                            <h6 className="time"><span><i className="fa fa-calendar" aria-hidden="true"></i>12th - 15th April.</span></h6>
                    </div>

                    <div class="card3 col-md-3">                           
                            <h3>National Easter Retreat</h3>
                            <p>This is a period of partaking in the resulting blessings from christ manifestion at calvary. <br /></p>
                            <h6 className="time"> <span><i className="fa fa-calendar" aria-hidden="true"></i> 12th - 15th April.</span></h6>
                            </div>
                    <div className="footer">
                    </div>
            </div>
        </div>
    )
}
                
                
export default Event;