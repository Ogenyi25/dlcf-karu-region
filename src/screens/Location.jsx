import React from "react";





const Location = () => {
    return (
        <div className="location-page" id="location">
            <div className="title">
                <img className="rotate" src={require("../assets/images/logo.png")} alt="" />
                DLCF Locations</div>
            <div className="locations row container-fluid">
                <div className="corpers col-md-4">
                    <div class="card">
                        <div class="imgBx">
                            <img className="rotate" src={require("../assets/images/card.jpg")} alt="" />
                        </div>
                        <div class="details">
                            <h2>DLCF<br /><span>Corper's District <br /><h4>Victory Kiddies Academy</h4></span></h2>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success">View More</button>
                </div>
                <div className="wolex col-md-4">
                    <div class="card">
                        <div class="imgBx">
                            <img className="rotate" src={require("../assets/images/card.jpg")} alt="" />
                        </div>
                        <div class="details">
                            <h2>DLCF<br /><span>Wolex <br /><h4>Victory Kiddies Academy</h4></span></h2>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success">View More</button>
                </div>
                <div className="city-college col-md-4">
                    <div class="card">
                        <div class="imgBx">
                            <img className="rotate" src={require("../assets/images/card.jpg")} alt="" />
                        </div>
                        <div class="details">
                            <h2>DLCF<br /><span>City-College <br /><h4>Victory Kiddies Academy</h4></span></h2>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success">View More</button>
                </div>

            </div>
        </div>

    )
}



export default Location;