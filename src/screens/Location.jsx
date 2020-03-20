import React from "react";


const Location = () => {
    return (
        <div className="location-page" id="location">
            <div className="title">
                <img className="rotate" src={require("../assets/images/logo.png")} alt="" />
                Other DLCF Locations
            </div>
            <h6 className="system">Hover on card to see more details</h6>
            <h6 className="phone">Click on each card to see more details.
            Click outside the card to return it to default</h6>
            <div className="locations row container-fluid">
                <div className="corpers col-md-4">
                    <div className="card">
                        <div className="imgBx">
                            <img className="rotate" src={require("../assets/images/card.jpg")} alt="" />
                        </div>
                        <div className="details">
                            <h2>DLCF<br /><span>Corper's District <br /><h4>Victory Kiddies Academy</h4></span></h2>
                        </div>
                    </div>
                    <button type="button" className="btn btn-warning">View More</button>
                </div>
                <div className="wolex col-md-4">
                    <div className="card">
                        <div className="imgBx">
                            <img className="rotate" src={require("../assets/images/card.jpg")} alt="" />
                        </div>
                        <div className="details">
                            <h2>DLCF<br /><span>Wolex <br /><h4>Victory Kiddies Academy</h4></span></h2>
                        </div>
                    </div>
                    <button type="button" className="btn btn-warning">View More</button>
                </div>
                <div className="city-college col-md-4">
                    <div className="card">
                        <div className="imgBx">
                            <img className="rotate" src={require("../assets/images/card.jpg")} alt="" />
                        </div>
                        <div className="details">
                            <h2>DLCF<br /><span>City-College <br /><h4>Victory Kiddies Academy</h4></span></h2>
                        </div>
                    </div>

                    <button type="button" className="btn btn-warning">View More</button>

                </div>

            </div>
        </div>

    )
}



export default Location;