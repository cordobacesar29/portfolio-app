import React from 'react';
import { ProyectList } from './ProyectList';
import { AddProyect } from './AddProyect';

import firebaseApp from '../../firebase';
import {getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);



export const Proyects = ({ email }) => {
	const [proyectArray, setProyectArray] = React.useState(null);
	const dataFake= [ 
		{
			name: "veterinariApp",
			description: "Demo veterinaria",
			repositore: "https://github.com/cordobacesar29/VeterinariApp",
			link: "https://github.com/",
			image: "https://imgur.com/P7ecLgG.png"
		},
		{
			name: "veterinariApp",
			description: "Demo veterinaria",
			repositore: "https://github.com/cordobacesar29/VeterinariApp",
			link: "https://github.com/",
			image: "https://imgur.com/P7ecLgG.png"
		},
		{
			name: "veterinariApp",
			description: "Demo veterinaria",
			repositore: "https://github.com/cordobacesar29/VeterinariApp",
			link: "https://github.com/",
			image: "https://imgur.com/P7ecLgG.png"
		}
	];

	const searchOrBuildDocument = async (id) => {
		//crear referencia al documento
		const refDocument = doc(db, `usuarios/${id}`);
		// buscar documento
		const data = await getDoc(refDocument);
		//revisar si existe
		if(data.exists()) {
			//si existe
			const info = data.data();
			return info.proyects;
		} else {
			//si no existe
			await setDoc(refDocument, { proyects: [...dataFake] });
			const data = await getDoc(refDocument);
			const info = data.data();
			return info.proyects;
		}
	};

	React.useEffect(()=>{
		const fetchProyect = async() => {
			const fetchData = await	searchOrBuildDocument(email);
			setProyectArray(fetchData);
		};
		fetchProyect();
	});

	return (
		<>
			{ proyectArray ? <ProyectList proyectArray={proyectArray} email={email}/> :	null }
			<AddProyect />
		</>
	)
};