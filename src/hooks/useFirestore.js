import { useState, useEffect } from 'react';
import { dbFirestore } from '../services/db';

const useFirestore = (collection) => {
	const [docs, setDocs] = useState([])

	useEffect(() => {
		const unsub = dbFirestore
			.collection(collection)
			.orderBy('createdAt', 'asc')
			.onSnapshot((snap) => {
				let documents = []

				snap.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id })
				})

				setDocs(documents)
			})

		return () => unsub()
	}, [collection])

	return { docs }
}

export default useFirestore