import React, { useEffect, useState } from "react";

import LoaderImage from "./LoaderImage";
import DragImage from "./DragImage";

import "../styles/componets/Uploader.scss"

const Uploader = () => {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    return (
        <section className="uploader">
            { loading ? <LoaderImage file={file} setFile={setFile} setLoading={setLoading} /> : <DragImage setMedia={setFile} setLoading={setLoading} /> }
        </section>
    )
}

export default Uploader;