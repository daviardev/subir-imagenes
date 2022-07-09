import React, { useState, useRef, useEffect } from "react"; // Uso de hooks para mostrar imagen cargada, mostrar mensaje al guardar sin haber subido y para poder subir imagen al hacer clic.

import { dbStorage } from "../services/db"; // Llamar archivo de base de datos lo que se guarda en storage.

import { ref, uploadBytes } from "firebase/storage"; // Hacer referencia al archivo subido y para mostrar un mensaje que ya fue subida la imagen.

import { v4 } from "uuid"; // importar v4 de uuid para darle un id único a cada imagen subida

import "../styles/componets/DragImage.scss"; // Importando estilos del DragImage.

const DragImage = ({ setMedia, setLoading }) => { // Definir el archivo que se va subir y el estado de carga.
    const [file, setFile] = useState(null); // useState para definir el archivo, se inicia en null.

    const [error, setError] = useState(false); // Mostrar un error al cargar un tipo de arhivo no soportado o haberle dado clic al botón de subir sin haber subido una imagen antes.

    const [messageError, setMessageError] = useState(""); // Mostrar el mensaje del error.

    const [image, setImage] = useState(null); // Mostrar la imagen que se va a subir y cargar la imagen.

    const [classDrag, setClassDrag] = useState("drag__image"); // Cambiar el color de la clase drag__image al arrastar la imagen que se va a subir.
    
    const refInputFile = useRef(null); // Selecciona la imagen que se va subir.

    const typesImages = ["image/png", "image/jpeg", "image/jpg"]; // Los tipos de formato de imagen que permite subir.

    const SelectImage = () => { // Selecciona la imagen que se va a subir.

        refInputFile.current.click(); // Evento de clic para que se pueda dar clic para subir la imagen.
    }

    const isImageValid = (e) => { // Define una función para validar el formato de la imagen.

        if (e && typesImages.includes(e.type)) { // Sí el formtado de la imagen incluye los formatos que se establecieron.

            setError(false); // No da error.

            return true; // Regresa ese error a verdadero.

        } else { // Sí la imagen que se va a subir no cumple con el formato

            setError(true); // Da error.

            setMessageError("El tipo de archivo no es válido."); // Mensaje de error.

            return false; // Retorna falso.
        }
    }

    const ShowImage = (file) => { // FUnción para mostrar la imagen en el componente de DragImage.

        const fileReader = new FileReader(); // Renderizar el archivo.

        fileReader.readAsDataURL(file) // Leer la url de la imagen-

        fileReader.addEventListener("load", (e) => { // Función que coloca la imagen que se cargó.

            setImage(e.target.result); // Muestra el resultado de la imagen.
        });

        setFile(file) // Carga archivo.

        setMedia(file) // Define que se muestre el archivo
    }

    const AddImage = (e) => { // Añade la imagen al componente.

        e.preventDefault(); // Previene para algún error.

        refInputFile.current.files = e.dataTransfer.files; // Hace referencia al input donde se suben las imágenes.

        const file = refInputFile.current.files[0]; // Coloca la imagen que se encuentre en la primera posición.

        ShowImage(file); // Muestra la imagen.
    }

    const UploadImage = (e) => { // Función que sube la imagen en el componente.

        const files = e.target.files; // Establece el evento de las imágenes.

        const file = files[0]; // Coloca la imagen en la primera posición.

        const valid = isImageValid(file); // Valida cuando el archivo sea una imagen de los formatos establecidos.

        if (valid) { // Sí el tipo de formato de imagen es válido.

            ShowImage(file); // Muestra la imagen.

        } else { // Pero sí la imagen no es del formato establecido.

            setError(true); // Error es verdadero.

            setMessageError("El tipo de archivo no es válido."); // Mensaje de error.
        }
    }

    const handleSave = () => { // Función que se ejecuta al dar al botón de guardar.

        const valid = isImageValid(file); // Cuando el formato de imagen es válido.

		if (valid && file) { // Entonces valida sí esa validación es igual a la imagen.

            setLoading(true); // El estado de carga es verdadero.

            const imageRef = ref(dbStorage, `/${file.name + v4()}`); // Guarda la imagen cargada a la base de datos con un ID único.

            uploadBytes(imageRef, file).then(() => { // Referenciando a la imagen.
                alert("Imagen subida exitosamente."); // Mensaje de que se subió la imagen.
                setLoading(false); // Como ya terminó de subir la imagen, entonces deja de cargar.
            })
            
		} else { // Sí no sube ninguna imagen y hace clic en guardar.

			setError(true); // Da un error
			setMessageError('Suba una imagen primero.'); // Mensaje que debe subir una imagen para continuar.
		}
	}

    useEffect(() => { // Contador para el tiempo que dure el mensaje.

        setTimeout(() => { // Cuenta regresiva.

            setError(false); // Cuando el estado del error sea falso.

        }, 5000) // El mensaje durará 5 milisegundos.
        
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