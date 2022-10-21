import React from "react";

function Preloader(){
    return (
        (
            <div className="progress amber darken-3">
                <div className="indeterminate red accent-4"></div>
            </div>
        )
    )
}

export {Preloader}