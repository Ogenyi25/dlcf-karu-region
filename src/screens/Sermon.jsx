import React from 'react';

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
                            <button className="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                See Messages
                            </button>
                        </div>
                    </div>
                    {/** collapse section for sunday messages **/}
                    <div className="collapse" id="collapseExample1">
                        <div className="card card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>

                    {/** card section for thursday messages **/}
                    <div className="thursdays col-md-3 card">
                        <img className="card-img-top" src={require("../assets/images/thursday.jpg")} alt="" />
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
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>

                    {/** card section for retreat messages **/}
                    <div className="retreats col-md-3 card">
                        <img className="card-img-top" src={require("../assets/images/logo.png")} alt="" />
                        <div className="card-body">
                            <h5 className="title">RETREAT MESSAGES</h5>
                            <p className="card-text">Special Messages with healing, miracle and testimony.</p>
                            <button className="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                See Messages
                            </button>
                        </div>
                    </div>
                    {/** collapse section for retreat messages **/}
                    <div className="collapse" id="collapseExample3">
                        <div className="card card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sermon;