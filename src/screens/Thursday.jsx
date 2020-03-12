import React from 'react';


const Thursday = () => {

    return (
        <div className="thursday-page">
            <div className="thursday">
                <img className="card-img-top" src={require("../assets/images/logo.png")} alt="" />
                <div className="card-body">
                    <h5 className="title">THURSDAY MESSAGES</h5>
                    <p className="card-text">Revival Evangelical Service and Special Teachings.</p>
                    <button className="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                        See Messages
                </button>
                </div>
            </div>
            {/** collapse section for thursday messages **/}
            <div className="collapse" id="collapseExample2">
                <div className="card card-body">
                    <audio className="song" controls src={require("../audios/incomplete.mp3")} alt="">Incomplete by Adia</audio>
                </div>
            </div>
        </div>
    )
}

export default Thursday;