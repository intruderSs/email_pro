import React from "react";
import salesforce from '../images/salesforce-icon.png';

function Dash() {

    return (
        <>
            <nav class="navbar bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={salesforce} alt="Logo" width="50" height="30" class="d-inline-block align-text-top"/> 
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Dash;