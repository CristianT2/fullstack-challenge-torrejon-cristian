const Character = ( {name, status, species, imageUrl, setImage} ) => {
	
	return (
		<div className="character-card" onClick={() => setImage(imageUrl)}>
			<img src={imageUrl} alt="imagen" />
			<p>Nombre: {name}</p>
            <p>Estado: {status}</p>
            <p>Especie: {species}</p>
		</div>
	);
};

export default Character;