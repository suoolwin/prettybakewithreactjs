import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import chococake1 from "../assets/img/chococake4.jpg"
import chococake2 from "../assets/img/heartshape2.jpg"
import chococake3 from "../assets/img/chococake3.jpg"

const Intro = () => {
    return (
        <>
            {/* Start Intro Section */}
            <section className="intros mb-3" id="cakedesgins">

            <div className="container-fluid">

                {/* start title */}
                    <div className="texts">
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>     
                    </div>
                {/* end title */}

               
                <div className="row">
                    
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                        <img src={chococake1} alt="chococake1" width="100%" />
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                          <img src={chococake2} alt="chococake2" width="100%"/>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3"> 
                          <img src={chococake3} alt="chococake3" width="100%"/>
                    </div>
               </div>

           </div>
           
           
        </section>
        {/* End Intro Section  */}
        </>
    )
};

export default Intro;