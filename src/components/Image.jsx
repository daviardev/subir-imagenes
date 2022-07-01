import React, { useEffect, useState } from "react";
import useFirestore from "../hooks/useFirestore.js";
import Loader from "./Loader"
import ImageConection from "./ImageConection.jsx";
import "../styles/componets/Image.scss"

const Image = () => {
    const { docs } = useFirestore("images");
    const [images, setImages] = useState([]);
    const [sliderActive, setSliderActive] = useState(null);
    const [amountSlider, setAmountSlider] = useState(undefined);

    useEffect(() => {
        let data = [];

        docs.map(({ url }) => data.push(url));

        setImages(data);
        setSliderActive(data.length - 1);
        setAmountSlider(data.length - 1);
    }, [docs])

    return (
        <section className='preview'>
        <h2 className='preview__title'>Última imagen subida</h2>

        <div className='preview__container'>
            {
                amountSlider >= 0 ? <ImageConection src={images[sliderActive]} /> : <Loader />
            }
            <div className="preview__line">
            </div>
        </div>
    </section>
    )
}

export default Image;