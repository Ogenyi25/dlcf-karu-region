import React from 'react';
import { Link } from 'react-router-dom';

const Event = () => {
    return (
        <div className="event-home">
            <ol className="breadcrumb">
				<li>
					<Link to='/about'><em className="fa fa-home"></em></Link>
				</li>
				<li className="active">Events Page</li>
			</ol>
            <div className="events-page" id="event">
                <div className="events container-fluid row">
                    <div className="title">UPCOMING EVENTS
                <h6 className="system">Hover on card to see more details</h6>
                        <h6 className="phone">Click on each card to see more details.<br />
                            Click outside the card to return it to default</h6>
                    </div>
                    <div className="card1 col-md-3">
                        <h3>Corper's SendForth</h3>
                        <p>A sendforth service for our outgoing corp member(s).<br />
                            A moment of togetherness, feasting and exhortation.
                            <p className="time"><i className="fa fa-clock-o fa-lg" aria-hidden="true"></i> 6PM. <span><i className="fa fa-calendar" aria-hidden="true"></i> 12th March</span></p>
                        </p>
                    </div>

                    <div className="card2 col-md-3">
                        <h3>National Easter Retreat</h3>
                        <p>This is a period of partaking in the resulting blessings from christ manifestion at calvary. <br /></p>
                        <h6 className="time"><span><i className="fa fa-calendar" aria-hidden="true"></i>12th - 15th April.</span></h6>
                    </div>

                    <div className="card3 col-md-3">
                        <h3>National Easter Retreat</h3>
                        <p>This is a period of partaking in the resulting blessings from christ manifestion at calvary. <br /></p>
                        <h6 className="time"> <span><i className="fa fa-calendar" aria-hidden="true"></i> 12th - 15th April.</span></h6>
                    </div>
                    <div className="footer">
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Event;