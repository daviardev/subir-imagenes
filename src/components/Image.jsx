import React, { useEffect, useState } from "react";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { dbStorage } from "../services/db";import "../styles/componets/Image.scss"


const Image = () => {
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(dbStorage, '/');



    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, []);

    return (
        <section className='preview'>
        <h2 className='preview__title'>Última imagen subida</h2>
            
        <div className='preview__container'>
                { imageList.map((url) => {
                    return <img src={url} />
                })}
            <div className="preview__line">
            </div>
        </div>
    </section>
    )
}

export default Image;