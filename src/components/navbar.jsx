import React, { Component } from "react";

const NavBar = ({totalCounters}) => {
    return(
        <nav className = "nabvar navbar-light bg-light text-center">
            <a className = "navbar-brand" href="#">
                Navbar {" "}
                <span className = "btn btn-pill btn-secondary">
                    { totalCounters }
                </span>
            </a>
        </nav>
    );
};

export default NavBar;