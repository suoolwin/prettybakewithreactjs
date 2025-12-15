import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BackToTop = () => {
    return (
        <>
            {/* Start Back to Top */}
            <div className="fixed-bottom">

                <a href="/" className="btn-backtotps"><FontAwesomeIcon icon="fa-solid fa-arrow-up" /></a>

            </div>
            {/* End Back to Top */}
        </>
    )
};

export default BackToTop;