import React, { useState, useRef, useEffect } from "react";

import "../styles/componets/DragImage.scss";

const DragImage = () => {
    const [error, setError] = useState(false);
    const [messageError, setMessageError] = useState("");
    const [classDrag, setClassDrag] = useState("drag__image");
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    
    const typesImages = ["image/png", "image/jpeg", "image/jpg"]

    const refInputFile = useRef(null);

    const SelectImage = () => {
        refInputFile.current.click()
    }

    const isImageValid = (e) => {
        if (file && typesImages.includes(file.type)) {
            setError(false);

            return true;
        } else {
            setError(true);
            setMessageError("El tipo de archivo no es válido. \nRecuerde que solo se pueden subir imágenes .")
        }
    }

    const ShowImage = (e) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(e)

        fileReader.addEventListener("load", (e) => {
            setImage(e.target.result)
        })
    }

    const AddImage = (e) => {
        e.preventDefault()
        refInputFile.current.files = e.dataTransfer.files
        const file = refInputFile.current.files[0]

        ShowImage(file)
    }

    const UploadImage = (e) => {
        const files = e.target.files
        const file = files[0]

        const valid = isImageValid(file)

        if (valid) {
            ShowImage(file);
        } else {
            setError(true);
            setMessageError("El tipo de archivo no es válido.")
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 3000)
    }, [error])

    return (
        <div className="drag">
            <h2 className="drag__title">Subir imagen</h2>

            <div className="drag__info">La imagen debe ser .PNG o .JPG...</div>

            { error && <div className="drag__mesagge"> { messageError } </div> }

            <input type="file" name="file" ref={refInputFile} onChange={UploadImage} />

            <div className={classDrag} onDragOver={(e) => {
                e.preventDefault()
                setClassDrag("drag__image active")
            }}

            onDragLeave={(e) => {
                e.preventDefault()
                setClassDrag("drag__image")
            }}
            onClick={SelectImage}
            onDrop={AddImage}
            >

                <img src={image} className="drag__image_preview" />
                <span className="drag__image_message">
                    Haz clic o arrastra para colocar una imagen
                </span>
            </div>

            <button className="drag__action">Guardar imagen</button>
            
        </div>
        
    )
}

export default DragImage;