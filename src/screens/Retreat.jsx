import React from 'react';


const Retreat = () => {

    return (
        <div className="retreat">
            <img className="card-img-top" src={require("../assets/images/logo.png")} alt="" />
            <div class="card-body">
                <h5 class="title">RETREAT MESSAGES</h5>
                <p class="card-text">Special Messages with healing, miracle and testimony.</p>
                <button class="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                    See Messages
                </button>
            </div>
            {/** collapse section for retreat messages **/}
            <div class="collapse" id="collapseExample3">
                <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>
        </div>
    )
}

export default Retreat;