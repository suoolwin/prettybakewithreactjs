import React from "react";

import client1 from "../assets/img/client1.png"
import client2 from "../assets/img/client2.png"
import client3 from "../assets/img/client3.png"

const Clients = () => {
    return (
        <>
            {/* Start Client Section  */}
        <section className="p-3">
            <div className="container-fluid">
                 {/* start title  */} 
                 <div className="text-center mb-3">
                    <div className="col">
                        <h3 className="titles text-uppercase fw-bold">featured in:</h3>
                    </div>
                </div>
                {/* end title  */}

                <div className="row">
                    <div className="col-md-12">
                        <ul className="clientlists">
                           <li className="me-3"><img src={client1} alt="client1"/></li> 
                           <li className="me-3"><img src={client2} alt="client2" width="300"/></li> 
                           <li className="me-3"><img src={client3} alt="client3"/></li> 
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        {/* End Client Section  */}
        </>
    )
};

export default Clients;