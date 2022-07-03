import { useEffect, useState } from "react";
import { dbStorage, dbFirestore, timeStamp } from "../services/db";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = dbStorage.ref(file.name);
        const collectionRef = dbFirestore.collection('images');

        storageRef.put(file).on(
            'state_changed',
            (snap) => {
                let porcentaje = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(porcentaje);
            },
            (err) => {
                setError(err);
            },
            async () => {
                let url = await storageRef.getDownloadURL();
                let createdAt = timeStamp();
                collectionRef.add({ url, createdAt });
                setUrl(url);
            }
        )
    }, [file])

    return { progress, url, error }
}

export default useStorage;