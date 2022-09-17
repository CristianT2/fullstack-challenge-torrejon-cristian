import Character from "./Character";
import { useState, useEffect } from "react";
import { getCharacters } from "../service";


const CharacterList = () => {
	const [charImage, setCharImage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [charList, setCharList] = useState([]);

	useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setCharList(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

	return (
		<div className="page">
			{isLoading && <span className="loading-text">Cargando</span> }
			<div>
				<img src={charImage} alt="imagen" />
			</div>
			<div className="card">
				{charList.map((char) => (
					<Character
						key={char.id}
						name={char.name}
						status={char.status}
						species={char.species}
						imageUrl={char.image}
						setImage={setCharImage} 
					/>
				))}
			</div>
		</div>
	);
};

export default CharacterList;