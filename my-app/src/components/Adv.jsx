import React from "react";

import icon from "../assets/img/icon.jpg"
import chirstmascake from "../assets/img/chirstmascake2.jpg"

const Adv = () => {

    return (
        <>
         {/* Start Adv Section  */}
        <section className="py-5 advs">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={icon} className="advimages" alt="icon" width="100%"/>
                    </div>

                    <div className="col-lg-6">
                        <img src={chirstmascake} className="advimages" alt="chirstmascake" width="100%"/>
                    </div>

                </div>
            </div>
        </section>
        {/* End Adv Section  */}
        </>
    )
};

export default Adv;