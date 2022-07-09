import { useState, useEffect } from "react";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { dbStorage } from "../services/db";

export const useImage = () => {
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(dbStorage, 'images');

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item.ref).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });
            });
        });
    });
}

export default useImage;