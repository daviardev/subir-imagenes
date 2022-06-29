import React from "react";

const LoaderImage = ({ file, setFile, setLoading }) => {
    console.log(file)
    return (
        <div className="loader">
            <h3 className="loader__title">Subiendo imagen...</h3>

            <div className="loader__progress">
                <div className="loader__progress_bar">
                    
                </div>
            </div>
        </div>
    )
}

export default LoaderImage;