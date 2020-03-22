import React from 'react';
import { Link } from 'react-router-dom';
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
                    {/** card section for sunday messages **/}
                    <div className="sundays col-md-3 card">
                        <img className="card-img-top" src={require("../assets/images/sunday.jpg")} alt="" />
                        <div className="card-body">
                            <h5 className="title">SUNDAY MESSAGES</h5>
                            <p className="card-text">Devotional sunday worship service.</p>
                            <Link to= '/sunday'><button className="btn" type="button">See Messages</button></Link>
                        </div>
                    </div>
                    {/** card section for thursday messages **/}
                    <div className="thursdays col-md-3 card">
                        <img className="card-img-top" src={require("../assets/images/thursday.jpg")} alt="" />
                        <div className="card-body">
                            <h5 className="title">THURSDAY MESSAGES</h5>
                            <p className="card-text">Revival Evangelical Service and Special Teachings.</p>
                            <Link to= '/thursday'><button className="btn" type="button">See Messages</button></Link>
                        </div>
                    </div>
                    {/** card section for retreat messages **/}
                    <div className="retreats col-md-3 card">
                        <img className="card-img-top" src={require("../assets/images/logo.png")} alt="" />
                        <div className="card-body">
                            <h5 className="title">RETREAT MESSAGES</h5>
                            <p className="card-text">Special Messages with healing, miracle and testimony.</p>
                            <Link to= '/retreat'><button className="btn" type="button">See Messages</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sermon;