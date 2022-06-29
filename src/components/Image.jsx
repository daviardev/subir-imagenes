import React from "react";
import "../styles/componets/Image.scss"

const Image = () => {
    const PreviewImage = ({ src }) => <img src={src} />
    return (
        <section className='preview'>
        <h2 className='preview__title'>Última imagen subida</h2>

        <div className='preview__container'>
            <div className="preview__line">
                <PreviewImage src={'https://cdn.pixabay.com/photo/2020/09/23/19/58/halloween-5596921_960_720.jpg'} />
            </div>
        </div>
    </section>
    )
}

export default Image;