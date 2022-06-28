import React, { useState } from "react";

import "../styles/componets/DragImage.scss";

const DragImage = () => {
    const [error, setError] = useState(false);
    const [messageError, setMessageError] = useState("");

    return (
        <div className="drag">
            <h2 className="drag__title">Subir imagen</h2>

            <div className="drag__info">La imagen puede ser .PNG o .JPG...</div>

            { error && <div className="drag__mesagge"> { messageError } </div> }

            <input type="file" name="file" />

            <div className="drag__image">
                <img className="drag__image_preview" />
                <span className="drag__image_message">
                    Clic o arrastra para colocar una imagen
                </span>
            </div>

            <button className="drag__action">Guardar imagen</button>
            
        </div>
        
    )
}

export default DragImage;