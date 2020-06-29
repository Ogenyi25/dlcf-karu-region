import React from 'react';
import Navbar from '../../components/Navbar';

const Thursday = () => {
    return (
        <div>
            <Navbar />
            <div className="thursday">
                <h3 className="start">THURSDAY REVIVAL HOUR MESSAGES</h3>
                <div className="house row container-fluid">
                    <div className="sect col-md-2">
                        <h6 className="lead">This is just for testing. Page still in development.</h6>
                        <img className="card-img-top" src={require("../../assets/images/adia.jpg")} alt="" />
                        <div className="card-body">
                            Adia : Incomplete.
                        <audio controls className="audio" src={require("../../audios/incomplete.mp3")}></audio>
                        </div>
                    </div>

                    <div className="sect col-md-2">
                        <h6 className="lead">This is just for testing. Page still in development.</h6>
                        <img className="card-img-top" src={require("../../assets/images/adia.jpg")} alt="" />
                        <div className="card-body">
                            Adia : Incomplete.
                        <audio controls className="audio" src={require("../../audios/incomplete.mp3")}></audio>
                        </div>
                    </div>

                    <div className="sect col-md-2">
                        <h6 className="lead">This is just for testing. Page still in development.</h6>
                        <img className="card-img-top" src={require("../../assets/images/adia.jpg")} alt="" />
                        <div className="card-body">
                            Adia : Incomplete.
                        <audio controls className="audio" src={require("../../audios/incomplete.mp3")}></audio>
                        </div>
                    </div>

                    <div className="sect col-md-2">
                        <h6 className="lead">This is just for testing. Page still in development.</h6>
                        <img className="card-img-top" src={require("../../assets/images/adia.jpg")} alt="" />
                        <div className="card-body">
                            Adia : Incomplete.
                        <audio controls className="audio" src={require("../../audios/incomplete.mp3")}></audio>
                        </div>
                    </div>

                    <div className="sect col-md-2">
                        <h6 className="lead">This is just for testing. Page still in development.</h6>
                        <img className="card-img-top" src={require("../../assets/images/adia.jpg")} alt="" />
                        <div className="card-body">
                            Adia : Incomplete.
                        <audio controls className="audio" src={require("../../audios/incomplete.mp3")}></audio>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thursday;