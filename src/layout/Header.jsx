import React from "react";

function Header() {
    return (
        <nav className="amber darken-3">
            <div className="nav-wrapper">
                <a href="http://localhost:3000/" className="brand-logo">React Movies:</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">

                    <li><a href="http://localhost:3000/">GitRepo</a></li>
                </ul>
            </div>
        </nav>

    )
}


export {Header}