import React, { useState } from "react";

import LoaderImage from "./LoaderImage";
import DragImage from "./DragImage";

import "../styles/componets/Uploader.scss"

const Uploader = () => {
    const [loading, setLoading] = useState(null);

    return (
        <section className="uploader">
            {loading ? <LoaderImage /> : <DragImage />}
        </section>
    )
}

export default Uploader;