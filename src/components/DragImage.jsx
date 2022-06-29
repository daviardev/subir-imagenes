import React, { useState, useRef, useEffect } from "react";

import "../styles/componets/DragImage.scss";

const DragImage = ({ setMedia, setLoading }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(false);
    const [messageError, setMessageError] = useState("");

    const [image, setImage] = useState(null);
    const [classDrag, setClassDrag] = useState("drag__image");
    
    const refInputFile = useRef(null);
    const typesImages = ["image/png", "image/jpeg", "image/jpg"]

    const SelectImage = () => {
        refInputFile.current.click()
    }

    const isImageValid = (e) => {
        if (e && typesImages.includes(e.type)) {
            setError(false);
            return true;
        } else {
            setError(true);
            setMessageError("El tipo de archivo no es válido.")
            return false;
        }
    }

    const ShowImage = (file) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        fileReader.addEventListener("load", (e) => {
            setImage(e.target.result)
        })
        setFile(file)
        setMedia(file)
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

    const handleSave = () => {
		const valid = isImageValid(file)

		if (valid && file) {
			setLoading(true)
		} else {
			setError(true)
			setMessageError('Suba una imagen primero.')
		}
	}

    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 5000)
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

            <button className="drag__action" onClick={handleSave}>Guardar imagen</button>
            
        </div>
        
    )
}

export default DragImage;