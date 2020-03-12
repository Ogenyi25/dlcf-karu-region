import React from 'react';



const Sunday = () => {

    return (
        <div className="sunday">
            <img className="card-img-top" src={require("../assets/images/logo.png")} alt="" />
            <div class="card-body">
                <h5 class="title">SUNDAY MESSAGES</h5>
                <p class="card-text">Devotional sunday worship service.</p>
                <button class="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                    See Messages
                </button>
            </div>

            {/** collapse section for sunday messages **/}
            <div class="collapse" id="collapseExample1">
                <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>
        </div>
    )
}

export default Sunday;